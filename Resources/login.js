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

var btnlogin = Ti.UI.createButton({
  title:"Login",
  bottom: 80,
  width: '90%',
  height: 60,
  left: 15, 
})
var btnregister = Ti.UI.createButton({
  title:"Create account",
  bottom: 20,
  width: '90%',
  height: 60,
  left: 15, 
})

var loginReq = Titanium.Network.createHTTPClient();  

loginReq.onload = function()  
{  
    var json = this.responseText;  
    var response = JSON.parse(json);  
    if (response.status == true)  
    {  
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

btnregister.addEventListener('click',function(e)  
{ 
	var winReg = Titanium.UI.createWindow({  
    backgroundColor:'#000',
    url:'register.js',
  });
  winReg.open();
});

Ti.App.addEventListener('gotoOverview', function(event)  
{   
  
  var tabGroup = Titanium.UI.createTabGroup({id:'tabGroupMain'});

  var winInbox = Titanium.UI.createWindow({  
    url:'overview.js',
    backgroundColor:'#000',
    name: event.name
  });
  var winAdditem = Titanium.UI.createWindow({  
    url:'additem.js',
    backgroundColor:'#000',
    name: event.name
  });
  var winBack = Titanium.UI.createWindow({  
    url:'logout.js',
    backgroundColor:'#000',
    name: event.name
  });

  var tab1 = Titanium.UI.createTab({
	id:'tab1',
	title:'Inbox',
	window:winInbox
  });
  var tab2 = Titanium.UI.createTab({
	id:'tab2',
	title:'New Msg',
	window:winAdditem
  });
  var tab3 = Titanium.UI.createTab({
	id:'tab2',
	title:'Log out',
	window:winBack
  });

  tabGroup.addTab(tab1);
  tabGroup.addTab(tab2);
  tabGroup.addTab(tab3);

  tabGroup.setActiveTab(0);
  tabGroup.open();

}); 

Titanium.UI.currentWindow.add(btnlogin);
Titanium.UI.currentWindow.add(btnregister);
Titanium.UI.currentWindow.add(txtUsername);
Titanium.UI.currentWindow.add(txtPassword);
Titanium.UI.currentWindow.add(labelpassword);
Titanium.UI.currentWindow.add(labelusername);
Titanium.UI.currentWindow.add(logo);


