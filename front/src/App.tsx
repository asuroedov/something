import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Notifications from "./components/Notifications/Notifications";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/contacts"} element={<ContactsPage />} />
        </Routes>
      </BrowserRouter>
      <Notifications />
    </>
  );
}

export default App;
