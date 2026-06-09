var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (cm.isQuestActive(24007) || cm.isQuestFinished(24007)) {
		cm.sendNext("请救救我们。");
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendPlayerToNpc("长老们！你们活下来了！发生了什么？");
	} else if (status == 1) {
		cm.sendNextNoESC("一股强烈的冰冻诅咒降临在城镇上，也包括你，殿下。事实上，你身上的诅咒最为严重。这就是黑魔法师的力量吗？");
	} else if (status == 2) {
		cm.sendNextNoESC("孩子们已经被冰封了。大人们也会步其后尘；冰封更强的精灵需要更多时间，这就是为什么你还无恙，但我们不行。", 1033204);
	} else if (status == 3) {
		cm.sendPlayerToNpc("这是我的错。我让黑魔法师诅咒了我们……");
	} else if (status == 4) {
		cm.sendNextNoESC("果然是他的所作所为……我就知道。", 1033203);
	} else if (status == 5) {
		cm.sendNextNoESC("黑魔法师诅咒了我们的君主，诅咒因此蔓延开来……");
	} else if (status == 6) {
		cm.sendPlayerToNpc("求你了，我不是故意的。我应该更加小心的……");
	} else if (status == 7) {
		cm.sendNextNoESC("即使被封印了，黑魔法师还拥有如此强大的力量……你能封印他简直是个奇迹。");
	} else if (status == 8) {
		cm.sendNextNoESC("这不是你的错。没有人能阻止这一切。你是一位英雄。", 1033204);
	} else if (status == 9) {
		cm.sendPlayerToNpc("我根本不该和他战斗！要是我知道会发生这种事就好了……我辜负了我的族人……");
	} else if (status == 10) {
		cm.sendNextNoESC("别这么说！即使你不理他，他迟早也会来找我们的。", 1033204);
	} else if (status == 11) {
		cm.sendNextNoESC("是我们的错，我们辜负了你，殿下。");
	} else if (status == 12) {
		cm.sendPlayerToNpc("不！这不是你们的错！我不后悔战斗……我只后悔没能保护好你们。");
	} else if (status == 13) {
		cm.sendNextNoESC("这不只是你一个人的重担。战斗的决定是全体精灵的决定，无论结果如何，我们共同承担。", 1033204);
	} else if (status == 14) {
		cm.sendPlayerToNpc("……大家……");
	} else if (status == 15) {
		cm.sendNextNoESC("无论如何，我们会活下去的。我们会一起克服这一切。只要殿下安全，精灵族的希望就还在。");
	} else if (status == 16) {
		cm.sendNextNoESC("我们阻止不了诅咒，但我们可以熬过它。我们应该在诅咒蔓延到村外之前封印埃鲁埃尔。#b我们精灵应该在这里沉睡，不受打扰。#k 时间在我们这边，我们没什么好担心的。", 1033204);
	} else if (status == 17) {
		cm.sendNextNoESC("最终我们会一起醒来。就连诅咒也不会永远持续；我们会成为胜利者。");
	} else if (status == 18) {
		cm.sendPlayerToNpc("好的。我用我剩余的力量封印村庄……");
		cm.forceStartQuest(24007, "1");
		cm.dispose();
	}
}