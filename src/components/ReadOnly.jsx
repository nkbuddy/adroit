import React, { Fragment } from "react";

function ReadOnly({ item, ItemNum}) {
  let description = item.panelFinish;
  if (item.hingeHole === true){
    description = description + " 'Hinge' ";
  }
  if (item.woodGrain === true){
    description = description + " 'Wood Grain ' ";
  }
  if(item.miterCut !== "None"){
  description = description + " '" +  item.miterCut+"'";
  }
  return (
    <Fragment>
    <tr>
      <td>{ItemNum + 1}</td>
      <td>{item.panelId}</td>
      <td>{description}</td>
      <td></td>
      <td>{item.height}</td>
      <td>{item.width}</td>
      <td></td>
      <td>{item.qty}</td>
      <td>{item.price}</td>
      <td></td>
      <td>{item.subtotal}</td>
      <td></td>
      <td></td>
    </tr>
    </Fragment>
  );
}
export default ReadOnly;
