import styles from "./Main.module.scss";
import Home from "../Home/Home";
import Booking from "../Booking/Booking";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </main>
  );
};


export default Main;