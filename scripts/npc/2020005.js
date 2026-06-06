/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Alcaster - El Nath Market (211000100)
-- By ---------------------------------------------------------------------------------------------
	Unknown/Information/xQuasar
-- Version Info -----------------------------------------------------------------------------------
	1.3 - Fixed up completely [xQuasar]
	1.2 - Add a missing text part [Information]
	1.1 - Recoded to official [Information]
	1.0 - First Version by Unknown
---------------------------------------------------------------------------------------------------
**/

var selected;
var amount;
var totalcost;
var item = new Array(2050003,2050004,4006000,4006001);
var cost = new Array(300,400,5000,5000);
var msg = new Array("可治愈被封印和诅咒状态","可治愈所有状态","，拥有魔法力量，用于高级技能","，拥有召唤之力，用于高级技能");
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    cm.sendNext("我明白了。了解我这里有很多不同的物品。到处看看吧。我只把这些物品卖给你，所以我不会以任何方式欺骗你。");
	    cm.safeDispose();
	    return;
	}
	status--;
    }

    if (status == 0) {
	if (cm.getQuestStatus(3035) == 2) {
	    var selStr;
	    for (var i = 0; i < item.length; i++){
		selStr += "\r\n#L" + i + "# #b#t" + item[i] + "#（价格： "+cost[i]+" 金币）#k#l";
	    }
	    cm.sendSimple("多亏了你，#b#t4031056##k已被安全封印。当然，作为代价，我消耗了大约800年来积累的一半力量……但现在我可以安心离世了。对了……你需要稀有物品吗？作为对你辛勤工作的感谢，我会把我拥有的一些物品卖给你，而且只卖给你。挑选你想要的吧！"+selStr);
	}
	else {
	    cm.sendNext("如果你决定帮助我，作为回报，我会开放该物品的购买权限。");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	selected = selection;
	cm.sendGetNumber("#b#t"+item[selected]+"##k真的是你需要的物品吗？这是一种 "+msg[selected]+"的道具。这可能不是最容易获得的物品，但我会给你一个好价钱。每个#b"+cost[selected]+" 金币#k。你想买多少？", 0, 1, 100);
    } else if (status == 2) {
	amount = selection;
	totalcost = cost[selected] * amount;
	if (amount == 0) {
	    cm.sendOk("如果你不打算买任何东西，那我也没有什么可卖的。");
	    cm.dispose();
	}
	cm.sendYesNo("你确定要购买#r"+amount+" #t"+item[selected]+"(个)##k？每个#t "+cost[selected]+"#售价"+item[selected]+" 金币，总共需要#r"+totalcost+" 金币#k。");
    } else if(status == 3) {
	if(cm.getMeso() < totalcost || !cm.canHold(item[selected])) {
	    cm.sendNext("你确定你有足够的金币吗？请检查一下你的其他或消耗品栏是否已满，以及你是否至少有#r"+totalcost+"#k 金币。");
	    cm.dispose();
	}
	cm.sendNext("谢谢。如果你以后需要物品，记得来这里。虽然我年事已高，但我仍然能轻松制作魔法物品。");
	cm.gainMeso(-totalcost);
	cm.gainItem(item[selected], amount);
	cm.safeDispose();
    }
}