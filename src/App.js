import { useAlert } from 'react-alert';
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";
//const ENDPOINT = "4001";


function App() {
  const [response, setResponse] = useState("");
  const [response2, setResponse2] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse2(data);
    });
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:4001')
      .then(response => response.json())
      .then(responseData => {
        setResponse(responseData.response);
        //console.log('response (App component)', responseData);
        
      });
  }, []);

  useEffect(() => {
    console.log('response (App component) :', response);
    if(response==='hi alert please')
           alert.show(response);
  }, [response]);

  const alert = useAlert();
  return (
    <div>
    <p>
     fetch response : <time dateTime={response}>{response}</time>
    </p>
    <p>
    socket.io response  It's : <time dateTime={response2}>{response2}</time>
    </p>


    {/* <button
      onClick={() => {
        alert.show('Oh look, an alert!: ' +response)
      }}
    ></button> */}
    </div>
    
  );
}

export default App;