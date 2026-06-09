/*
	Konpei - Showa Town(801000000)
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
    } else {
	if (mode == 1)
	    status++;
	if (status == 0) {
	    cm.sendSimple ("据我们了解，如果没有使用宾服装备，就无法伤害Boss的手下，因为它是专门针对他们弱点而制作的。遗憾的是，获得这件装备的唯一方法是在#b访客组队任务#k中进行#r装备挑战#k");
	} else if (status == 1) {
	    if (selection == 0) {
		cm.sendNext("哦，勇敢的人啊。我一直在等你到来。如果这些\r\n恶棍不被制止，谁能知道这个社区将会\r\n发生什么事。在那之前，我希望\r\n你能消灭他们并打败住在5楼的Boss。\r\n你需要时刻保持警惕，因为\r\n即使是智者也无法对付这个Boss。\r\n不过，看着你的眼睛，我看到了\r\n虎一般的目光，那双眼睛告诉我你能做到。走吧！");
	    } if (selection == 1) {
		cm.dispose();
		//cm.sendNext("去你的？！你就只会说去你的吗？人命关天啊兄弟，帮帮忙吧");
		cm.openNpc(9250132);
	    } if (selection == 2) {
		cm.sendOk("带我去#b访客组队任务#k，让我弄些打外星人的装备！");
	    } if (selection == 3) {
		cm.sendOk("这些是你可以获得的装备！ \r\n\r\n#i1003893##z1003893#\r\n#i1032191##z1032191#\r\n#i1113038##z1113038#\r\n#i1122256##z1122256#\r\n#i1132230##z1132230#");
	    }
        if (selection == 4) {
		cm.sendOk("这些是你可以获得的装备！ \r\n\r\n#i1003893##z1003893#\r\n#i1032191##z1032191#\r\n#i1113038##z1113038#\r\n#i1122256##z1122256#\r\n#i1132230##z1132230#");
	    }		if(selection != 1) {
		cm.dispose();
	    }
	} else if (status == 2) {
	    cm.warp(801040000, 0);
	    cm.dispose();
	}
    }
}