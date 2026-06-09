/* Dawnveil
    [Evolution System] Suspicious Movement on the Path
	 Claudine
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendAcceptDecline("呼叫联盟。黑色之翼正在埃德尔斯坦地下深处的矿井中行动。有令人不安的事情正在发生。需要在#m310010000#紧急求助。请接受。");
	} else if (status == 1) {
		qm.warp(310010000,0);
		qm.forceStartQuest();
		qm.forceCompleteQuest();
        qm.dispose();
	}
}

function end(mode, type, selection) {
      qm.dispose();		
}       
  
  