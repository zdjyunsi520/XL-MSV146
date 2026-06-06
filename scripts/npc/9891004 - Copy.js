var status = 0;
var optionA = 1004042; // Hat #1
var optionB = 1004043; // Hat #2
var mapid = 90000009;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	   if (mode == 1 && status >= 0)
			status++;
	   else if (mode == 0 && status >= 0)
			cm.dispose();
	   else
			status--;
		if (status == 0) {
			cm.sendNext("选择你的新手帽子\r\n\r\n#L0##i");
		} else if (status == 1) {
			cm.sendSimple("# - 蓝色新手帽子(防御)#l\r\n#L1##i" + optionA + "# - 红色新手帽子(攻击)#l" + optionB + "给你，现在乘我身后的太空电梯吧，它会带你去一个叫银河自由市场的地方，出事了我再联系你");
		} else if (status == 2) {
			if (selection == 0) {
				cm.sendOk("给你，现在乘我身后的太空电梯吧，它会带你去一个叫银河自由市场的地方，出事了我再联系你");
				cm.gainItem(optionA, 1); 
				cm.warp(mapid, 0);
				cm.dispose();
			} else if (selection == 1) {
				cm.sendOk("给你，现在乘我身后的太空电梯吧，它会带你去一个叫银河自由市场的地方，出事了我再联系你");
				cm.gainItem(optionB, 1);
				cm.warp(mapid, 0);
				cm.dispose(); 
			}
		}
}