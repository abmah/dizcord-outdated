import { BsFillPlusCircleFill } from "react-icons/bs";
import "./index.css";
import { useState, useContext, useEffect, useRef } from "react";
import { AppContext } from "./context/AppContext";
// import axios from "axios";
function Footer() {
  const [hover, setHover] = useState(false);
  const { messageToBeSent, setMessageToBeSent, setShouldMessagesUpdate } =
    useContext(AppContext);
  // const inputRef = useRef(null);

  const handleChange = (e) => {
    setMessageToBeSent(e.target.value);
  };

  // sending when enter is clicked logic ***** found later that this is uneccessary and is already handled by the form  *****
  // useEffect(() => {
  //   document.addEventListener("keydown", detectKeyDown, true);
  // }, []);

  // const detectKeyDown = (e) => {
  //   if (
  //     e.key === "Enter" &&
  //     inputRef.current === document.activeElement && //making sure input field is active before sending message
  //     messageToBeSent.length > 0
  //   ) {
  //     setMessageToBeSent("");
  //     postMessage();
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "@AbMah", message: messageToBeSent }),
    }).then(() => {
      console.log("message sent");
    });
    setMessageToBeSent("");
    setTimeout(() => {
      setShouldMessagesUpdate((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div className="footer">
      <BsFillPlusCircleFill
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        size={30}
        color={hover ? "#DCDDDE" : "#B9BBBE"}
      />
      <form onSubmit={handleSubmit}>
        <input
          className="msg-input"
          name="message" // not needed but good practice to have
          placeholder="Messages"
          onChange={handleChange}
          value={messageToBeSent}
          // ref={inputRef} * not needed anymore
        />
      </form>
    </div>
  );
}

export default Footer;
