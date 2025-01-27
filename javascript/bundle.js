var gui = require('nw.gui');
var win = gui.Window.get();

var menuBar = new gui.Menu({type:"menubar"});
//menuBar.createMacBuiltin("NW.js Demo");
win.menu = menuBar;

var developMenu = new gui.Menu();
var developToggleitem = new gui.MenuItem({
    label: 'Toggle Dev Tools',
    click: function() {
        if (win.isDevToolsOpen())
            win.closeDevTools();
        else
            win.showDevTools();
    }
});

developMenu.append(developToggleitem);
win.menu.append(new gui.MenuItem({
    label: 'Develop',
    submenu: developMenu
}));

/*
// Main Scripts

    var dereja_menu = new nw.Menu({ type: 'menubar' });
    var submenu = new nw.Menu();
        submenu.append(new nw.MenuItem({ label: 'Home', click: function () {  nw.Window.open('app/frontend/app_view.html');  }}));
        submenu.append(new nw.MenuItem({ label: 'Quit', click: function () {
                    nw.App.quit();
                } }));

            var submenuedit = new nw.Menu();
                submenuedit.append(new nw.MenuItem({ label: 'Copy' }));
                submenuedit.append(new nw.MenuItem({ label: 'Paste' }));
                submenuedit.append(new nw.MenuItem({ label: 'Select All' }));
                submenuedit.append(new nw.MenuItem({ label: 'Print' }));

            var submenuview = new nw.Menu();
                submenuview.append(new nw.MenuItem({ label: 'Refresh' }));
                submenuview.append(new nw.MenuItem({ label: 'Zoom +' }));
                submenuview.append(new nw.MenuItem({ label: 'Zoom -' }));

            var submenuhelp = new nw.Menu();
                submenuhelp.append(new nw.MenuItem({ label: 'User Guide' }));
                submenuhelp.append(new nw.MenuItem({ label: 'Check for Update' }));
                submenuhelp.append(new nw.MenuItem({ label: 'License' }));
                submenuhelp.append(new nw.MenuItem({ label: 'About Dereja M&E' }));
                submenuhelp.append(new nw.MenuItem({ label: 'Developer Menu' }));    
                
        // the menu item appended should have a submenu
        dereja_menu.append(new nw.MenuItem({
            label: 'File', 
            submenu: submenu
        }));
        
        dereja_menu.append(new nw.MenuItem({
                label: 'Edit',
                submenu: submenuedit
            }));
        dereja_menu.append(new nw.MenuItem({
        label: 'View',
        submenu: submenuview
    }));
        dereja_menu.append(new nw.MenuItem({
        label: 'Help',
        submenu: submenuhelp
    }));
        nw.Window.get().menu = dereja_menu;
        win.menu = dereja_menu;


// RIGHT CLICK ACTION SCRIPT

	<style type="text/css">
		.context-menu {
			position: absolute;
			text-align: center;
			background: lightgray;
			border: 1px solid black;
		}

		.context-menu ul {
			padding: 0px;
			margin: 0px;
			min-width: 150px;
			list-style: none;
		}

		.context-menu ul li {
			padding-bottom: 7px;
			padding-top: 7px;
			border: 1px solid black;
		}

		.context-menu ul li a {
			text-decoration: none;
			color: black;
		}

		.context-menu ul li:hover {
			background: darkgray;
		}
	</style>

	<div id="contextMenu" class="context-menu"
		style="display:none">
		<ul>
			<li><a href="#">Element-1</a></li>
			<li><a href="#">Element-2</a></li>
			<li><a href="#">Element-3</a></li>
			<li><a href="#">Element-4</a></li>
			<li><a href="#">Element-5</a></li>
			<li><a href="#">Element-6</a></li>
			<li><a href="#">Element-7</a></li>
		</ul>
	</div>

	<script>
		document.onclick = hideMenu;
		document.oncontextmenu = rightClick;

		function hideMenu() {
			document.getElementById(
				"contextMenu").style.display = "none"
		}

		function rightClick(e) {
			e.preventDefault();

			if (document.getElementById(
				"contextMenu").style.display == "block")
				hideMenu();
			else {
				var menu = document
					.getElementById("contextMenu")
					
				menu.style.display = 'block';
				menu.style.left = e.pageX + "px";
				menu.style.top = e.pageY + "px";
			}
		}
	</script>
    //RIGHT CLICK ACTION SCRIPT



    //CONTEXT MENU SCRIPT

    (function() {
  var gui = require("nw.gui");
  
  var menu = new gui.Menu;
  
  menu.append(new gui.MenuItem({
    label: "Cut",
    click: function() {
      document.execCommand("cut");
    }
  }));
  
  menu.append(new gui.MenuItem({
    label: "Copy",
    click: function() {
      document.execCommand("copy");
    }
  }));
  
  menu.append(new gui.MenuItem({
    label: "Paste",
    click: function() {
      document.execCommand("paste");
    }
  }));
  
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target.isContentEditable) {
      menu.popup(e.x, e.y);
    }
  });
}());

// CONTEXT MENU END

*/