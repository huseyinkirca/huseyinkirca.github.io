const firebaseConfig = {
    apiKey: "AIzaSyB5ZmV_FdCdEC9gtT-sCMoWZaaz6fEF0e8",
    authDomain: "realtime-ec47a.firebaseapp.com",
    projectId: "realtime-ec47a",
    storageBucket: "realtime-ec47a.appspot.com",
    messagingSenderId: "432980632220",
    appId: "1:432980632220:web:f368fccd641349d182c359",
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.database();
  
  function send(){
    alert(user);
    const timestamp = Date.now();
    var mssg = document.getElementById("chat-txt");
    var mssg1 = mssg.value;
    db.ref("messages/" + timestamp).set({
      usr: user,
      msg: mssg1,
    });
    alert("ooooo")
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

