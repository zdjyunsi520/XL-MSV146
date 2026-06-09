/* Cygnus revamp
	Noblesse tutorial
	Kimu
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
	  qm.sendNext("我喜欢在所有新兵来到埃雷布时给他们一个小礼物。新兵看起来要体面，你知道吧？等我们说完话后，按#e#b I键#k#n打开你的背包。双击我给你的那顶帽子！");
	} else if (status == 1) {
	  qm.forceStartQuest();
	  qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/cygnusTutorial/5");
	  qm.gainItem(1003769, 1);
	  qm.dispose();
	} else if  (status == 2)  {
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
		qm.sendOk("我在一堆书中找到了基努。他会告诉你你需要知道的，或者可能只是让你昏昏欲睡。或者两者都有。");
	    qm.dispose();
	} else if (status == 1) {
	    qm.dispose();
	}
  }
}