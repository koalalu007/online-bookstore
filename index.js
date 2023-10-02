const books = [
    {
      title: 'Book Title',
      author: 'Author Name',
      price: 19.99
    },
    {
      title: 'Book Title',
      author: 'Author Name',
      price: 24.99
    },
    {
      title: 'Book Title',
      author: 'Author Name',
      price: 14.99
    }
  ];
  const cart = [];
  const addBookToCart = (book) => {
    cart.push(book);
  };
  const removeBookFromCart = (book) => {
    const index = cart.indexOf(book);
    cart.splice(index, 1);
  };
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((book) => {
      total += book.price;
    });
    return total;
  };
  const renderBooks = () => {
    const booksContainer = document.getElementById('books');
    booksContainer.innerHTML = '';
    books.forEach((book) => {
      const bookElement = document.createElement('li');
      bookElement.innerHTML = `
        <div class="book-cover">
          <img src="book-cover.jpg" alt="Book cover">
        </div>
        <div class="book-info">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <p>Price: $${book.price}</p>
          <button>Add to Cart</button>
        </div>
      `;
      booksContainer.appendChild(bookElement);
    });
  };
  const renderCart = () => {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
    cart.forEach((book) => {
      const bookElement = document.createElement('li');
      bookElement.innerHTML = `
        <div class="book-cover">
          <img src="book-cover.jpg" alt="Book cover">
        </div>
        <div class="book-info">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <p>Price: $${book. price}</p>
          <button>Remove from Cart</button>
        </div>
      `;
      cartContainer.appendChild(bookElement);
    });
  };
  const main = () => {
    renderBooks();
    renderCart();
  };
  main();