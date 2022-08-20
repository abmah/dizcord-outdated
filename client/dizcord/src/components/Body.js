import SideBar from "./SideBar";

import { AppContext } from "./context/AppContext";
import { useContext, useEffect } from "react";
import { useRef } from "react";
import GetMessages from "./api/GetMessages";
function Body() {
  const { isSideBarShown, shouldMessagesUpdate } = useContext(AppContext);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [shouldMessagesUpdate]);
  // scroll to the end of the messages when the component is mounted
  return (
    <div className="messages-body">
      {isSideBarShown && (
        <div className="sidebar">
          <SideBar />
        </div>
      )}
      <div className="messages">
        <GetMessages />
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default Body;
