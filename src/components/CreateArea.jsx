import React, { useState } from "react";
import TableHead from "./TableHead";
import TableFooter from "./TableFooter";
import TableBody from "./TableBody";

function CreateArea() {
  const [rows, setRows] = useState([{}]);

  function addRow(newRow) {
    setRows((prevRows) => {
      return [...prevRows, newRow];
    });
  }

  function deleteRow(id) {
    setRows((prevRows) => {
      return prevRows.filter((rowItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <table className="tableLoc">
      <TableHead />
      <tbody>
        {rows.map((rowItem,index)=>{
            return(
                <TableBody
                key={index}
                id={index}
                onDelete={deleteRow}
                />
            );
        })}
      </tbody>
      <TableFooter onAdd={addRow}/>
    </table>
  );
}
export default CreateArea;
