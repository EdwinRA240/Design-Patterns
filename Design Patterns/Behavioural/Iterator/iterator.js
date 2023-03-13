// Creamos una clase Bookshelf (estantería de libros)
class Bookshelf {
  constructor() {
    this.books = [];
  }

  // Método para añadir libros a la estantería
  addBook(book) {
    this.books.push(book);
  }

  // Método que devuelve el iterador
  iterator() {
    return new BookshelfIterator(this);
  }
}

// Creamos una clase BookshelfIterator (iterador para la estantería)
class BookshelfIterator {
  constructor(bookshelf) {
    this.bookshelf = bookshelf;
    this.index = 0;
  }

  // Método para saber si hay más elementos en la estantería
  hasNext() {
    return this.index < this.bookshelf.books.length;
  }

  // Método que devuelve el siguiente elemento
  next() {
    return this.bookshelf.books[this.index++];
  }
}

// Creamos una instancia de Bookshelf
const bookshelf = new Bookshelf();
bookshelf.addBook("El Quijote");
bookshelf.addBook("La Iliada");
bookshelf.addBook("La Odisea");

// Creamos un iterador y lo usamos para recorrer los libros de la estantería
const iterator = bookshelf.iterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}
