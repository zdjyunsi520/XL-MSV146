/* RED 1st impact
	[Riena Strait] Get it Strait
	Lilin
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 2) {
		    qm.sendNext("你太忙了吗？");
            qm.dispose();
        status--;
    }
    if (status == 0) {
		qm.sendNext("里恩出了问题。冰川正在融化！");
	} else if (status == 1) {
        qm.sendNextPrev("...");
    } else if (status == 2) {	  
	    qm.sendAcceptDecline("我需要你的帮助！来找我吧！\r\n\r\n#b#e（点击接受传送到里恩。）#n#k");
    } else if (status == 3) {	 
        qm.sendNext("我们在里恩见。");    
    } else if (status == 4) {	 	   	
		qm.warp(140000000,0);
		qm.forceStartQuest();
		qm.dispose();
	}
}