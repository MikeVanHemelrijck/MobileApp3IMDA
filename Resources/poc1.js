var poc1Screen = Ti.UI.createView({
  layout: "portrait",
  height: "100%",
  width: "100%",
  backgroundColor : "#666",
  color: "#FFF",
  visible: "false",
});

var button1 = Ti.UI.createButton({
  title:"Back to homescreen",
  top: 20,
  width: "80%",
  height: 40,
  left: "10%",
})
button1.addEventListener('click', function(e){
  poc1Screen.hide();
  mainScreen.show();
})

poc1Screen.add(button1);
win.add(poc1Screen);
