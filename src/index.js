import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import {createStore} from 'redux';
 
import {rootReduser} from './store/redusers'
import "./style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = createStore(rootReduser)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
