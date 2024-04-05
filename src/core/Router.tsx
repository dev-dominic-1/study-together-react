import React from "react";
import {routes} from "./Routes";
import {Route, Routes} from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      {routes.map(({route, data}) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}