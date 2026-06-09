/* Dawnveil
    [Ellinel Fairy Academy] Fanzy's Magic 2
	Fanzy
    Made by Daenerys
*/
print("test")

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.forceStartQuest();
		qm.gainItem(4033825,5);
		qm.dispose();
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
	    qm.sendNext("你带来#b星光水晶#k了吗？");
	} else if (status == 1) {
	    qm.sendNextPrev("不错不错。我要开始念咒语了。");
	} else if (status == 2) {
		qm.removeAll(4033824);
		qm.removeAll(4033825);
		qm.warp(101070010,0);
		qm.gainExp(4748);
		qm.forceCompleteQuest();
	    qm.dispose();		
	}
  }
}