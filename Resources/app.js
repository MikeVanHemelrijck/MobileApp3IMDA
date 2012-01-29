// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// Meteen naar loginscherm gaan
var win = Titanium.UI.createWindow({url:'login.js'});
    win.title="Login";
    win.open();
