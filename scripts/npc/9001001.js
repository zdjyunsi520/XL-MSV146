function start() {
    cm.sendSimple("#b\r\n#L0#甜蜜蛋糕山1#l\r\n#L1#甜蜜蛋糕山2#l#k");
}

function action(mode,type,selection) {
    if (mode == 1) { //or 931000400 + selection..?
	switch(selection) {
	    case 0:
		cm.warp(683000000,0);
		break;
	    case 1:
		cm.warp(684000000,0);
		break;
	}
    }
    cm.dispose();
}