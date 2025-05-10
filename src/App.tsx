import "./App.css";
import { createRouter } from "./router";
import { Providers } from "@/lib/provider";
import { RouterProvider } from "@tanstack/react-router";

const router = createRouter();

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
