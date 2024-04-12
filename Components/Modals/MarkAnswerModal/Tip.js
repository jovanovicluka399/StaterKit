import React from "react";

const Tip = ({ closeTip }) => {
  return (
    <>
      <br />
      <div className="alert alert-warning text-center">
        <button type="button" className="close" onClick={closeTip}>
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
        <span style={{ "font-size": "0.7em", "line-height": "12px" }}>
          Click on each correct answer to award points to those players. Ignore
          incorrect responses and click the arrows to navigate through each set
          of responses.
        </span>
      </div>
    </>
  );
};

export default Tip;
