/* RED 1st impact
    First Ability - The Eye Opener
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	if (status == 0) {
	    qm.sendSelfTalk("（我感觉到体内的光与暗正在融合，产生出一种新的能量。）");
    } else if (status == 1) {
	    qm.sendSelfTalk("（我已经达到了光与暗之间新的平衡。）");
    } else if (status == 2) {
	   if (qm.canHold(1142482,1)) {	
	    qm.forceStartQuest();
	    qm.forceCompleteQuest();
		qm.forceCompleteQuest(25521);
		qm.gainItem(1142482, 1);
        qm.changeJob(2712);
	    qm.dispose();
	} else {
	 qm.sendSimple("请确保你的装备栏有空余的格子。");
	 qm.dispose();
	}
	} 
}