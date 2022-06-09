import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/sideBar/pages/home/Home";
import Header from "./components/header/Header";
import BoxShadow from "./components/Tools/boxShadow/BoxShadow";
import TextShadow from "./components/Tools/textShadow/TextShadow";
import Gradient from "./components/Tools/gradient/Gradient";
import Cursor from "./components/Tools/cursor/Cursor";
import Border from "./components/Tools/border/Border";
import BorderRadius from "./components/Tools/border-radius/BorderRadius";
import Transform from "./components/Tools/transform/Transform";
import Color from "./components/Tools/colors/Color";
import Filter from "./components/Tools/filter/Filter";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <div className="container-fluid d-flex">
        <SideBar className="bg-dark" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boxShadow" element={<BoxShadow />} />
          <Route path="/textShadow" element={<TextShadow />} />
          <Route path="/gradient" element={<Gradient />} />
          <Route path="/border" element={<Border />} />
          <Route path="/borderRadius" element={<BorderRadius />} />
          <Route path="/cursor" element={<Cursor />} />
          <Route path="/transform" element={<Transform />} />
          <Route path="/colors" element={<Color />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
