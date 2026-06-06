/*
 * Tutorial Lirin
 */

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
if (cm.getPlayer().getMapId() != 140090000) {
if (status == 0) {
	cm.sendSimple("等等！下面列出的信息只要玩到10级就能全部获得，所以不需要提前了解。只有想提前了解的人再继续往下看。\n\r 好了，你想了解更多哪方面的内容？ \n\r #b#L1#小地图#l \n\r #b#L2#任务窗口#l \n\r #b#L3#物品栏#l \n\r #b#L4#普通攻击#l \n\r #b#L5#拾取物品#l \n\r #b#L6#装备物品#l \n\r #b#L7#技能窗口#l \n\r #b#L8#如何使用快捷栏#l \n\r #b#L9#打破箱子#l \n\r #b#L10#坐在椅子上#l \n\r #b#L11#提升属性#l");
} else {
    cm.summonMsg(selection);
    cm.dispose();
}
} else {
    if (cm.getInfoQuest(21019).equals("")) {
	if (status == 0) {
	    cm.sendNext("你……终于醒了！");
	} else if (status == 1) {
	    cm.sendNextPrevS("……你是谁？", 2);
	} else if (status == 2) {
	    cm.sendNextPrev("我一直在等你。等待与黑魔法师战斗的英雄终于醒来……！");
	} else if (status == 3) {
	    cm.sendNextPrevS("等等，你在说什么？你又是谁……？", 2);
	} else if (status == 4) {
	    cm.sendNextPrevS("等等……我是谁……？我什么都不记得了。哎哟……而且我头疼得厉害！", 2);
	} else if (status == 5) {
	    cm.updateInfoQuest(21019, "helper=clear");
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/face");
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickLirin");
	    cm.playerSummonHint(true);
	    cm.dispose();
	}
    } else {
	if (status == 0) {
	    cm.sendNext("你没事吧？");
	} else if (status == 1) {
	    cm.sendNextPrevS("我……真的什么都不记得了……这是哪里？你是谁？", 2);
	} else if (status == 2) {
	    cm.sendNextPrev("冷静点。黑魔法师的诅咒是导致你失去记忆的原因。不必担心过去发生了什么。我会详细给你解释的。");
	} else if (status == 3) {
	    cm.sendNextPrev("你是一个真正的英雄。几百年前，你和你的伙伴们与黑魔法师战斗，将枫之谷的世界从毁灭中拯救出来。但在最后一刻，黑魔法师对你施加了诅咒，让你被冰封了很长时间，并彻底抹去了你的记忆。");
	} else if (status == 4) {
	    cm.sendNextPrev("你现在在一个叫做瑞恩的岛上，这是黑魔法师选择将你囚禁数百年的岛屿。因为他的诅咒，这座岛终年被冰雪覆盖，尽管实际的气候远没有这么严寒。你是在洞穴深处被发现的。");
	} else if (status == 5) {
	    cm.sendNextPrev("我的名字叫莉琳，是瑞恩族的成员。瑞恩族数百年来一直抱着你归来的希望，现在……这个希望终于实现了。你就站在我面前，活生生的传奇。");
	} else if (status == 6) {
	    cm.sendNextPrev("我可能一次给了你太多信息了。如果你还没有完全理解，没关系。你迟早会知道的。现在，#b你应该前往城镇#k。在去城镇之前如果你有任何问题，请随时问我。");
	} else if (status == 7) {
	    cm.playerSummonHint(true);
	    cm.warp(140090100, 1);
	    cm.dispose();
	}
    }
}
}