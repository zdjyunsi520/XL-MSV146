function action(mode, type, selection) {
    if (cm.haveItem(1002971,1) && cm.canHold(1052202,1) && !cm.haveItem(1052202,1)) {
	cm.gainItem(1052202,1);
    } else {
    	cm.sendOk ("如果你带来粉色豆豆帽并且有空位，如果你还没有粉色豆豆套服的话，你将获得粉色豆豆套服。");
    }
    cm.safeDispose();
}