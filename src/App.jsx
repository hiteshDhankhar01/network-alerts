// src/App.js
import React from 'react';
import AlertsOverTime from './components/AlertsOverTime';
import AlertsBySourceIP from './components/AlertsBySourceIP';
import AlertsByDestPort from './components/AlertsByDestPort';
import AlertsByCategory from './components/AlertsByCategory';

const App = () => {
  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold">Network Alerts Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 shadow rounded">
          <AlertsOverTime />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <AlertsBySourceIP />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <AlertsByDestPort />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <AlertsByCategory />
        </div>
      </div>
    </div>
  );
};

export default App;
