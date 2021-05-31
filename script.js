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
  
  function send(){
    const timestamp = Date.now();
    var mssg = document.getElementById("chat-txt");
    var mssg1 = mssg.value;
    db.ref("messages/" + timestamp).set({
      usr: user,
      msg: mssg1,
    });
    chat.style.display = "";  
    loginscreen.style.display = "none";

  }


  const fetchChat = db.ref("messages/");
  fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    const msg = "<li>" + messages.usr + " : " + messages.msg + "</li>";
    document.getElementById("messages").innerHTML += msg;
  });
  
  //login page
function login(){
  const isimler = {"krc":"28"}
  var isim = document.getElementById("user");
  var passwd = document.getElementById("passwd");
  var user = isim.value ;
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

