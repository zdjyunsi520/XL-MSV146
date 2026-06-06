/* Return to Masteria
    Discovering the Den
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 1) {
		    qm.sendOk("如果你想听更多我的英雄故事，就告诉我！");
            qm.dispose();
        status--;
    }
	if (status == 0) {
	    qm.sendNext("当时就我一个人，面对十一只#o9390927#！砰！嘭！啪！我把它们全打到抱头鼠窜！它们逃跑的时候甚至呜咽着说出了它们巢穴的位置！");
	} else if (status == 1) {
	    qm.sendYesNoS("（汤姆满嘴跑火车。不管了，看来应该把#m866000130#的事告诉岩石。）",16);
	} else if (status == 2) {
	    qm.sendNext("你不会又去告诉岩石了吧？");	
	} else if (status == 3) {
	    qm.forceStartQuest();
	    qm.dispose();	
	}
}