import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Pages/Home.jsx";
import Book from "./Pages/Book.jsx";
import About from "./Pages/About.jsx";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/book-lesson" element={<Book />} />
      </Routes>
    </Router>
  );
}
