import { useRef, useState } from "react";
import "./App.css";
import AuthComponent from "./components/Auth";
import Chat from "./components/Chat";
import { auth,signOut } from "./components/Firebase";
const authtokenget = localStorage.getItem("auth-token");



function App() {
  const [isAuth, issetAuth] = useState(authtokenget);
  const [room, setRoom] = useState("");
  const inputref = useRef(null);
  // const [data,setdata]=useState('')
  if (!isAuth) {
    return (
      <div className="App">
        <AuthComponent issetAuth={issetAuth} />
      </div>
    );
  }
  const signoutt = async()=>{
    await signOut(auth).then(() => {
      localStorage.removeItem('auth-token')
      issetAuth(false)
      setRoom(null)
    }).catch((error) => {
     console.log(error)
    });
  }
  return (
    <div>
      {room ? (
        <div>
         <Chat room={room}/>
        </div>
      ) : (
        <div className="room-form">
          <form className="room">
            <h1> Enter your Room Name : </h1>
            <input type="text" ref={inputref} placeholder="Enter your Room Name" />
            <button onClick={() => setRoom(inputref.current.value)}>Add</button>
            <button onClick={()=> signoutt()}>signout</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
