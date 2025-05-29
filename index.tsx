import { registerRootComponent } from "expo";
import React, { StrictMode } from "react";

import App from "./src/App";
import { QuotesContextProvider } from "./src/contexts/quotesContext";

function Root() {
  return (
    <StrictMode>
      <QuotesContextProvider>
        <App />
      </QuotesContextProvider>
    </StrictMode>
  );
}

registerRootComponent(Root);
