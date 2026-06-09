/* Dawnveil
    [Ellinel Fairy Academy] Dr. Betty's Measures
	Headmistress Ivana
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNext("我对学院周围的魔法森林进行了大量研究。要在其中穿行很困难，但我发明了一个工具，至少能帮你辨别声音来自哪个方向。\r\n\r\n#i4033830# #b#t4033830#");	
	} else if (status == 1) { 
	    qm.sendAcceptDecline("我不确定它会有多大帮助，但总比没有好。好了，我得走了，不然我的实验室要爆炸了。\r\n\r\n#b（如果你接受，将被传送到艾丽涅精灵学院。）");
	} else if (status == 2) { 
	    qm.forceStartQuest();
		qm.warp(101071300,0);
		qm.gainItem(4033830,1);
		qm.dispose();
	}
}

function end(mode, type, selection) {
if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendNextS("欢迎回来。魔法森林的女孩们帮到你了吗？",4);
	} else if (status == 1) {
	    qm.sendNextPrevS("（你向她们展示了贝蒂博士的装置。）",2);
	} else if (status == 2) {
	   	qm.sendNextPrevS("你是说让我们用这个来自堕落人类文明的肮脏、下流之物来玷污我们的森林？绝不可能！",4,1500002);
	} else if (status == 3) {
	    qm.sendNextPrevS("现在已经没有其他选择了，卡莱恩教务主任。",4,1500009);
	} else if (status == 4) {
	    qm.sendNextPrevS("罗温说得对。我们必须找到那些孩子！",4,1500008);
	} else if (status == 5) {
	    qm.sendNextPrevS("我不能说喜欢这个主意，但我们别无选择。",4);
	} else if (status == 6) {
	    qm.sendNextPrevS("好吧。但如果它污染了我们的森林，后果由你承担……",4,1500002);
	} else if (status == 7) {
	    qm.sendNextPrevS("各位，请安静一分钟。我要打开它了。",4,1500000);
	} else if (status == 8) {
	    qm.introEnableUI(1);
		qm.introDisableUI(true);
		qm.sendNextS("......",4,1500000);
	} else if (status == 9) {
        qm.sendNextS("哇，我能听到整个森林的声音！",4,1500000);
		qm.topMsg("*Chirp*");
	} else if (status == 10) {
	    qm.sendNextS("???",4,1500000); 
		qm.topMsg("*Hoot*");
    } else if (status == 11) {
	    qm.sendNextS("这东西怎么了？为什么只录到一些没用的噪音？",4,1500002);
	} else if (status == 12) {
	    qm.sendNextPrevS("嘘……安静。",4,1500009);
		qm.topMsg("请，请，请救救我们……呜呜呜……");
	} else if (status == 13) {
	    qm.sendNextS("那个声音！",4);
	} else if (status == 14) {
	    qm.sendNextPrevS("是从后面传来的！",4,1500000); 
	} else if (status == 15) {
	    qm.sendNextS("孩子们坚持住！我马上来救你们！",4,1500002);
	} else if (status == 16) {
	    qm.sendNextPrevS("阿尔温，我们应该帮忙。",4,1500009);
	} else if (status == 17) {
	    qm.sendNextS("各位，请等一下！",4);
	} else if (status == 18) {
	    qm.introEnableUI(0);
		qm.introDisableUI(false);
	    qm.forceCompleteQuest();
	    qm.dispose();		
	}
  }
}