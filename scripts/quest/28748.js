var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.sendYesNo("我们不能让那些外星人拿走珍贵的矿石！我们需要，我不知道，破坏它们？听起来对。是不是！去狠狠地搞破坏吧！");
    } else if (status == 1) {
	qm.sendNext("好了，一个出色的破坏行动需要一个出色的破坏计划！我有四个非常棒的破坏点子。");
    } else if (status == 2) {
	qm.sendNext("你的第一个破坏任务在丛林山谷。那里有用来爆破的火药堆。引爆一个。顺便的话，我觉得你可以顺便干掉一个银河钻头。它们看起来很不结实。嗐，我打赌如果你往它们挖的洞里扔些石头进去就能炸掉。");
	} else if (status == 3) {
	qm.sendNext("哦，我刚想到另一件能让它们气得跳脚的事！去偷它们的印章然后搞乱它们的电脑！如果我是外星人，我会把那些东西放在我的银河采矿基地入口附近。就希望那些外星人和我们用一样的操作系统吧……");
	} else if (status == 4) {
	qm.forceStartQuest();
	qm.dispose();
    }
}


function end(mode, type, selection) {
	if (mode == 1) {
	status++;
    } else {
	qm.dispose();
	return;
    }
if (status == 0) {
	qm.sendNext("破坏任务进展如何？你在疯狂搞破坏吗？");
    } else if (status == 1) {
	if(qm.itemQuantity(4033192) < 1){
	qm.sendPrev("你破坏得还不够！还有很多事要做！\r\n\r\n#b从外星人那里偷1个 #v4033192##k: (" + qm.getPlayer().getItemQuantity(4033192, false) + "/1)");
    qm.dispose();
	} else {
	qm.sendNextPrev("我就知道你会搞砸它们的行动！");
	}
	} else if (status == 2) {
	qm.sendPlayerToNpc("外星人劫持了很多人质！我还不确定为什么，但我有一个非常强烈的理论认为涉及吃人！他们一定是星际太空厨师！");
	} else if (status == 3) {
	qm.sendNextPrev("嗯，你的理论既荒谬又站不住脚，但这是我们目前最好的了！至少我们知道人质还活着。");
	} else if (status == 4) {
	qm.gainExp(2000000);
	qm.forceCompleteQuest(28748);
	qm.dispose();
    }
}

