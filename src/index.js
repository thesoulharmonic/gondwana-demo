import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//  set up a redux store and persist it https://www.positronx.io/how-to-integrate-redux-persist-to-react-redux-store/
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

// store to persit
const persistedStore = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>
);
