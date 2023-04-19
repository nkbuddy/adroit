import React, { useState } from "react";
import TableHead from "./TableHead";
import TableFooter from "./TableFooter";
import TableBody from "./TableBody";

function CreateArea() {
  const [rows, setRows] = useState([]);

  function addRow(newRow) {
    setRows((prevRows) => {
      return [...prevRows, newRow];
    });
    console.log(rows);
  }

  function deleteRow(id) {
    setRows((prevRows) => {
      return prevRows.filter((rowItem, index) => {
        return index !== id;
      });
    });
  }

  function updateRow(newRow) {
    setRows((prevRows) => {
        return [...prevRows, newRow];
      });
      console.log(rows);
  }

  return (
    <table className="tableLoc">
      <TableHead />
      <tbody>
        {rows.map((rowItem, index) => {
          return (
            <TableBody
              key={index}
              id={index}
              panelFinish={rowItem.panelFinish}
              panelId={rowItem.panelId}
              qty={rowItem.qty}
              width={rowItem.width}
              height={rowItem.height}
              hingeHole={rowItem.hingeHole}
              woodGrand={rowItem.woodGrand}
              miterCut={rowItem.miterCut}
              price={rowItem.price}
              subtotal={rowItem.subtotal}
              onDelete={deleteRow}
              onUpdate={updateRow}
            />
          );
        })}
      </tbody>
      <TableFooter onAdd={addRow} />
    </table>
  );
}
export default CreateArea;
