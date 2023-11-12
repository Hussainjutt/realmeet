import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout01 from "./layouts/layout01";
import Home from "./pages/home";
import ActiveMembers from "./pages/activeMembers";
import Pricing from "./pages/pricing";
import Success from "./pages/success";
import ContactUs from "./pages/contactUs";
import Home2 from "./pages/home2";

const App = () => {
  const routes = [
    
    { title: "Home2", route: "/home2", component: Home2, layout: Layout01 },
    { title: "Home", route: "/", component: Home, layout: Layout01 },
    {
      title: "Active Members",
      route: "/activeMembers",
      component: ActiveMembers,
      layout: Layout01,
    },
    {
      title: "Pricing",
      route: "/pricing",
      component: Pricing,
      layout: Layout01,
    },
    {
      title: "Success",
      route: "/success",
      component: Success,
      layout: Layout01,
    },
    {
      title: "Contact us",
      route: "/contactUs",
      component: ContactUs,
      layout: Layout01,
    },
  ];
  return (
    <>
    <BrowserRouter>
      <Routes>
        {routes.map((route, key) => (
          <Route
            path={route.route}
            key={key}
            element={
              route.layout ? (
                <route.layout>
                  <route.component />
                </route.layout>
              ) : (
                <route.component />
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  
    </>
    

  );
};

export default App;
