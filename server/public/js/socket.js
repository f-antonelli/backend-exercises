const socket = io();

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("products", (products) => {
  fetch("http://localhost:8080/products.hbs")
    .then((res) => res.text())
    .then((text) => {
      const template = Handlebars.compile(text);
      const html = template({ products: products });

      document.getElementById("products").innerHTML = html;
    });
});

socket.on("update-messages", (getMessages) => {
  document.getElementById("msg").innerHTML = "";

  getMessages
    .forEach((msg) => createMessage(msg));
});

socket.on("new-message", (msg) => {
  createMessage(msg);
});

createMessage = (msg) => {
  document.getElementById("msg").innerHTML += `
    <div class="bg-dark bg-gradient p-2">
      <b class="text-danger">${msg.email} <span class="text-success">(${msg.created_at}):</span></b> 
      <span>${msg.message}</span>
    </div>
  `;
};

sendMessage = () => {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  socket.emit("post-message", { email, message });
};
