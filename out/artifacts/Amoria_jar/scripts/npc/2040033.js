/*
	Neru - Ludibrium : Ludibrium Pet Walkway (220000006)
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.haveItem(4031128)) {
	    cm.sendNext("咦，那是我兄弟的信！大概又在骂我不工作什么的了……咦？啊……你是听了我兄弟的建议，训练了宠物才到这里的？太棒了！！既然你辛苦来到了这里，我就提升你和宠物的亲密度吧。");
	} else {
	    cm.sendOk("我兄弟让我负责宠物障碍训练场，但是……因为我离他太远了，总是忍不住想偷懒……嘿嘿，既然看不到他，不如放松几分钟吧。");
	    cm.dispose();
	}
    } else if (status == 1) {
	if (cm.getPlayer().getPet(0) == null) {
	    cm.sendNextPrev("嗯……你真的是带着宠物到这里的吗？这些障碍是给宠物设的。你没带宠物来做什么？？出去！");
	    cm.dispose();
	} else {
	    cm.gainItem(4031128, -1);
	    cm.gainClosenessAll(4);
	    cm.sendNextPrev("怎么样？你是不是觉得和宠物更亲密了？如果有时间的话，再在这个障碍训练场训练一下你的宠物吧……当然，要得到我兄弟的同意。");
	    cm.dispose();
	}
    }
}