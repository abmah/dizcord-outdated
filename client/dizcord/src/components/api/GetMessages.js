import { useState, useEffect } from "react";
import axios from "axios";

import { PointSpreadLoading } from "react-loadingg";

function GetMessages() {
  const [messages, setMessages] = useState([]);
  const [messagesReady, setMessagesReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://localhost:5000/chat")
        .then((res) => {
          setMessages(res.data);
          console.log("fetched messages");
          setMessagesReady(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {messagesReady ? (
        <>
          {messages.message.map((item) => {
            return (
              <div key={item._id}>
                <h3>{item.name}</h3>
                <h5>{item.message}</h5>
              </div>
            );
          })}
        </>
      ) : (
        <PointSpreadLoading color="#dcd8d4" size="100px" />
      )}
    </div>
  );
}

export default GetMessages;
