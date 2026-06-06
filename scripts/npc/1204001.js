/*
 * NPC : Francis (Doll master)
 * Map : 910510200
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	cm.sendNextS("我是弗朗西斯，黑翼团的傀儡师。你竟敢打扰我的傀儡……这让我很生气，但这次就算了。如果我再抓到你这样做，我以黑魔法师的名义发誓，我一定会让你付出代价。", 9);
    } else if (status == 1) {
	cm.sendNextPrevS("#b（黑翼团？嗯？他们是谁？这一切和黑魔法师有什么关系？嗯，也许你应该把这条信息报告给特鲁。）#k", 3);
    } else if (status == 2) {
	cm.forceStartQuest(21760, "0");
	cm.warp(102010100, 3);
	cm.dispose();
    }
}