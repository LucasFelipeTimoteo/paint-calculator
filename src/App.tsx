import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import WallsAccessoriesProvider from './contexts/WallsAccessories';
import WallsMeasurementsProvider from './contexts/WallsMeasurements';
import Home from './pages/Home';
import { MUITheme } from './styles/global/MUITheme';

function App() {
  return (
    <ThemeProvider theme={MUITheme}>
      <WallsAccessoriesProvider>
        <WallsMeasurementsProvider>
          <div className="App">
            <CssBaseline />
            <Home />
          </div>
        </WallsMeasurementsProvider >
      </WallsAccessoriesProvider>

    </ThemeProvider>
  );
}

export default App;
