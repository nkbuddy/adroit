import React, { useState } from "react";

function TableBody(props) {
  const [row, setRow] = useState({
    panelFinish: "",
    panelId: "",
    qty: "",
    width: "",
    height: "",
    hingeHole: false,
    woodGrand: false,
    miterCut: "",
    price: "",
    subtotal: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setRow((prevRow) => {
      return {
        ...prevRow,
        [name]: value,
      };
    });
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <tr>
      <td>
        <i class="bi bi-x-circle-fill" onClick={handleDelete}></i>
      </td>
      <td>
        <i class="bi bi-files"></i>
      </td>
      <td>
        <input
          type="text"
          name="panelFinish"
          onChange={handleChange}
          value={row.panelFinish}
        />
      </td>
      <td>
        <input
          type="number"
          name="panelId"
          onChange={handleChange}
          value={row.panelId}
        />
      </td>
      <td>
        <input
          type="number"
          name="qty"
          onChange={handleChange}
          value={row.qty}
        />
      </td>
      <td>
        <input
          type="number"
          name="width"
          onChange={handleChange}
          value={row.width}
        />
      </td>
      <td>
        <input
          type="number"
          name="height"
          onChange={handleChange}
          value={row.height}
        />
      </td>
      <td>
        <input
          class="form-check-input"
          type="checkbox"
          id="defaultCheck1"
          name="hingeHole"
          onChange={handleChange}
          value={row.hingeHole}
        />
      </td>
      <td>
        <input
          class="form-check-input"
          type="checkbox"
          id="defaultCheck2"
          name="woodGrand"
          onChange={handleChange}
          value={row.woodGrand}
        />
      </td>
      <td>
        <select
          class="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          name="miterCut"
          onChange={handleChange}
          value={row.miterCut}
        >
          <option defaultValue="None">None</option>
          <option value="1">Top</option>
          <option value="2">1H</option>
          <option value="3">Bot</option>
        </select>
      </td>
      <td>$123</td>
      <td>$123</td>
    </tr>
  );
}

export default TableBody;
