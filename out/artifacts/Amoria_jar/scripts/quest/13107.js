/* Dawnveil
    [Maple Castle] Halloween Costumaniac
	Vampire Phantom
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
	    qm.sendNextS("你已经从#o9300313#那里拿到了所有的#i3994660##b派对装饰箱#k物品？太棒了！你解决了那些难看的#e#b#o9300313##n#k怪物。谢谢！现在，你想了解更多关于#b签名石板#k的事，对吧？",1);
	} else if (status == 1) {
	    qm.sendNextPrevS("这块石板上刻有数千年前#b枫之城堡#k学生们的签名。文字已经很古老了，但你仍然可以辨认出那些签名。上面还有一段留言：#b'我们正在销毁魔法卷轴并封印城堡，以防止纯洁无辜的知识落入邪恶之手。'", 1);
	} else if (status == 2) {
	    qm.sendNextPrevS("学生们到底在害怕什么？不管是什么，那一定是一个#b巨大的威胁#k。",1);	
	} else if (status == 3) {
		qm.sendNextPrevS("好了，这就是我能给你的全部了。来，这块#b签名石板#k归你了。快去找奈因哈特吧，确保他知道我是如何牺牲自己才得到这些情报的。",1);	
	} else if (status == 4) {
	    qm.sendPrevS("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i3994658# #b签名石板 x1#k\r\n\r\n谢谢你的帮助！去告诉奈因哈特关于石板的事吧！",1);
	    qm.forceCompleteQuest();
		qm.removeAll(3994660);
	    qm.gainItem(3994658, 1);
	    qm.dispose();		
	}
  }
}