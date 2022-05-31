import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <Link to="/homepage">
          <li>Homepage</li>
        </Link>
        <Link to="/tools">
          <li>Tools</li>
        </Link>
        <Link to="/mychoices">
          <li>My choices</li>
        </Link>
        <Link to="/websitestofollow">
          <li>
            {" "}
            <a href="#">Websites to follow</a>
          </li>
        </Link>
        <li>
          {" "}
          <a href="https://learn.seytech.co/courses" target="_blank">
            Seytech
          </a>
        </li>
      </ul>
    </div>
  );
}
