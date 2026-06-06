/* RED Zero
    [New Years] Yut Wars
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendOk("呃，我不能勉强你。不过你会错过一些超棒的奖励哦！");
	    qm.dispose();
	}
	status--
    }
    if (status == 0) {
		qm.sendAcceptDeclineS("你不会孤单的！现在你可以和朋友一起玩尤茨游戏了。你想现在试试吗？",1);
    } else if (status == 1) {	   
		qm.forceStartQuest();
		qm.dispose();
	}
}
