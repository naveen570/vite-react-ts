import React from "react";
import ReduxProvider from "./redux-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export { ReduxProvider };
