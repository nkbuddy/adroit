import React, { useState } from "react";
import TableHead from "./TableHead";
import TableFooter from "./TableFooter";
import TableBody from "./TableBody";

function CreateArea() {
  let [rows, setRows] = useState([
    {
      panelFinish: "Arctic (White) HG",
      panelId: "MDAC2001-182S90",
      qty: 1,
      width: 43,
      height: 87,
      hingeHole: false,
      woodGrand: false,
      miterCut: "Top",
      price: 100,
      subtotal: 100,
    },
    {
      panelFinish: "Stone Grey (Dark Grey) Super Matte",
      panelId: "MDPE3020-181S90",
      qty: 2,
      width: 20,
      height: 32,
      hingeHole: true,
      woodGrand: false,
      miterCut: "1H",
      price: 200,
      subtotal: 400,
    },
    {
      panelFinish: "Egger Brown Tossini Elm",
      panelId: "PBME1212E-192S33-60110",
      qty: 3,
      width: 44,
      height: 65,
      hingeHole: true,
      woodGrand: true,
      miterCut: "Bot",
      price: 300,
      subtotal: 900,
    },
  ]);

  function updateRow(id, newRow) {
    let newArr = [...rows];
    newArr[id] = newRow;
    setRows(newArr);
    console.log(rows);
  }

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

  function copyRow(id, newRow) {
    setRows((prevRows) => {
      // prevRows.splice(id+1,0,newRow)
      // console.log(prevRows);
      return [...prevRows.slice(0, id + 1), newRow, ...prevRows.slice(id + 1)];
    });
    console.log(rows);
  }


  return (
    <table className="table table-hover table-sm table-responsive-sm">
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
              onCopy={copyRow}
              onUpdate={updateRow}
            />
          );
        })}
      </tbody>
      <TableFooter onAdd={addRow}/>
    </table>
  );
}
export default CreateArea;
