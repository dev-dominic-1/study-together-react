import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import {ThemeProvider, Typography} from "@mui/material";
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
              <NavigationItem route={r} />
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
