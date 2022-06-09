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
  MouseOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
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
        <Link className="link" to="/gradient">
          <li>
            <Gradient />
            <p>Gradient</p>
          </li>
        </Link>
        <Link className="link" to="/border">
          <li>
            <CheckBoxOutlineBlank />
            <p>Border</p>
          </li>
        </Link>
        <Link className="link border-radius" to="/borderRadius">
          <li>
            <span className="borderRadius"></span>
            <p>Border-radius</p>
          </li>
        </Link>
        <Link className="link" to="/cursor">
          <li>
            <MouseOutlined />
            <p>Cursor</p>
          </li>
        </Link>
        <Link className="link" to="/transform">
          <li>
            <Transform />
            <p>Transform</p>
          </li>
        </Link>
        <Link className="link" to="/colors">
          <li>
            <Palette />
            <p>Colors</p>
          </li>
        </Link>
        <Link className="link" to="/filter">
          <li>
            <Filter />
            <p>Filter</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
