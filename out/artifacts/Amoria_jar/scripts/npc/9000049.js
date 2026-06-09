/*
	Fairy Tale Fairy Crackers - Every Town()
*/

var fromWitch = false;

function start() {
    if (cm.getMapId() == 980040000) {
	fromWitch = true;
	cm.sendSimple("#b（嗯...所以如果碰到移动的饼干墙或上升的巧克力，你就会被弹出去...）#k 咦？你是谁？是哪只猫告诉你这里能找到宝藏的？嗯，好吧。既然你都到这里了，不妨试试看。你想挑战哪个难度？...\r\n\r\n#b#L0# #v03994115##l #L1# #v03994116##l #L2# #v03994117##l");
    } else {
	cm.sendSimple("嘿，你是谁？你是...那些想从这里偷宝藏的忍者吗？\r\n #L0##b宝藏？#l \r\n #L1##b（偷偷地）前往魔女之塔#k#l");
    }
}

function action(mode, type, selection) {
    if (!fromWitch) {
	switch (selection) {
	    case 0:
		cm.sendOk("宝...宝藏？谁...谁说的？你觉得我会告诉你，魔女用粉色豆豆花做的粉色豆豆花帽子长这样 #v01002971:# 可以在通关普通或困难模式5次后获得，粉色豆豆花套装长这样 #v01052202:# 可以在获得粉色豆豆花帽子后通过魔女之塔入口右上角的传送门进入墓地获得吗？才怪！..");
		break;
	    case 1:
		cm.warp(980040000, 0);
		break;
	}
    } else {
	switch (selection) {
	    case 0: {
		var dh = cm.getEventManager("WitchTower_EASY");
		dh.newInstance(cm.getName()).registerPlayer(cm.getPlayer());
		break;
	    }
	    case 1: {
		var aa = cm.getEventManager("WitchTower_Med");
		aa.newInstance(cm.getName()).registerPlayer(cm.getPlayer());
		break;
	    }
	    case 2: {
		var dd = cm.getEventManager("WitchTower_Hard");
		dd.newInstance(cm.getName()).registerPlayer(cm.getPlayer());
		break;
	    }
	}
    }
    cm.dispose();
}