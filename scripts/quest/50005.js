/*
	NPC Name: 		Asia
	Description: 		Quest - A rush of Core Blaze
*/

var status = -1;

function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.getQuestStatus(50005) == 0) {
	qm.forceStartQuest();
	qm.dispose();
    } else {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    qm.sendNext("（我重新进入了2102年的涩谷。我在那里看到的是……#p9120033#！）\n……你是……！");
	} else if (status == 1) {
	    qm.sendNextPrev("……啊，所以你是被派来击败#o9400296#的。说实话，我真的很抱歉……\n（当他说出这些话时，#p9120033#不敢直视我的眼睛）");
	} else if (status == 2) {
	    qm.sendNextPrev("敌人总部位于六本木的中心，#b六本木商场#k。当然，你不能正面进入。在大厅里，一支叫做#o9400287#的机器人军队驻守在那里，充当安保。你的首要任务是骗过那些机器人进入大楼。\n（当他说这些时，#p9120033#递给了我一个地球仪。）");
	} else if (status == 3) {
	    qm.sendNextPrev("事实上，一直有从涩谷通往六本木商场的地下通道。使用这条通道可以让你在不被#o9400287#发现的情况下进入大楼。这是带你去那里的地图。只是一条直路，所以你应该不会有什么麻烦进入，但我还是把地图给你吧。");
	} else if (status == 4) {
	    qm.sendOk("请前往2102年的涩谷，使用地下通道进入商场。由于商场是总部，你可能会遇到一些你从未见过的怪物。请不要轻敌。祝你好运！");
	    qm.forceCompleteQuest();
	    qm.safeDispose();
	}
    }
}