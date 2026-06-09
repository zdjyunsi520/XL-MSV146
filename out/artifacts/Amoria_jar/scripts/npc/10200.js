/*
	NPC Name: 		Athena Pierce
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
	    cm.sendNext("如果你想体验弓箭手的感觉，再来找我吧。");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("弓箭手拥有灵巧和力量，负责远程攻击，为前线战斗的伙伴提供支援。非常擅长利用地形作为战斗的一部分。");
    } else if (status == 1) {
	cm.sendYesNo("你想体验一下弓箭手的感觉吗？");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020300, 0); // Effect/Direction3.img/archer/Scene00
	cm.dispose();
    }
}