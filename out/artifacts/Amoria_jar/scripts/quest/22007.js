
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if(mode == 0 && type > 0) {
            qm.dispose();
            return;
        }
        
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}



function end(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("嗯？好奇怪。孵化器没有正确安装。再试一次。");
		    qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("哦，你把#t4032451#带来了吗？来，给我吧。然后我把孵化器给你。");
	if (status == 1)
		qm.sendYesNo("好了，给你。我不知道你怎么使用它，但它是你的了……\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 360 经验");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(360);
		if (qm.haveItem(4032451)) {
			qm.gainItem(4032451, -1);
		}
		qm.evanTutorial("UI/tutorial/evan/9/0" , 1);
		qm.dispose();
		}
	}