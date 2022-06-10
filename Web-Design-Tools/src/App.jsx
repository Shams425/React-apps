import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/sideBar/pages/home/Home";
import Header from "./components/header/Header";
import BoxShadow from "./components/Tools/cssTools/boxShadow/BoxShadow";
import TextShadow from "./components/Tools/cssTools/textShadow/TextShadow";
import Gradient from "./components/Tools/cssTools/gradient/Gradient";
import Cursor from "./components/Tools/cssTools/cursor/Cursor";
import Border from "./components/Tools/cssTools/border/Border";
import BorderRadius from "./components/Tools/cssTools/border-radius/BorderRadius";
import Transform from "./components/Tools/cssTools/transform/Transform";
import Color from "./components/Tools/cssTools/colors/Color";
import Filter from "./components/Tools/cssTools/filter/Filter";
import Inputs from "./components/Tools/htmlTools/input/Inputs";
import Links from "./components/Tools/htmlTools/links/Links";
import Buttons from "./components/Tools/htmlTools/button/Buttons";
import Forms from "./components/Tools/htmlTools/forms/Forms";
import Cards from "./components/Tools/htmlTools/cards/Cards";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <div className="container-fluid d-flex">
        <SideBar className="bg-dark" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/cssTools/boxShadow" element={<BoxShadow />} />
          <Route exact path="/cssTools/textShadow" element={<TextShadow />} />
          <Route exact path="/cssTools/gradient" element={<Gradient />} />
          <Route exact path="/cssTools/border" element={<Border />} />
          <Route
            exact
            path="/cssTools/borderRadius"
            element={<BorderRadius />}
          />
          <Route exact path="/cssTools/cursor" element={<Cursor />} />
          <Route exact path="/cssTools/transform" element={<Transform />} />
          <Route exact path="/cssTools/colors" element={<Color />} />
          <Route exact path="/cssTools/filter" element={<Filter />} />
          <Route exact path="/htmlTools/inputs" element={<Inputs />} />
          <Route exact path="/htmlTools/buttons" element={<Buttons />} />
          <Route exact path="/htmlTools/links" element={<Links />} />
          <Route exact path="/htmlTools/forms" element={<Forms />} />
          <Route exact path="/htmlTools/cards" element={<Cards />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
