import React from "react";
import {finalPrice,finalQty} from "./TableBody"

function TableFooter(props) {
    const row = {
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
      };
    function handleClick(){
        props.onAdd(row);
    }
  return (
    <tfoot>
      <tr>
        <td colSpan="5" align="right">total items</td>
        <td>{finalQty}</td>
        <td colSpan="7" align="right">${finalPrice}</td>
      </tr>

      <tr>
        <td colSpan="1"><i className="bi bi-plus-circle-fill" onClick={handleClick}></i></td>
        <td>add row</td>
      </tr>
    </tfoot>
  );
}

export default TableFooter;
