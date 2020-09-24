import React, { Fragment, useState } from "react";
import C1 from "./StepTest/C1";
import C2 from "./StepTest/C2";
import C3 from "./StepTest/C3";
const C = (prop: any) => {
  const [showCom, setShowCom] = useState(1);

  return (
    <Fragment>
      <div style={{ padding: "20px" }}>
      <h3>Conditional Rendering</h3>
        {showCom === 1 && <C1 />}
        {showCom === 2 && <C2 />}
        {showCom === 3 && <C3 />}
      </div>

      <div style={{ padding: "20px" }}>
       <h3>HIDE/SHOW Rendering</h3>
        <div className={showCom === 1 ? "show" : "hide"}>
          <C1 />
        </div>
        <div className={showCom === 2 ? "show" : "hide"}>
          <C2 />
        </div>
        <div className={showCom === 3 ? "show" : "hide"}>
          <C3 />
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <br />
        <button
          className={showCom === 1 ? "btn btn-primary" : "btn btn-secondary"}
          onClick={() => setShowCom(1)}
        >
          C1
        </button>
        &nbsp;&nbsp;
        <button
          className={showCom === 2 ? "btn btn-primary" : "btn btn-secondary"}
          onClick={() => setShowCom(2)}
        >
          C2
        </button>
        &nbsp;&nbsp;
        <button
          className={showCom === 3 ? "btn btn-primary" : "btn btn-secondary"}
          onClick={() => setShowCom(3)}
        >
          C3
        </button>
      </div>
    </Fragment>
  );
};
export default C;
