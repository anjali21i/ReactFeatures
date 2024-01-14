import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import App from "./App";
import { APP_ID } from "./utils/commonDataUtils";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./store/store";

const rootElement = document.getElementById(APP_ID);
const root = createRoot(rootElement);
let persistor = persistStore(store);

// hydrateRoot(rootElement, <App />);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loader={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
