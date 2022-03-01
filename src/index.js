import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-jpr90dts.us.auth0.com"
        clientId="At4JhrLvdustScBKVFyEumDNlzqhMQZi"
        redirectUri="http://localhost:3000/registeruser"
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
