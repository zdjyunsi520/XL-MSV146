/* Return to Masteria
	BeastTamer Tutorial
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	  qm.sendNext("现在事情处理好了，让我再自我介绍一下。我是#b阿比#k，动物冠军团骄傲的成员！");
	} else if (status == 1) {
	  qm.sendNextPrevS("我是#b#h0##k。没听说过动物冠军团，除了你已经提过的那五亿次之外。",14);
	} else if  (status == 2)  {
	  qm.sendNextPrev("我们是最勇敢中最勇敢的！冠军中的冠军！我们是踏上疯狂冒险之旅的#b四只超级动物#k，注定要成为伟大的英雄！");
	} else if  (status == 3)  {
	  qm.sendNextPrevS("你们和我一样！我要成为像五位冒险岛英雄一样伟大的人！",14);
	} else if  (status == 4)  {
	  qm.sendNextPrev("天哪，我是五位冒险岛英雄的头号猫咪粉丝！嘿！灵光一闪！#b你要不要加入我们？#k这样就有五名动物冠军了，就像五位冒险岛英雄一样！");
	} else if  (status == 5)  {
	  qm.sendNextPrevS("但我不是动物！",14);
	} else if  (status == 6)  {
	  qm.sendNextPrev("你不是吗？你看起来像动物，只是长了一张人类的脸和身体。");
	} else if  (status == 7)  {
	  qm.sendNextPrevS("我是人类！只是长了动物耳朵和动物尾巴。天壤之别！",14);
	} else if  (status == 8)  {
	  qm.sendAcceptDecline("你就继续这么自我安慰吧。总之，你想不想加入我们？");
	} else if  (status == 9)  {
	  qm.sendNextS("嗯……当然！有志英雄应该团结在一起！",14);
	} else if  (status == 10)  {
	  qm.sendNext("猫咪舞！耶！准备好了就告诉我！");
	} else if  (status == 11)  {
	  qm.forceStartQuest();
	  qm.dispose();
	}
}