/* Cygnus revamp
	Noblesse tutorial
	Kinu + Hawkeye (1102006+1101006)
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	  qm.sendNext("你的第一课是关于埃雷布的。埃雷布是一座漂浮的岛屿，由女皇的力量支撑。它已经静止了好几年了，但曾经像船一样在枫之谷世界周围漂浮。");
	} else if (status == 1) {
      qm.sendNextPrev("目前，我们正集中精力收集关于黑魔法师的情报，并准备我们的军队来面对他。这是非常严肃的事情，让我告诉你。");
	} else if (status == 2) {
      qm.sendNextPrev("骑士们被分为5组，分别围绕光、火、风、雷和暗的精神。每组由一名首席骑士领导，而且...\r\n哦，来了一位。你好，鹰眼。");
	} else if (status == 3) {
	  qm.sendNextPrevS("嘿！我想亲自来欢迎新骑士。我必须向你道歉，因为我把为你烤的松饼落在船上了。", 1,0,1101007);
	} else if (status == 4) {
	  qm.sendNextPrev("鹰眼，这太不合规矩了！");
	} else if (status == 5) {
	  qm.sendNextPrevS("啊，发发善心吧，基努。你不记得你加入骑士团的第一天了吗？没有朋友的话是不是有点不知所措？", 1,0,1101007);
	} else if (status == 6) {
	  qm.sendNextPrev("我想这次我可以破例。#h #，来认识一下鹰眼，雷属性的首席骑士！");
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
	    qm.sendNext("非常荣幸欢迎你加入骑士团。");
	} else if (status == 1) {
	    qm.sendNextPrevS("真是太好了！谢谢！", 3);
	} else if (status == 2) {
	    qm.sendNextPrev("你需要任何东西，直接来找我，老鹰眼，闪电暴风骑士团的船长。请原谅，但你叫什么名字来着？我已经忘了。");	
	} else if (status == 3) {
	    qm.sendNextPrevS("鹰眼，这个新兵的名字叫#h #！好了，走吧！", 1,0,1102006);
	} else if (status == 4) {
	    qm.sendNextPrev("我保证，下次见面时我不会再忘记你的名字了。");
	} else if (status == 5) {
	    qm.sendNextPrevS("终于！我说到哪了？哦对，一旦你的初期训练结束，你将选择你的骑士之路并晋升为\r\n见习骑士！你可以选择的路径有光、火、风、雷和暗。", 1,0,1102006);
	} else if (status == 6) {
	    qm.sendNextPrevS("作为骑士团的骑士，你的职责是保护女皇、击败邪恶的黑魔法师、监视他的手下以及维护枫之谷世界的和平。简单吧？", 1,0,1102006);	
	} else if (status == 7) {
	    qm.sendNextPrevS("我给你的思考够多了。去找基穆上下一课吧。", 1,0,1102006);	
    } else if (status == 8) {
	  qm.forceCompleteQuest();
	  qm.dispose();		
	}
  }
}