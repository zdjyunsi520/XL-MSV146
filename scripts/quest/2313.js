/* ===========================================================
			Resonance
	NPC Name: 		Head Patrol Officer
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  The Story Behind the Case
=============================================================
Version 1.0 - Script Done.(18/7/2010)
=============================================================
*/



var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendOk("时间不多了。请快点。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("我已经将你的能力告知了我们的#b内政大臣#k。请立即去拜访他。");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendOk("拯救我们的王国！我们相信你！");
		qm.dispose();
	}
}

function end(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.forceCompleteQuest(); 
		qm.gainExp(4000);
		qm.dispose();
}
		