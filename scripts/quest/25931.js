/* Dawnveil
	Visiting Other Farms
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
		qm.sendNext("你好，#b#h ##k。你难道不想看看别人的农场吗？那样你就知道你比他们强多少了！你再也不用猜测了。");
    } else if (status == 1) {	    
	  qm.sendAcceptDecline("你现在应该开始根据别人不如你来给他们分类了。在我的"基本上就是个仆人"名册里你排在那里，但如果你去拜访你的朋友们，也许我会提升你的排名。你准备好上这堂羞辱课了吗？\r\n#r（点击接受进入教程。）");
    } else if (status == 2) {
		qm.warp(100000000);
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}