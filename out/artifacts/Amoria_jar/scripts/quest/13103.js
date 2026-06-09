/* Dawnveil
    [Maple Castle] A Tall Order
	Cygnus
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.forceStartQuest();
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
	    qm.sendNextS("哦，那些是试卷吗？嗯...看起来像是某所#b魔法学校#k的。我在想这些是不是来自#b枫之谷世界顶级魔法学校#k...",1);
	} else if (status == 1) {
	    qm.sendNextPrevS("我听说过这所学校的传说，但看到这些考试成绩才觉得是真的。呃...我会处理这些...令人尴尬的试卷的。嘿，别看名字！停下停下停下！停！等等！我想到了一些比看试卷上的名字更有趣的#b事情#k！", 1);
	} else if (status == 2) {
	    qm.sendNextPrevS("#b奈因哈特#k在准备派对时显然发现了#b枫之城堡的文物#k。我敢打赌#b奈因哈特#k对这个地方了解很多。你为什么不去跟他聊聊？还有，离那些试卷远点！",1);	
	} else if (status == 3) {
	    qm.sendPrevS("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i2431132##b万圣节面具碎片 x1#k\r\n#i3994650##b幽灵伙伴糖果 x1#k\r\n\r\n谢谢你的帮助！！",1);
	    qm.forceCompleteQuest();
		qm.removeAll(3994656);
	    qm.gainItem(2431132, 1);
		qm.gainItem(3994650, 1);
	    qm.dispose();		
	}
  }
}