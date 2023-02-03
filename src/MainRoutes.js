import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useAuth } from "./contexts/AuthContextProvider";

import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import ContactUsPage from "./pages/ContactUsPage";
import FlowersPage from "./pages/FlowersPage";
import HomePage from "./pages/HomePage";
import MyplantsPage from "./pages/MyplantsPage";
import NotFoundPage from "./pages/NotFoundPage";

const MainRoutes = () => {
  const { user } = useAuth();

  const PublicRoutes = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/auth", element: <AuthPage />, id: 2 },
    { link: "/flowers", element: <FlowersPage />, id: 3 },
    { link: "/contactus", element: <ContactUsPage />, id: 5 },
    { link: "/myplants", element: <MyplantsPage />, id: 6 },
    { link: "*", element: <NotFoundPage />, id: 7 },
  ];

  const PrivateRoutes = [{ link: "/admin", element: <AdminPage />, id: 8 }];
  return (
    <Routes>
      {PublicRoutes.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}

      {user
        ? PrivateRoutes.map((item) => (
            <Route
              path={item.link}
              element={
                user.email === "admin@gmail.com" ? (
                  item.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
              key={item.id}
            />
          ))
        : null}
    </Routes>
  );
};

export default MainRoutes;
