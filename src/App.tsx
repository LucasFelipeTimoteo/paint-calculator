import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import WallsMeasurementsProvider from './contexts/WallsMeasurements';
import Home from './pages/Home';
import './styles/global/App.css';
import { MUITheme } from './styles/global/MUITheme';

function App() {
  return (
    <ThemeProvider theme={MUITheme}>
      <WallsMeasurementsProvider>
        <div className="App">
          <CssBaseline />
          <Home />
        </div>
      </WallsMeasurementsProvider>
    </ThemeProvider>
  );
}

export default App;
