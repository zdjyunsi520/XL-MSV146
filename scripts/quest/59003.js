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
	  qm.sendNext("哟呼！在危险的森林中行走并且我无条件信任的陌生人？你能帮帮我吗？");
	} else if (status == 1) {
      qm.sendNextPrevS("一只会说话的猫！真正的英雄在森林中遇到的果然就是这样的事！",14);
	} else if  (status == 2)  {
	  qm.sendNextPrev("我的名字叫阿比，我遇到了点麻烦。嗯嗯，泡菜……加蛋黄酱的！");
	} else if  (status == 3)  {
	  qm.sendNextPrev("我被困在这个陷阱里好几天了，一直靠幻想我最爱的食物来打发时间。嗯，虾仁披萨……黄瓜皮沙拉……");
	} else if  (status == 4)  {
	  qm.sendAcceptDecline("但现在我真的、真的、超级饿了。能不能按几次#e#b[Ctrl]#k#n来砸开陷阱把我放出来，让我去找点好吃的？");
	} else if  (status == 5)  {
	  qm.sendNextS("没问题。在陷阱旁边按#e#b[Ctrl]#k#n。对一个有志英雄来说小菜一碟！",14);
	} else if  (status == 6)  {
	  qm.sendNextPrev("嗯嗯，酱汁……芒果酸辣酱……");
	} else if  (status == 7)  {
	  qm.forceStartQuest();
	  qm.forceCompleteQuest();
	  qm.warp(866104000,0);
	  qm.dispose();
	}
}