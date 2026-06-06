/* RED 1st impact
    First Ability - The Eye Opener
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	if (status == 0) {
	    cm.sendNext("（我感觉体内的光与暗正在融合，汇聚成一种全新的能量）");
    } else if (status == 1) {
	    cm.sendNext("（我已经达到了光与暗之间新的平衡境界）");
    } else if (status == 2) {
	   // qm.sendPrev("流经你的暗与光的魔法");
	    cm.forceStartQuest();
	    cm.forceCompleteQuest();
	//	qm.gainItem(2430874, 1);
        cm.changeJob(2700);
	    cm.dispose();
	}
}