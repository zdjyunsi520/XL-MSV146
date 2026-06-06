function start() {
    cm.sendYesNo("你想回去吗？");
}

function action(mode,type,selection) {
    if (mode == 1) {
	var map = cm.getSavedLocation("CHRISTMAS");
	if (map > -1 && map != cm.getMapId()) {
		cm.warp(map, 0);
	} else {
    		cm.warp(100000000, 0);
	}
    }
    cm.dispose();
}