/* ===========================================================
			Resonance
	NPC Name: 		Minister of Home Affairs
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  Over the Castle Wall (2)
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
			qm.sendNext("真的吗？你有其他方法进入城堡吗？如果不知道的话，就来找我吧。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendYesNo("正如我告诉你的，仅仅打破屏障不值得庆祝。那是因为我们蘑菇王国的城堡完全拒绝任何王国以外的人进入，所以你很难做到。嗯……要找到进入的方法，你能……先调查一下城堡的外墙吗？");
	if (status == 1)
		qm.sendNext("穿过蘑菇森林，当你到达#b抉择之路#k时，朝城堡方向走。祝你好运。");
	if (status == 2){
		//qm.forceStartQuest();
		//qm.forceStartQuest(2322, "1");
		qm.gainExp(11000);
		qm.sendOk("你在那片区域穿行得很好。");
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
		qm.sendOk("嗯，我明白了……所以他们完全封锁了入口和一切。");
	if (status == 1){
		qm.gainExp(11000);
		qm.sendOk("你在那片区域穿行得很好。");
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
	