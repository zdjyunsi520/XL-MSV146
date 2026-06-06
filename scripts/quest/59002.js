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
	  qm.sendNext("你和那个英雄的事是怎么回事？你真的觉得自己适合当英雄吗？");
	} else if (status == 1) {
      qm.sendNextPrevS("当然，我要成为一个传奇，就像五位冒险岛英雄一样！",14);
	} else if  (status == 2)  {
	  qm.sendNextPrev("是啊。*哼* 当然了。");
	} else if  (status == 3)  {
	  qm.sendNextPrevS("你不信我？没关系。我该怎么做才能向你证明？",14);
	} else if  (status == 4)  {
	  qm.sendAcceptDecline("你知道东边的#b狼之森林#k吗？连大人们都害怕的地方？去那里……一个人去。也许那样我就会相信你有朝一日能成为英雄。");
	} else if  (status == 5)  {
	  qm.sendNextS("没问题！马上回来！",14);
	} else if  (status == 6)  {
	  qm.sendNextPrev("等，等等！真的？你确定？");
	} else if  (status == 7)  {
	  qm.sendNextPrevS("哈，像我这样的英雄才不怕什么森林！",14);
	} else if  (status == 8)  {
	  qm.forceStartQuest();
	  qm.dispose();
	}
}