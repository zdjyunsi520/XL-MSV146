
function action(mode, type, selection) {
    if (cm.getQuestStatus(6230) == 1) {
	if (!cm.haveItem(4031456)) {
	    if (cm.haveItem(4031476)) {
		if (cm.canHold(4031456)) {
		    cm.gainItem(4031456, 1);
		    cm.gainItem(4031476, -1);
		    cm.sendOk("枫叶被吸收进了闪闪发光的玻璃弹珠中。" );
		    cm.safeDispose();
		} else {
		    cm.sendOk("无法获得枫之弹珠，因为其他物品栏没有空位。请腾出空位后再试。" );
		    cm.safeDispose();
		}
	    } else {
		cm.dispose();
	    }
	} else {
	    cm.dispose();
	}
    } else {
	cm.dispose();
    }
}