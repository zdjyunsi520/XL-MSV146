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
		cm.sendPlayerToNpc("啊..你就是新来的，仔细听着，有人不知怎的移动了黑魔法师的封印..他目前就藏身在这片森林里..情况非常严重，他随时可能苏醒并毁灭我们所有人，我们#r必须#k找到他！");
	} else if (status == 1) {
	     cm.EnableUI(1);
		cm.sendNextNoESC("哇哇哇兄弟！我刚来这儿你就让我去追杀什么大坏蛋？这是什么鬼！");
	} else if (status == 2) {
		cm.sendPlayerToNpc("呃..基本上是的，但是嗯..如果不找到他，我们可不仅仅是损失几台电视那么简单");
	} else if (status == 3) {
		cm.sendNextNoESC("嘿..好吧，我帮你找他...");
	} else if (status == 4) {
		cm.sendPlayerToNpc("太好了！我送你进入森林去找他，祝你好运！！");
	} else if (status == 5) {
		cm.sendNextNoESC("所以我得在这片森林里找到那个大#r黑家伙#k？我想这应该不难吧，开始搜索吧！");
    } else if (status == 6) {
			cm.warp(910142070,0);
	//		cm.spawnMobOnPoint(1210104, 10, 55, 85);
	 //  cm.EnableUI(0);
	} else if (status == 7) {
        cm.sendPlayerToNpc("所以我得在这片森林里找到那个大#r黑家伙#k？我想这应该不难吧，开始搜索吧！");		
		cm.dispose();
	}
}