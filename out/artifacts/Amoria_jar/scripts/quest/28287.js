/* Dawnveil
    [Halloween] Witch Malady's Secret Mission
	Witch Malady
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendAcceptDecline("天哪！天哪！总是这么忙。如果你帮我的话，出于你宽宏大量之心的善意，也许我能给你一些你会发现有用的东西——以魔女玛拉迪之名！");
    } else if (status == 1) {	   
        qm.sendNext("嘿嘿嘿！我从你开口的那一刻就知道你会向我伸出援手。");	
	} else if (status == 2) {	   
	    qm.sendPrevOk("如果你想了解更多你能为我做的事情，请和我谈谈。");	
	} else if (status == 3) {	   
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}