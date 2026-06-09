/**
	NPC Name: 		Han the Broker
	Map(s): 		Magatia
	Description: 	Quest - Test from the Head of Zenumist Society
*/

var status = -1;

function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
	    	qm.sendNext("那就等一下。我去拿东西帮你通过智努密斯特族长的测试。");
	    	qm.forceCompleteQuest();
	    qm.dispose();
}