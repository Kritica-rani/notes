import React, { useState } from "react";

export default function AddData({ addData }) {
  const [noteText, setNoteText] = useState("");
  const handleChange = (e) => {
    setNoteText(e.target.value);
  };
  const handleSave = () => {
    addData(noteText);
    setNoteText("");
  };
 

  return (
    <div className="note">
      <textarea
        rows={10}
        cols={10}
        placeholder="Add to wishlist"
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <button onClick={handleSave}>Add To wishList</button>
    </div>
  );
}
