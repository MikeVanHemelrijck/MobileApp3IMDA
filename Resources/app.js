// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var startWindow = Titanium.UI.createWindow({
    backgroundColor:'#000000',
    title: 'Startwindow'
});

startWindow.open();

var btnRegister = Ti.UI.createButton({
  title:"Register",
  top: 170,
  width: "80%",
  height: 40,
  left: "10%",
  font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
})

var btnLogin = Ti.UI.createButton({
  title:"Login",
  top: 120,
  width: "80%",
  height: 40,
  left: "10%",
  font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
})

btnRegister.addEventListener('click', function(e){
var winRegister = Titanium.UI.createWindow({
    backgroundColor:'000',
    url:'register.js'
});
  winRegister.open();
});

btnLogin.addEventListener('click', function(e){
var winRegister = Titanium.UI.createWindow({
    backgroundColor:'000',
    url:'login.js'
});
  winRegister.open();
});

startWindow.add(btnRegister);
startWindow.add(btnLogin);