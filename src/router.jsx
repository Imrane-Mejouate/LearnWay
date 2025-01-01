import { createBrowserRouter } from "react-router-dom";

// Import Pages
import ErrorPage from "./pages/error-page";
import Login from "./pages/login";
import StudentHome from "./pages/student/home";
import StudentProfil from "./pages/student/profile";


export const router = createBrowserRouter([
  {
    path: "/LearnWay/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/LearnWay/student/home",
    element: <StudentHome />,
  },
  {
    path: "/LearnWay/student/profil",
    element: <StudentProfil />,
  },
]);