/* Author: Xterminator
	NPC Name: 		Trainer Frod
	Map(s): 		Victoria Road : Pet-Walking Road (100000202)
	Description: 		Pet Trainer
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
	if (cm.haveItem(4031035)) {
	    cm.sendNext("呃，那是我兄弟的信！大概又在训斥我不干活什么的……呃？啊……你按我兄弟的建议训练了你的宠物并来到了这里，是吗？不错！！既然你辛苦来到了这里，我就提升你和宠物的亲密度吧。");
	} else {
	    cm.sendOk("我兄弟让我管理宠物障碍训练场，但是……因为我离他很远，就忍不住想偷懒……嘿嘿，既然看不见他，就偷闲几分钟吧。");
	    cm.dispose();
	}
    } else if (status == 1) {
	if (cm.getPlayer().getPet(0) == null) {
	    cm.sendNextPrev("嗯……你真的是带着宠物来的吗？这些障碍是给宠物准备的。你不带宠物来干嘛？？出去！");
	} else {
	    cm.gainItem(4031035, -1);
	    cm.gainClosenessAll(2);
	    cm.sendNextPrev("你觉得怎么样？你是不是觉得和宠物更亲近了？如果你有时间，再在这个障碍训练场上训练一下你的宠物吧……当然，要经过我兄弟的同意。");
	}
	cm.dispose();
    }
}