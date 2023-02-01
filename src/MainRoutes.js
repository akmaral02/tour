import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import ContactUsPage from "./pages/ContactUsPage";
import EditFlowerPage from "./pages/EditFlowerPage";
import FlowerDetailPage from "./pages/FlowerDetailPage";
import FlowersPage from "./pages/FlowersPage";
import HomePage from "./pages/HomePage";
import MyplantsPage from "./pages/MyplantsPage";
import NotFoundPage from "./pages/NotFoundPage";

const MainRoutes = () => {
  const PublicRoutes = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/auth", element: <AuthPage />, id: 2 },
    { link: "/flowers", element: <FlowersPage />, id: 3 },
    { link: "/flowers/:id", element: <FlowerDetailPage />, id: 4 },
    { link: "/contactus", element: <ContactUsPage />, id: 5 },
    { link: "/myplants", element: <MyplantsPage />, id: 6 },
    { link: "*", element: <NotFoundPage />, id: 7 },
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

      {PrivateRoutes.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
