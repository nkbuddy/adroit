import React from "react";

function TableFooter(props) {
    function handleClick(){
        props.onAdd();
    }
  return (
    <tfoot>
      <tr>
        <td colspan="4" align="right">total items</td>
        <td>54</td>
        <td colspan="7" align="right">$123</td>
      </tr>

      <tr>
        <td colspan="5"><i class="bi bi-plus-circle-fill" onClick={handleClick}></i>add row</td>
      </tr>
    </tfoot>
  );
}

export default TableFooter;
