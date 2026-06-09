/* Cygnus revamp
	Noblesse tutorial
	Kizan
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("你在这里！我叫你不要动的！你会为此付出代价的。也许不是今天，也许不是明天，但总有一天，当你在执行一个特别烦人的任务时，要知道那是我暗中安排的。现在回训练场去！");
	} else if (status == 1) {	
        qm.forceStartQuest();   
        qm.warp(130030105);		
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
	    qm.sendNext("你没忘记我上节课教的内容吧？！漂亮的Ctrl键来执行普通攻击！\r\n接下来是新的课程！准备好了吗？！");
	} else if (status == 1) {
	    qm.sendNextPrev("技能攻击！它们能造成巨大伤害！按K键打开技能窗口来使用你的技能。\r\n当你更有经验后会获得更多技能，所以永远不要停止训练！");
	} else if (status == 2) {
	    qm.forceCompleteQuest();
	    qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/cygnusTutorial/6");	
	    qm.dispose();		
	}
  }
}