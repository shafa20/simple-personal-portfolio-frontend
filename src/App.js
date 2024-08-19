import React from 'react';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogDetails from './pages/BlogDetails';
import ContentPage from './pages/ContentPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
       
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
         
          <Route path="/blog/:title" element={<BlogDetails />} />
          <Route path="/content" element={<ContentPage />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
