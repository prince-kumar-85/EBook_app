import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AllBook from './Pages/AllBook';
import FormInput from './Pages/FormInput';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
     <nav className="navbar">
        <div className="navbar-left">
          <h2 className="logo">📚 BookStore</h2>
          <ul className="nav-links">
            <li>About</li>
            <li>Contact Us</li>
            <li>Favorites</li>
          </ul>
        </div>
        <div className="navbar-right">
          <input type="text" placeholder="Search..." className="search-bar" />
          <button className="btn">Cart</button>
          <button className="btn">Login</button>
          <button className="btn">Logout</button>
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
        <Route path="/" element={<Home />} />
        <Route path="/allBook" element={<AllBook />} />
        <Route path="/FormInput" element={<FormInput />} />
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
