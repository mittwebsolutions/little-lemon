import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Reservations from "../pages/Reservations";
import Order from "../pages/Order";
import Login from "../pages/login";

import { Route, Routes } from "react-router-dom";

import "./Main.css";

export default function Main() {
    return (
    <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </main>
    );
}