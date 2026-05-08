fetch("data/books.json")
  .then(response => response.json())
  .then(data => {

    const booksContainer = document.getElementById("books-container");

    data.forEach(book => {

      booksContainer.innerHTML += `
        <div class="book-card">
          <img src="${book.image}" alt="${book.titre}">
          <h3>${book.titre}</h3>
          <p><strong>Auteur :</strong> ${book.auteur}</p>
          <p>${book.resume}</p>
        </div>
      `;

    });

  });
