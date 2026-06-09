/* Return to Masteria
    The Kobold Threat 2
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 1) {
		    qm.sendNext("我就知道！你一直在和吹牛汤姆说话，对吧？");
            qm.dispose();
        status--;
    }
	if (status == 0) {
	    qm.sendNext("你给我弄来的这些爪子将是我客厅装饰的完美点缀。");
	} else if (status == 1) {
	    qm.sendYesNo("你能再多给我弄一些吗？");
	} else if (status == 2) {
	    qm.sendNext("我靠你了！");	
	} else if (status == 3) {
	    qm.sendNextPrevS("（事情还没有搞清楚。最好再弄15个#b#t4034001##k。）",14);	
	} else if (status == 4) {
	    qm.forceStartQuest();
	    qm.dispose();	
	}
}