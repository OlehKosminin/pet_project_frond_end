import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import SharedLayout from "./route/SharedLayout.jsx";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <SharedLayout />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
