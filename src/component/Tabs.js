import React from 'react';
import PropTypes from 'prop-types';

import TABS from '../constants/commonConstants';

/**
 * Displays Tab List.
 *
 * @param {object} props
 * @returns {object}
 */
const Tabs = props => {
  const { setCurrentView, activeTab } = props;

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

Tabs.propTypes = {
  setCurrentView: PropTypes.func,
  activeTab: PropTypes.string
};

export default Tabs;
