import React, { useEffect } from "react";
import "./App.scss";
import { Card, Dialog, ThemeProvider } from "@mui/material";
import AppTheme from "./styles/AppTheme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./core/Routes";
import NavigationItem from "./components/navigation/NavigationItem";
import UniversalDescriptor from "./core/universal-descriptor/UniversalDescriptor";
import styles from "./App.module.scss";

function App() {
  const [showDialog, setShowDialog] = React.useState(false);

  useEffect(() => {
    setTimeout(() => setShowDialog(true), 800);
  }, []);

  return (
    <div
      id="main"
      className="App"
    >
      <ThemeProvider theme={AppTheme}>
        <Dialog
          className={styles.universalDescriptorDialog}
          open={showDialog}
          onClose={() => setShowDialog(false)}
        >
          <UniversalDescriptor onClickClose={() => setShowDialog(false)} />
        </Dialog>
        <BrowserRouter>
          <div id="app-left-col">
            {routes.map((r) => (
              <NavigationItem
                key={r.route.path}
                route={r}
              />
            ))}
          </div>
          <div id="app-right-col">
            <Routes>
              {routes.map(({ route: r }) => (
                <Route
                  key={r.path}
                  path={r.path}
                  element={r.element}
                />
              ))}
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
