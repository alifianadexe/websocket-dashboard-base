import React, { useEffect, useState, useReff } from "react";
import WebSocket from "websocket";

export default function BaseWebsocket(props) {
  const [message, setMessage] = useState([]);
  const websocket = useReff(null);
  const connect = () => {
    websocket.current = new WebSocket("ws://10.10.104.69:5000");
    websocket.current.onopen = () => {
      console.log("Client Connected to ws://10.10.103.69");
    };
    websocket.current.onmessage = (message) => {
      setMessage((prev) => [...prev, message.data]);
    };
    websocket.current.onclose = () => {
      setTimeout(function () {
        connect();
      }, 1000);
    };
  };

  useEffect(() => {
    connect();
    return () => websocket.current.close();
  }, []);

  return props.children;
}
