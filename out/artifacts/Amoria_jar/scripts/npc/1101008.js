/* 
 *  NPC  : Guide Summoner
 *  Maps : Erev Map of the Start // 20021
 */

var status = -1;

function start() {
    cm.sendSimple("等等！下面列出的信息只要玩到10级就能全部获得，所以不需要提前了解。只有想提前了解的人再继续往下看。\n\r 好了，你想了解更多哪方面的内容？ \n\r #b#L0#告诉我更多关于你的事。#l \n\r #b#L1#小地图#l \n\r #b#L2#任务窗口#l \n\r #b#L3#物品栏#l \n\r #b#L4#普通攻击#l \n\r #b#L5#拾取物品#l \n\r #b#L6#装备物品#l \n\r #b#L7#技能窗口#l \n\r #b#L8#如何使用快捷栏#l \n\r #b#L9#打破箱子#l \n\r #b#L10#坐在椅子上#l \n\r #b#L11#提升属性#l \n\r #b#L12#西格诺斯骑士团是什么？#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
    }
    if (status == 0) {
	if (selection == 0) {
	    cm.sendNext("我目前正在侍奉神兽，它负责保护西格诺斯女皇和艾琳森林。神兽命令我处理女皇的请求，那就是引导来到枫之谷世界中寻求成为西格诺斯骑士的灵魂。这就是我在这里的原因，我会一直陪伴你，直到你成为骑士，或者直到你达到11级。如果你有任何问题，尽管问我！");
	} else if (selection == 12) {
	    cm.sendOk("枫之谷的世界长久以来一直保持着和平，但我担心黑魔法师的存在正在慢慢回归。为了阻止邪恶的黑魔法师，女皇决定组建西格诺斯骑士团。一旦你达到10级，你就可以正式申请成为西格诺斯骑士了。");
	    cm.dispose();
	} else {
	    cm.summonMsg(selection);
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.sendNext("但你真的不需要在这么短的时间内搞清楚所有事情。我这里有的都是游戏的基本知识，你只要玩下去就会自然学会。事实上，我觉得你应该只有在达到10级但还不知道该做什么时，或者想确认和复查你已知道的内容时才来问。你真的不需要一下子知道所有事情，放松就好。");
    }
}