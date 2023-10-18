import React, { useEffect, useState } from "react";
import {
  auth,
  addDoc,
  collection,
  db,
  query,
  where,
  onSnapshot,
  serverTimestamp,
  doc,
} from "./Firebase";
import { updateEmail } from "firebase/auth";

const Chat = ({ room }) => {
  const [message, setMessage] = useState("");
  const [newMessages, setNewMessages] = useState([]);

useEffect(()=>{
  const q = query(collection(db, "messages"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const message_text = [];
    querySnapshot.forEach((doc) => {
        message_text.push({...doc.data(), id:doc.id});
    });
    setNewMessages(message_text)
  })
  return ()=>{
    unsubscribe()
  };
},[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        createdAt: serverTimestamp(),
        user: auth.currentUser.displayName,
        room: room,
        email: auth.currentUser.email
      });
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign:'center'}}><u>CHAT APPLICATION </u></h1>
      {<h1 style={{backgroundColor:'bisque', textAlign:'center'}}>  Room : {room}</h1>}
      <div className="chat-app">
        <div className="chat-text">
          {newMessages.map((message , i) => (
            <div className="chat-flex" key={i}>
                <h1>  {message.user}</h1>
                <span> {message.text}</span>
              
            </div>
          
        
          ))}
        </div>
        <form onSubmit={handleSubmit} className="form-text">
          <input
            type="text"
            onChange={(e) => setMessage(e.currentTarget.value)}
            placeholder="Enter your message here"
            value={message}
          />
          <button>Send message</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
