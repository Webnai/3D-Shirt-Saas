import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab} ? 'rounded-full
     : 'rounded-4'}`}
    >
      willy
    </div>
  );
};

export default Tab;
