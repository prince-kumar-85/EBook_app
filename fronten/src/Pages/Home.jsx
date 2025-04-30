import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Home() {
    const[data,setData]=useState([]);

    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/getbook");
          setData(res.data.books);
          console.log(res.data.books); 
        } catch (err) {
          console.error(err);
        }
      };
    
      fetchBooks();
    }, []);

    
    

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>

      <h2>Book List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
  {data.map((book) => (
    <li key={book._id} style={{ border: "1px solid #ccc", marginBottom: "1rem", padding: "1rem" }}>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Language:</strong> {book.language}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <p><strong>Rating:</strong> {book.rating}⭐</p>
    </li>
  ))}
</ul>

      <Link to="/allBook">All Recipe</Link>  
      <Link to="/additem">Add Item</Link>    
    </div>
  );
}

export default Home;