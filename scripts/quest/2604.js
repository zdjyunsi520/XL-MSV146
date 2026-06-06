/* Cygnus revamp
	Dualblade tutorial
	Ryden
    Made by Daenerys
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("真有趣。新成员，你对希波的侮辱毫不动容……这其实是一个圈套，你知道。我们想看看你的反应。你做得相当好。");
	} else if (status == 1) {
      qm.sendNextPrev("你有双刀的天赋。#b我推荐你执行特别任务！");
    } else if (status == 2) {	   
        qm.sendNextPrev("我不能告诉你那是什么样的任务。这由#b希拉女大人#k决定，前提是她认为你有资格。如果没有，你将和所有人一样接受相同的训练。所以，尽量不要惹恼希拉女大人。");	
	} else if (status == 3) {	
	    qm.sendYesNo("当你接受时，我会把你送到希拉女大人那里。");	
	} else if (status == 4) {		
		qm.warp(103050101);
		qm.removeNpc(103050910,1057001);
		qm.forceStartQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}