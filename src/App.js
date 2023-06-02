import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import DataList from "./component/DataList";
import SearchData from "./component/SearchData";

function App() {
  const [data, setData] = useState([
    { text: "Hello World", id: Math.random(), date: "27 / 03 / 2023" },
    { text: "Second Data", id: Math.random(), date: "27 / 03 / 2023" },
    { text: "Third Data", id: Math.random(), date: "27 / 03 / 2023" },
    { text: "Fourth Data", id: Math.random() },
  ]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
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
  const deleteData = (deletedId) => {
    console.log("id", deletedId);
    const updatedData = data.filter((item) => item.id !== deletedId);
    console.log("updatedData", updatedData);
    setData(updatedData);
  };
  console.log("darkmode-->", darkMode);
  return (
    <div className={darkMode ? "darkMode" : ""}>
      <div className="container">
        <Header setDarkMode={setDarkMode} />
        <SearchData setSearch={setSearch} />
        <DataList
          data={data.filter((note) =>
            note.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )}
          addData={addData}
          deleteData={deleteData}
        />
      </div>
    </div>
  );
}

export default App;
