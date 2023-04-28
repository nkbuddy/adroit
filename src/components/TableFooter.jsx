import React from "react";

function TableFooter(props) {
  const items = props.items;

  let testTotel = 0;
  let totalQty = 0;
  for (let row in items) {
    testTotel += items[row].subtotal;
    totalQty += items[row].qty;
  }
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
        <td colSpan="1">
          <i className="bi bi-plus-circle-fill" onClick={handleClick}></i>
        </td>
        <td>add row</td>
      </tr>
    </tfoot>
  );
}

export default TableFooter;
