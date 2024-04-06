import React from 'react';
import './App.scss';
import {ThemeProvider} from "@mui/material";
import AppTheme from "./styles/AppTheme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./core/Routes";
import NavigationItem from "./components/navigation/NavigationItem";

function App() {
  return (
    <div id="main" className="App">
      <ThemeProvider theme={AppTheme}>
        <BrowserRouter>
          <div id="app-left-col">
            {routes.map(r => (
              <NavigationItem key={r.route.path} route={r} />
            ))}
          </div>
          <div id="app-right-col">
            <Routes>
              {routes.map(({route: r}) => (
                <Route key={r.path} path={r.path} element={r.element} />
              ))}
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
