import React from 'react';

const Tabs = props => {
  let { setCurrentView } = props;

  return (
    <div className='tab-container'>
      <div className='tab' onClick={() => setCurrentView('home')}>
        Home
      </div>
      <div className='tab' onClick={() => setCurrentView('completed')}>
        Completed
      </div>
      <div className='tab' onClick={() => setCurrentView('remaining')}>
        Remaining
      </div>
    </div>
  );
};

export default Tabs;
