import React, { useState } from "react";

export default function Header({ setDarkMode }) {
  return (
    <div className="search">
      <h1>My WishList</h1>
      <button onClick={() => setDarkMode((prevState) => !prevState)}>
        Change background
      </button>
    </div>
  );
}
