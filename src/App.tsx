import React from 'react';
import './App.css';

import AppProvider from './hooks';
import Router from './routes';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
