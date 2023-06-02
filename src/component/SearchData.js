import React from "react";

export default function SearchData({ setSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search from wishList...."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
