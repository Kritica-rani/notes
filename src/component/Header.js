import React, { useState } from "react";

export default function Header({ name, age, setAge }) {
  //   const { name } = props;
  const [fav, setFav] = useState("coffee");

  return (
    <div>
      <h1>Hii this header</h1>
      The name :{name}
      <button onClick={() => setAge(30)}>Update Age</button>
      Age:{age}
    </div>
  );
}
