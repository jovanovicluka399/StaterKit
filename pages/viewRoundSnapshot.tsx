import Layout from "@common/Layout";
import React, { ReactElement, useState } from "react";

const ViewRoundSnapshot = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <h1>No Information Yet</h1>
        <h1>You Need to Start Game with Wagers and Mark Answers</h1>
      </div>
    </React.Fragment>
  );
};

ViewRoundSnapshot.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default ViewRoundSnapshot;
