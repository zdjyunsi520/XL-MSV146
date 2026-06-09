var status = -1;
function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (status == 0) {
    	cm.sendNextS("看来我们甩掉他了。当然，我本来可以轻松搞定他的，小菜一碟，但我不确定能不能同时保护你们这些小鬼。*轻笑*你们两个在这里干什么？你们的父母没有警告过你们要远离矿井吗？", 8);
    } else if (status == 1) {
	cm.sendNextPrevS("是我的错！#h0#只是想帮忙！#h0#救了我！", 4, 2159007);
    } else if (status == 2) {
	cm.sendNextPrevS("救了你，嗯？嗯，你穿得确实有点奇怪，小女孩。哦哦。你是黑色之翼的囚犯吗？", 8);
    } else if (status == 3) {
	cm.sendNextPrevS("#b（维塔快速解释了情况。）#k", 4, 2159007);
    } else if (status == 4) {
	cm.sendNextPrevS("但你又是谁？你从哪里来的？为什么要救我们？", 2);
    } else if (status == 5) {
	cm.sendNextPrevS("我是骄傲的反抗军成员，一个秘密对抗和打击黑色之翼的组织。我不能告诉你我的身份，但我的代号是J。", 8);
    } else if (status == 6) {
	cm.sendNextPrevS("现在，请回到镇上去，远离矿井。至于你，维塔，跟我来。如果让你无人保护，我担心黑色之翼会来找你。没有人能像我一样保护你的安全！现在，对我的话保密。反抗军的命运取决于你们的谨慎。", 8);
    } else if (status == 7) {
	cm.sendNextPrevS("等等，你走之前，告诉我一件事。我怎样才能加入反抗军？", 2);
    } else if (status == 8) {
	cm.sendNextPrevS("啊，小家伙，所以你想对抗黑色之翼，是吗？你的心地很善良，但在你达到10级之前，你几乎无法帮助我们。等你到了10级，我会让反抗军的人联系你。这是承诺，小鬼。好了，我必须走了，也许有一天我们会再见面！", 8);
    } else if (status == 9) {
	cm.forceCompleteQuest(23007);
	cm.gainItem(2000000,3);
	cm.gainItem(2000003,3);
	cm.gainExp(90);
	cm.MovieClipIntroUI(false);
	cm.warp(310000000,8);
    	cm.dispose();
    }
}