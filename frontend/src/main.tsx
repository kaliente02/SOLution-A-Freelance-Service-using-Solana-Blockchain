import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppWalletProvider } from "./solana/WalletProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWalletProvider>
        <App />
      </AppWalletProvider>
    </BrowserRouter>
  </React.StrictMode>
);