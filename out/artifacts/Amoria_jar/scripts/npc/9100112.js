var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getPlayer().getLevel() >= 51) {
	    cm.sendOk("你手上有一些#b转蛋券#k。\r\n你想试试运气吗？");
	    cm.dispose();
	} else if (cm.haveItem(5220000)) {
	    cm.sendYesNo("你身上一张票都没有。请先到百货商店购买票券后再来找我。谢谢。");
	} else {
	    cm.sendOk("你获得了#b#t");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var itemList = new Array(2370000, 2370001, 2370002, 2370003, 2370004, 2370005, 2370006, 2370007, 2370008, 2370009, 2370010, 2370011, 2370012);
	var item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);

	if (item != -1) {
	    cm.gainItem(5220000, -1);
	    cm.sendOk("请检查你的物品栏，看看是否有票券，或者物品栏是否已满。" + item + "##k.");
	} else {
	    cm.sendOk("请检查你的物品栏，看看是否有票券，或者物品栏是否已满。");
	}
	cm.safeDispose();
    }
}