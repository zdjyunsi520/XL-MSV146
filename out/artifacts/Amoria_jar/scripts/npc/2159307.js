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
		cm.sendNextNoESC("指挥官！你去哪了？我还以为阿卡伊农真的对你下手了...");
    } else if (status == 1) {
		cm.sendNextNoESC("最近事情很奇怪。阿卡伊农对你心怀不满，因为你是成功抓住时间神殿女神的人。他只弄瞎了她，但他仍然觉得所有的功劳都该归他...蠢货。");
    } else if (status == 2) {
		cm.sendDirectionStatus(3, 2);
		cm.sendNextNoESC("...你还好吗？你看起来不太一样...是的，你变了。以前我问你这种问题的时候你总是训我，但现在...嘿，你看起来不太好。发生什么事了？你受伤了吗？");
	} else if (status == 3) {
		cm.sendPlayerToNpc("...告诉我，玛斯特玛，你效忠的是谁？是我，还是黑魔法师？");
	} else if (status == 4) {
		cm.sendNextNoESC("什-什么？");
	} else if (status == 5) {
		cm.sendPlayerToNpc("回答我！");
	} else if (status == 6) {
		cm.sendNextNoESC("嗯，我当然忠于黑魔法师。但我们曾以性命互相宣誓。你去哪我就去哪。");
	} else if (status == 7) {
		cm.sendPlayerToNpc("那么我有一件事要拜托你...把这封信交给#r英雄们#k。");
	} else if (status == 8) {
		cm.sendNextNoESC("什么？！为什么？你在想什么？你是想让事情变得更糟吗？一旦有人发现你在试图与英雄们联系，你作为指挥官就完了！");
	} else if (status == 9) {
		cm.sendPlayerToNpc("我作为指挥官已经完了。");
	} else if (status == 10) {
		cm.sendNextNoESC("什么？你要背叛黑魔法师？你为什么要这样做？");
	} else if (status == 11) {
		cm.sendPlayerToNpc("没有时间解释了。请按我说的做。如果不...");
	} else if (status == 12) {
		cm.sendNextNoESC("不，我会做的。我只是担心。那你的家人呢？他们不会有危-");
	} else if (status == 13) {
		cm.sendPlayerToNpc("别再提我的家人！");
	} else if (status == 14) {
		cm.sendNextNoESC("什么？他们已经出事了吗？");
	} else if (status == 15) {
		cm.sendPlayerToNpc("....");
	} else if (status == 16) {
		cm.sendNextNoESC("我明白了...你一直是沉默寡言的类型，但有时候沉默胜过千言。好吧。我会把这封信交给英雄们。");
	} else if (status == 17) {
		cm.sendPlayerToNpc("谢谢你。抱歉让你做这样的事。");
	} else if (status == 18) {
		cm.sendNextNoESC("别道歉。毕竟我欠你一条命。好了，我出发了。祝你好运。");
	} else if (status == 19) {
		cm.removeNpc(2159307);
		cm.sendDirectionStatus(1, 720);
		cm.sendPlayerToNpc("...你的忠诚对我来说意义重大。谢谢你。");
	} else if (status == 20) {
		cm.sendDirectionStatus(3, 2);
		cm.sendDirectionStatus(4, 0);
		cm.warp(927000080,0);
		cm.dispose();
	}
}