import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import DataList from "./component/DataList";

function App() {
  const [data, setData] = useState([
    { text: "Hello World", id: Math.random(), date: "27 / 03 / 2023" },
    { text: "Second Data", id: Math.random(), date: "27 / 03 / 2023" },
    { text: "Third Data", id: Math.random(), date: "27 / 03 / 2023" },
    { text: "Fourth Data", id: Math.random() },
  ]);
  console.log("data", data);
  const addData = (text) => {
    console.log("text from adding", text);
    const date = new Date();
    const newData = {
      id: Math.random(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // making copy of the existing data and adding the new one as well
    const updatedDate = [...data, newData];
    console.log("updateddate", updatedDate);
    setData(updatedDate);
  };
   const deleteData = (id) => {
     console.log("id", id);
   };
  return (
    <div className="container">
      <DataList data={data} addData={addData} deleteData={deleteData} />
    </div>
  );
}

export default App;
