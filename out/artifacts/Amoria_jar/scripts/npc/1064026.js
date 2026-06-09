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
    if (chat == 0) 
	    cm.sendNextS("我一直在等你。",1);
	else if (chat == 1)	
	    cm.sendNextPrevS("怎么了？我正在处理非常重要的战利品事务。",3);
	else if (chat == 2)
        cm.sendNextPrevS("联盟收到了一个非常令人震惊的消息。在魔法密林的北部区域出现了一个之前从未被发现的区域。",1);
	else if (chat == 3)
        cm.sendNextPrevS("出现了？",3);
	else if (chat == 4)
        cm.sendNextPrevS("是的，非常奇怪。我认为它是被某种古老的魔法隐藏起来的。",1);
	else if (chat == 5)
        cm.sendNextPrevS("带回这个信息的斥候说他在那里感受到了一股非常邪恶的气息。这可能和黑魔法师有关。",1);
	else if (chat == 6)
	    cm.sendNextPrevS("看来我们需要立刻赶过去。",3);
	else if (chat == 7)
	     cm.sendNextPrevS("我已经派遣了西格诺斯骑士团。那个区域的地形很复杂，浓雾覆盖了大部分的景象。",1);
    else if (chat == 8)  
         cm.sendNextPrevS("……那我该做什么？",3);	
	else if (chat == 9) 
	     cm.sendNextPrevS("去四处看看。损失一个冒险家总比损失整个西格诺斯骑士团要好得多。",1);
	else if (chat == 10) 
	     cm.sendNextPrevS("我会把你送到#b#e#m105010000##n#k进行调查。如果发现任何情况请立即汇报，如果你要送命的话，至少发个信号弹什么的。",1);
	else if (chat == 11) 
	     cm.sendNextPrevS("我会用神兽的力量把你送到#b#e#m105010000##n#k。",1);
	else if (chat == 12) {
		cm.introEnableUI(0);
        cm.introDisableUI(false);
        cm.warp(105010000,3);		
        cm.dispose();
    }
}