import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/sideBar/pages/home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <div className="container-fluid d-flex">
        <SideBar className="bg-dark" />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
