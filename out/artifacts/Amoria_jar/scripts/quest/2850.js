/* Dawnveil
    How to Survive
	Dark Lord
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendYesNo("如果你想在废弃都市生存下去，你需要变得更强。也许如果你能完成我的训练，你就有机会了……");
    } else if (status == 1) {	   
        qm.sendYesNo("训练很简单。#b只需消灭盗贼巢穴里的章鱼。我们开始吧#k？");
    } else if (status == 2) {	
		qm.warp(910310100,0);
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) { 
    if (mode == 0 && type == 0) { 
        status--; 
    } else if (mode == -1) { 
        qm.dispose(); 
        return; 
    } else { 
        status++; 
    } 
    if (status == 0) {
	    qm.sendNext("消灭这里所有的章鱼。连你也应该能应付……");
    } else if (status == 1) {
	    qm.sendOk("没关系，我帮你杀了。");
	} else if (status == 2) {	
		qm.warp(103000003);
		qm.gainExp(1242);
		qm.forceCompleteQuest();
		qm.dispose(); 
  } 
 }