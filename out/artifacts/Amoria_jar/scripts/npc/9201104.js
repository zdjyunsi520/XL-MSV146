/**
 * @author: Eric
 * @func: Map-wide PvP-state changer. 
 * @desc: Change the state of PvP. (e.g From Free-for-all to Team Deathmatch)
 * @npc: Sage
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
		cm.sendSimple("#e游戏模式 - 自由混战#n。");
	} else if (status == 1) {
		if (selection == 0) {
			cm.sendAcceptDecline("#e游戏模式 - 生存模式#n。");
		} else if (selection == 1) {
			cm.sendAcceptDecline("#e游戏模式 - 公会对抗公会#n。");
		} else if (selection == 2) {
			cm.sendAcceptDecline("#e游戏模式 - (肤色) 种族对战#n。");
		} else if (selection == 3) {
			cm.sendAcceptDecline("#e游戏模式 - 职业对战#n。");
		} else if (selection == 4) {
			cm.sendAcceptDecline("#e游戏模式 - 职业对抗#n。");
		} else if (selection == 5) {
			cm.sendAcceptDecline("#e游戏模式 - 男生对抗女生#n。");
		} else if (selection == 6) {
			cm.sendAcceptDecline("那么，#ePvP游戏模式#n已#r更新#k！#d#yolo#k");
		}
	} else if (status == 2) {
		if (mode > 0) {
			cm.sendOk("那么，#ePvP游戏模式#n已#r更新#k！#d#yolo#k");
			cm.dispose();
		} else
			cm.dispose();
	}
}