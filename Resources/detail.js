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

var lblTo = Ti.UI.createLabel({
  text:"To: "+to,
  top: 20,
  height: 20,
  left: 5,
  width: "70%",
  font:{fontSize:14,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left',
})

var lblFrom = Ti.UI.createLabel({
  text:'From: ' + from,
  top: 60,
  width: "80%",
  height: 20,
  left: 5,
  font:{fontSize:12,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left',
})

var lblDate = Ti.UI.createLabel({
  text: "Date: "+ date,
  top: 85,
  width: "80%",
  height: 20,
  left: 5,
  fontSize:11,
  color: '#fff',
  textAlign: 'left',
})

var lblSubject = Ti.UI.createLabel({
  text: "Subject: "+subject,
  top: 120,
  width: "80%",
  left: 5,
  fontSize:11,
  color: '#fff',
  textAlign: 'left',
})
var lblMessage = Ti.UI.createLabel({
  text: "Message: "+message,
  top: 160,
  width: "80%",
  left: 5,
  fontSize:11,
  color: '#fff',
  textAlign: 'left',
})

Titanium.UI.currentWindow.add(lblTo);
Titanium.UI.currentWindow.add(lblFrom);
Titanium.UI.currentWindow.add(lblDate);
Titanium.UI.currentWindow.add(lblSubject);
Titanium.UI.currentWindow.add(lblMessage);