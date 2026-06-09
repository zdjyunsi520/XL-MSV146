var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendPlayerToNpc("阿弗里恩？弗洛伊德！你没事吧？");
	} else if (status == 1) {
		cm.sendNextNoESC("梅塞德斯……你活下来了。");
	} else if (status == 2) {
		cm.sendPlayerToNpc("当然。我成功封印了他。我不能让自己因此而死。你呢？其他人呢？他们在哪里？");
	} else if (status == 3) {
		cm.sendNextNoESC("我们可能打败了黑魔法师，但他最后一招把所有人都打飞到了不同的方向。我们能落在同一个地方真是幸运。");
	} else if (status == 4) {
		cm.sendPlayerToNpc("我没想到我们飞了这么远。至少我们安全了。我觉得好虚弱……好冷……这里一直是雪天吗？明明很热，却在飘雪。真奇怪……");
	} else if (status == 5) {
		cm.sendNextNoESC("你感觉不到吗？梅塞德斯，强大的诅咒……已经降临在你、弗洛伊德和其他人身上。一种冰冷刺骨的诅咒，紧紧缠绕着你。看来黑魔法师不会轻易放过我们……");
	} else if (status == 6) {
		cm.sendPlayerToNpc("诅……诅咒……你应该能撑过去，但弗洛伊德怎么办？他看起来很虚弱……");
	} else if (status == 7) {
		cm.sendNextNoESC("我会照顾他的。现在，我更担心你。你是#b精灵族的统治者#k。如果诅咒在你身上，那它会降临在#r所有精灵身上！#k快回到#b埃鲁埃尔#k去，如果#b黑魔法师的诅咒降临在所有精灵身上#k，那你必须回到你的族人身边。");
	} else if (status == 8) {
		cm.sendPlayerToNpc("……！好的！阿弗里恩，我们会再见的！");
	} else if (status == 9) {
		cm.sendPlayerToNpc("（其他英雄们总会想办法挺过去的。现在，我用技能回到城镇吧。）");
	} else if (status == 10) {
		cm.warp(910150001,0);
		cm.dispose();
	}
}