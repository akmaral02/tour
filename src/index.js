import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FlowerContextProvider from "./contexts/FlowerContextProvider";
import MyPlantsContextProvider from "./contexts/MyPlantsContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyPlantsContextProvider>
        <AuthContextProvider>
          <FlowerContextProvider>
            <App />
          </FlowerContextProvider>
        </AuthContextProvider>
      </MyPlantsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
