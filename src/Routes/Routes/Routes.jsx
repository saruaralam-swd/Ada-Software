import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/MainLayout";
import SignUp from "../../Pages/SignUp/SignUp";
import LogIn from "../../Pages/LogIn/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>Not Found 404!</div>,
    children: [
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
    ],
  },
]);

export default router;
