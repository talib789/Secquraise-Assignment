import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Edge from "./component/Edge";
import Casket from "./component/casket";
import Container from "./component/container";
import Container1 from "./component/container1";
import "./App.css";

const App = () => {
  const [id, setid] = useState({
    ID: "EVT0041",
    Location: "Hyderabad",
    Gender: "Female",
    Name: "Female19",
    Date: "9-Jan-23",
    Time: "08:16:37",
  });

  return (
    <>
      <div className="m-10 border-solid border-2">
        <Navbar />
        <div className="flex flex-row">
          <Edge />
          <div className="grid grid-cols-3 max-md:grid-cols-1">
            <Casket func={setid} id={id} />
            <Container func={setid} id={id} />
            <Container1 func={setid} id={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
