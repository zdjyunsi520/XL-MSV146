var status = -1;

function start(mode, type, selection) {
}
function end(mode, type, selection) {
	qm.sendNext("蜗牛鲁恩已不再可用。");
	qm.forceCompleteQuest();
	qm.dispose();
/*	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		
		if (status == 0)
			qm.sendSimple("你好，旅行者……你终于来看我了。你完成你的使命了吗？\r\n #b#L0#什么使命？你是谁？#l#k");
		else if (status == 1) {
			qm.sendNext("你在口袋里发现了一颗小蛋吗？那颗蛋就是你的使命，你的责任。独自一人的生活很辛苦。在这样的时刻，没有什么比拥有一个随时陪伴你的朋友更好的了。你听说过#b宠物#k吗？\r\n人们养宠物来减轻负担、悲伤和孤独，因为知道有某个——或者说某物——站在你这边会给你带来真正的内心安宁。但一切都有后果，随之而来的是责任……");
		} else if (status == 2) {
			qm.sendNextPrev("养宠物需要极大的责任感。记住宠物也是一种生命形式，所以你需要喂养它，给它取名字，与它分享你的想法，最终建立一种纽带。这就是主人与宠物之间的感情。");
		} else if (status == 3) {
			qm.sendNextPrev("我想把这个道理灌输给你，这就是为什么我送给你一个我珍视的宝宝。你带来的那颗蛋是#b符文蜗牛#k，一种通过魔力诞生的生物。因为你在把蛋带到这里的过程中好好照顾了它，蛋很快就要孵化了。");
		} else if (status == 4) {
			qm.sendNextPrev("符文蜗牛是一种多才多艺的宠物。它会捡起物品，用药水喂养你，还会做其他让你惊讶的事情。缺点是，由于符文蜗牛是由魔力诞生的，它的寿命非常短。一旦变成布偶，就再也无法复活了。");
		} else if (status == 5) {
			qm.sendYesNo("现在你明白了吗？每个行为都有后果，宠物也不例外。蜗牛的蛋很快就要孵化了。");
		} else if (status == 6) {
			qm.gainPet(5000054, "蜗牛鲁恩", 1, 0, 100, 18000, 0); // rune snail * 1
			if (qm.haveItem(4032086,1)) {
				qm.gainItem(4032086, -1); // Mysterious Egg * -1
			}
			qm.forceCompleteQuest();
			qm.sendNext("这只蜗牛只会存活#b5个小时#k。请给它满满的爱。你的爱最终会得到回报的。");
			qm.dispose();
		}
	}
*/
}
