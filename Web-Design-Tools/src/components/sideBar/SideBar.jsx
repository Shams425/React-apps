import React from "react";
import "./sidebar.css";
import {
  ContentCopy,
  TextFields,
  Gradient,
  CheckBoxOutlineBlank,
  Transform,
  Palette,
  Filter,
} from "@mui/icons-material";
import { Link, Route, Routes } from "react-router-dom";
import BoxShadow from "../Tools/boxShadow/BoxShadow";

export default function SideBar() {
  return (
    <div className="sideWrapper">
      <ul className="tools">
        <Link className="link" to="/boxShadow">
          <li>
            <ContentCopy />
            <p>Box Shadow</p>
          </li>
        </Link>
        <Link className="link" to="/textShadow">
          <li>
            <TextFields />
            <p>Text Shadow</p>
          </li>
        </Link>
        <Link className="link" to="">
          <li>
            <Gradient />
            <p>Gradient</p>
          </li>
        </Link>
        <Link className="link" to="">
          <li>
            <img
              src={require("../../assets/images/icons/icons8-cursor-26.png")}
              alt=""
              className="cursorIcon"
            />
            <p>Cursor</p>
          </li>
        </Link>
        <Link className="link" to="">
          <li>
            <CheckBoxOutlineBlank />
            <p>Border</p>
          </li>
        </Link>
        <Link className="link" to="">
          <li>
            <span className="borderRadius"></span>
            <p>Border-radius</p>
          </li>
        </Link>
        <Link className="link" to="">
          <li>
            <Transform />
            <p>Transform</p>
          </li>
        </Link>
        <Link className="link" to="">
          <li>
            <Palette />
            <p>Colors</p>
          </li>
        </Link>
        <Link className="link" to="">
          <li>
            <Filter />
            <p>Filter</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
