/*
	NPC Name: 		Kyrin
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
	    cm.sendNext("如果你想体验海盗的感觉，再来找我吧。");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("海盗拥有出色的灵巧和力量，使用枪械进行远程攻击，同时在近战场合使用蛮力。枪手使用元素子弹增加伤害，而格斗家则变身为不同形态以达到最大效果。");
    } else if (status == 1) {
	cm.sendYesNo("你想体验一下海盗的感觉吗？");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020500, 0); // Effect/Direction3.img/pirate/Scene00
	cm.dispose();
    }
}