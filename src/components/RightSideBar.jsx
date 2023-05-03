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
        <input  className="form-control" placeholder="Order Name"></input>
        <textarea className="form-control" placeholder="Description"></textarea>
        <input className="form-control" type={Date} placeholder="date"></input>
      </div>
      <a href="c">BILLING</a>
      <div>
        <input className="form-control" placeholder="Enter a new address"></input>
        <input className="form-control" placeholder="Attn:"></input>
        <input className="form-control" placeholder="Street"></input>
        <input className="form-control" placeholder="Line2"></input>
        <input className="form-control" placeholder="Line3"></input>
        <input className="form-control" placeholder="City"></input>
        <input className="form-control" placeholder="Country"></input>
        <input className="form-control" placeholder="State/province"></input>
        <input className="form-control" placeholder="Zip"></input>
      </div>
      <a href="d">SHIPPING</a>
      <div>
        <textarea className="form-control" placeholder="Shipping Instructions"></textarea>
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
