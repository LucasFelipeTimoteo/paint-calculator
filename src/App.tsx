import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Home from './pages/Home';
import './styles/global/App.css';
import { MUITheme } from './styles/global/MUITheme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={MUITheme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
