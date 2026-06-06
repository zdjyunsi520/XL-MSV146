/*
	NPC Name: 		Cai Shen
	Map(s): 		Everywhere, towns
	Description: 		Introduction to Gachapon
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	cm.sendNext("你甚至可能获得稀有物品。转蛋券可在商城购买。你想试试运气吗？");
    } else if (status == 1) {
	cm.sendPrev("你甚至可能获得稀有物品。转蛋券可在商城购买。你想试试运气吗？");
    } else if (status == 2) {
	cm.dispose();
    }
}