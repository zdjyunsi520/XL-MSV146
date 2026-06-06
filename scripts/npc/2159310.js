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
		cm.sendNextNoESC("所有指挥官都到了吗？好，我们开始吧。");
    } else if (status == 1) {
		cm.sendNextNoESC("在伟大的黑魔法师完成他的计划之前，我们一刻也不能放松！我们仍然很脆弱。那么，#h0#，我听说你发现了有趣的信息。", 2159308);
    } else if (status == 2) {
		cm.sendPlayerToNpc("是的...我发现已经有一个抵抗组织秘密成立，正在组建力量来对抗我们。");
	} else if (status == 3) {
		cm.sendNextNoESC("抵抗组织？哈！这个世界上已经没有人能抵抗我们了。我甚至听到一些乌合之众称他们为#r英雄#k。这不是很可笑吗？", 2159308);
	} else if (status == 4) {
		cm.sendNextNoESC("我倒有点期待看他们慌张乱窜的样子。当我们占领埃雷文或我消灭城主的时候，他们可没怎么抵抗。", 2159339);
	} else if (status == 5) {
		cm.sendNextNoESC("埃雷文的战役之所以轻松是因为黑魔法师，不是因为你，兰花。", 2159308);
	} else if (status == 6) {
		cm.sendNextNoESC("嗯，我都不需要用尽全力。就这样。", 2159339);
	} else if (status == 7) {
		cm.sendPlayerToNpc("你在这里做什么，兰花？你不是在和莲合作吗？");
	} else if (status == 8) {
		cm.sendNextNoESC("莲很忙，因为她总是在找更多的事做！你不需要为此烦我。", 2159339);
	} else if (status == 9) {
		cm.sendNextNoESC("这场会议毫无进展。");
	} else if (status == 10) {
		cm.sendNextNoESC("每当兰花说话，我们的会议就停滞不前！至于英雄们，我相信#h0#有办法对付他们。我相信这些可悲的'英雄'不会是他的对手。", 2159308);
	} else if (status == 11) {
		cm.sendPlayerToNpc("与大多数敌人不同，英雄们为他人而战，而不是为自己...他们是特殊的，因为他们保护世界。这使得他们很危险。而且，我只是击晕了女神。是黑魔法师击败了她。");
	} else if (status == 12) {
		cm.sendNextNoESC("你真谦虚！难怪你是黑魔法师最宠爱的...天啊，天啊...", 2159308);
	} else if (status == 13) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10");
		cm.sendNextNoESC("够了！你们两个。");
	} else if (status == 14) {
		cm.sendNextNoESC("怎么？我觉得挺有趣的。", 2159339);
	} else if (status == 15) {
		cm.sendNextNoESC("而我在称赞我们军队中真正的英雄，伟大的#h0#！哈哈哈...", 2159308);
	} else if (status == 16) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10");
		cm.sendNextNoESC("够了！承认#h0#击晕了女神，促成了我们的胜利。因此他的贡献是最重要的。而且，击盲女神的功劳已经归你了。你还想要什么？");
	} else if (status == 17) {
		cm.sendNextNoESC("那么，既然英雄们已经处理了，剩下的抵抗组织呢？我们必须继续会议。", 2159308);
	} else if (status == 18) {
		cm.sendNextNoESC("按照命令，他们已经被完全消灭了。");
	} else if (status == 19) {
		cm.sendNextNoESC("哦，我有个问题。为什么黑魔法师让我们摧毁一切？如果什么都不剩了，就没有什么可以统治了。", 2159339);
	} else if (status == 20) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/18");
		cm.sendPlayerToNpc("什么？黑魔法师什么时候下的这道命令？我从没听说过。");
	} else if (status == 21) {
		cm.sendNextNoESC("啊，是的。我差点忘了告诉你新命令了。黑魔法师命令我们所有人，除了你之外，消灭一切。", 2159308);
	} else if (status == 22) {
		cm.sendNextNoESC("是的。例如，神木村刚刚被烧成灰烬..");
	} else if (status == 23) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/3");
		cm.sendPlayerToNpc("（神木村？那就在我家人附近...！）");
	} else if (status == 24) {
		cm.sendNextNoESC("我们做得很好。只剩下几条龙作为抵抗的代价。", 2159308);
	} else if (status == 25) {
		cm.sendPlayerToNpc("黑魔法师不是承诺要攻击神木村吗？哪些区域被摧毁了？");
	} else if (status == 26) {
		cm.sendNextNoESC("区域？全部，当然！这跟你有什么关系？", 2159308);
	} else if (status == 27) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/11");
		cm.sendPlayerToNpc("请原谅我。我有些事要处理。");
	} else if (status == 28) {
		cm.sendNextNoESC("坐下！还没有人让你离开。", 2159308);
	} else if (status == 29) {
		cm.sendDirectionStatus(3, 2);
		cm.sendDirectionStatus(4, 0);
		cm.warp(924020010,0);
		cm.dispose();
	}
}