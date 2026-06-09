/* Cygnus revamp
	Noblesse tutorial
	Kiku
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
	  qm.sendYesNo("我不知道迎新会上有没有告诉你，但我们是来对抗黑魔法师的。就目前而言，你还不够格打一把黑色拖把。我来帮你改善这一点。\r\n你准备好行动了吗？ ");
	} else if (status == 1) {
	  qm.forceStartQuest();
	  qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/cygnusTutorial/1");
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
	    qm.sendNextPrev("你见到奇库了吗？他看起来很强硬，但其实是个大软心肠。");
	} else if (status == 1) {
	    qm.sendNextPrev("迎新会快结束了。你想开始你的训练吗？");
	} else if (status == 2) {
	    qm.forceCompleteQuest();
		qm.warp(130030101,0);
	    qm.dispose();
	}
  }
}