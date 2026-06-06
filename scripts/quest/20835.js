/* Cygnus revamp
	Noblesse tutorial
	Neinheart + other chief knights
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("啊，是#b#h #，#k对吧？我是#p1102107#，年轻女皇的军师。你以后会经常见到我的。");
	} else if (status == 1) {
	    qm.sendNextPrev("你不是应该在训练吗？什么紧急事务把你带到这里的，#h #？奇库派你来传达什么消息吗？");
	} else if (status == 2) {
      qm.sendNextPrevS("没有。一只鸟让我跟着它，然后我就到这里了！");
	} else if (status == 3) {
	   qm.sendNextPrevS("#h #，你确定不是跟着我来拿你的欢迎松饼吗？抱歉，有人把它们吃了。", 1,0,1101007);
	} else if (status == 4) {
        qm.sendNextPrevS("而且很好吃。但别闲聊了，我们有工作要做，鹰眼。我们走吧。", 1,0,1101006);
	} else if (status == 5) {
	    qm.sendNextPrevS("很高兴认识你，#h #。我真诚地希望你能成为一名兼具勇气和智慧的骑士。", 1,0,1404008);
	} else if (status == 6) {
        qm.sendNextPrev("我很怀疑。连见习骑士都还没升上，就已经毫无理由地在女皇住所周围瞎转。不可接受！");
	} else if (status == 7) {	
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
	    qm.sendNext("别听老奈因哈特的，#h #。你既然来了，不妨认识一下其他首席骑士。");
	} else if (status == 1) {
	    qm.sendNextPrevS("哦，嗯，好的。我的名字叫#h #。我来这里是为了成为一名骑士，打败黑魔法师，拯救枫之谷世界，还有，最近新增的——成为鸟类的代言人。");
	} else if (status == 2) {
	    qm.sendNextPrevS("这么微薄的技能却有这么大的志向。愿暗影保护你，直到你学会谦虚。", 1,0,1101006);	
	} else if (status == 3) {
	    qm.sendNextPrevS("哦，给这孩子一个机会吧！欢迎来到埃雷布！我们很快会再正式见面的。", 1,0,1102109);
	} else if (status == 4) {
	    qm.sendNextPrevS("除非这孩子先完成训练...成为骑士需要很多努力和奉献。", 1,0,1102110);
	} else if (status == 5) {
	    qm.sendNextPrevS("我不想扫兴，但我们有个会议要参加。抱歉，孩子。我相信我们以后会有机会再聊的。", 1,0,1101003);
	} else if (status == 6) {
	    qm.sendNextPrev("你说得对。米哈逸。我们得走了，#h #。继续你的训练。");	
	} else if (status == 7) {
	  qm.forceCompleteQuest();
	  qm.dispose();		
	}
  }
}