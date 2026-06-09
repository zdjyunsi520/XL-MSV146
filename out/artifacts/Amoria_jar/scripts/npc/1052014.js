var sel;
var status = -1;

function start() {
    cm.sendSimple("这里有你所有捕捉怪物用的球！\r\n#fUI/UIWindow.img/QuestIcon/4/0# \n\r  \n\r #b #L3#用300,000金币兑换1个基础球#l \r\n #L4#用600,000金币兑换1个超级球#l \r\n #L5#用1,200,000金币兑换1个终极球#l \r\n\r\n #L6#治愈莓果（5,000,000金币）#l \r\n #L7#解毒莓果（10,000,000金币）#l \r\n #L8#红色糖果（15,000,000金币）#l \r\n #L9#蓝色糖果（15,000,000金币）#l \r\n #L10#绿色糖果（15,000,000金币）#l \r\n #L11#黑色巧克力（20,000,000金币）#l \r\n #L12#白色巧克力（20,000,000金币）#l \r\n\r\n #L20#经验共享（永久）（75,000,000金币）#l \r\n #L21#不变石（永久）（25,000,000金币）#l#k");
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
	if (status == 0) {
	sel = selection;
	switch(sel) {
	    case 3: //points
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 300000) {
		    cm.sendOk("你至少需要300,000金币。");
		    cm.dispose();
	        } else {
		    cm.sendGetNumber("你想要多少个？（1个基础球 = 300,000金币）（当前金币： " + intPoints + "）（当前球数： " + cm.getPlayer().itemQuantity(3992017) + ")", 1, 1, intPoints / 300000);
	        }
		break;
	    case 4: //points
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 600000) {
		    cm.sendOk("你至少需要600,000金币。");
		    cm.dispose();
	        } else {
		    cm.sendGetNumber("你想要多少个？（1个超级球 = 600,000金币）（当前金币： " + intPoints + "）（当前球数： " + cm.getPlayer().itemQuantity(3992018) + ")", 1, 1, intPoints / 600000);
	        }
		break;
	    case 5: //points
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 1200000) {
		    cm.sendOk("你至少需要1,200,000金币。");
		    cm.dispose();
	        } else {
		    cm.sendGetNumber("你想要多少个？（1个终极球 = 1,200,000金币）（当前金币： " + intPoints + "）（当前球数： " + cm.getPlayer().itemQuantity(3992019) + ")", 1, 1, intPoints / 1200000);
	        }
		break;
	    case 6:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 5000000) {
		    cm.sendOk("你至少需要5,000,000金币。");
	        } else if (!cm.canHold(4140102,1)) {
		    cm.sendOk("请腾出空间。");
		} else {
		    cm.gainMeso(-5000000);
		    cm.gainItem(4140102, 1);
		}
		cm.dispose();
		break;
	    case 7:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 10000000) {
		    cm.sendOk("你至少需要10,000,000金币。");
	        } else if (!cm.canHold(4140101,1)) {
		    cm.sendOk("请腾出空间。");
		} else {
		    cm.gainMeso(-10000000);
		    cm.gainItem(4140101, 1);
		}
		cm.dispose();
		break;
	    case 8:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 15000000) {
		    cm.sendOk("你至少需要15,000,000金币。");
	        } else if (!cm.canHold(4032444,1)) {
		    cm.sendOk("请腾出空间。");
		} else {
		    cm.gainMeso(-15000000);
		    cm.gainItem(4032444, 1);
		}
		cm.dispose();
		break;
	    case 9:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 15000000) {
		    cm.sendOk("你至少需要15,000,000金币。");
	        } else if (!cm.canHold(4032445,1)) {
		    cm.sendOk("请腾出空间。");
		} else {
		    cm.gainMeso(-15000000);
		    cm.gainItem(4032445, 1);
		}
		cm.dispose();
		break;
	    case 10:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 15000000) {
		    cm.sendOk("你至少需要15,000,000金币。");
	        } else if (!cm.canHold(4032446,1)) {
		    cm.sendOk("请腾出空间。");
		} else {
		    cm.gainMeso(-15000000);
		    cm.gainItem(4032446, 1);
		}
		cm.dispose();
		break;
	    case 11:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 20000000) {
		    cm.sendOk("你至少需要20,000,000金币。");
	        } else if (!cm.canHold(4031110,1)) {
		    cm.sendOk("请腾出空间。");
		} else {
		    cm.gainMeso(-20000000);
		    cm.gainItem(4031110, 1);
		}
		cm.dispose();
		break;
	    case 12:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 20000000) {
		    cm.sendOk("你至少需要20,000,000金币。");
	        } else if (!cm.canHold(4031109,1)) {
		    cm.sendOk("请腾出空间。");
		} else {
		    cm.gainMeso(-20000000);
		    cm.gainItem(4031109, 1);
		}
		cm.dispose();
		break;
	    case 20:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 75000000) {
		    cm.sendOk("你至少需要75,000,000金币。");
	        } else if (!cm.canHold(3994185,1)) {
		    cm.sendOk("请腾出空间。");
		} else {
		    cm.gainMeso(-75000000);
		    cm.gainItem(3994185, 1);
		}
		cm.dispose();
		break;
	    case 21:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 25000000) {
		    cm.sendOk("你至少需要25,000,000金币。");
	        } else if (!cm.canHold(3800088,1)) {
		    cm.sendOk("请腾出空间。");
		} else {
		    cm.gainMeso(-25000000);
		    cm.gainItem(3800088, 1);
		}
		cm.dispose();
		break;
	}
	} else {
	    if (sel == 3) {
		var intPoints = cm.getPlayer().getMeso();
		if (selection >= 1 && selection <= (intPoints / 300000)) {
			if (selection > (intPoints / 300000)) {
				cm.sendOk("最多只能获得 " + (intPoints / 300000) + "。1个球 = 300,000金币。");
			} else if (!cm.canHold(3992017, selection)) {
				cm.sendOk("请在设置栏中腾出空间。");
			} else {
				cm.gainItem(3992017, selection);
				cm.gainMeso(-300000 * selection);
			}
		}
	    } else if (sel == 4) {
		var intPoints = cm.getPlayer().getMeso();
		if (selection >= 1 && selection <= (intPoints / 600000)) {
			if (selection > (intPoints / 600000)) {
				cm.sendOk("最多只能获得 " + (intPoints / 600000) + "。1个球 = 600,000金币。");
			} else if (!cm.canHold(3992018, selection)) {
				cm.sendOk("请在设置栏中腾出空间。");
			} else {
				cm.gainItem(3992018, selection);
				cm.gainMeso(-600000 * selection);
			}
		}
	    } else if (sel == 5) {
		var intPoints = cm.getPlayer().getMeso();
		if (selection >= 1 && selection <= (intPoints / 1200000)) {
			if (selection > (intPoints / 1200000)) {
				cm.sendOk("最多只能获得 " + (intPoints / 1200000) + "。1个球 = 1,200,000金币。");
			} else if (!cm.canHold(3992019, selection)) {
				cm.sendOk("请在设置栏中腾出空间。");
			} else {
				cm.gainItem(3992019, selection);
				cm.gainMeso(-1200000 * selection);
			}
		}
	    }
	    cm.dispose();
	}
    } else {
	cm.dispose();
    }
}