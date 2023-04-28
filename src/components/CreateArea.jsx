import React, { Fragment, useState } from "react";
import TableHead from "./TableHead";
import TableFooter from "./TableFooter";
import TableBody from "./TableBody";
import ReadOnly from "./ReadOnly";
import { nanoid } from "nanoid";

function CreateArea() {
  const [items, setItems] = useState([
    {
      id: 0,
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
      id: 1,
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
      id: 2,
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

  function updateRow(event, itemId, item) {
    const fieldName = event.target.getAttribute("className");
    const fieldValue = event.target.value;
    const newData = { ...item };
    newData[fieldName] = fieldValue;

    const editedItem = {
      id: itemId,
      panelFinish: newData.panelFinish,
      panelId: newData.panelId,
      qty: newData.qty,
      width: newData.width,
      height: newData.height,
      hingeHole: newData.hingeHole,
      woodGrand: newData.woodGrand,
      miterCut: newData.miterCut,
      price: newData.price,
      subtotal: newData.subtotal,
    };

    const newItems = [...items];
    const index = items.findIndex((item) => item.id === itemId);
    newItems[index] = editedItem;
    setItems(newItems);
  }

  function deleteRow(itemId) {
    const newItems = [...items];
    const index = items.findIndex((item) => item.id === itemId);
    newItems.splice(index, 1);
    setItems(newItems);
  }

  function copyRow(itemId) {
    const newItems = [...items];
    const index = items.findIndex((item) => item.id === itemId);
    const copyItem = newItems[index];
    const tempItem = {
      id: 0,
      panelFinish: copyItem.panelFinish,
      panelId: copyItem.panelId,
      qty: copyItem.qty,
      width: copyItem.width,
      height: copyItem.height,
      hingeHole: copyItem.hingeHole,
      woodGrand: copyItem.woodGrand,
      miterCut: copyItem.miterCut,
      price: copyItem.price,
      subtotal: copyItem.subtotal,
    };
    tempItem.id = nanoid();
    newItems.splice(index, 0, tempItem);
    setItems(newItems);
  }

  function addRow() {
    const newItem = {
      panelFinish: "",
      panelId: "",
      qty: 0,
      width: 0,
      height: 0,
      hingeHole: false,
      woodGrand: false,
      miterCut: "None",
      price: 0,
      subtotal: 0,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  }

  return (
    <Fragment>
      <table className="table table-hover table-sm table-responsive-sm">
        <TableHead />
        <tbody>
          {items.map((rowItem, index) => {
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
        <TableFooter items={items} onAdd={addRow} />
      </table>
      <table className="table table-hover table-sm table-responsive-sm">
        <TableHead />
        <tbody>
          {items.map((rowItem) => {
            return (
              <ReadOnly
                item={rowItem}
                handleDeleteClick={deleteRow}
                handleCopyClick={copyRow}
              />
            );
          })}
        </tbody>
        <TableFooter items={items} onAdd={addRow} />
      </table>
    </Fragment>
  );
}
export default CreateArea;
