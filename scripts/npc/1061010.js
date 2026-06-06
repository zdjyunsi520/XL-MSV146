function start() {
    cm.sendYesNo("你可以使用闪耀水晶回到现实世界。你确定要回去吗？");
}

function action(mode, type, selection) {
    if (mode == 1) {
	var map = cm.getMapId();
	var tomap;

	if (map == 108010101) {
	    tomap = 100000000;
	} else if (map == 108010201) {
	    tomap = 101000000;
	} else if (map == 108010301) {
	    tomap = 102000000;
	} else if (map == 108010401) {
	    tomap = 103000000;
	} else if (map == 108010501) {
	    tomap = 120000000;
	} else if (map == 910540100) {
	    tomap = 211000001;
		}
	cm.warp(211000001);
    }
    cm.dispose();
}