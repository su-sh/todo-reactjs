import React from 'react';
import TABS from '../constants/commonConstants';

const Tabs = props => {
  let { setCurrentView } = props;

  return (
    <div className="tab-container">
      <div className="tab" onClick={() => setCurrentView(TABS.HOME)}>
        Home
      </div>

      <div className="tab" onClick={() => setCurrentView(TABS.REMAINING)}>
        Remaining
      </div>

      <div className="tab" onClick={() => setCurrentView(TABS.COMPLETED)}>
        Completed
      </div>
    </div>
  );
};

export default Tabs;
