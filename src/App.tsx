import React from 'react';
import './App.css';

import Home from './screens/Home';
import AppProvider from './hooks';

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
