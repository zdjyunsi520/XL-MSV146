var status = -1;

var exchangeItem = 4000439;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
        cm.sendSimple("我的名字是佩尔根，我是这一带最强的魔法师。#b\r\n#L0#嘿，拿这些碎石去。你可以用它们来施展魔法。#l");
    } else if (status == 1) {
	if (!cm.haveItem(exchangeItem, 100)) {
	    cm.sendNext("你带的不够……我至少需要100个。");
	    cm.dispose();
	} else {
	    cm.sendGetNumber("嘿，好主意！每100个#i" + exchangeItem + "##t" + exchangeItem + "#我可以给你一个#i4310000#完美音高。你想要多少个？（当前物品： " + cm.getPlayer().itemQuantity(exchangeItem) + ")", java.lang.Math.min(300, cm.getPlayer().itemQuantity(exchangeItem) / 100), 1, java.lang.Math.min(300, cm.getPlayer().itemQuantity(exchangeItem) / 100));
	}
    } else if (status == 2) { 
	if (selection >= 1 && selection <= cm.getPlayer().itemQuantity(exchangeItem) / 100) {
	    if (!cm.canHold(4310000, selection)) {
		cm.sendOk("请在其他栏腾出空间。");
	    } else {
		cm.gainItem(4310000, selection);
		cm.gainItem(exchangeItem, -(selection * 100));
		cm.sendOk("谢谢！");
	    }
	}
        cm.dispose();
    }
}