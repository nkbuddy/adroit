import React from "react";
import { CSVLink } from "react-csv";

function TableFooter(props) {
  const items = props.items;

  let testTotel = 0;
  let totalQty = 0;
  for (let row in items) {
    testTotel += Number(items[row].subtotal);
    totalQty += Number(items[row].qty);
  }
  testTotel = +(Math.round(testTotel + "e+2") + "e-2");
  function handleClick() {
    props.onAdd();
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
        <td colSpan="4">
          <i className="bi bi-plus-circle-fill btn" onClick={handleClick}>
            add row
          </i>
        </td>
        <td colSpan="4">
          <i
            class="bi bi-file-earmark-pdf-fill btn btn-primary"
            onClick={props.printPDF}
            style={{ color: "white", borderStyle: "solid" }}
          >
            PDF
          </i>

          <i
            class="bi bi-file-earmark-excel-fill btn btn-primary"
            style={{ color: "white", borderStyle: "solid" }}
          >
            Excel
          </i>
          <CSVLink data={props.items} filename={"my-file.csv"} target="_blank">
            <i
              class="bi bi-filetype-csv btn btn-primary"
              style={{ color: "white", borderStyle: "solid" }}
            >
              CSV
            </i>
          </CSVLink>
          <i
            class="bi bi-filetype-html btn btn-primary"
            style={{ color: "white", borderStyle: "solid" }}
          >
            HTML
          </i>
        </td>
      </tr>
    </tfoot>
  );
}

export default TableFooter;
