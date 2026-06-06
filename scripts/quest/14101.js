/* RED Zero
    [Maple Bingo] Count to Bingo
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendOk("每个账号每天可以参加10次枫之谷宾果。也就是说你今天还可以再玩#b10次#k，#h0#! 来匹配吧！");
	    qm.dispose();
	}
}