import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Pages from "./components/Pages";
import RootLayout from "./components/RootLayout";
import Contact, { contactData } from "./components/Contact";
import Users, { usersData } from "./components/Users";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/pages" element={<Pages />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/contact" element={<Contact />} action={contactData}></Route>
      <Route path="/users" element={<Users />} loader={usersData}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
