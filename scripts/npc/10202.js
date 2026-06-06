/*
	NPC Name: 		Dances with Balrog
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
	    cm.sendNext("如果你想体验战士的感觉，再来找我吧。");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("战士拥有巨大的力量和充足的体力，在近战场合中最为出色。普通攻击本身就很强大，再配合复杂的技能，这个职业非常适合爆发性攻击。");
    } else if (status == 1) {
	cm.sendYesNo("你想体验一下战士的感觉吗？");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020100, 0); // Effect/Direction3.img/swordman/Scene00
	cm.dispose();
    }
}