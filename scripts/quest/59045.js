/* Return to Masteria
    Den Expedition 1
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 1) {
		    qm.sendOk("切。胆小鬼。和我不同，你一定很怕狗头人。");
            qm.dispose();
        status--;
    }
	if (status == 0) {
	    qm.sendNext("还记得上次我提到的那个狗头人巢穴吗？我有件事想请你帮忙。我在那里丢了东西……我想一定是它们中的一个捡到了，塞进了它们的袋子里。");
	} else if (status == 1) {
	    qm.sendYesNo("（你能从#m866000130#的#o9390914#怪物那里获得30个#t4034003#吗？\r\n（如果你接受，将被传送到那里。）");
	} else if (status == 2) {
	    qm.sendNext("谢谢！如果你找到了我要的东西，我保证会到处宣扬你的丰功伟绩！");	
	} else if (status == 3) {
	    qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.forceStartQuest(59046);
		qm.forceCompleteQuest(59046);
		
	    qm.dispose();	
	}
}
