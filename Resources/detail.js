Titanium.UI.currentWindow.setBackgroundColor('#000');

/* =======================================
 * Data from overview.js as currentWindow
 * ======================================= */

var id = Titanium.UI.currentWindow.id;

/* ============================
 * Content of the window
 * ============================ */

var label1 = Ti.UI.createLabel({
  text:"Projects overview",
  top: 20,
  width: "80%",
  height: 32,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
});


var table = Ti.UI.createTableView({
  top: 80,
});


/* ============================
 * Tabs and functionality 
 * ============================ */

table.addEventListener("click", function(e) {
	
var tabGroup = Titanium.UI.createTabGroup({id:'tabGroup1'});

  var winRegister = Titanium.UI.createWindow({  
    url:'register.js',
    backgroundColor:'000'
  });

  var tab1 = Titanium.UI.createTab({
	id:'tab1',
	title:'Register',
	window:winRegister
  });
  var tab2 = Titanium.UI.createTab({
	id:'tab2',
	title:'Register',
	window:winRegister
  });

  tabGroup.addTab(tab1);
  tabGroup.addTab(tab2);

  tabGroup.setActiveTab(0);
  tabGroup.open();

});


var btnloguit = Ti.UI.createButton({
  title:"log uit",
  top: 20,
  width: 50,
  height: 32,
  left: 3,
});

btnloguit.addEventListener('click', function(e){
  var winLogin = Titanium.UI.createWindow({  
    backgroundColor:'000',
    url:'login.js'
  });
  winLogin.open();
});

var overviewReq = Titanium.Network.createHTTPClient();  
overviewReq.open('GET','http://www.vhdesign.be/School/Mobiel/overview.php'); 
overviewReq.send();

overviewReq.onload = function()  
{  
    var json = this.responseText; 
    var response = JSON.parse(json); 
    if (response.status == "true")  
    {  
    	var rows = [];
		
		for(var i = 1; i < (response.length + 1); i++)
		{
				var row = Titanium.UI.createTableViewRow({
					className: 'table1Class',
					title: response.title[i],
					id: response.id[i],
					description: response.description[i],
					picture: response.picture[i]
				});
				rows.push(row);
		}
		table.setData(rows);
    }  
    else  
    {  
        alert("response.content");  
    }
};

overviewReq.onerror = function()  
{ 
	alert("Could not connect to server."); 
};

Titanium.UI.currentWindow.add(label1);
Titanium.UI.currentWindow.add(table);
Titanium.UI.currentWindow.add(btnloguit);

