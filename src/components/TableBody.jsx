import React, { useState } from "react";
import panelFinish from "../panelFinish.js";
import {
  Input,
  Checkbox,
  NativeSelect,
  Autocomplete,
  TextField,
  FilledInput
} from "@mui/material";

var finalQty = 0;
var finalPrice = 0;

function TableBody(props) {
  const [row, setRow] = useState({
    panelFinish: props.panelFinish,
    panelId: props.Id,
    qty: props.qty,
    width: props.width,
    height: props.height,
    hingeHole: props.hingeHole,
    woodGrand: props.woodGrand,
    miterCut: props.miterCut,
    price: props.price,
    subtotal: props.subtotal,
  });

  const [hingeIsChecked, setHingeIsChecked] = useState(props.hingeHole);
  function handleHingeChange(event) {
    setHingeIsChecked(event.target.checked);
    setRow((prevRow) => {
      return {
        ...prevRow,
        hingeHole: event.target.checked,
      };
    });
    props.onUpdate(props.id,row);
  }

  const [woodGrandIsChecked, setWoodGrandIsChecked] = useState(props.woodGrand);
  function handlewoodGrandChange(event) {
    setWoodGrandIsChecked(event.target.checked);
    setRow((prevRow) => {
      return {
        ...prevRow,
        woodGrand: event.target.checked,
      };
    });
    props.onUpdate(props.id,row);
  }

  const [selectedPanel, setSelectedPanel] = useState(panelFinish[props.id]);
  const handelPanelChange = (event) => {
    setSelectedPanel(event);
    setRow((prevRow) => {
      return {
        ...prevRow,
        panelFinish: event.label,
        panelId: event.id,
      };
    });
    props.onUpdate(props.id,row);
  };

  let panel_value = parseFloat(selectedPanel.value ?selectedPanel.value  : 0);
  let length = row.width;
  let height = row.height;
  let hinge = hingeIsChecked;
  let miter_cut = row.miterCut;
  let match_grain = row.woodGrand;
  let Qty = row.qty;
  let discount = 0;

  const calculation= ()=> {
    let unit_price = 0;
    if (hinge && height < 38.875) {
      unit_price += 2;
    } else if (hinge && height >= 38.875 && height < 64.375) {
      unit_price += 3;
    } else if (hinge && height >= 64.375 && height < 79.375) {
      unit_price += 3;
    } else if (hinge && height >= 79.375 && height < 95.875) {
      unit_price += 3;
    }
    if (match_grain) unit_price += 15;
    if (miter_cut!=="None") unit_price += 15;
    let sizeOfDoor = (length * height) / 144;
    if (sizeOfDoor <= 1.5) sizeOfDoor = 1.5;

    unit_price += panel_value * sizeOfDoor;
    let subtotal = Qty * unit_price;
    if (sizeOfDoor >= 1.5 && sizeOfDoor <= 3) discount = 1;
    else if (sizeOfDoor > 3.0 && sizeOfDoor <= 6.0) discount = 0.9;
    else if (sizeOfDoor > 6.0 && sizeOfDoor <= 9.0) discount = 0.85;
    else if (sizeOfDoor > 9.0 && sizeOfDoor <= 13.0) discount = 0.8;
    else if (sizeOfDoor > 13.0 && sizeOfDoor <= 30.0) discount = 0.75;
    subtotal *= discount;
    subtotal = +(Math.round(subtotal + "e+2") + "e-2");
    return subtotal;
  }

  let unit_price = calculation() / Qty;
  unit_price = +(Math.round(unit_price + "e+2") + "e-2");
  finalQty += Qty;
  finalPrice +=unit_price;

  function handleChange(event) {
    const { className, value } = event.target;
    setRow((prevRow) => {
      const new_obj = { ...prevRow, [className]: value}
      return {
        new_obj
      };
    });
    props.onUpdate(props.id,row);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleCopy() {
    props.onCopy(props.id, row);
  }

  return (
    <tr>
      <td>
        <i className="bi bi-x-circle-fill" onClick={handleDelete}></i>
      </td>
      <td>
        <i className="bi bi-files" onClick={handleCopy}></i>
      </td>
      <td>{props.id}</td>
      <td>
        <Autocomplete
          className="panelFinish"
          disableClearable={true}
          id="grouped-demo"
          options={panelFinish.sort((a, b) => -b.label.localeCompare(a.label))}
          getOptionLabel={(option) => option.label}
          onChange={(event, value) => handelPanelChange(value)}
          value={selectedPanel}
          renderInput={(params) => <TextField {...params} />}
          sx={{ m: 1, width: "25ch" }}
        />
      </td>
      <td>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          disableClearable={true}
          options={panelFinish.sort((a, b) => -b.label.localeCompare(a.label))}
          getOptionLabel={(option) => option.id}
          renderInput={(params) => <TextField {...params} />}
          value={selectedPanel}
          onChange={(event, value) => handelPanelChange(value)}
          sx={{ m: 1, width: "25ch" }}
        />
      </td>
      <td>
        <Input
          type="number"
          className="qty"
          onChange={handleChange}
          value={row.qty}
          sx={{ m: 1, width: "5ch" }}
        />
      </td>
      <td>
        <Input
          type="number"
          className="width"
          onChange={handleChange}
          value={row.width}
          sx={{ m: 1, width: "10ch" }}
        />
      </td>
      <td>
        <Input
          type="number"
          className="height"
          onChange={handleChange}
          value={row.height}
          sx={{ m: 1, width: "10ch" }}
        />
      </td>
      <td>
        <Checkbox
          id="defaultCheck1"
          className="hingeHole"
          onChange={handleHingeChange}
          checked={row.hingeHole}
          sx={{ m: 1, width: "10ch" }}
        />
      </td>
      <td>
        <Checkbox
          id="defaultCheck2"
          className="woodGrand"
          onChange={handlewoodGrandChange}
          checked={row.woodGrand}
          sx={{ m: 1, width: "10ch" }}
        />
      </td>
      <td>
        <NativeSelect
          id="inlineFormCustomSelectPref"
          className="miterCut"
          onChange={handleChange}
          value={row.miterCut}
          sx={{ m: 1, width: "10ch" }}
        >
          <option defaultValue="None">None</option>
          <option value="Top">Top</option>
          <option value="1H">1H</option>
          <option value="Bot">Bot</option>
        </NativeSelect>
      </td>
      <td>
        <FilledInput
          className="Subtotal"
          type="number"
          value={unit_price}
          sx={{ m: 1, width: "10ch" }}
          inputProps={{
            "aria-label": "subtotal",
            readOnly: true, // make the input field readonly
          }}
        />
      </td>
      <td>
        <FilledInput
          className="Subtotal"
          type="number"
          value={calculation()}
          sx={{ m: 1, width: "10ch" }}
          inputProps={{
            "aria-label": "subtotal",
            readOnly: true, // make the input field readonly
          }}
        />
      </td>
    </tr>
  );
}

export default TableBody;
export {finalPrice,finalQty};
