/* Dawnveil
    Evolving Tutorial 2
	Orchid + Gelimer
    Made by Daenerys
*/
var chat = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    mode == 1 ? chat++ : chat--;
    if (chat == 0)
	    cm.sendNextS("哦，弟弟，我好想你！你一直在睡觉，而我不得不炸飞了好多人。",1,9075005);
	else if (chat == 1)	
	    cm.sendNextPrevS("......", 1,0,9075001);
	else if (chat == 2)
        cm.sendNextPrevS("现在我们可以再次在一起了！我们可以统治这整颗星球上愚蠢的猴子，像我们应得的那样！", 1,0,9075005);
	else if (chat == 3)
        cm.sendNextPrevS("......", 1,0,9075001);
	else if (chat == 4)
        cm.sendNextPrevS("洛特斯？你能听到我吗？记得你的姐姐兰花吗？", 1,0,9075005);
	else if (chat == 5)
        cm.sendNextPrevS("......", 1,0,9075001);
	else if (chat == 6)
	    cm.sendNextPrevS("我原以为你说他在醒来，格里梅尔！如果你弄坏了他的脑子，我就把你翻过来从里到外！", 1,0,9075005);
	else if (chat == 7)
	     cm.sendNextPrevS("......", 1,0,9075001);
	else if (chat == 8)
	     cm.sendNextPrevS("我向你保证，兰花指挥官。洛特斯完全没有问题。你想看看吗？来吧……执行Alpha-97程序。", 1,0,9075005);
	else if (chat == 9)
	     cm.sendNextPrevS("我向你保证，兰花指挥官。洛特斯完全没有问题。你想看看吗？来吧……执行Alpha-97程序。",1);
    else if (chat == 10) {	
		cm.introEnableUI(0);
        cm.introDisableUI(false);
		cm.warp(310010000);	
		cm.forceCompleteQuest(1081);	
        cm.dispose();
    }
}

