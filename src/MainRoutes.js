import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import BlogPage from "./pages/BlogPage";
import ContactUsPage from "./pages/ContactUsPage";
import EditFlowerPage from "./pages/EditFlowerPage";
import FlowerDetailPage from "./pages/FlowerDetailPage";
import FlowersPage from "./pages/FlowersPage";
import HomePage from "./pages/HomePage";
import MyplantsPage from "./pages/MyplantsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useAuth } from "./contexts/AuthContextProvider";

const MainRoutes = () => {
  // const { user } = useAuth();

  const { user } = useAuth();
  const PublicRoutes = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/auth", element: <AuthPage />, id: 2 },
    { link: "/flowers", element: <FlowersPage />, id: 3 },
    { link: "/flowers/:id", element: <FlowerDetailPage />, id: 4 },
    { link: "/contactus", element: <ContactUsPage />, id: 5 },
    { link: "/myplants", element: <MyplantsPage />, id: 6 },
    { link: "*", element: <NotFoundPage />, id: 7 },
    { link: "/blog", element: <BlogPage />, id: 8 },
  ];

  const PrivateRoutes = [
    { link: "/admin", element: <AdminPage />, id: 8 },
    { link: "/edit/:id", element: <EditFlowerPage />, id: 9 },
  ];
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
