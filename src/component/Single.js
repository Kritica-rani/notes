import React from "react";

export default function Single({ text, id, date, deleteData }) {
  return (
    <div className="single">
      <span>{text}</span>
      <span>{date}</span>
      <button onClick={() => deleteData(id)}>Delete</button>
    </div>
  );
}
