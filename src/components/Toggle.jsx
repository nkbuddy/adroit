import React, { Fragment, useState } from "react";
import CreateDoor from "./CreateDoor";

function Toggle() {
  const [info, setInfo] = useState({
    name: "",
    description: "",
    date: "",
    billing: "",
    shipping: "",
  });
  const [isCabinetClicked, setCabinetClicked] = useState(false);
  const [isDoorClicked, setDoorClicked] = useState(false);
  function cabinetClicked() {
    setCabinetClicked(!isCabinetClicked);
  }

  function doorClicked() {
    setDoorClicked(!isDoorClicked);
  }
  return (
    <Fragment>
      <div class="input-group d-flex justify-content-center">
        <i
          onClick={cabinetClicked}
          className={
            isCabinetClicked
              ? "bi bi-archive-fill btn btn-warning"
              : "bi bi-archive-fill btn btn-outline-warning"
          }
        >
          Cabinet
        </i>
        <i
          onClick={doorClicked}
          className={
            isDoorClicked
              ? "bi bi-door-open-fill btn btn-success"
              : "bi bi-door-open-fill btn btn-outline-success"
          }
        >
          Door
        </i>
      </div>
      <div id="main">
        {isDoorClicked ? <CreateDoor info={info} /> : null}
      </div>
    </Fragment>
  );
}

export default Toggle;
