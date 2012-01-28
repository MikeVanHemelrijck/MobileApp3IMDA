Titanium.UI.currentWindow.setBackgroundColor('#000');

var lblWelcome = Ti.UI.createLabel({
  text:"Welcome to TextPawn",
  top: 12,
  width: "80%",
  height: 30,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
})

var labelusername = Ti.UI.createLabel({
  text:"Username:",
  top: 60,
  left: 30,
  width: "30%",
  height: 25,
  color: '#fff',  
})

var txtUsername = Ti.UI.createTextField({
  height:45,
  top: 50,
  left: 120,
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
  top: 110,
  left: 30,
  width: "30%",
  height: 25,
  color: '#fff',
})

var txtPassword = Ti.UI.createTextField({
	height:45,
	top : 100,
	left : 120,
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

var btnlogin = Ti.UI.createButton({
  title:"login",
  top: 170,
  width: "80%",
  height: 40,
  left: "10%",
  font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
})

var loginReq = Titanium.Network.createHTTPClient();  

loginReq.onload = function()  
{  
    var json = this.responseText;  
    var response = JSON.parse(json);  
    if (response.status == true)  
    {  
        alert("Welcome " + response.name + ", your id is:" +response.id);
        txtUsername.blur();  
        txtPassword.blur();  
        Ti.App.fireEvent('gotoOverview', {  
            name:response.name,  
            id:response.id 
        });
    }  
    else if (response.status == false)  
    {  
    	alert("mislukt");
       // alert(response.message);  
    }  
};
loginReq.onerror = function()  
{ 
	alert("Could not connect to server."); 
};
btnlogin.addEventListener('click',function(e)  
{  
    if (txtUsername.value != '' && txtPassword.value != '')  
    {         
       loginReq.open('GET','http://www.vhdesign.be/School/Mobiel/login.php?username='+txtUsername.value+'&password='+txtPassword.value); 
       loginReq.send();
    }  
    else  
    {  
        alert("Username/Password are required");  
    }  
}); 

Ti.App.addEventListener('gotoOverview', function(event)  
{   
    var win = Titanium.UI.createWindow({url:'overview.js',
    name:event.name});
    win.title="Welcome, "+event.name;
    win.id=event.id;
    win.open();
}); 

Titanium.UI.currentWindow.add(lblWelcome);
Titanium.UI.currentWindow.add(btnlogin);
Titanium.UI.currentWindow.add(txtPassword);
Titanium.UI.currentWindow.add(txtUsername);
Titanium.UI.currentWindow.add(labelpassword);
Titanium.UI.currentWindow.add(labelusername);


