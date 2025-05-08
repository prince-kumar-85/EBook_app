import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import AllBook from './Pages/AllBook';
import FormInput from './Pages/FormInput';
import { useState, useEffect } from 'react';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  const [isDarkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.className = isDarkMode ? 'night-mode' : 'day-mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Search state and handler
  const [query, setQuery] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // Implement actual search logic or navigation
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <h2 className="logo">📚 BookStore</h2>
          <ul className="nav-links">
            <li>About</li>
            <li>Contact Us</li>
            <li>Favorites</li>
            <li><Link to='/FormInput'>FormInput</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-bar"
          />
          <button onClick={handleSearch} className="btn">Search</button>
          <button className="btn">Cart</button>
          <button className="btn"><Link to='/login'>Login</Link></button>
          <button className="btn">Logout</button>
          <button className='btn'><Link to='/register'>Register</Link></button>
          <button className="toggle-button" onClick={toggleMode}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      <div className="layout-container">
        <aside className="sidebar">
          <h3>Categories</h3>
          <ul>
            <li><Link to="/allBook">All Books</Link></li>
            <li>About Account</li>
            <li>Add to Cart</li>
            <li>History</li>
            <li>Wish List</li>
          </ul>
        </aside>

        <Routes>
          {/* home page props */}
        <Route path="/" element={<Home query={query} />} /> 
        <Route path="/allBook" element={<AllBook />} />
          <Route path="/FormInput" element={<FormInput />} />
          <Route path='/login' element={<Login/>}/>

          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>

      <footer className="footer">
        <p>&copy; 2023 BookStore. All rights reserved.</p>
        <p>Follow us on social media!</p>
        <ul className="social-media">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </footer>
    </>
  );
}

export default App;
