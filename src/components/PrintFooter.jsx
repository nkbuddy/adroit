import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

function PrintFooter(props) {
  const items = props.items;

  let testTotel = 0;
  let totalQty = 0;
  for (let row in items) {
    testTotel += Number(items[row].subtotal);
    totalQty += Number(items[row].qty);
  }
  testTotel = +(Math.round(testTotel + "e+2") + "e-2");


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
    </tfoot>
  );
}

export default PrintFooter;
