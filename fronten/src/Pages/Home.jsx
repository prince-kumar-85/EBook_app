import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Component/Home.css";

function Home({ query }) {
  const [data, setData] = useState([]);

  useEffect(() => { // Fetching book data from the server
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/getbook");
        setData(res.data.books);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBooks();
  }, []);

  const downloadJson = (book) => {// Function to download book data as JSON
    const blob = new Blob([JSON.stringify(book)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${book.title.replace(/\s+/g, "_")}_data.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // 🔍 Separated filtering logic
  const filterBooks = (books, query) => { // Function to filter books based on the search query
    const lowerQuery = (typeof query === 'string' ? query : "").toLowerCase();
    return books.filter((book) =>
      book.title.toLowerCase().includes(lowerQuery) ||
      book.author.toLowerCase().includes(lowerQuery) ||
      book.category.toLowerCase().includes(lowerQuery)
    );
  };

  const filteredBooks = filterBooks(data, query);

  return (
    <div>
      <main className="main-content">
        <h1>Welcome to the home page!</h1>

        <h2>Book List</h2>
        <ul className="book-list">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <li key={book._id} className="book-item">
                <h3>{book.title}</h3>

                <p><strong>Author:</strong> {book.author}</p>

                <img
                  src={`http://localhost:5000/upload/images/${book.coverImage}`}
                  alt="Book Cover"
                  className="book-image"
                />

                <p><strong>Description:</strong> {book.description}</p>
                <p><strong>Language:</strong> {book.language}</p>
                <p><strong>Category:</strong> {book.category}</p>
                <p><strong>Price:</strong> ₹{book.price}</p>
                <p><strong>Rating:</strong> {book.rating}⭐</p>

                <button
                  onClick={() => downloadJson(book)}
                  className="download-button"
                >
                  Download JSON for "{book.title}"
                </button>

                <a
                  href={`http://localhost:5000/upload/images/${book.coverImage}`}
                  download
                  className="download-link"
                >
                  Download Cover Image
                </a>
              </li>
            ))
          ) : (
            <p>No books found.</p> // No books found message
          )}
        </ul>

        <div className="links">
          <Link to="/allBook">All Books</Link>
          <Link to="/additem">Add Item</Link>
          <Link to="/FormInput">Form Input</Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
