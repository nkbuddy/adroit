import React, { useState } from "react";
import TableHead from "./TableHead";
import TableFooter from "./TableFooter";
import TableBody from "./TableBody";

function CreateArea() {
  const [rows, setRows] = useState([{
    panelFinish: "Arctic (White) HG",
    panelId: "MDAC2001-182S90",
    qty: "1",
    width: "123",
    height: "123",
    hingeHole: false,
    woodGrand: false,
    miterCut: "None",
    price: "123",
    subtotal: "123",
  },{
    panelFinish: "Stone Grey (Dark Grey) Super Matte",
    panelId: "MDPE3020-181S90",
    qty: "2",
    width: "321",
    height: "321",
    hingeHole: true,
    woodGrand: false,
    miterCut: "None",
    price: "321",
    subtotal: "321",
  },{
    panelFinish: "Egger Brown Tossini Elm",
    panelId: "PBME1212E-192S33-60110",
    qty: "3",
    width: "234",
    height: "234",
    hingeHole: true,
    woodGrand: true,
    miterCut: "None",
    price: "234",
    subtotal: "234",
  }]);

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

  function updateRow(id,newRow) {
    setRows((prevRows) => {
        prevRows.splice(id,1,newRow)
        return prevRows;
      });
      console.log(rows);
  }

  function copyRow(id,newRow) {
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
              onUpdate={updateRow}
              onCopy = {copyRow}
            />
          );
        })}
      </tbody>
      <TableFooter onAdd={addRow} />
    </table>
  );
}
export default CreateArea;
