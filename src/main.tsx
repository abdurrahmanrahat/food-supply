import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import ThemeProvider from "./context/ThemeProvider.tsx";
import "./index.css";
import { persistor, store } from "./redux/store.ts";
import router from "./routes/Routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
          <Toaster />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
