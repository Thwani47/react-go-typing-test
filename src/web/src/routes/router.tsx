import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import TypingTips from "../pages/TypingTips";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "typing-tips",
    element: <TypingTips />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
