/*
	Pink Balloon - LudiPQ Bonus stage NPC
*/

function start() {
    cm.sendNext("这是#r奖励阶段#k。打破箱子可以获得一些稀有装备和消耗品——你只有一分钟时间，还等什么？快去打破箱子吧！");
}

function action(mode, type, selection) {
    cm.dispose();
}