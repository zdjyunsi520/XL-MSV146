/*
	NPC Name: 		Kia
	Description: 		Quest - Cygnus tutorial helper
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("嗯，这个要求太多了吗？是因为你不知道怎么打破箱子吗？如果你接受我的任务，我就告诉你怎么做。如果你改变主意就告诉我。");
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("#b(*叮叮当当*)#k");
    } else if (status == 1) {
	qm.sendNextPrev("哇！嘿！你吓了我一跳。我不知道有客人来了。你一定就是#p1102006#提到的那个初心者。欢迎！我是#p1102007#，我的爱好是制作#b椅子#k。我想给你做一把作为欢迎礼物。");
    } else if (status == 2) {
	qm.sendNextPrev("但是等等，我没法给你做，因为材料不够。你能帮我找齐需要的材料吗？在这个区域附近，你会找到很多里面装有物品的箱子。你能从那些箱子里给我带回一个#t4032267#和一个#t4032268#吗？");
    } else if (status == 3) {
	qm.sendNextPrev("你知道怎么从箱子里获取物品吗？你所要做的就是像攻击怪物一样打破箱子。区别在于你可以用技能攻击怪物，但#b只能用普通攻击来打破箱子#k。");
    } else if (status == 4) {
	qm.askAcceptDecline("请给我从那些箱子里找到的1个#b#t4032267##k和1个#b#t4032268##k。等我有需要的材料后马上给你做一把超棒的椅子。我在这里等你！");
    } else if (status == 5) {
	qm.forceStartQuest();
	qm.summonMsg(9);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendNext("你给我带来建筑石和帘布了吗？让我看看。啊，正是我需要的！它们确实是#t4032267#和#t4032268#！我马上给你做椅子。");
    } else if (status == 1) {
	qm.sendNextPrev("这就是，一把#t3010060#。你觉得怎么样？不错吧？你可以通过#b坐在这把椅子上快速恢复你的HP#k。它会存放在你背包的#b设置#k窗口中，所以确认你收到了椅子后就去#b#p1102008##k那里吧。继续沿着箭头向左走就能看到他。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010060# 1 #t3010060# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 经验值");
    } else if (status == 2) {
	qm.gainItem(4032267, -1);
	qm.gainItem(4032268, -1);
	qm.gainItem(3010060, 1);
	qm.forceCompleteQuest();
	qm.forceCompleteQuest(20000);
	qm.forceCompleteQuest(20001);
	qm.forceCompleteQuest(20002);
	qm.forceCompleteQuest(20015);
	qm.gainExp(95);
	qm.summonMsg(10);
	qm.dispose();
    }
}