/* Author: Xterminator
	NPC Name: 		Rain
	Map(s): 		Maple Road : Amherst (1010000)
	Description: 		Talks about Amherst
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
	
    if (status == 0) {
	cm.sendNext("这座小镇叫做#b阿姆赫斯特#k，位于枫之岛的东北部。你知道枫之岛是新手专属的地方吧？我很高兴这附近只有一些弱小的怪物。");
    } else if (status == 1) {
	cm.sendNextPrev("如果你想变得更强，就去#b南港#k吧，那里有个港口。乘坐那艘巨船前往一个叫做#b维多利亚岛#k的地方。和这个小岛相比，那里大得无法比拟。");
    } else if (status == 2) {
	cm.sendPrev("在维多利亚岛，你可以选择你的职业。好像有一个叫做#b勇士部落#k的地方……？我听说那里有一座荒凉的小镇，是战士们居住的地方。一片高地……那会是什么样的地方呢？");
    } else if (status == 3) {
	cm.dispose();
    }
}