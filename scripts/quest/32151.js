/* Dawnveil
    [Theme Dungeon] Ellinel Fairy Academy
	Claudine
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendAcceptDecline("你看起来状态不错。要不要再接一个任务？我收到了来自#b艾丽涅精灵学院");
    } else if (status == 1) {	   
        qm.sendNext("一个年轻的人类进入了#b艾丽涅精灵学院#k，引起了不小的骚动。");
    } else if (status == 2) {
        qm.sendNextPrev("我不清楚所有细节，但我知道我们和精灵的关系已经很紧张了。你愿意去魔法森林附近的北部森林找#b范奇#k吗？");	
	} else if (status == 3) {	
	    qm.sendYesNo("范奇会带你进入精灵的国度。如果你愿意，我可以直接把你送到他那里。");	
	} else if (status == 4) {
		qm.warp(101030000,0);
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
	    qm.sendNext("你就是我叫来帮忙处理艾丽涅精灵学院骚动的人吗？");
    } else if (status == 1) {
	    qm.sendNextPrevS("嗯，当然？",15);
	} else if (status == 2) {	
	    qm.sendNextPrev("你看起来没有我期望的那么强壮。不过，你很有名气，所以这件事就交给你了。");
	} else if (status == 3) {
	    qm.forceCompleteQuest();
		qm.gainExp(1200);
		qm.dispose(); 
  } 
 }
