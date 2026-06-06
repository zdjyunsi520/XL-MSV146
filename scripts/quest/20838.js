/* Cygnus revamp
	Noblesse tutorial
	Kia
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("*#b滴答，滴答，嗡嗡，砰砰*");
	} else if (status == 1) {
	    qm.sendNextPrev("啊啊啊啊啊！别这样偷偷接近我。我差点把自己的尾巴切掉了。不管怎样，我是琪亚！你准备好开始考试了吗？");	
	} else if (status == 2) {
	    qm.sendNextPrev("很简单很简单很简单！看到那些箱子了吗？打碎它们！然后消灭跳出来的怪物！你会得到一些考试证明物品！耶！");
	} else if (status == 3) {
	    qm.sendNextPrev("只需用#b普通攻击打碎箱子#k！然后用#b技能击败怪物#k！我需要3个考试证明物品！");	
	} else if (status == 4) {	
        qm.forceStartQuest();
		qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/cygnusTutorial/9");		
		qm.dispose();
	}
}
function end(mode, type, selection) {
if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendNext("你有考试证明物品了吗？");
	} else if (status == 1) {
	    qm.sendNextPrev("耶！我太高兴了！你和我想象的一样厉害！来，拿着这把椅子。我为你做的！累的时候坐在上面，你的HP恢复得更快！我已经把它放进你的设置背包里了！");
	} else if (status == 2) {
      qm.gainItem(3010060,1);
	  qm.removeAll(4033670);
	  qm.forceCompleteQuest();
	  qm.dispose();		
	}
  }
}