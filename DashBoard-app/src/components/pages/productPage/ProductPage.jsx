import React from "react";
import "./productPage.css";
import { Link } from "react-router-dom";

export default function ProductPage() {
  return (
    <div className="ProductPageWrapper">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
    </div>
  );
}
