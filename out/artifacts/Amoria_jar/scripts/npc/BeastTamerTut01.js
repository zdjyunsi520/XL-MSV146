/* Return to Masteria
    BeastTamer Tutorial
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendNextS("我有最酷的耳朵和尾巴，咚咚咚。超级英雄范儿，咚咚咚。",15);
	} else if (status == 1) {	
	    cm.sendNextS("总有一天我要成为英雄。成为英雄！击鼓！",15);
	} else if (status == 2) {
	    cm.sendNextS("真的哦。Rosanna奶奶每天晚上都给我讲睡前故事...",15);
    } else if (status == 3) {	
	    cm.sendNextPrevS("关于#b五位勇敢的英雄#k封印了可怕的#b黑魔法师#k的故事！\r\n砰砰，轰隆！我迟早也要成为像他们一样的英雄！",15);
	} else if (status == 4) {	
	    cm.sendNextPrevS("关于#b五位勇敢的英雄#k封印了可怕的#b黑魔法师#k的故事！\r\n砰砰，轰隆！我迟早也要成为像他们一样的英雄！",15);	
	} else if (status == 5) {	
        cm.showBeastTamerTutScene1();
		cm.dispose();
    }
}