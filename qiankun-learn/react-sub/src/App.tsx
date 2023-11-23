import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ],
  { basename: window.__POWERED_BY_QIANKUN__ ? "/reactSub" : "/" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
