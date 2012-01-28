Titanium.UI.currentWindow.setBackgroundColor('#000');

/* =======================================
 * Data from project.js as currentWindow
 * ======================================= */

var from = Titanium.UI.currentWindow.from;
var to = Titanium.UI.currentWindow.to;
var message = Titanium.UI.currentWindow.message;
var subject = Titanium.UI.currentWindow.subject;
var date = Titanium.UI.currentWindow.date;

Titanium.UI.currentWindow.title=subject;

/* =======================================
 * window elements
 * ======================================= */

var lblFrom = Ti.UI.createLabel({
  text:'Message from: ' + from,
  top: 10,
  width: "90%",
  height: 30,
  left: 15,
  font:{fontSize:18,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left',
})

var lblDate = Ti.UI.createLabel({
  text: "on: "+ date,
  top: 45,
  width: "80%",
  height: 20,
  left: 15,
  fontSize:10,
  color: '#fff',
  textAlign: 'left',
})

var lblSubject = Ti.UI.createLabel({
  text: "Subject: "+subject,
  top: 100,
  width: "90%",
  left: 15,
  fontSize:14,
  color: '#fff',
  textAlign: 'left',
})
var lblMessagetitle = Ti.UI.createLabel({
  text: "Message:",
  top: 145,
  width: "80%",
  left: 15,
  fontSize:11,
  color: '#fff',
  textAlign: 'left',
  font:{fontSize:14,fontWeight:'bold'}	
})
var lblMessage = Ti.UI.createLabel({
  text: message,
  top: 170,
  width: "85%",
  left: 15,
  fontSize:11,
  color: '#fff',
  textAlign: 'left',
})
var btnBack = Ti.UI.createButton({
  title:"Back to Inbox",
  bottom: 20,
  width: '90%',
  height: 60,
  left: 15,
});

btnBack.addEventListener('click', function(e){
  var winInbox = Titanium.UI.createWindow({  
    backgroundColor:'000',
    url:'overview.js',
    name: from
  });
  winInbox.open();
});

Titanium.UI.currentWindow.add(lblFrom);
Titanium.UI.currentWindow.add(lblDate);
Titanium.UI.currentWindow.add(lblSubject);
Titanium.UI.currentWindow.add(lblMessagetitle);
Titanium.UI.currentWindow.add(lblMessage);
Titanium.UI.currentWindow.add(btnBack);