import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import NotFound from "./NotFound";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
