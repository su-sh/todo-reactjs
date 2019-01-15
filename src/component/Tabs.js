import React from 'react';
import TABS from '../constants/commonConstants';

const Tabs = props => {
  let { setCurrentView, activeTab } = props;

  return (
    <div className="tab-container">
      <div
        className={activeTab === TABS.HOME ? 'tab tab-active' : 'tab'}
        onClick={() => setCurrentView(TABS.HOME)}
      >
        Home
      </div>

      <div
        className={activeTab === TABS.REMAINING ? 'tab tab-active' : 'tab'}
        onClick={() => setCurrentView(TABS.REMAINING)}
      >
        Remaining
      </div>

      <div
        className={activeTab === TABS.COMPLETED ? 'tab tab-active' : 'tab'}
        onClick={() => setCurrentView(TABS.COMPLETED)}
      >
        Completed
      </div>
    </div>
  );
};

export default Tabs;
