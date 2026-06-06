/* Pedro
	El Nath : Cheif's Resistance (211000001)
	3rd job advancer/quests.
        Made by TheGM
*/
var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    if (qm.haveItem(4031059, 1) ) {//black charm
                qm.removeAll(4031059);
                qm.sendOk("恭喜！你已经成为一名武僧了！");
                qm.changeJob(521);
				qm.gainSp(3);
                qm.forceCompleteQuest();
                qm.dispose();
            }
	}else{
            qm.sendOk("请去找黑色护身符。");
            qm.dispose();
        }
    }
}