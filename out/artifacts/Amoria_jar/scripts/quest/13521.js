/* RED Zero
    [New Years] Traditional Games
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendOk("你今天还可以再玩#b10次#k尤茨游戏。\r\n你今天还可以再玩#r10次#k风筝骑士游戏。\r\n来体验这些超棒的新年游戏吧！");
		qm.dispose();
	}
}