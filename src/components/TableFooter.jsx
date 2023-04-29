import React from "react";

function TableFooter(props) {
  const items = props.items;

  let testTotel = 0;
  let totalQty = 0;
  for (let row in items) {
    testTotel += Number(items[row].subtotal);
    totalQty += Number(items[row].qty);
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
        <td colSpan="4">
          <i className="bi bi-plus-circle-fill" onClick={handleClick}></i>
          add row
        </td>
      </tr>
    </tfoot>
  );
}

export default TableFooter;
