import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AllBook from './Pages/AllBook';
import FormInput from './Pages/FormInput';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allBook" element={<AllBook />} />
        <Route path="/FormInput" element={<FormInput />} />
      </Routes>
    </>
  );
}

export default App;
