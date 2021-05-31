const firebaseConfig = {
    apiKey: "AIzaSyApVd25nOOHOImk3ngM-GHwhXUBzic8nmc",
    authDomain: "realtime-chat-96508.firebaseapp.com",
    projectId: "realtime-chat-96508",
    storageBucket: "realtime-chat-96508.appspot.com",
    messagingSenderId: "84516305780",
    appId: "1:84516305780:web:d9162e45cb943820990a21",
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  const username = prompt("What's your name?");
  
  document.getElementById("send-message").addEventListener("submit", postChat);
  function postChat(e) {
    e.preventDefault();
    const timestamp = Date.now();
    const chatTxt = document.getElementById("chat-txt");
    const message = chatTxt.value;
    chatTxt.value = "";
    db.ref("messages/" + timestamp).set({
      usr: username,
      msg: message,
    });
  }
  
  const fetchChat = db.ref("messages/");
  fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    const msg = "<li>" + messages.usr + " : " + messages.msg + "</li>";
    document.getElementById("messages").innerHTML += msg;
  });
