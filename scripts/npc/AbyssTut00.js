/* Dawnveil
    Cutscene Root Abyss Ereve
	Neinheart
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
				if (cm.getPlayer().getMapID() ==105010200); {
		cm.sendNextS("怎么回事？我正在进行非常重要的战利品相关事务。",1);
		cm.dispose();
		cm.introEnableUI(0);
        cm.introDisableUI(false);
	}
    if (chat == 0)
	    cm.sendNextS("怎么回事？我正在进行非常重要的战利品相关事务。",1);
	else if (chat == 1)	
	    cm.sendNextPrevS("联盟收到了一些令人震惊的消息。在魔法密林北部出现了一个以前从未被标注的区域。",3);
	else if (chat == 2)
        cm.sendNextPrevS("出现了？",1);
	else if (chat == 3)
        cm.sendNextPrevS("是的，这很奇怪。我认为它被某种古老的魔法隐藏了起来。",3);
	else if (chat == 4)
        cm.sendNextPrevS("带来这个情报的侦察兵说他在那里感受到了一股非常邪恶的气息。这可能与黑魔法师有关。",1);
	else if (chat == 5)
        cm.sendNextPrevS("听起来我们需要立刻赶过去。",1);
	else if (chat == 6)
	    cm.sendNextPrevS("我已经派遣了女皇骑士团。那片区域的地形很复杂，大片的浓雾笼罩着大部分区域。",3);
	else if (chat == 7)
	     cm.sendNextPrevS("...那我该怎么做？",1);
    else if (chat == 8)  
         cm.sendNextPrevS("去四处看看。损失一个探险家远比损失所有女皇骑士团要好得多。",3);	
	else if (chat == 9) 
	     cm.sendNextPrevS("我将把你传送到#b#e#m105010000##n#k进行调查。如果发现任何情况请立即汇报，如果你觉得自己要送命了就发个信号弹什么的。",1);
	else if (chat == 10) 
	     cm.sendNextPrevS("我将用神兽的力量把你传送到#b#e#m105010000##n#k。",1);
	else if (chat == 11) 
	     cm.sendNextPrevS("我将用神兽的力量把你传送到#b#e#m105010000##n#k。",1);
	else if (chat == 12) {
		cm.introEnableUI(0);
        cm.introDisableUI(false);
        cm.warp(105010000,4);		
        cm.dispose();
    }
}
