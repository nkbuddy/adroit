import React, { useState } from "react";

function TableBody(props) {
  const [row, setRow] = useState({
    panelFinish: "",
    panelId: "",
    qty: "",
    width: "",
    height: "",
    hingeHole: "",
    woodGrand: "",
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
    console.log(row);
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
          onkeydown="if(event.key==='.'){event.preventDefault();}"
          oninput="event.target.value = event.target.value.replace(/[^0-9]*/g,'');"
        />
      </td>
      <td>
        <input
          type="number"
          name="panelId"
          onChange={handleChange}
          value={row.panelId}
          onkeydown="if(event.key==='.'){event.preventDefault();}"
          oninput="event.target.value = event.target.value.replace(/[^0-9]*/g,'');"
        />
      </td>
      <td>
        <input
          type="number"
          name="qty"
          onChange={handleChange}
          value={row.qty}
          onkeydown="if(event.key==='.'){event.preventDefault();}"
          oninput="event.target.value = event.target.value.replace(/[^0-9]*/g,'');"
        />
      </td>
      <td>
        <input
          type="number"
          name="width"
          onChange={handleChange}
          value={row.width}
          onkeydown="if(event.key==='.'){event.preventDefault();}"
          oninput="event.target.value = event.target.value.replace(/[^0-9]*/g,'');"
        />
      </td>
      <td>
        <input
          type="number"
          name="height"
          onChange={handleChange}
          value={row.height}
          onkeydown="if(event.key==='.'){event.preventDefault();}"
          oninput="event.target.value = event.target.value.replace(/[^0-9]*/g,'');"
        />
      </td>
      <td>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
      </td>
      <td>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck2"
        />
      </td>
      <td>
        <select
          class="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
        >
          <option selected>None</option>
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
