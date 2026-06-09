var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    var em = cm.getEventManager("Amoria");
    if (em == null) {
	cm.dispose();
	return;
    }
    switch(cm.getMapId()) {
	case 670010500:
	    if (!cm.isLeader()) {
		cm.sendOk("跑！往右边跑！逃命吧！");
		cm.dispose();
		return;
	    }
	    if (cm.haveItem(4031597,30)) {
		cm.mapMessage(6, "我要你和你的队伍给我收集30个丘比特密码碎片！");
	    	cm.warpParty(670010600);
		cm.gainItem(4031597,-30);

	    } else {
	    	cm.sendOk("我需要从盖斯特巴洛格那里得到盖斯特之牙...");
	    }
	    cm.dispose();
	    break;
	case 670010600:
	    if (!cm.isLeader()) {
		cm.sendOk("跑！往右边跑！逃命吧！");
		cm.dispose();
		return;
	    }
	    cm.warpParty(670010700);
	    cm.dispose();
	    break;
	case 670010700:
	    if (!cm.isLeader()) {
		cm.sendOk("跑！往右边跑！逃命吧！");
		cm.dispose();
		return;
	    }
	    if (em.getProperty("apq4").equals("0") || em.getProperty("apq4").equals("1")) {
	    	cm.warpParty(670010700,18);
	    	cm.spawnMob(9400536,1,674,511);
		em.setProperty("apq4", "2");
	    } else {
		if (cm.haveItem(4031594,1)) {
		    cm.gainItem(4031594,-1);
		    cm.warpParty(670010800, -1);
		} else {
		    cm.sendOk("我需要从盖斯特巴洛格那里得到盖斯特之牙...");
		}
	    }
	    cm.dispose();
	    break;
    }
}