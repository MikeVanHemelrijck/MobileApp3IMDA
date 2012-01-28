var win=Titanium.UI.currentWindow
win.setBackgroundColor('#000');

/* ======================
 * Elements on the window
 * ====================== */

var lblTo = Ti.UI.createLabel({
  text:'To:',
  top: 20,
  width: "30%",
  height: 20, 
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left'
});

var txtTo= Ti.UI.createTextField({
  top: 45,
  left: 5,
  width: "90%",
  font:{fontSize:11},
  height: 40,
  color: '#000',
  textAlign: 'left'
});
var lblSubject = Ti.UI.createLabel({
  text:'Subject:',
  top: 90,
  width: "30%",
  height: 20, 
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left'
});

var txtSubject= Ti.UI.createTextField({
  top: 115,
  left: 5,
  width: "90%",
  font:{fontSize:11},
  height: 40,
  color: '#000',
  textAlign: 'left'
});

var lblMessage = Ti.UI.createLabel({
  text:'Message:',
  top: 160,
  width: "30%",
  height: 20,
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left'
});

var txtMessage= Ti.UI.createTextArea({
  top: 185,
  left: 5,
  width: "90%",
  height: 120,
  font:{fontSize:11},
  color: '#000',
  textAlign: 'left'
});

var btnAdd = Ti.UI.createButton({
  title:"Send",
  top: 315,
  width: 80,
  height: 32,
  left: 5,
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
	
	addFrom=Titanium.UI.currentWindow.name;
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

Titanium.UI.currentWindow.add(lblTo);
Titanium.UI.currentWindow.add(txtTo);
Titanium.UI.currentWindow.add(lblSubject);
Titanium.UI.currentWindow.add(txtSubject);
Titanium.UI.currentWindow.add(lblMessage);
Titanium.UI.currentWindow.add(txtMessage);
Titanium.UI.currentWindow.add(btnAdd);