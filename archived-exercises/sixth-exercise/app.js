const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const productsRoutes = require("./routes/products");
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

const Container = require("./models/class");

const PORT = process.env.PORT || 8080;

// Accept data in JSON format.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// HANDLEBARDS
const hbs = exphbs.create({
  defaultLayout: "main",
  layoutsDir: __dirname + "/views/layout",
  partialsDir: __dirname + "/views/partials",
  extname: ".hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", ".");

let container = new Container("products.json"); // Instance created to use products.
let container2 = new Container("messages.json"); // Instance created to use products.

let messages;
(async () => {
  messages = await container2.getAll();
})();

io.on("connection", async (socket) => {
  io.emit("update-messages", messages);

  socket.emit("products", await container.getAll());

  socket.on("post-message", async (msg) => {
    const message = {
      ...msg,
      socket_id: socket.id,
      date: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    await container2.save(message);

    io.sockets.emit("new-message", message);
  });
});

app.get("/", (req, res) => {
  res.render("views");
});
// API ROUTES
app.use("/products", productsRoutes);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

server.on("error", (error) => console.log(`Error: ${error}`));
