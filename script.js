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
  //function $(id) { return document.getElementById(id); }
  var user_list ={"kirca":"28","hasan":"hbb","egemen":"61","baran":"kolejli","guest1":"8576","guest2":"3310"};
  var screen_1 = document.getElementById("logscreen");
  var screen_2 = document.getElementById("chatscreen");
  screen_2.style.display="none";


var element_to_scroll_to = document.getElementById('chat-txt');
  

var msg ;
var username ;



  function login(){
    
    const chatTxt = document.getElementById("user");
    const passwd = document.getElementById("passwd");
    msg = chatTxt.value ;
    var passwd1 = passwd.value ;
    if (user_list[msg] == passwd1) {
        screen_1.style.display = "none";
        //screen_2.style.visibility = "visible"
        screen_2.style.display = "block";
        element_to_scroll_to.scrollIntoView();
        const fetchChat = db.ref("messages/");
        fetchChat.on("child_added", function (snapshot) {
            
            const messages = snapshot.val();
            var date = new Date();
            const hour = date.getHours();
            const minute = date.getMinutes();
            var len ;
            element_to_scroll_to.scrollIntoView();
            if (username == messages.usr){
                var msglen = (messages.msg).length;
                
                if (msglen < 30){
                  msglen = msglen*7;
                  msglen = 670 - msglen ;
                }else{
                  msglen = 600 - msglen ;
                }
                
                const outmsg = "<div id='myself' style='margin-left:" + msglen +"px;'"+">" + messages.msg +"</div>"+"<br>";    
                document.getElementById("messages").innerHTML += outmsg;
                element_to_scroll_to.scrollIntoView();
                document.forms[0].reset();
                element_to_scroll_to.scrollIntoView();
            }else{
                var msglen = (messages.usr).length+(messages.msg).length + 1;
                if (msglen < 30){
                  msglen = msglen*7;
                  msglen = 670 - msglen ;
                }else{
                  msglen = 600 - msglen ;
                }
                console.log(msglen);
                const inmsg = "<div id='yourself' style='margin-right:"+msglen+"px;'"+ ">" +"<b>"+"@"+messages.usr+"</b>" +" "+ messages.msg + "</div>"+"<br>";
                document.getElementById("messages").innerHTML += inmsg;
            }
            
            //mesajları ekrana yazdırıyo
            
            
            
          });
    }else{
        alert("olmadı");
    }
    username = msg;
}

  

  document.getElementById("send-message").addEventListener("submit", postChat);
  function postChat(e) {
    e.preventDefault();
    var date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const chatTxt = document.getElementById("chat-txt");
    const message = chatTxt.value;
    chatTxt.value = "";
    db.ref("messages/" + hour + ":" +minute +":"+second+"  "+";"+"  "+username).set({
      usr: username,
      msg: message,
    });
  }


  


