Titanium.UI.currentWindow.setBackgroundColor('#000');

var id = Titanium.UI.currentWindow.id;
var name = Titanium.UI.currentWindow.name;

/* ============================
 * Content of the window
 * ============================ */

var label1 = Ti.UI.createLabel({
  text:name + "'s Inbox",
  top: 20,
  width: "75%",
  height: 32,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
  font:{fontSize:26,fontWeight:'bold'}
});

// table aanmaken
var table = Ti.UI.createTableView({
  top: 60
});

// Bij click op lijstitem de detailpagina openen
table.addEventListener("click", function(e) {
	
	var win = Titanium.UI.createWindow({
	url:'detail.js',
	backgroundColor:'000',
    from: e.rowData.from,
    to: e.rowData.to,
    subject: e.rowData.subject,
    message: e.rowData.message,
    date: e.rowData.date});
    win.title="Detail";
    win.open();
	
});

// Message request maken + verzenden
var overviewReq = Titanium.Network.createHTTPClient();  
overviewReq.open('GET','http://www.vhdesign.be/School/Mobiel/overview.php?username=' + name); 
overviewReq.send();

// Lijst opvullen
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

