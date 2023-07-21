import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>My website is here Yo Yo</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
