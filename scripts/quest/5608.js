/* Dawnveil
    The Festival Effect is in Effect
	Cassandra
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendAcceptDecline("这是一个送礼的节日，而我准备了一些礼物给你？\r\n那是反问句，我当然有准备！\r\n帮我照亮冒险岛世界的心情，收下这份礼物吧。");
    } else if (status == 1) {	   
        qm.sendOk("我总是能指望你来带来欢乐。\r\n还有鳄梨酱，我完全忘了叫你带了。这次我们就不准备薯片了。去现金栏查收礼物吧！");	
	} else if (status == 2) {	   
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(5010114, 1);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	   qm.dispose();		
}