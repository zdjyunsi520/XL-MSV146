/*
	NPC Name: 		Grendel the Really Old
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
	    cm.sendNext("如果你想体验魔法师的感觉，再来找我吧。");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("魔法师拥有华丽的元素魔法和辅助整个队伍的次要魔法。在二转之后，元素魔法对相反属性的敌人将造成大量伤害。");
    } else if (status == 1) {
	cm.sendYesNo("你想体验一下魔法师的感觉吗？");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020200, 0); // Effect/Direction3.img/magician/Scene00
	cm.dispose();
    }
}