import React, { useState } from "react";
import panelFinishList from "../panelFinish.js";

function NewTableBody({
  item,
  handleDeleteClick,
  handleCopyClick,
  handleEditAllInOne,
  handleEditTwo,
}) {

  return (
    <tr>
      <td>
        <i
          className="bi bi-x-circle-fill btn"
          onClick={() => handleDeleteClick(item.id)}
        ></i>
      </td>
      <td>
        <i className="bi bi-files btn" onClick={() => handleCopyClick(item.id)}></i>
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
