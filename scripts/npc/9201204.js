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
        cm.sendNext("如果你想变得更强，那就去#b南港#k，那里有港口。登上那艘巨大的船，前往一个叫#b维多利亚岛#k的地方。和这个小岛相比，它的面积简直无法比较。");
    } else if (status == 1) {
        cm.sendNextPrev("在维多利亚岛，你可以选择你的职业。好像叫#b勇士部落#k...？我听说那里有一个光秃秃的荒凉小镇，是战士居住的地方。一片高原...那会是什么样的地方呢？");
    } else if (status == 2) {
        cm.sendPrev("在维多利亚岛，你可以选择你的职业。好像叫#b勇士部落#k...？我听说那里有一个光秃秃的荒凉小镇，是战士居住的地方。一片高原...那会是什么样的地方呢？");
    } else if (status == 3) {
        cm.dispose();
    }
}