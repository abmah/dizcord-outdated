import React, { useState } from "react";
const AppContext = React.createContext();

function AppContextProvider(props) {
  const [isSideBarShown, setIsSideBarShown] = useState(false);
  const [messageToBeSent, setMessageToBeSent] = useState("");
  const [shouldMessagesUpdate, setShouldMessagesUpdate] = useState(0);
  return (
    <AppContext.Provider
      value={{
        isSideBarShown,
        setIsSideBarShown,
        messageToBeSent,
        setMessageToBeSent,
        shouldMessagesUpdate,
        setShouldMessagesUpdate,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
export { AppContext, AppContextProvider };
