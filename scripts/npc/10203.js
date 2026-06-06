/*
	NPC Name: 		Dark Lord
	Map(s): 		Maple Road : Spilt road of choice
	Description: 		Job tutorial, movie clip
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    cm.sendNext("如果你想体验飞侠的感觉，再来找我吧。");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("飞侠是运气、灵巧和力量的完美结合，擅长对毫无防备的敌人发动突袭。高回避和速度让飞侠可以从各种角度攻击敌人。");
    } else if (status == 1) {
	cm.sendYesNo("你想体验一下飞侠的感觉吗？");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020400, 0); // Effect/Direction3.img/rouge/Scene00
	cm.dispose();
    }
}