import './App.css';  
import { Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';  
import AllBook from './Pages/AllBook';  
import AddItem from './Pages/AddItem';  

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allBook" element={<AllBook />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </>
  );
}

export default App;
