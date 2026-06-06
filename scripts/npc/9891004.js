var status = 0;
var optionA = 1004042; // Hat #1
var optionB = 1004043; // Hat #2
var mapid = 90000009;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	   if (mode == 1)
			status++;
	   else
			status--;
		if (status == 0) {
			if (cm.haveItem(optionA, 1, true, true)) {
				cm.getPlayer().unequipStarter();
				cm.removeAll(optionA);
			} else if (cm.haveItem(optionB, 1, true, true)) {
				cm.getPlayer().unequipStarter();
				cm.removeAll(optionB);
			}
			cm.sendNext("选择你的新手帽子\r\n\r\n#L0##i");
		} else if (status == 1) {
			cm.sendSimple("# - 蓝色新手帽子(防御)#l\r\n#L1##i" + optionA + "# - 红色新手帽子(攻击)#l" + optionB + "给你。当你有需要时我一定会再联系你的。现在，看到我身后的电梯了吗？乘坐它就能到达银河自由市场。今天是一个特殊的日子，一个全新开始的日子。你是拥抱光明还是被黑暗吞噬？你的旅程现在开始！");
		} else if (status == 2) {
			if (selection == 0) {
				cm.sendOk("给你。当你有需要时我一定会再联系你的。现在，看到我身后的电梯了吗？乘坐它就能到达银河自由市场。今天是一个特殊的日子，一个全新开始的日子。你是拥抱光明还是被黑暗吞噬？你的旅程现在开始！");
				cm.gainItem(optionA, 1); 
			} else if (selection == 1) {
				cm.sendOk("给你。当你有需要时我一定会再联系你的。现在，看到我身后的电梯了吗？乘坐它就能到达银河自由市场。今天是一个特殊的日子，一个全新开始的日子。你是拥抱光明还是被黑暗吞噬？你的旅程现在开始！");
				cm.gainItem(optionB, 1);
			}
		} else if (status == 3) {
			cm.warp(mapid, 0);
			cm.dispose();
		}
}