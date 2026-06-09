/*
	Violet Balloon - LudiPQ Crack on the Wall NPC
**/

var status;
			
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == -1 && cm.isLeader()) {
	var eim = cm.getEventInstance();

	if (eim.getProperty("crackLeaderPreamble") == null) {
	    eim.setProperty("crackLeaderPreamble", "done");
	    cm.sendNext("这是最终阶段，将是对你实力的最终考验。把他掉落的#r次元钥匙#k交给我，你就成功了。祝你好运！");
	    cm.dispose();
	} else {
	    if (cm.haveItem(4001023)) {
		status = 0;
		cm.sendNext("恭喜！你已击败了BOSS#b阿丽莎尔#k。你现在要进入奖励阶段吗？");
	    } else {
		cm.sendNext("请通过击败#b阿丽莎尔#k来获得#b次元钥匙#k。");
		cm.dispose();
	    }
	}
    } else if (status == -1 && !cm.isLeader()) {
	cm.sendNext("让你们的队长将#b阿丽莎尔#k掉落的#r次元钥匙#k交给我，你们就成功了。祝你好运！");
	cm.dispose();
    } else if (status == 0 && cm.isLeader()) {
	var eim = cm.getEventInstance();
	clear(9,eim,cm);
	cm.gainItem(4001023,-1);

	var players = eim.getPlayers();
	cm.givePartyExp_PQ(70, 1.0, players);
	eim.setProperty("cleared", "true"); //set determine
	eim.restartEventTimer(60000);
	var bonusmap = cm.getMap(922011100);
	for (var i = 0; i < players.size(); i++) {
	    players.get(i).changeMap(bonusmap, bonusmap.getPortal(0));
	}
	cm.dispose();
    } else {
	cm.dispose();
    }
}

function clear(stage, eim) {
    eim.setProperty("stage" + stage.toString() + "status","clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
}