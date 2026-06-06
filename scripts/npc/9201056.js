/*
	NLC Taxi
*/

var status = 0;
var goToMansion = false;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 2 && mode == 0) {
	cm.sendOk("去哪里，老板？ \r\n#L0#新叶城#l\r\n#L1#鬼屋#l");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == -1) {
	cm.dispose();
    }
    else if (cm.getMapId() == 682000000) {
	if (status == 0) {
	    cm.sendSimple ("你想去新叶城吗？");
	}
	else if (status == 1) {
	    if (selection == 0) {
		goToMansion = false;
		cm.sendYesNo ("你确定要进入鬼屋吗？");
	    } else {
		goToMansion = true;
		cm.sendYesNo ("你想去鬼屋吗？");
	    }
	}
	else if (status == 2) {
	    var map;
	    if (goToMansion){
		map = 682000100;
	    } else {
		map = 600000000;
	    }
	    cm.warp (map, 0);
	    cm.dispose();
	}
    }
	
    else {
	if (status == 0){
	    cm.sendYesNo ("你想去鬼屋吗？");
	}	else if (status == 1){
	    cm.sendNext ("去哪里，老板？ \r\n#L0#新叶城#l\r\n#L1#鬼屋#l");
	} else if (status == 2) {
	    cm.warp (682000000, 0);
	    cm.dispose();
					
	}
    }
}