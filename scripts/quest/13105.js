/* Dawnveil
    [Maple Castle] The Grand Finale
	Neinheart
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
	    qm.sendNextS("你从幻影、拉尼亚和天使破坏者那里收集到#b枫之城堡的线索#k了吗？",1);
	} else if (status == 1) {
	    qm.sendNextPrevS("原来这就是#b枫之城堡#k从历史上消失的原因...如果学生们已经销毁了所有魔法，我怀疑我们还能找到任何残留的魔法力量。\r\n尽管如此，我对那些为了阻止黑魔法师变得更强而做出牺牲的枫之城堡学生们充满了敬意。", 1);
	} else if (status == 2) {
	    qm.sendNextPrevS("谢谢你的帮助，#b#h ##k。我觉得我们不应该再深入探究枫之城堡的历史了。看来它也是黑魔法师邪恶阴谋的又一个受害者。真可惜。",1);	
	} else if (status == 3) {
	    qm.sendNextPrevS("......",1);
        } else if (status == 4) {    
            qm.sendNextPrevS("我不由得注意到你怀疑的目光。忘掉我之前说的关于女皇试卷的事吧。我建议你去忙你自己的事。",1);
	} else if (status == 5) {
	    qm.sendPrevS("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i2431132##b万圣节面具碎片 x4#k\r\n#i3994650##b幽灵伙伴糖果 x1#k\r\n\r\n不管怎样，感谢你帮忙寻找城堡秘密。",1);
	    qm.forceCompleteQuest();
	    qm.removeAll(3994657);
        qm.removeAll(3994658);
        qm.removeAll(3994659);
	    qm.gainItem(2431132, 4);
	    qm.gainItem(3994650, 1);
	    qm.dispose();		
	}
    }
}