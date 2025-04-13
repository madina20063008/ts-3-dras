
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import PlantPage from "./components/PlantPage";

const App = () => {
  const location = useLocation();
  const isUserDetailPage = location.pathname.startsWith("/user/");
  const isDashboardPage = location.pathname === "/dashboard";

  return (
    <>
      <Navbar />
      {isDashboardPage ? (
        <Dashboard />
      ) : (
        <>
          <Header />
          <PlantPage isUserDetailPage={isUserDetailPage} />
        </>
      )}
      <Footer />
    </>
  );
};

export default App;
