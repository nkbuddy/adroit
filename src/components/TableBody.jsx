import React, { useState } from "react";
import panelFinish from "../panelFinish.js";
import { Input,Checkbox,NativeSelect,Autocomplete,TextField } from '@mui/material';

function TableBody(props) {
  const [row, setRow] = useState({
    panelFinish: props.panelFinish,
    panelId: "",
    qty: props.qty,
    width: "",
    height: "",
    hingeHole: false,
    woodGrand: false,
    miterCut: "",
    price: "",
    subtotal: "",
  });

  function handleChange(event) {
    const { className, value } = event.target;
    setRow((prevRow) => {
      return {
        ...prevRow,
        [className]: value,
      };
    });
    props.onUpdate(props.id,row);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleCopy(){
    props.onCopy(props.id,row);
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
        id="grouped-demo"
        options={panelFinish.sort((a,b)=>-b.label.localeCompare(a.label))}
        getOptionLabel={(panelFinish)=>panelFinish.label}
        onChange={handleChange}
        value={props.panelFinish}
        renderInput={(params)=>(
          <TextField{...params}/>
        )}
        />
      </td>
      <td>
      <Autocomplete
        className="panelFinish"
        id="grouped-demo"
        options={panelFinish.sort((a,b)=>-b.id.localeCompare(a.id))}
        getOptionLabel={(panelFinish)=>panelFinish.id}
        onChange={handleChange}
        value={props.panelId}
        renderInput={(params)=>(
          <TextField{...params}/>
        )}
        />
      </td>
      <td>
        <Input
          type="number"
          className="qty"
          onChange={handleChange}
          value={row.qty}
        />
      </td>
      <td>
        <Input
          type="number"
          className="width"
          onChange={handleChange}
          value={props.width}
        />
      </td>
      <td>
        <Input
          type="number"
          className="height"
          onChange={handleChange}
          value={props.height}
        />
      </td>
      <td>
        <Checkbox
          id="defaultCheck1"
          className="hingeHole"
          onChange={handleChange}
          value={props.hingeHole}
        />
      </td>
      <td>
        <Checkbox
          id="defaultCheck2"
          className="woodGrand"
          onChange={handleChange}
          value={props.woodGrand}
        />
      </td>
      <td>
        <NativeSelect
          id="inlineFormCustomSelectPref"
          className="miterCut"
          onChange={handleChange}
          value={row.miterCut}
        >
          <option defaultValue="None">None</option>
          <option value="Top">Top</option>
          <option value="1H">1H</option>
          <option value="Bot">Bot</option>
        </NativeSelect>
      </td>
      <td>{props.price}</td>
      <td>{props.subtotal}</td>
    </tr>
  );
}

export default TableBody;
