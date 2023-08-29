import React from "react";
import Container from "../../../sharable-components/Container";
const Greeting = ({ userName }) => {
  return (
    <div>
      <h2 className="text-slate-900 text-2xl font-bold">Hello, {userName}!</h2>
    </div>
  );
};

export default Greeting;
