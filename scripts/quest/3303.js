/*
	NPC Name: 		Han the Broker
	Map(s): 		Magatia
	Description: 	Quest - Test from the Head of Alcadno Society
*/

var status = -1;
var oreArray;

function start(mode, type, selection) {
}

function end(mode, type, selection) {
	    qm.sendNext("那就等一下。我去拿东西帮你通过阿尔卡诺族长的测试。");
	    qm.forceCompleteQuest();
	    qm.dispose();
}