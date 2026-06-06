/* Return to Masteria
    Kobold Fragrance
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendOk("难道为了拯救城镇，身上沾点#o9390927#的味道不值得吗？如果你改变主意就告诉我……");
            qm.dispose();
        status--;
    }
	if (status == 0) {
	    qm.sendAcceptDecline("这是#b#t2432251##k。拿着。收下吧。");
	} else if (status == 1) {
	   qm.sendNextS("双击#b#t2432251##k来使用。如果丢失了香水，放弃任务然后重新接取。",1);
	} else if (status == 2) {
	   qm.sendNext("击败#o9390915#可不容易。");
	} else if (status == 3) {
	    qm.forceStartQuest();
		qm.gainItem(2432251,1);
	    qm.dispose();	
	}
}