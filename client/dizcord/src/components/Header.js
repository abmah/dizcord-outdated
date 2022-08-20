import "./index.css";
import { FaHamburger } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

import { useState, useContext } from "react";
import { AppContext } from "./context/AppContext";
function Header() {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);

  const { setIsSideBarShown } = useContext(AppContext);

  return (
    <div class="header">
      <FaHamburger
        size={30}
        className="hamburger-icon"
        onClick={() => {
          setIsSideBarShown((prev) => !prev);
        }}
        color={hover ? "#DCDDDE" : "#B9BBBE"}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      />
      {`@AbMah`}
      <BsFillPeopleFill
        size={30}
        onMouseEnter={() => {
          setHover1(true);
        }}
        onMouseLeave={() => {
          setHover1(false);
        }}
        color={hover1 ? "#DCDDDE" : "#B9BBBE"}
      />
    </div>
  );
}
export default Header;
