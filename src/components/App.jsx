import React from "react";
import Topbar from "./Topbar";
import CreateArea from "./CreateArea";
import RightSideBar from "./RightSideBar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <RightSideBar/>
      <div id="main">
        <CreateArea />
      </div>
    </div>
  );
}

export default App;
