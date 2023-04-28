import React from "react";

let itemSubtotal=0;
function ReadOnly({ item, handleDeleteClick, handleCopyClick,}) {
  
  return (
    <tr>
      <td>
        <i
          className="bi bi-x-circle-fill"
          onClick={() => handleDeleteClick(item.id)}
        ></i>
      </td>
      <td>
        <i className="bi bi-files" onClick={() => handleCopyClick(item.id)}></i>
      </td>
      <td>{item.id}</td>
      <td>{item.panelFinish}</td>
      <td>{item.panelId}</td>
      <td>{item.qty}</td>
      <td>{item.width}</td>
      <td>{item.height}</td>
      <td>
        <input
          class="form-check-input"
          type="checkbox"
          id="exampleCheckbox"
          checked={item.hingeHole}
        />
      </td>
      <td>
        <input
          class="form-check-input"
          type="checkbox"
          id="exampleCheckbox"
          checked={item.woodGrand}
        />
      </td>
      <td>{item.miterCut}</td>
      <td>{item.price}</td>
      <td>{item.subtotal}</td>
    </tr>
  );
}
export default ReadOnly;
