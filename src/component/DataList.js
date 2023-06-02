import React from "react";
import Single from "./Single";
import AddData from "./AddData";

export default function DataList({ data, addData, deleteData }) {
  return (
    <div className="datalist">
      {data &&
        data.length > 0 &&
        data.map((item) => {
          return (
            <Single
              text={item.text}
              id={item.id}
              key={item.id}
              date={item?.date}
              deleteData={deleteData}
            />
          );
        })}
      <AddData addData={addData} />
    </div>
  );
}
