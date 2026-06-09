/* Author: Xterminator
	NPC Name: 		Jane
	Map(s): 		Victoria Road : Lith Harbor (104000000)
	Description: 		Sells potions/food if completed all her quests
*/

var status = 0;
var amount = -1;
var item;
var cost;
var rec;
var recName;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status <= 2 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 3 && mode == 0) {
	cm.sendNext("你之前给我的材料我还有很多。东西都在那里，你可以慢慢挑选。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getQuestStatus(2013) == 2) {
	    cm.sendNext("是你啊……多亏了你我才能做很多事情。最近我一直在制作各种物品。如果你需要什么，请告诉我。");
	} else {
	    if (cm.getQuestStatus(2010) == 2)
		cm.sendNext("你看起来还不够强，无法购买我的药水……");
	    else
		cm.sendOk("我的梦想是像你一样到处旅行。但是，我父亲不允许我这么做，因为他认为这很危险。不过，如果我能向他证明我不是他想象中的那个柔弱的女孩，他可能会同意的……");
	    cm.dispose();
	}
    } else if (status == 1) {
	var selStr = "你想买哪种物品？#b";
	var items = new Array(2000002, 2022003, 2022000, 2001000);
	var costs = new Array(310, 1060, 1600, 3120);
	for (var i = 0; i < items.length; i++) {
	    selStr += "\r\n#L" + i + "##z" + items[i] + "# (价格： " + costs[i] + " 金币)#l";
	}
	cm.sendSimple(selStr);
    } else if (status == 2) {
	var itemSet = new Array(2000002, 2022003, 2022000, 2001000);
	var costSet = new Array(310, 1060, 1600, 3120);
	var recHpMp = new Array(300, 1000, 800, 1000);
	var recNames = new Array("HP", "HP", "MP","生命值和魔力值");
	item = itemSet[selection];
	cost = costSet[selection];
	rec = recHpMp[selection];
	recName = recNames[selection];
	cm.sendGetNumber("你想要#b#t" + item + "##k? #t" + item + "# 可以恢复 " + rec + " " + recName + "。你想买多少？", 1, 1, 100);
    } else if (status == 3) {
	cm.sendYesNo("你要购买#r" + selection + "#k #b#t" + item + "#(s)#k? #t" + item + "# 的价格是 " + cost + " 金币一个，所以总共需要#r" + cost * selection + "#k 金币。");
	amount = selection;
    } else if (status == 4) {
	if (cm.getMeso() < cost * amount || !cm.canHold(item)) {
	    cm.sendNext("你是不是金币不够？请检查一下你的其他背包是否有空位，以及你是否至少有#r" + cost * amount + "#k 金币。");
	} else {
	    cm.gainMeso(-cost * amount);
	    cm.gainItem(item, amount);
	    cm.sendNext("谢谢光临。这里的东西随时都可以制作，如果你需要什么，请再来。");
	}
	cm.dispose();
    }
}