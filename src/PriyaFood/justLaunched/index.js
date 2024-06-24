import React from "react";
import Page1 from "./page1";

const JustLaunchedPages = () => {
  return (
    <div>
      <div className="grid grid-cols-6 border p-4 rounded shadow">
        <div className="">
          <Page1 className="w-full h-48 object-cover rounded" />
        </div>
        <div>
          <Page1 className="w-full h-48 object-cover rounded" />
        </div>
        <div>
          <Page1 className="w-full h-48 object-cover rounded" />
        </div>
        <div>
          <Page1 className="w-full h-48 object-cover rounded" />
        </div>
        <div>
          <Page1 className="w-full h-48 object-cover rounded" />
        </div>
        <div>
          <Page1 className="w-full h-48 object-cover rounded" />
        </div>
      </div>
    </div>
  );
};

export default JustLaunchedPages;
