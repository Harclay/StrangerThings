import ReactDom from "react-dom";
import React, { createRoot } from "react";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

root.render(
  <ScopedCssBaseline>
    <BrowserRouter>
      <App />
    </BrowserRouter>);
  </ScopedCssBaseline>)