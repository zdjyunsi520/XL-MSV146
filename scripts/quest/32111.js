/* Dawnveil
    [Ellinel Fairy Academy] Combing the Academy 2
	Cootie
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendAcceptDecline("如果这张纸条是准确的，他们秘密进行的事情应该就在宿舍附近。男生宿舍延伸到二楼的大部分区域。我们去那里试试。");	
	} else if (status == 1) { 
	    qm.sendNext("我，呃，我在这里等你完成。我需要四处看看……\r\n#b（检查二楼两端的宿舍。）");	
	} else if (status == 2) {
		qm.forceStartQuest();
		qm.gainExp(4000);
		qm.dispose();
	}
}

function end(mode, type, selection) { 
        qm.dispose(); 
 }
