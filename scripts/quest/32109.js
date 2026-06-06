/* Dawnveil
    [Ellinel Fairy Academy] Cootie's Suggestion
	Cootie
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
	    qm.sendNext("你觉得你能找到失踪的孩子？你打算怎么做？");
	} else if (status == 1) {
	    qm.sendNextPrevS("#b我想看看孩子们的房间。",6);	
    } else if (status == 2) {	 
	    qm.sendNext("你觉得能在他们的物品中找到线索吗？这可能行得通……");
    } else if (status == 3) {
	    qm.sendNextPrevS("你只是想找机会偷我们的东西！伊万娜女校长，我们绝不能听信这些狡猾的陌生人！",4,1500002);	
    } else if (status == 4) {
	    qm.sendNextPrev("我还没有完全信任他们，但这些学生的安全必须是我们最优先考虑的。我们没有选择，只能给他们一些自由。");
    } else if (status == 5) {
	    qm.sendNextPrev("#b#h ##k。我允许你搜查学院。你只能在二楼的宿舍和三楼活动。请务必小心。学院建造时设置了许多防御机关来抵御入侵者，考虑到目前的情况，我觉得没有必要关闭它们。");
	} else if (status == 6) {
	    qm.sendNextPrevS("我会盯着你的，外人。",4,1500002);	
 	} else if (status == 7) {
	    qm.sendNextPrevS("不惜一切代价我们也要找到那些珍贵的孩子们！我在二楼等你。\r\n#b（前往艾丽涅精灵学院的二楼，找到真的很小的库蒂。）",4,1500000);	
	} else if (status == 8) {
		qm.forceCompleteQuest();
		qm.gainExp(1600);
	    qm.dispose();		
	}
  }
}