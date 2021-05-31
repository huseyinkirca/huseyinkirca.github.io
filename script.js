const firebaseConfig = {
    apiKey: "AIzaSyB5ZmV_FdCdEC9gtT-sCMoWZaaz6fEF0e8",
    authDomain: "realtime-ec47a.firebaseapp.com",
    projectId: "realtime-ec47a",
    storageBucket: "realtime-ec47a.appspot.com",
    messagingSenderId: "432980632220",
    appId: "1:432980632220:web:f368fccd641349d182c359",  
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();




function login(){
  const isimler = {"krc":"28"}
  var isim = document.getElementById("user");
  var passwd = document.getElementById("passwd");
  var user = isim.value ;
  window.user;
  var passwd1 = passwd.value ;
  console.log(user)
  console.log(passwd1)
  if (isimler[user] == passwd1) {
      alert("oldu");
      chat.style.display = "";
      loginscreen.style.display = "none";
  }else{
      alert("Kullanıcı adı veya şifre yanlış");
  }
}
  

const username = window.user
  
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
  
  //login page

