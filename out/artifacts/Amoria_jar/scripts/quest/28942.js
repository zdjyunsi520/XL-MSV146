/* Dawnveil
    Gachapon Reborn
	Maple Administrator
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendAcceptDecline("从今天开始，你会在枫之世界各地看到一个全新的扭蛋机。我知道，因为我有一个储藏室装满了旧扭蛋机，快把我逼疯了……你想听听吗？");
    } else if (status == 1) {	   
        qm.sendOk("有很多变化。/r/n/r/n首先，我们把所有扭蛋机合并到了一个地方。不用再在城镇里跑来跑去找它们了。/r/n第二，我个人对那些……不太有用的物品进行了大清理。例如，对于装备，你只会找到优质的、大部分70级以上的物品。/r/n最后，所有其他扭蛋机都合并了。现在你可以用一张便利的票获得椅子、骑宠和星岩！/r/n/r/n你可能想要兑换那些旧的星岩和骑宠票。去和扭蛋NPC对话兑换即可。不过你可以正常使用现有的椅子票。只需双击即可获得你的奖励！");	
	} else if (status == 2) {	   
		qm.forceStartQuest();
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
	  qm.sendNext("祝你好运拿好奖励！也祝我好运做库存盘点吧。");
	  qm.forceCompleteQuest();
	  qm.dispose();		
	}
  }
}