import { StrictMode } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./addresses/App";

axios.defaults.baseURL = 'https://api-adresse.data.gouv.fr';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
