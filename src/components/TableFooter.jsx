import React from "react";

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
        <td>54</td>
        <td colSpan="7" align="right">$123</td>
      </tr>

      <tr>
        <td colSpan="1"><i className="bi bi-plus-circle-fill" onClick={handleClick}></i></td>
        <td>add row</td>
      </tr>
    </tfoot>
  );
}

export default TableFooter;
