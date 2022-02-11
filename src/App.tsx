import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Home from './pages/Home';
import { MUITheme } from './styles/global/MUITheme';

function App() {
  return (
    <ThemeProvider theme={MUITheme}>
      <div className="App">
        <CssBaseline />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
