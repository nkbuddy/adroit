import React, { Fragment, useState, useRef } from "react";
import TableHead from "./TableHead";
import TableFooter from "./TableFooter";
import ReadOnly from "./ReadOnly";
import { nanoid } from "nanoid";
import NewTableBody from "./NewTableBody";
import panelFinishList from "../panelFinish.js";
import { useReactToPrint } from "react-to-print";

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

  function mycal(PL, obj) {
    const height = Number(obj.height);
    const width = Number(obj.width);
    const qty = Number(obj.qty);
    let panel_value = 0;
    let unit_price = 0;
    let discount = 1;
    const Sindex = PL.findIndex(
      (pitem) => pitem.label == obj.panelFinish || pitem.id == obj.panelId
    );
    if (Sindex != -1) {
      panel_value = Number(PL[Sindex].value);
    }
    if (obj.hingeHole) {
      if (height < 38.875) {
        unit_price += 2;
      } else if (height < 64.375) {
        unit_price += 3;
      } else if (height < 79.375) {
        unit_price += 4;
      } else if (height < 95.875) {
        unit_price += 5;
      }
    }

    if (obj.woodGrand) unit_price += 15;
    if (obj.miterCut != "None") unit_price += 15;
    let sizeOfDoor = (width * height) / 144;
    if (sizeOfDoor <= 1.5) sizeOfDoor = 1.5;

    unit_price += panel_value * sizeOfDoor;
    let subtotal = qty * unit_price;
    if (sizeOfDoor > 3.0 && sizeOfDoor <= 6.0) {
      discount = 0.9;
    } else if (sizeOfDoor > 6.0 && sizeOfDoor <= 9.0) {
      discount = 0.85;
    } else if (sizeOfDoor > 9.0 && sizeOfDoor <= 13.0) {
      discount = 0.8;
    } else if (sizeOfDoor > 13.0 && sizeOfDoor <= 30.0) {
      discount = 0.75;
    }
    subtotal *= discount;
    subtotal = Math.round(subtotal * 100) / 100;
    unit_price = subtotal / obj.qty;
    unit_price = Math.round(unit_price * 100) / 100;

    if (width <= 0 || width > 47.875) {
      unit_price = NaN;
      subtotal = NaN;
    }
    if (height <= 0 || height > 95.875) {
      unit_price = NaN;
      subtotal = NaN;
    }
    if (qty <= 0) {
      unit_price = NaN;
      subtotal = NaN;
    }
    return [unit_price, subtotal];
  }

  function updateRow(event, itemId, item) {
    const fieldName = event.target.getAttribute("name");
    let fieldValue;
    if (fieldName == "hingeHole" || fieldName == "woodGrand") {
      fieldValue = event.target.checked;
    } else {
      fieldValue = event.target.value;
    }
    const newData = { ...item };
    newData[fieldName] = fieldValue;
    const priceArr = mycal(panelFinishList, newData);
    const priceField = "price";
    const sutotalField = "subtotal";
    newData[priceField] = priceArr[0];
    newData[sutotalField] = priceArr[1];

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

  function updateTwo(event, itemId, item) {
    console.log(event);
    const newData = { ...item };
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const Sindex = panelFinishList.findIndex(
      (item) => item.label == fieldValue || item.id == fieldValue
    );
    if (fieldName === "panelFinish") {
      const fieldName1 = "panelFinish";
      const fieldName2 = "panelId";
      newData[fieldName1] = fieldValue;
      if (Sindex != -1) {
        newData[fieldName2] = panelFinishList[Sindex].id;
      }
    } else if (fieldName === "panelId") {
      const fieldName1 = "panelId";
      const fieldName2 = "panelFinish";
      newData[fieldName1] = fieldValue;
      if (Sindex != -1) {
        newData[fieldName2] = panelFinishList[Sindex].label;
      }
    }
    const priceArr = mycal(panelFinishList, newData);
    const priceField = "price";
    const sutotalField = "subtotal";
    newData[priceField] = priceArr[0];
    newData[sutotalField] = priceArr[1];

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

  function addRow(n) {
    const newItems = [];
    for (let i = 0; i < n; i++) {
      const newItem = {
        panelFinish: "",
        panelId: "",
        qty: NaN,
        width: NaN,
        height: NaN,
        hingeHole: false,
        woodGrand: false,
        miterCut: "None",
        price: NaN,
        subtotal: NaN,
        id: nanoid(),
      };
      newItems.push(newItem);
    }
    const newItemsAdd = [...items, ...newItems];
    setItems(newItemsAdd);
  }

  const componentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTile: "UserData",
  });

  return (
    <Fragment>
      <table
        className="table table-hover table-sm table-responsive-sm"
        id="my-table"
      >
        <TableHead />
        <tbody>
          {items.map((rowItem, index) => {
            return (
              <NewTableBody
                key={index}
                ItemNum={index}
                item={rowItem}
                handleDeleteClick={deleteRow}
                handleCopyClick={copyRow}
                handleEditAllInOne={updateRow}
                handleEditTwo={updateTwo}
              />
            );
          })}
        </tbody>
        <TableFooter items={items} onAdd={addRow} printPDF={generatePDF} />
      </table>
      <table
        className="table table-hover table-sm table-responsive-sm"
        ref={componentPDF}
      >
        <TableHead />
        <tbody>
          {items.map((rowItem, index) => {
            return (
              <ReadOnly
                key={index}
                ItemNum={index}
                item={rowItem}
                handleDeleteClick={deleteRow}
                handleCopyClick={copyRow}
              />
            );
          })}
        </tbody>
        <TableFooter items={items} onAdd={addRow} printPDF={generatePDF} />
      </table>
    </Fragment>
  );
}
export default CreateArea;
