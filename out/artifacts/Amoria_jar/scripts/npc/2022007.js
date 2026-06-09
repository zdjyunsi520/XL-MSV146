function action(mode, type, selection) {
    if (!cm.haveItem(4032649)) {
	cm.sendNext("你需要空瓶子来装古代冰川水。");
    } else {
	cm.gainItem(4032649, -1);
	cm.gainItem(2022698, 1);
    }
    cm.dispose();
}