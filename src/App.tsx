import React from 'react';
import './App.css';

import AppProvider from './hooks';
import Router from './routes';

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
