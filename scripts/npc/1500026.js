/* Dawnveil
    Cutscene Mole King
	Woonie, Tracy, Mole king Lair
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
	    cm.sendNextS("我好害怕……我们只是在排练话剧而已……",5,1500031);
	else if (chat == 1)	
	    cm.sendNextPrevS("别担心，乌妮……一切都会好起来的！会有人来救我们的……大概吧……",5,1500032);
	else if (chat == 2)
        cm.sendNextPrevS("这是什么？小仙子们来到了鼹鼠王的地盘？你们可真是勇敢的小点心啊！",5);
	else if (chat == 3)
        cm.sendNextPrevS("请放我们走吧。我不想成为鼹鼠的食物！",5,1500032);
	else if (chat == 4)
        cm.sendNextPrevS("哦，我不会吃掉你们的！我要把你们留下来做我的新娘！当然要等你们长大以后，我们鼹鼠可是很有骑士精神的。",5);	
	else if (chat == 5)
        cm.sendNextS("什么？！恶心！",5,1500031);
	else if (chat == 6)
	    cm.sendNextPrevS("女士，如果我冒犯了你，我很抱歉，但我不想一辈子待在这阴暗潮湿的地下！等我解放了所有曼德拉基摆脱你们妖精的压迫统治后，我就会成为上面的统治者，你会爱上我的……只要你愿意的话。",5);
	else if (chat == 7)
	     cm.sendNextPrevS("好了，必须有人来救我们了。",5,1500032);
    else if (chat == 8) {	
		cm.introEnableUI(0);
        cm.introDisableUI(false);
		cm.warp(101073100,3);	
        cm.dispose();
    }
}
