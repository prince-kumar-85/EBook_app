import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/getbook");
        setBooks(res.data.books);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  // Group books by category
  const categories = ["Drama", "Programming", "Romantic", "Novel"];
  
  return (
    <div style={{ padding: "1rem" }}>
      <h1>All Book Categories</h1>
      {categories.map((category) => {
        const filtered = books.filter(book => book.category?.toLowerCase() === category.toLowerCase());
        if (filtered.length === 0) return null;

        return (
          <section key={category} style={{ marginBottom: "2rem" }}>
            <h2>{category}</h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {filtered.map((book) => (
                <div
                  key={book._id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "1rem",
                    width: "200px"
                  }}
                >
                  <h4>{book.title}</h4>
                  <img
                    src={`http://localhost:5000/upload/images/${book.coverImage}`}
                    alt={book.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>Price:</strong> ₹{book.price}</p>
                  <p><strong>Rating:</strong> {book.rating}⭐</p>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default AllBooks;
