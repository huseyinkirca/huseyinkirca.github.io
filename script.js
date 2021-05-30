const firebaseConfig = {
    apiKey: "AIzaSyB8uKTrTpJYMyT73iywlZip7E7gbrq_8SA",
    authDomain: "chat-d4daf.firebaseapp.com",
    projectId: "chat-d4daf",
    storageBucket: "chat-d4daf.appspot.com",
    messagingSenderId: "277079121758",
    appId: "1:277079121758:web:8867c9aa1b44f35b9a39cf",
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