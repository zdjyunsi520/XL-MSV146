/* Author: Xterminator
	NPC Name: 		Phil
	Map(s): 		Victoria Road : Lith Harbour (104000000)
	Description: 		Explains Victoria Island Towns and can take you to them
*/

var status = 0;
var maps = Array(102000000, 101000000, 100000000, 103000000, 120000000, 105000000);
var cost = Array(1000, 1000, 1000, 1000, 1000, 1000);
var costBeginner = Array(100, 100, 100, 100, 100, 100);
var selectedMap = -1;
var sCost;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 27 && mode == 0) {
	cm.sendNext("这个城镇也有很多值得看的地方。如果你想去别的地方，请告诉我。");
	cm.dispose();
	return;
    } else if (((status == 1 || status == 2 || status == 26) && mode == 0) || ((status == 6 || status == 9 || status == 12 || status == 15 || status == 18 || status == 21) && mode == 1)) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("你想去其他城镇吗？只要花一点钱，我就能送你过去。虽然价格稍贵，但我为新手提供九折优惠。");
    } else if (status == 1) {
	cm.sendSimple("如果你是第一次来这里，对这个地方感到困惑是可以理解的。如果你对这里有什么疑问，尽管问我吧。\r\n#L0##b维多利亚岛上有哪些城镇？#l\r\n#L1#请带我去别的地方。#k#l");
    } else if (status == 2) {
	if (selection == 0) {
	    cm.sendSimple("维多利亚岛上有7个大城镇。你想了解更多关于哪个城镇的信息呢？\r\n#b#L0##m104000000##l\r\n#L1##m102000000##l\r\n#L2##m101000000##l\r\n#L3##m100000000##l\r\n#L4##m103000000##l\r\n#L5##m120000000##l\r\n#L6##m105040300##l");
	} else if (selection == 1) {
	    status = 26;
	    if (cm.getJob() == 0) {
		var selStr = "所有新手享有九折优惠。好的，你想去哪里呢？#b";
		for (var i = 0; i < maps.length; i++) {
		    selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " 金币)#l";
		}
	    } else {
		var selStr = "哦，你不是新手啊？那恐怕我得收你全价了。你想去哪里呢？#b";
		for (var i = 0; i < maps.length; i++) {
		    selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " 金币)#l";
		}
	    }
	    cm.sendSimple(selStr);
	}
    } else if (status == 3) {
	if (selection == 0) {
	    status = 4;
	    cm.sendNext("你现在所在的城镇是里本港！好的，让我来为你介绍一下#b里本港#k。这是你乘坐维多利亚号抵达维多利亚岛的地方。很多从枫之谷岛刚来的新手都是从这里开始他们的旅程的。");
	} else if (selection == 1) {
	    status = 7;
	    cm.sendNext("好的，让我来为你介绍一下#b勇士部落#k。它是一个位于维多利亚岛最北端的战士城镇，四周被岩石山脉环绕。气氛不太友好，只有强者才能在那里生存。");
	} else if (selection == 2) {
	    status = 10;
	    cm.sendNext("好的，让我来为你介绍一下#b魔法森林#k。它是一个位于维多利亚岛远东的魔法师城镇，被高大神秘的树木所覆盖。你还会在那里找到一些精灵。不过它们通常不太喜欢人类，所以最好和它们搞好关系，保持安静。");
	} else if (selection == 3) {
	    status = 13;
	    cm.sendNext("好的，让我来为你介绍一下#b射手村#k。它是一个位于岛屿最南端的弓箭手城镇，建在深林和草原之间的平地上。那里的天气恰到好处，周围资源丰富，非常适合居住。去看看吧。");
	} else if (selection == 4) {
	    status = 16;
	    cm.sendNext("好的，让我来为你介绍一下#b废弃都市#k。它是一个位于维多利亚岛西北部的飞侠城镇，那里的建筑有一种奇怪的感觉。大部分时间被乌云笼罩，但如果你能到一个很高的地方，就能看到非常美丽的日落。");
	} else if (selection == 5) {
	    status = 19;
	    cm.sendNext("这里是关于#b#m120000000##k的一些信息。它是一艘目前停泊在维多利亚岛魔法森林和射手村之间的潜艇。那艘潜艇是众多海盗的家。在那里你可以欣赏到和里本港一样美丽的海景。");
	} else if (selection == 6) {
	    status = 22;
	    cm.sendNext("好的，让我来为你介绍一下#b魔法密林#k。它是一个位于维多利亚岛东南方的森林城镇。大致位于射手村和蚂蚁洞窟之间。那里有一家旅馆，所以在副本里冒险了一整天后可以好好休息一下……总的来说是个安静的城镇。");
	}
    } else if (status == 4) {
	cm.sendNext("你现在所在的城镇是里本港！好的，让我来为你介绍一下#b里本港#k。这是你乘坐维多利亚号抵达维多利亚岛的地方。很多从枫之谷岛刚来的新手都是从这里开始他们的旅程的。");
    } else if (status == 5) {
	cm.sendNextPrev("这是一个安静的城镇，背后有广阔的水域，因为港口位于岛屿的最西端。这里的大多数人是或曾经是渔民，所以他们看起来可能有点凶，但如果你和他们搭话，他们会对你很友善的。");
    } else if (status == 6) {
	cm.sendNextPrev("城镇周围有一片美丽的草原。那里的大多数怪物体型小巧温顺，非常适合新手。如果你还没有选择职业，这里是一个提升等级的好地方。");
    } else if (status == 7) {
	cm.sendNext("好的，让我来为你介绍一下#b勇士部落#k。它是一个位于维多利亚岛最北端的战士城镇，四周被岩石山脉环绕。气氛不太友好，只有强者才能在那里生存。");
    } else if (status == 8) {
	cm.sendNextPrev("在高原周围你会发现一棵非常瘦的树、一头到处乱跑的野猪，以及遍布全岛的猴子。那里还有一个深谷，走进深处你会发现一条体型巨大的龙，它的力量与体型相匹配。进入那里时一定要非常小心，否则最好别去。");
    } else if (status == 9) {
	cm.sendNextPrev("如果你想成为一名#b战士#k，那就去找勇士部落的首领#r战神巴洛格#k。如果你的等级达到10级或以上，同时有较高的力量值，他可能会让你成为战士。如果还不够，那就继续训练自己直到达到那个等级吧。");
    } else if (status == 10) {
	cm.sendNext("好的，让我来为你介绍一下#b魔法森林#k。它是一个位于维多利亚岛远东的魔法师城镇，被高大神秘的树木所覆盖。你还会在那里找到一些精灵。不过它们通常不太喜欢人类，所以最好和它们搞好关系，保持安静。");
    } else if (status == 11) {
	cm.sendNextPrev("在森林附近你会发现绿色蜗牛、会走的蘑菇、猴子以及僵尸猴子。走进森林深处，你会发现骑着飞天扫帚的巫婆在天空中飞行。提醒一句：除非你真的很强，否则我建议你不要靠近它们。");
    } else if (status == 12) {
	cm.sendNextPrev("如果你想成为一名#b魔法师#k，去找魔法森林的首席巫师#r格雷德尔#k。如果你的等级达到8级或以上，且有不错的智力值，他可能会让你成为魔法师。如果还不够，你可能需要多打猎多训练来达到要求。");
    } else if (status == 13) {
	cm.sendNext("好的，让我来为你介绍一下#b射手村#k。它是一个位于岛屿最南端的弓箭手城镇，建在深林和草原之间的平地上。那里的天气恰到好处，周围资源丰富，非常适合居住。去看看吧。");
    } else if (status == 14) {
	cm.sendNextPrev("在草原周围你会发现一些弱小的怪物，比如蜗牛、蘑菇和猪。不过据我所知，在猪猪公园的最深处——那里和城镇某处相连——偶尔会出现一只叫做蘑菇妈妈的巨大蘑菇。");
    } else if (status == 15) {
	cm.sendNextPrev("如果你想成为一名#b弓箭手#k，你需要去射手村找#r雅典娜#k。如果你的等级达到10级或以上，且有不错的敏捷值，她可能会让你成为弓箭手。如果还不够，去训练自己，让自己变强，然后再来试试。");
    } else if (status == 16) {
	cm.sendNext("好的，让我来为你介绍一下#b废弃都市#k。它是一个位于维多利亚岛西北部的飞侠城镇，那里的建筑有一种奇怪的感觉。大部分时间被乌云笼罩，但如果你能到一个很高的地方，就能看到非常美丽的日落。");
    } else if (status == 17) {
	cm.sendNextPrev("从废弃都市出发，你可以进入好几个副本。你可以去鳄鱼和蛇群出没的沼泽，或者去满是幽灵和蝙蝠的地铁。在地下最深处，你会发现蕾丝，它和龙一样巨大而危险。");
    } else if (status == 18) {
	cm.sendNextPrev("如果你想成为一名#b飞侠#k，去找废弃都市的暗影之王#r达克劳德#k。如果你的等级达到10级或以上，且有不错的敏捷值，他可能会让你成为飞侠。如果还不够，去打猎训练自己达到那个水平吧。");
    } else if (status == 19) {
	cm.sendNext("这里是关于#b#m120000000##k的一些信息。它是一艘目前停泊在维多利亚岛魔法森林和射手村之间的潜艇。那艘潜艇是众多海盗的家。在那里你可以欣赏到和里本港一样美丽的海景。");
    } else if (status == 20) {
	cm.sendNextPrev("#m120000000#停泊在射手村和魔法森林之间，所以你只要稍微走出去一点，就能欣赏到两个城镇的景色。你在城里遇到的海盗们都非常热情友善。");
    } else if (status == 21) {
	cm.sendNextPrev("如果你真的想成为一名#b海盗#k，那你最好去见见#m120000000#的船长#r#p1090000##k。如果你的等级超过10级且敏捷值达到20，她可能会让你成为海盗。如果你还没达到那个等级，那你就需要更加努力地训练了！");
    } else if (status == 22) {
	cm.sendNext("好的，让我来为你介绍一下#b魔法密林#k。它是一个位于维多利亚岛东南方的森林城镇。大致位于射手村和蚂蚁洞窟之间。那里有一家旅馆，所以在副本里冒险了一整天后可以好好休息一下……总的来说是个安静的城镇。");
    } else if (status == 23) {
	cm.sendNextPrev("旅馆前面有一位名叫#r克里斯拉玛#k的老和尚。没人知道那个和尚的来历。据说他收集旅行者的材料来制作什么东西，但我不太清楚具体情况。如果你要去那一带，请帮我看看。");
    } else if (status == 24) {
	cm.sendNextPrev("从魔法密林往东走，你会发现一条通往维多利亚岛最深处的蚂蚁洞窟。那里有很多凶猛强大的怪物，如果你以为散步一样走进去，估计会变成尸体出来。进去之前一定要做好充分的准备。");
    } else if (status == 25) {
	cm.sendNextPrev("还有我听说的……据说在魔法密林有一个通往未知之地的秘密入口。据说深入之后，你会发现一堆会动的黑色岩石。我想在不久的将来亲眼去看看……");
    } else if (status == 26) {
	cm.dispose();
    } else if (status == 27) {
	if (cm.getJob() == 0) {
	    sCost = costBeginner[selection];
	} else {
	    sCost = cost[selection];
	}
	cm.sendYesNo("看来你不需要待在这里。你真的想去#b#m" + maps[selection] + "##k吗？那要花费你#b" + sCost + " 金币#k。你觉得怎么样？");
	selectedMap = selection;
    } else if (status == 28) {
	if (cm.getMeso() < sCost) {
	    cm.sendNext("你没有足够的金币。以你的能力，应该有比这更多的钱才对！");
	} else {
	    cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap], 0);
	}
	cm.dispose();
    }
}