import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import TypingTips from "../pages/TypingTips";
import TakeTest from "../pages/TakeTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/typing-test",
    element: <TakeTest />
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
