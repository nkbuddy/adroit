import React, { Fragment } from "react";
import { Input } from "@mui/material";

function RightSideBar() {
  return (
    <div id="mySidenav" className="sidenav">
      <a href="a">SEND TO</a>
      <div>
        <i className="bi bi-printer-fill" style={{ color: "white" }}></i>
        <span style={{ color: "white"}}>print</span>
      </div>
      <a href="b">ORDER INFO</a>
      <div>
        <input placeholder="Order Name"></input>
        <textarea placeholder="Description"></textarea>
        <input type={Date} placeholder="date"></input>
      </div>
      <a href="c">BILLING</a>
      <div>
        <input placeholder="Enter a new address"></input>
        <input placeholder="Attn:"></input>
        <input placeholder="Street"></input>
        <input placeholder="Line2"></input>
        <input placeholder="Line3"></input>
        <input placeholder="City"></input>
        <input placeholder="Country"></input>
        <input placeholder="State/province"></input>
        <input placeholder="Zip"></input>
      </div>
      <a href="d">SHIPPING</a>
      <div>
        <textarea placeholder="Shipping Instructions"></textarea>
      </div>
      <div>
        
        <i
          class="bi bi-save-fill btn btn-primary"
          style={{ color: "white", borderStyle: "solid" }}
        >
          Save Changes
        </i>
        <br></br>
        <i class="bi bi-send btn btn-primary" style={{ color: "white", borderStyle: "solid" }}>
          Submite Order
        </i>
        <br></br>
        <span style={{ color: "white"}}>By submitting this order you agree to our terms and conditions</span>
      </div>
    </div>
  );
}

export default RightSideBar;
