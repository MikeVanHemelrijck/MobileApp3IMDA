<<<<<<< HEAD
// Project ----------------------------------------------------------------------------------------
//TEST
    // Creates a tab group with Titanium.UI API.  
    var tabGroup = Titanium.UI.createTabGroup();  
      
    // Create the window "mainWin"  
    var mainWin = Titanium.UI.createWindow ({  
        title: "@mobtuts", // Set the title  
        backgroundColor: "#fff", // Set the background color to white  
        url: "tweets.js"// Link to file which will handle the code for the window  
    });  
      
    // Create the tab "mainTab"  
    var mainTab = Titanium.UI.createTab ({  
        title: "Twitter", // Title of the tab: "Twitter"  
        icon: "KS_nav_mashup.png", // Icon for tab, Included in the source files  
        window: mainWin // We will create the window "mainWin"  
    });  
      
    // Add the tab to our tab group  
    tabGroup.addTab(mainTab);  
    tabGroup.open();   
=======
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Intro',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var label1a = Titanium.UI.createLabel({
	color:'#999',
	text:'New label',
	font:{fontSize:12,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	top: 40 ,
	width:'auto'
});


win1.add(label1);
win1.add(label1a);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var winTest = Titanium.UI.createWindow({  
    backgroundColor:'000',
    url:'app1.js'
});

var btn = Titanium.UI.createButton({
	title:"Click me!",
	width:100,
	height:100,
	top:20
});
btn.addEventListener("click", function(e){
	// Alert(e.source + " was clicked");
	winTest.open();
});
win2.add(btn);
win2.add(label2);

var win3 = Titanium.UI.createWindow({  
    title:'Tab 3',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 3',
    window:win3
});

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 3',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win3.add(label3);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3); 

// open tab group
tabGroup.open();
>>>>>>> a83f77aebcd6e9b984d3dc4ecba63b64914deb7f
