var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendNextNoESC("那么，你为什么想去枫之岛呢？最近没多少人往那边走。看你的穿着，也不像是游客。");
	} else if (status == 1) {
		cm.sendPlayerToNpc("我要去枫之岛训练……之后，我要去维多利亚岛成为一名伟大的冒险家！就是这样对吧？");
	} else if (status == 2) {
		cm.sendNextNoESC("没错！枫之岛是一个训练的好地方，因为那里没有危险的怪物。而且，你会交到很多朋友，学到基础知识。等你准备好了，外面有一个广阔的世界等着你去探索！");
	} else if (status == 3) {
		cm.sendPlayerToNpc("嘿，我等不及了！我要努力训练，学会击败所有强大的怪物。我已经完全准备好了！");
	} else if (status == 4) {
		cm.sendNextNoESC("态度真好！这会帮助你成功的。不过你永远无法确定会发生什么。只要记住，#b一切事物的发生都有原因。#k");
	} else if (status == 5) {
		cm.sendPlayerToNpc("嘿，你听到什么声音了吗？");
	} else if (status == 6) {
		cm.sendDirectionStatus(4, 0);
		cm.sendDirectionStatus(3, 2);
		cm.sendDirectionInfo("Effect/Summon.img/15");
		cm.sendDirectionStatus(1, 2000);
		cm.sendDirectionInfo("Effect/Direction4.img/effect/cannonshooter/balog");
		cm.sendDirectionStatus(1, 1000);
		cm.sendDirectionInfo("Effect/Direction4.img/effect/cannonshooter/npc/0");
		cm.sendDirectionStatus(1, 1000);
		cm.sendDirectionInfo("Effect/Direction4.img/effect/cannonshooter/User/0");
		cm.sendDirectionStatus(1, 1000);
		cm.showWZEffect("Effect/Direction4.img/effect/cannonshooter/face02");
		cm.sendDirectionInfo("Effect/Direction4.img/effect/cannonshooter/npc/1");
		cm.sendDirectionStatus(1, 1000);
		cm.sendDirectionInfo("Effect/Direction4.img/effect/cannonshooter/User/1");
		cm.sendDirectionStatus(1, 1000);
		cm.showWZEffect("Effect/Direction4.img/effect/cannonshooter/face05");
		cm.sendDirectionInfo("Effect/Direction4.img/effect/cannonshooter/balog/0");
		cm.sendDirectionStatus(1, 1000);
		cm.sendDirectionInfo("Mob/8150000.img/attack2/info/effect");
		cm.sendDirectionInfo("Effect/Direction4.img/effect/cannonshooter/User/2");
		cm.sendDirectionStatus(1, 1000);
		cm.sendDirectionStatus(3, 6);
		cm.sendDirectionInfo("Mob/8130100.img/attack1/info/effect");
		cm.sendDirectionInfo("Mob/8130100.img/attack1/info/hit");
		cm.showWZEffect("Effect/Direction4.img/effect/cannonshooter/face01");
		cm.sendDirectionStatus(1, 1000);
		cm.sendDirectionStatus(3, 2);
		cm.sendDirectionInfo("Effect/Direction4.img/effect/cannonshooter/balog/1");
		cm.sendDirectionStatus(1, 1000);
		cm.sendDirectionInfo("Effect/Direction4.img/effect/cannonshooter/User/3");
		cm.sendDirectionStatus(1, 1000);
		cm.sendDirectionInfo("Mob/8150000.img/attack2/info/hit");
		cm.warp(912060100,0);
		cm.dispose();
	}
}