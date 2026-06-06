/*
	NPC Name: 		Nineheart
	Description: 		Quest - Cygnus movie Intro
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	qm.sendNext("看你已经10级了，能看出你真的很努力。我觉得是时候让你脱离初心者的身份，正式成为见习骑士了。不过在此之前，我想问你一件事。你决定好要成为哪种骑士了吗？");
    } else if (status == 1) {
	qm.sendNext("成为骑士不只有一条路。事实上，有五条路摆在你面前。由你来选择你想走哪条路，但一定不要选你会后悔的那一条。所以...我提议让你看看成为骑士后的样子。");
    } else if (status == 2) {
	qm.sendNext("怎么样？你有兴趣看看自己成为骑士领袖的样子吗？如果你已经决定了要成为哪种骑士，那你就不一定要看了...#b#L0#让我看看我作为骑士领袖的样子。#l ..#b#L1#不，不用了。");
    } else if (status == 3) {
	qm.sendYesNo("你想现在亲眼看看吗？短片马上就会播放。准备好迎接你即将看到的画面。");
    // IF selected no
    //Talk to me after you have decided what you really want to do. Whatever you choose, you will not miss out or lose privileges, so don't take this too seriously...
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.playerSummonHint(false);
	qm.MovieClipIntroUI(true);
	qm.warp(913040100, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	qm.sendNextPrev("Test");
	qm.dispose();
    }
}