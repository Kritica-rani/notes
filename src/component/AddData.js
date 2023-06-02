import React, { useState } from "react";

export default function AddData({ addData }) {
  const [noteText, setNoteText] = useState("");
  const handleChange = (e) => {
    setNoteText(e.target.value);
  };
  const handleSave = () => {
    if (noteText.length > 0) {
      addData(noteText);
      setNoteText("");
    } else {
      alert("Please write somethin !!!");
    }
  };

  return (
    <div className="single new">
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
