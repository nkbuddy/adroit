import React, { useState } from "react";
import panelFinishList from "../panelFinish.js";
import {
  Input,
  Checkbox,
  NativeSelect,
  Autocomplete,
  TextField,
  FilledInput,
} from "@mui/material";

function NewTableBody({
  item,
  handleDeleteClick,
  handleCopyClick,
  handleEditAllInOne,
  handleEditTwo,
}) {
  // const priceArr = mycal(panelFinishList, item);

  // function mycal(PL, obj) {
  //   const height = Number(obj.height);
  //   const width = Number(obj.width);
  //   const qty = Number(obj.qty);
  //   let panel_value = 0;
  //   let unit_price = 0;
  //   let discount = 0;
  //   const Sindex = PL.findIndex(
  //     (pitem) => pitem.label == obj.panelFinish || pitem.id == obj.panelId
  //   );
  //   if (Sindex != -1) {
  //     panel_value = Number(PL[Sindex].value);
  //   }
  //   if (obj.hingeHole) {
  //     if (height < 38.875) {
  //       unit_price += 2;
  //     } else if (height < 64.375) {
  //       unit_price += 3;
  //     } else if (height < 79.375) {
  //       unit_price += 4;
  //     } else if (height < 95.875) {
  //       unit_price += 5;
  //     }
  //   }

  //   if (obj.woodGrand) unit_price += 15;
  //   if (obj.miterCut != "None") unit_price += 15;
  //   let sizeOfDoor = (width * height) / 144;
  //   if (sizeOfDoor <= 1.5) sizeOfDoor = 1.5;

  //   unit_price += panel_value * sizeOfDoor;
  //   let subtotal = qty * unit_price;
  //   if (sizeOfDoor >= 1.5 && sizeOfDoor <= 3) {
  //     discount = 1;
  //   } else if (sizeOfDoor > 3.0 && sizeOfDoor <= 6.0) {
  //     discount = 0.9;
  //   } else if (sizeOfDoor > 6.0 && sizeOfDoor <= 9.0) {
  //     discount = 0.85;
  //   } else if (sizeOfDoor > 9.0 && sizeOfDoor <= 13.0) {
  //     discount = 0.8;
  //   } else if (sizeOfDoor > 13.0 && sizeOfDoor <= 30.0) {
  //     discount = 0.75;
  //   }
  //   subtotal *= discount;
  //   subtotal = Math.round(subtotal * 100) / 100;
  //   unit_price = subtotal / obj.qty;
  //   unit_price = Math.round(unit_price * 100) / 100;
  //   return [unit_price, subtotal];
  // }

  return (
    <tr>
      <td>
        <i
          className="bi bi-x-circle-fill"
          onClick={() => handleDeleteClick(item.id)}
        ></i>
      </td>
      <td>
        <i className="bi bi-files" onClick={() => handleCopyClick(item.id)}></i>
      </td>
      <td>{item.id}</td>
      <td>
        <input
          type="text"
          list="data"
          class="form-control"
          placeholder="select panel"
          name="panelFinish"
          value={item.panelFinish}
          onChange={(event) => handleEditTwo(event, item.id, item)}
        />
        <datalist id="data">
          {panelFinishList.map((item, key) => (
            <option key={key} value={item.label} />
          ))}
        </datalist>
      </td>
      <td>
        <input
          type="text"
          list="data2"
          class="form-control"
          placeholder="select panel"
          name="panelId"
          value={item.panelId}
          onChange={(event) => handleEditTwo(event, item.id, item)}
        />
        <datalist id="data2">
          {panelFinishList.map((item, key) => (
            <option key={key} value={item.id} />
          ))}
        </datalist>
      </td>
      <td>
        <input
          type="number"
          name="qty"
          value={item.qty}
          onChange={(event) => handleEditAllInOne(event, item.id, item)}
        />
      </td>
      <td>
        <input
          type="number"
          name="width"
          value={item.width}
          onChange={(event) => handleEditAllInOne(event, item.id, item)}
        />
      </td>
      <td>
        <input
          type="number"
          name="height"
          value={item.height}
          onChange={(event) => handleEditAllInOne(event, item.id, item)}
        />
      </td>
      <td>
        <input
          type="checkbox"
          id="defaultCheck1"
          name="hingeHole"
          checked={item.hingeHole}
          onChange={(event) => handleEditAllInOne(event, item.id, item)}
        />
      </td>
      <td>
        <input
          type="checkbox"
          id="defaultCheck2"
          name="woodGrand"
          checked={item.woodGrand}
          onChange={(event) => handleEditAllInOne(event, item.id, item)}
        />
      </td>
      <td>
        <select
          id="inlineFormCustomSelectPref"
          name="miterCut"
          value={item.miterCut}
          onChange={(event) => handleEditAllInOne(event, item.id, item)}
        >
          <option defaultValue="None">None</option>
          <option value="Top">Top</option>
          <option value="1H">1H</option>
          <option value="Bot">Bot</option>
        </select>
      </td>
      <td>
        <input name="price" type="number" value={item.price} readOnly />
      </td>
      <td>
        <input name="Subtotal" type="number" value={item.subtotal} readOnly />
      </td>
    </tr>
  );
}

export default NewTableBody;
