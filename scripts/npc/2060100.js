// Carta

function start() {
    if (cm.getQuestStatus(6301) == 1) {
	if (cm.haveItem(4000175)) {
	    cm.gainItem(4000175, -1);
	    if (cm.getParty() == null) {
		cm.warp(923000000);
	    } else {
		cm.warpParty(923000000);
	    }
	} else {
	    cm.sendOk("要打开次元裂缝，你必须拥有一块迷你比安奴斯碎片。这些碎片可以通过击败比安奴斯获得。");
	}
    } else {
	cm.sendOk("我是#b海之魔女卡塔#k。别在我面前耍花样，我可出了名地喜欢把人变成虫子。");
    }
    cm.dispose();
}