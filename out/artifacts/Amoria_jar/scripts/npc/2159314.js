var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		cm.sendNextNoESC("你真-真的有翅膀...");
    } else if (status == 1) {
		cm.sendNextNoESC("你是谁？你是黑色之翼的人吗？间谍？等等，不对。那说不通...", 2159312);
    } else if (status == 2) {
		cm.sendNextNoESC("保持警惕。我们仍然一无所知...", 2159313);
	} else if (status == 3) {
		cm.sendNextNoESC("你是谁？你和黑色之翼是什么关系？", 2159315);
	} else if (status == 4) {
		cm.sendPlayerToNpc("我不知道这些黑色之翼是谁。你想了解我什么？我甚至不知道从哪里说起。");
	} else if (status == 5) {
		cm.sendNextNoESC("那就从你的名字、组织、背景开始吧...还有你背上的那些翅膀。", 2159342);
	} else if (status == 6) {
		cm.sendPlayerToNpc("我的名字叫#h0#。我目前不属于任何组织，虽然我曾经是黑魔法师的指挥官之一。我反叛了他，我们交了手，但他打败了我。当我醒来时，我看到了黑色之翼。哦，我的翅膀是天生的。我是一个恶魔。");
	} else if (status == 7) {
		cm.sendNextNoESC("你曾是黑魔法师手下的指挥官？怎么可能？他已经被封印数百年了！", 2159315);
	} else if (status == 8) {
		cm.sendDirectionStatus(1, 2000);
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/3");
		cm.sendNextNoESC("嗯..他可能神志不清。");
	} else if (status == 9) {
		cm.sendPlayerToNpc("（数百年前？但是，这个地方如此陌生。我沉睡了多久？难道英雄们已经封印了黑魔法师？）");
	} else if (status == 10) {
		cm.sendNextNoESC("这说不通。你在撒谎吗？");
	} else if (status == 11) {
		cm.sendNextNoESC("不。他可能疯了，但他不是骗子。", 2159345);
	} else if (status == 12) {
		cm.sendNextNoESC("那么...他要么疯了，要么说的是实话。Black Jack从不会判断错误。", 2159316);
	} else if (status == 13) {
		cm.sendNextNoESC("他不知怎么来自过去，在黑魔法师被封印之前。如果你是指挥官，为什么要叛变？", 2159315);
	} else if (status == 14) {
		cm.sendPlayerToNpc("那是私事。现在，你回答我的问题。你们是什么人？黑色之翼是什么？");
	} else if (status == 15) {
		cm.sendNextNoESC("我们是反抗军，一个秘密成立的组织，旨在保护我们的家园埃德尔斯坦免受黑色之翼的侵害。那些偷取你能量的家伙就是黑色之翼。他们一段时间以来一直在从城市中抽取能量，他们为黑魔法师效力。", 2159342);
	} else if (status == 16) {
		cm.sendPlayerToNpc("他们追随黑魔法师？他不是被封印了吗？");
	} else if (status == 17) {
		cm.sendNextNoESC("是的，但他们正试图再次释放他。", 2159342);
	} else if (status == 18) {
		cm.sendPlayerToNpc("黑魔法师要回来了？那是个好消息...这意味着我仍然可以复仇。");
	} else if (status == 19) {
		cm.sendNextNoESC("你有点疯狂，但我们是站在同一边的。要不要加入我们？", 2159342);
	} else if (status == 20) {
		cm.sendNextNoESC("你在说什么？！你真的相信他？即使他说的是实话，他曾是指挥官！", 2159315);
	} else if (status == 21) {
		cm.sendNextNoESC("他似乎和我们一样痛恨黑魔法师，甚至更甚。即使他#b曾经是#k指挥官，他现在已经不是了。只要我们的目标一致，我们总是需要更多成员的。我们可以合作。", 2159342);
	} else if (status == 22) {
		cm.sendPlayerToNpc("等等，怎么回事？");
	} else if (status == 23) {
		cm.sendNextNoESC("不需要想太多。决定已经做出了。如果你想对抗黑魔法师，就必须通过黑色之翼。让我们一起将他们摧毁。");
	} else if (status == 24) {
		cm.sendNextNoESC("我不指望你完全信任我们，但我们可以一点一点地建立信任，同时瓦解黑色之翼。", 2159342);
	} else if (status == 25) {
		cm.sendPlayerToNpc("确实。暂时我会加入你们...同时，请允许我感谢你们救了我。");
	} else if (status == 26) {
		cm.sendNextNoESC("听到你这么说我就放心了。不客气。", 2159342);
	} else if (status == 27) {
		cm.sendPlayerToNpc("我忠于忠于我的人。");
	} else if (status == 28) {
		cm.sendNextNoESC("对我来说没问题。好了，请把这里当成自己的家。", 2159315);
	} else if (status == 29) {
		cm.EnableUI(0);
		cm.DisableUI(false);
		cm.sendDirectionStatus(4, 0);
		cm.forceStartQuest(23209, "1");
		cm.forceCompleteQuest(23279);
		cm.forceCompleteQuest(7621);
		cm.forceCompleteQuest(29958);
		cm.gainItem(1142341, 1);
		cm.getPlayer().changeJob(3100);
		cm.warp(310010000,0);
		cm.dispose();
	}
}