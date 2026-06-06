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
	    cm.sendNext("如果你想体验弓箭手的感觉，欢迎再来找我。");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("弓箭手拥有敏捷和力量的双重祝福，擅长远程攻击，为前线战士提供支援。善于利用地形作为作战优势。");
    } else if (status == 1) {
	cm.sendYesNo("你想体验一下弓箭手的感觉吗？");
    } else if (status == 2) {
	cm.DisableUI(false);
	cm.sendNext("我刚把你的UI关了，感觉如何 :D");
	cm.EnableUI(0);
//	cm.warp(1020300, 0); // Effect/Direction3.img/archer/Scene00
	cm.dispose();
    }
}