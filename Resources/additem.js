var win=Titanium.UI.currentWindow
win.setBackgroundColor('#000');

/* ======================
 * Elements on the window
 * ====================== */

var lblFrom = Ti.UI.createLabel({
  text:'From',
  top: 10,
  width: "30%",
  height: 40, 
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left'
});

var txtFrom= Ti.UI.createTextField({
  top: 10,
  left: 100,
  width: "60%",
  font:{fontSize:11},
  height: 40,
  color: '#000',
  textAlign: 'left'
});

var lblTo = Ti.UI.createLabel({
  text:'To',
  top: 70,
  width: "30%",
  height: 40, 
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left'
});

var txtTo= Ti.UI.createTextField({
  top: 70,
  left: 100,
  width: "60%",
  font:{fontSize:11},
  height: 40,
  color: '#000',
  textAlign: 'left'
});
var lblSubject = Ti.UI.createLabel({
  text:'Subject',
  top: 130,
  width: "30%",
  height: 40, 
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left'
});

var txtSubject= Ti.UI.createTextField({
  top: 130,
  left: 100,
  width: "60%",
  font:{fontSize:11},
  height: 40,
  color: '#000',
  textAlign: 'left'
});

var lblMessage = Ti.UI.createLabel({
  text:'Message:',
  top: 190,
  width: "30%",
  height: 40,
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left'
});

var txtMessage= Ti.UI.createTextArea({
  top: 190,
  left: 100,
  width: "60%",
  height: 60,
  font:{fontSize:11},
  color: '#000',
  textAlign: 'left'
});

var btnAdd = Ti.UI.createButton({
  title:"Add",
  bottom: 5,
  width: 50,
  height: 32,
  right: 3
});


/* ===================
 * save and sens
 * =================== */

// event listeners pickers
var addFrom;
var addTo;
var addSubject;
var addTaskMessage;

// event listener to button
btnAdd.addEventListener('click', function(e){
	
	addFrom=txtFrom.value;
	addTo=txtTo.value;
	addSubject=txtSubject.value;
	addMessage=txtMessage.value;
	
//alert("http://esselenstanja2011.dreamhosters.com/mobiele/addTask.php?projectId="+projectId+"&taskName="+addTaskName+"&taskDeadline="+addTaskDeadlineYear+"-"+addTaskDeadlineMonth+"-"+addTaskDeadlineDay+"&personId="+addTaskPersonId+"&taskContent="+addTaskContent+"&taskImportant="+addTaskImportant); 
	
	/* ============================
	 * Call to save task
	 * ============================*/
	
	var overviewReq = Titanium.Network.createHTTPClient();  
	overviewReq.open('GET','http://www.vhdesign.be/School/Mobiel/additem.php?From='+addFrom+'&To='+addTo+'&Subject='+addSubject+'&Message='+addMessage); 
	overviewReq.send();
	
	overviewReq.onerror = function()  
	{ 
		alert("Could not connect to server."); 
	};
	
});

Titanium.UI.currentWindow.add(lblFrom);
Titanium.UI.currentWindow.add(txtFrom);
Titanium.UI.currentWindow.add(lblTo);
Titanium.UI.currentWindow.add(txtTo);
Titanium.UI.currentWindow.add(lblSubject);
Titanium.UI.currentWindow.add(txtSubject);
Titanium.UI.currentWindow.add(lblMessage);
Titanium.UI.currentWindow.add(txtMessage);
Titanium.UI.currentWindow.add(btnAdd);