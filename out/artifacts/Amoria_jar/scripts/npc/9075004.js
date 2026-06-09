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
	    cm.sendNextPrevS("哦，哥哥，我太想你了！你一直在沉睡，而我不得不炸飞了好多人。", 1,0,9075005);
	else if (chat == 1)	
	    cm.sendNextPrevS("......", 1,0,9075001);
	else if (chat == 2)
        cm.sendNextPrevS("现在我们又在一起了！我们可以征服这个星球上那些愚蠢的猴子，像应该的那样统治一切！", 1,0,9075005);
	else if (chat == 3)
        cm.sendNextPrevS("......", 1,0,9075001);
	else if (chat == 4)
        cm.sendNextPrevS("莲花？你能听到我吗？还记得你的妹妹兰花吗？", 1,0,9075005);
	else if (chat == 5)
        cm.sendNextPrevS("......", 1,0,9075001);
	else if (chat == 6)
	    cm.sendNextPrevS("我以为你说他快醒了，杰利麦！如果你把他的脑子搞坏了，我就把你翻过来从里到外撕碎！", 1,0,9075005);
	else if (chat == 7)
	     cm.sendNextPrevS("......", 1,0,9075001);
	else if (chat == 8)
	     cm.sendNextPrevS("我向你保证，兰花指挥官。莲花非常健康。你想看看吗？来吧……执行Alpha-97程序。", 1,0,9075005);
	else if (chat == 9)
	     cm.sendNextPrevS("我向你保证，兰花指挥官。莲花非常健康。你想看看吗？来吧……执行Alpha-97程序。",1);
    else if (chat == 10) {	
		cm.introEnableUI(0);
        cm.introDisableUI(false);
	    cm.warp(310010000,0);
        cm.forceCompleteQuest(1081);		
        cm.dispose();
    }
}

