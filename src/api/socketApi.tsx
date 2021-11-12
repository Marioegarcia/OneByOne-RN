import io from "socket.io-client";

// let socket = io("https://chatmario.herokuapp.com/");
let socket = io("http://192.168.1.12:8000");

export default socket;