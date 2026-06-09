var status; 
var item;
var cube;
var selected, selected2;

function start() { 
	cm.sendYesNo("好的。祝你在 #rViciousMS#k 玩得开心！");
} 

function action(mode, type, selection) { 
	selected = selection;
     if (mode != 1) {
        if (type == 1 && mode == 0) {
            cm.sendNext("选择你想要使用方块的道具：\r\n");
        }
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) { 
		cm.sendSimple("你想选择哪种方块？（注意我们会检查你选择的现金道具）：\r\n"+cm.EquipList(cm.getC());
		item = selected;
	} else if (status == 1) {
		cm.sendSimple("你想选择哪种方块？（注意我们会检查你选择的现金道具）：\r\n"+cm.CashList(cm.getC());
		cube = selected2;
	} else if (status == 2) {
		cm.doCube(item, cube);
		// to be continued
	} else {
		cm.dispose();
	}
}

function doCube() {
	cm.sendSimple("你想选择哪种方块？（注意我们会检查你选择的现金道具）：\r\n"+cm.EquipList(cm.getC());
	
}