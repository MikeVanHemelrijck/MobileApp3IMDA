var win=Titanium.UI.currentWindow
win.setBackgroundColor('#000');

/* ======================
 * Elements on the window
 * ====================== */

var lblName = Ti.UI.createLabel({
  text:'Name:',
  top: 10,
  width: "30%",
  height: 40, 
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left'
});

var txtName= Ti.UI.createTextField({
  top: 10,
  left: 100,
  width: "60%",
  font:{fontSize:11},
  height: 40,
  color: '#000',
  textAlign: 'left'
});

var lblDescription = Ti.UI.createLabel({
  text:'Description:',
  top: 50,
  width: "30%",
  height: 40,
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left'
});

var txtDescription= Ti.UI.createTextArea({
  top: 50,
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
var addTaskName;
var addPicture;
var addTaskContent;

// event listener to button
btnAdd.addEventListener('click', function(e){
	
	addName=txtName.value;
	addDescription=txtDescription.value;
	addPicture = "test";
	
//alert("http://esselenstanja2011.dreamhosters.com/mobiele/addTask.php?projectId="+projectId+"&taskName="+addTaskName+"&taskDeadline="+addTaskDeadlineYear+"-"+addTaskDeadlineMonth+"-"+addTaskDeadlineDay+"&personId="+addTaskPersonId+"&taskContent="+addTaskContent+"&taskImportant="+addTaskImportant); 
	
	/* ============================
	 * Call to save task
	 * ============================*/
	
	var overviewReq = Titanium.Network.createHTTPClient();  
	overviewReq.open('GET','http://www.vhdesign.be/School/Mobiel/additem.php?name='+addName+'&description='+addDescription+'&picture='+addPicture); 
	overviewReq.send();
	
	overviewReq.onload = function()  
	{  
	    var json = this.responseText;  
    	var response = JSON.parse(json);  
    	if (response.status == "true")  
	    {  
	    	alert("Task was saved.");    	
	    }  
	    else  
	    {  
	        alert("Task was not saved.");  
	    }

	    /* if (response.status == "true")  
	    {  
	    	alert("Task was saved.");    	
	    }  
	    else if (response.status == "false") 
	    {  
	        alert("Task was not saved.");  
	    }*/
	};
	
	overviewReq.onerror = function()  
	{ 
		alert("Could not connect to server."); 
	};
	
});

Titanium.UI.currentWindow.add(lblName);
Titanium.UI.currentWindow.add(txtName);
Titanium.UI.currentWindow.add(lblDescription);
Titanium.UI.currentWindow.add(txtDescription);
Titanium.UI.currentWindow.add(btnAdd);