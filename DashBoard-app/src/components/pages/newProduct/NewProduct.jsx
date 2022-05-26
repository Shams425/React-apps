import React from "react";
import "./newProduct.css";
import { Publish } from "@mui/icons-material";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <form className="newProductForm">
        <div className="newProductItem">
          <label htmlFor="">Product Image</label>
          <label
            htmlFor="file"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Publish style={{ marginRight: "10px" }} /> Choose File
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" placeholder="Apple Airpods" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Stock</label>
          <input type="text" name="" id="" placeholder="123" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Active</label>
          <select name="" id="">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="addButton">
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
}
