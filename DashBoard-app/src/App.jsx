import React, { Component } from "react";
import TopBar from "./components/header/TopBar";
import SideBar from "./components/sideBar/SideBar";
import Home from "./components/pages/home/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./app.css";
import Users from "./components/pages/UsersList/Users";
import { rows } from "./Shared/dummyData";
import { productRows } from "./Shared/dummyData";
import Userpage from "./components/pages/UserPage/Userpage";
import NewUser from "./components/pages/newUser/NewUser";
import Products from "./components/pages/products/Products";
import ProductPage from "./components/pages/productPage/ProductPage";
import NewProduct from "./components/pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/** exact is to make sure that this is the home page, the router when
           * look for other paths like /users will say that the / means root and will think it's
           * home page while it's not, Because we want the root for home page only
           */}
          <Route exact path="/users" element={<Users dataRow={rows} />} />
          <Route exact path="/user/:id" element={<Userpage />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route
            exact
            path="/products"
            element={<Products dataRow={productRows} />}
          />
          <Route exact path="/product/:id" element={<ProductPage />} />
          <Route exact path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
