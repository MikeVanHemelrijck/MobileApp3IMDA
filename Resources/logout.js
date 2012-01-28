// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var name = Titanium.UI.currentWindow.name;

var logo = Titanium.UI.createImageView({
	url: 'http://www.vhdesign.be/School/Mobiel/logo.jpg',
	width: 320,
	height: 61,
	top: 50,
})

var lblFeedback = Ti.UI.createLabel({
  text:'Hi, '+ name + '. Are you sure you want to log out?',
  top: 150,
  width: "90%",
  height: 60,
  left: 15,
  font:{fontSize:18,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'center',
})

var btnBack = Ti.UI.createButton({
  title:"Yes, log out",
  top:230,
  width: '90%',
  height: 60,
  left: 15,
});

btnBack.addEventListener('click', function(e){
  Titanium.UI.currentWindow.close();
});

Titanium.UI.currentWindow.add(logo);
Titanium.UI.currentWindow.add(lblFeedback);
Titanium.UI.currentWindow.add(btnBack);