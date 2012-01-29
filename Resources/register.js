Titanium.UI.currentWindow.setBackgroundColor('#000');

var logo = Titanium.UI.createImageView({
	url: 'http://www.vhdesign.be/School/Mobiel/logo.jpg',
	width: 320,
	height: 61,
	top: 50,
})

var labelusername = Ti.UI.createLabel({
  text:"Username:",
  top: 180,
  left: 20,
  width: "30%",
  height: 25,
  color: '#fff',  
})
var txtUsername = Ti.UI.createTextField({
  height:45,
  top: 170,
  right: 25,
  width: "60%",
  color: '#000',
  textAlign: 'left',
  hintText : 'username',
  backgroundColor: '#fff',
  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
  keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
  returnKeyType:Titanium.UI.RETURNKEY_DEFAULT
})

var labelpassword = Ti.UI.createLabel({
  text:"Password:",
  top: 230,
  left: 20,
  width: "30%",
  height: 25,
  color: '#fff',
})

var txtPassword = Ti.UI.createTextField({
	height:45,
	top : 220,
	right: 25,
	width : '60%',
	hintText : 'password',
	color: '#000',
  	textAlign: 'left',
  	backgroundColor: '#fff',
  	passwordMask: true,
  	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
  	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT
});

var btnregister = Ti.UI.createButton({
  title:"Register",
  bottom: 80,
  width: '90%',
  height: 60,
  left: 15, 
})
var btnBack = Ti.UI.createButton({
  title:"Back",
  bottom: 20,
  width: '90%',
  height: 60,
  left: 15, 
})

// Registreer-request aanmaken
var loginReq = Titanium.Network.createHTTPClient();  

loginReq.onload = function()  
{  
    alert("Succesfully registered!");
    txtPassword.value="";
    txtUsername.value="";
    // Naar login gaan na het registreren
    var winLogin = Titanium.UI.createWindow({  
    backgroundColor:'#000',
    url:'login.js',
    });
    winLogin.open();
};
loginReq.onerror = function()  
{ 
	alert("Could not connect to server."); 
};

btnBack.addEventListener('click',function(e)  
{  
  Titanium.UI.currentWindow.close();
}); 
btnregister.addEventListener('click',function(e)
{
    if (txtUsername.value != '' && txtPassword.value != '')
    {
    // Registreer-request verzenden
       loginReq.open('GET','http://www.vhdesign.be/School/Mobiel/register.php?username='+txtUsername.value+'&password='+txtPassword.value);
       loginReq.send();
    }
    else
    {
        alert("Username/Password are required");
    }
}); 

Titanium.UI.currentWindow.add(logo);
Titanium.UI.currentWindow.add(btnregister);
Titanium.UI.currentWindow.add(btnBack);
Titanium.UI.currentWindow.add(txtPassword);
Titanium.UI.currentWindow.add(txtUsername);
Titanium.UI.currentWindow.add(labelpassword);
Titanium.UI.currentWindow.add(labelusername);


