/* Grand Athenaeum
    [Revamp Celebration] Lv. 10 Equipment Gift
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendNext("这份礼物在#b14级#k之后就不再发放了，所以一定要在那之前来找我！");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	  qm.sendYesNo("#b11#k级？！你的等级已经那么高了吗？\r\n嗯，我正在发放装备来帮助你们海盗系的玩家！你现在就要你的吗？");
	} else if (status == 1) {
      qm.gainItem(2430443,1);
	  qm.forceStartQuest();
	  qm.forceCompleteQuest();
	  qm.dispose();
	}
}