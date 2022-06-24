class User {
  // # Constructor
  constructor(name, lastname) {
    this.name = name
    this.lastname = lastname
    this.books = []
    this.pets = []
  }

  // # Methods
  getFullName = () =>
    console.log(`My full name is ${this.name} ${this.lastname}`)

  addPet = (petName) => this.pets.push(petName)

  countPets = () =>
    console.log(`The user ${this.name} has ${this.pets.length} pets.`)

  addBook = (bookName, author) => {
    const book = {
      name: `${bookName}`,
      author: `${author}`,
    }

    this.books.push(book)
  }

  getBookNames = () => {
    let bookNames = this.books.map((el) => {
      return el.name
    });

    console.log(bookNames)
  };
}

// # Instance
const user1 = new User("Tom", "Cruise")

// # Using User methods.

user1.getFullName()
console.log("-------------")

// # Adding pets to array.
user1.addPet("Zoe")
user1.addPet("Ollie")
user1.addPet("Oliver")

user1.countPets()
console.log("-------------")

// # Adding books to array of objects.
user1.addBook("Top Gun: Maverick", "Joseph Kosinski")
user1.addBook("Avatar", "James Cameron")
user1.addBook("Straight Outta Compton", "F. Gary Gray")

user1.getBookNames()
