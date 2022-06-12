import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-center p-3 mt-5">
      <small className="text-light">&copy; 2022 Developed By </small>
      <span>
        <Link className="link" to="./http://www.github/Shams425">
          Shams Aldeen Mohamed
        </Link>
      </span>
    </footer>
  );
}
