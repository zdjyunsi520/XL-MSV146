/* RED Zero
    [Maple Bingo] B-I-N-G-O
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendOk("等你改变主意再告诉我吧！");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendAcceptDecline("#r[枫之谷疯狂宾果]#k是一个三人宾果游戏。想听听规则吗？");
	} else if (status == 1) {
	    qm.sendNextS("每个账号每天可以参加这个游戏#r最多10次#k。",1);
    } else if (status == 2) {    
	    qm.sendNextPrevS("一旦进入游戏轮到你时，你可以点击宾果板上的任何数字来选择它们。如果你的对手在宾果板上也有相同的数字，那个数字也会被标记。",1);
    } else if (status == 3) {
	    qm.sendNextPrevS("如果有人在时间限制内完成5行，游戏就结束。如果没人完成5行，得分最高的人将赢得游戏。",1);
	} else if (status == 4) {
	    qm.sendNextPrevS("你勾选一个数字获得100分，勾选任务数字（黄色显示）获得200分。完成任意一行宾果将获得500分额外奖励。最后，通过勾选任务数字（黄色显示）完成一行宾果将获得1000分。",1);
	} else if (status == 5) {
	    qm.sendNextPrevS("奖励根据最终排名发放。但是，如果你中途离开或不参与游戏，你将什么都得不到！",1);
	} else if (status == 6) {
	    qm.forceStartQuest();
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
}