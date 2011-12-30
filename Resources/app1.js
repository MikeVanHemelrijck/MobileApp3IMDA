// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var win = Ti.UI.createWindow({
  title : "Lessius POC app",
  backgroundColor : "#FFF",
})

var mainScreen = Ti.UI.createView({
  layout: "portrait",
  height: "100%",
  width: "100%",
  backgroundColor : "333",
  color: "#FFF",
});

var label1 = Ti.UI.createLabel({
  text:"Select one of the following items to test its functionality",
  top: 20,
  width: "80%",
  height: 40,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
})

var button1 = Ti.UI.createButton({
  title:"List Test",
  top: 100,
  width: "80%",
  height: 40,
  left: "10%",
})
button1.addEventListener('click', function(e){
  mainScreen.hide();
  poc1Screen.show();
})

mainScreen.add(label1);
mainScreen.add(button1);
win.add(mainScreen);

//Including the POC files
Ti.include('poc1.js');

win.open();
