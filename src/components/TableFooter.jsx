import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

function TableFooter(props) {
  const items = props.items;
  const [addNumberOfRow, setAddNumberOfRow] = useState(1);

  let testTotel = 0;
  let totalQty = 0;
  for (let row in items) {
    testTotel += Number(items[row].subtotal);
    totalQty += Number(items[row].qty);
  }
  testTotel = +(Math.round(testTotel + "e+2") + "e-2");

  function handleClick(n) {
    props.onAdd(n);
  }
  function handleAddRowNumber(event) {
    const needRow = event.target.value;
    setAddNumberOfRow(needRow);
  }

  return (
    <tfoot>
      <tr>
        <td colSpan="5" align="right">
          total items
        </td>
        <td>{totalQty}</td>
        <td colSpan="7" align="right">
          ${testTotel}
        </td>
      </tr>

      <tr>
        <td colSpan="3">
          <div class="input-group">
            <i
              className="bi bi-plus-circle-fill btn btn-secondary"
              onClick={() => handleClick(addNumberOfRow)}
            >
              add row
            </i>
            <input
              type="number"
              name="NumOfRow"
              className="form-control"
              value={addNumberOfRow}
              onChange={(event) => handleAddRowNumber(event)}
              style={{ width: "5em" }}
            />
          </div>
        </td>
        <td colSpan="4">
          <i
            class="bi bi-file-earmark-pdf-fill btn btn-primary"
            onClick={props.printPDF}
            style={{ color: "white", borderStyle: "solid" }}
          >
            PDF
          </i>
          <CSVLink data={props.items} filename={"my-file.csv"} target="_blank">
            <i
              class="bi bi-filetype-csv btn btn-primary"
              style={{ color: "white", borderStyle: "solid" }}
            >
              CSV
            </i>
          </CSVLink>
        </td>
      </tr>
    </tfoot>
  );
}

export default TableFooter;
