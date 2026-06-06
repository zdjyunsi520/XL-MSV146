var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
	    //cm.EnableUI(1);
		cm.sendPlayerToNpc("呃……我在哪里？");
	} else if (status == 1) {
		cm.sendNextNoESC("你已经进入了OurStory的世界。");
	} else if (status == 2) {
		cm.sendPlayerToNpc("OurStory是什么？……是某种水果吗 ._.");
	} else if (status == 3) {
		cm.sendNextNoESC("呃不是。它不是水果，是一个在线网络游戏……");
	} else if (status == 4) {
		cm.sendPlayerToNpc("什么？！我在一个网络游戏里？！");
	} else if (status == 5) {
		cm.sendNextNoESC("o.o 我的天啊，冷静一点好吗，你又不会死什么的，只要你遵循一些简单的指引就没事了……");
	} else if (status == 6) {
		//cm.warp(180000001,0);
		cm.sendPlayerToNpc("让我猜猜……我得成为某种英雄然后#r 拯～～～救～～～世～～～界～～～");
	} else if (status == 7) {
		cm.sendNextNoESC("哈哈……是啊……\r\n\r\n\r\n\r\n #b 就在这时你听到了一声巨响");
	} else if (status == 8) {
		cm.sendPlayerToNpc("……！那是什么？！");
	} else if (status == 9) {
	    cm.EnableUI(1);
		cm.sendNextNoESC("嗯……我想现在是时候送你去另一个地方了，请去找我的一位朋友，他能更好地帮助你");
	} else if (status == 10) {
			cm.warp(910142060,0);
	//		cm.spawnMobOnPoint(1210104, 10, 55, 85);
	   cm.EnableUI(0);
		cm.dispose();
	}
}