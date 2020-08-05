import React ,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import { FormControl, InputLabel ,Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from "@material-ui/icons/Send"
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setInput] = useState("")

  const [messages, setMessages] = useState([
    {username:"sandy",message:"hey there"},
  {username:"shashank",message:"superb"},
  {username:"ravi",message:"awesome"}])

  const [username, setUsername] = useState("")

  useEffect(() => {
   
    db.collection("messages")
    .orderBy("timestamp","desc")
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc=>doc.data()))
    })
  }, [])
  
  
  useEffect(() => {
   
     setUsername(prompt("enter username"))
    
  }, [])


  const sendMessage=(event)=>{

    db.collection("messages").add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    event.preventDefault();
    setMessages([...messages,{username:username,text:input}]);
    setInput("");
   

  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>FACEBOOK- MESSENGER</h1>
       <h2>HEY {username}</h2>

      <form className="app_form">

      <FormControl className="app_formControl">
         <Input className="app_input" placeholder="Enter message..."value={input} onChange={event=>setInput(event.target.value) } ></Input>
        
        <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type="submit"onClick={sendMessage}>
           <SendIcon />
        </IconButton>
        </FormControl>
      
      </form>
    
    <FlipMove>
      {
        messages.map(message=>(
          <Message username={username} message={message} />
          
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
