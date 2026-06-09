/* Dawnveil
	Visiting Your Farm
	Clara
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("你好，#b#h ##k。你对怪物怎么看？你可能觉得它们很可怕，会啃你的骨头，对吧？");
	} else if (status == 1) {
      qm.sendNextPrev("如果我告诉你我知道一个地方，你可以养自己的怪物去啃别人的骨头……也许呢？你不想体验一下怪物生活吗？");
    } else if (status == 2) {	    
	  qm.sendAcceptDecline("你想现在听我给你讲解说明吗？\r\n#r（点击接受进入教程。）");
    } else if (status == 3) {
		qm.warp(100000000);
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}