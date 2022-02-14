import { StrictMode } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { Provider, } from "react-redux";
import { createStore, applyMiddleware, } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./commons/reducers";
import sagas from "./commons/sagas";
import App from "./addresses/App";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://api-adresse.data.gouv.fr';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
