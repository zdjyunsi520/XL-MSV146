/* 
	NPC Name: 		Arec
	Map(s): 		El Nath : Chief's Residence
	Description: 	Quest - [Job Advancement]Blade Lord
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;

	if (status == 0) {
	    if (qm.getPlayer().getJob() == 410) {
		qm.sendNext("你所要做的就是去我告诉你的地方，打败敌人，把战利品带回来...如果你觉得你应付不了，现在就回维多利亚岛吧。奥斯瑞亚不是弱者的地方。");
	} else if (status == 1) {
	    qm.sendNextPrev("在冰原雪域附近的尖崖I处有一座方尖碑。它后面有一条通往雪原圣地的路。触摸那里的圣石，你将被传送到另一个维度。你的敌人在那里等着你。");
	} else if (status == 2) {
	    qm.sendNextPrev("把你的胜利证明带给我，我们来看看你是否准备好了。");
	} else if (status == 3) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
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
	    if (!qm.haveItem(4031059)) {
		qm.sendOk("很好。现在等你拿到#i4031059后再来找我");
		qm.forceStartQuest();
		qm.dispose();
	    } else {
		qm.getPlayer().changeJob(411);
		qm.gainSp(3);
	    qm.sendOk("你已经转职为隐士了。祝你好运，120级再见。");
		qm.forceCompleteQuest();
		qm.dispose();
		 }
    }
}
}