/* ===========================================================
			Resonance
	NPC Name: 		Minister of Home Affairs
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  Exploring Mushroom Forest(1)
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
			qm.sendNext("请不要对蘑菇王国失去信心。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendYesNo("为了营救公主，你必须先穿过蘑菇森林。企鹅王设置了一道强大的屏障，禁止任何人进入城堡。请你为我们调查此事。");
	if (status == 1)
		qm.sendNext("你从当前位置往东走到蘑菇森林就会遇到那道屏障。请小心。我听说那个区域到处都是疯狂的、令人恐惧的怪物。");
	if(status == 2){
		//qm.forceStartQuest();
		//qm.forceStartQuest(2314,"1");
		qm.gainExp(8300);
		qm.sendOk("原来如此，所以那确实不是普通的屏障。干得好。如果没有你的帮助，我们根本不知道那到底是什么。");
		qm.forceCompleteQuest(); 
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
		qm.sendOk("我看到你已经彻底调查了蘑菇森林的屏障。情况怎么样？");
	if (status == 1){
		qm.gainExp(8300);
		qm.sendOk("原来如此，所以那确实不是普通的屏障。干得好。如果没有你的帮助，我们根本不知道那到底是什么。");
		qm.forceCompleteQuest(); 
		qm.dispose();
		}
	}
	