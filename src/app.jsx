import React, { Suspense } from "react";
// Import React Router "for Multiple Pages Application"
import { RouterProvider } from "react-router-dom";

// Import Styles
import "./styles/tailwindcss/output.css";

// Import i18next "for multiple language"
import "./i18n";

// Import Router
import { router } from "./router.jsx";

import CustomCursor from "./components/custom-cursor";

export default function App() {
  return (
    <React.StrictMode>
      <Suspense fallback={<h1>Loading...</h1>}>
        <CustomCursor />
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode>
  );
}