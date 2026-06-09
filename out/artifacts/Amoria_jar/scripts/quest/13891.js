/* Dawnveil
    Survivalism Instructions
	Spiegameman
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendSimple("#r生存挑战赛#k是一项技能测试，最多五名玩家在四个迷你游戏中争夺第一名。我会在每小时的#b10#k分、#b30#k分和#b50#k分，在#rQRQRQR#k到#rQRQRQR#k之间给你发送邀请。\r\n\r\n（你今天还可以再玩#b10#k场。）");
		qm.dispose();
	}
}

function end(mode, type, selection) {
	   qm.dispose();		
}