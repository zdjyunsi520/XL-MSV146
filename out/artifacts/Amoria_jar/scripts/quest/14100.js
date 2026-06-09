/* RED Zero
    [Maple Bingo] Bingo Bonanza
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendOk("如果你改变主意就告诉我。你会后悔的！");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendAcceptDeclineS("枫之谷疯狂宾果已经准备好玩了！现在想试试吗？",1);
	} else if (status == 1) {
	    qm.dispose();
	}
}