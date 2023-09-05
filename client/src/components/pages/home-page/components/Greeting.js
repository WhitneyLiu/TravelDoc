import React from "react";
const Greeting = ({ userName }) => {
  return (
    <div className="flex justify-start items-start">
      <h2 className="text-slate-900 text-2xl font-bold ml-10">Hello, {userName}!</h2>
    </div>
  );
};

export default Greeting;
