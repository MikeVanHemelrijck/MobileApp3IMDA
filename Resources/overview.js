Titanium.UI.currentWindow.setBackgroundColor('#000');

/* =======================================
 * Data from overview.js as currentWindow
 * ======================================= */

var id = Titanium.UI.currentWindow.id;
var name = Titanium.UI.currentWindow.name;

/* ============================
 * Content of the window
 * ============================ */

var label1 = Ti.UI.createLabel({
  text:"Inbox",
  top: 20,
  width: "80%",
  height: 32,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
  font:{fontSize:26,fontWeight:'bold'}
});


var table = Ti.UI.createTableView({
  top: 60
});

table.addEventListener("click", function(e) {
	
var tabGroup = Titanium.UI.createTabGroup({id:'tabGroupMain'});

  var winDetail = Titanium.UI.createWindow({  
    url:'detail.js',
    backgroundColor:'000',
    from: e.rowData.from,
    to: e.rowData.to,
    subject: e.rowData.subject,
    message: e.rowData.message,
    date: e.rowData.date
  });
  var winAdditem = Titanium.UI.createWindow({  
    url:'additem.js',
    backgroundColor:'000',
    name: name
  });

  var tab1 = Titanium.UI.createTab({
	id:'tab1',
	title:'Detail',
	window:winDetail
  });
  var tab2 = Titanium.UI.createTab({
	id:'tab2',
	title:'Add item',
	window:winAdditem
  });

  tabGroup.addTab(tab1);
  tabGroup.addTab(tab2);

  tabGroup.setActiveTab(0);
  tabGroup.open();

});

var overviewReq = Titanium.Network.createHTTPClient();  
overviewReq.open('GET','http://www.vhdesign.be/School/Mobiel/overview.php?username=' + name); 
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
					title: 'From: ' + response.message_from[i] + "  -  " + response.subject[i],
					id: response.id[i],
					message: response.message[i],
					subject: response.subject[i],
					date: response.date[i],
					from: response.message_from[i],
					to: response.message_to[i]
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

