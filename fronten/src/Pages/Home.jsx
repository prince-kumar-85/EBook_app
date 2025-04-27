import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Home() {
    const[data,setData]=useState([]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Link to="/allBook">All Recipe</Link>  
      <Link to="/additem">Add Item</Link>    
    </div>
  );
}

export default Home;