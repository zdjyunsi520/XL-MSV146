var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendPlayerToNpc("她是谁？");
	} else if (status == 1) {
		cm.sendNextNoESC("...");
	} else if (status == 2) {
		cm.sendPlayerToNpc("我感觉..我好像认识她？");
	} else if (status == 3) {
		cm.sendNextNoESC("...");
	} else if (status == 4) {
		cm.sendPlayerToNpc("啊威尔来了！快醒醒！");
	} else if (status == 5) {
		cm.sendNextNoESC("...");
	} else if (status == 6) {
		cm.sendPlayerToNpc("求你了？");
	} else if (status == 7) {
	    cm.showZeroScene();
		cm.warp(320000000);
				cm.changeJob(10100);
		cm.changeJob(10110);
		cm.changeJob(10111);
		cm.changeJob(10112);
		cm.sendNextNoESC("#b你现在可以使用 @MirrorNPC 命令与切洛对话，或者随时在零之神殿找到他");

		//cm.warp(910150001,0);
		cm.dispose();
	}
}