const firebaseConfig = {
    apiKey: "AIzaSyCijBP0I09SkcdcaCKLfbD1Q3hLNs05UZY",
    authDomain: "realtime-chat-42ee9.firebaseapp.com",
    projectId: "realtime-chat-42ee9",
    storageBucket: "realtime-chat-42ee9.appspot.com",
    messagingSenderId: "326490386953",
    appId: "1:326490386953:web:2684f1c41ae24d1709bed8",
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