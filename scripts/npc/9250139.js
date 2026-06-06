function start() {
	var num = cm.getMap().getNumPlayersInArea(0);
	if (num == cm.getMap().getCharactersThreadsafe().size()) {
		cm.playerMessage(5, "开关上的重量不够。");
		if (cm.getPlayer().getEventInstance() != null) {
			cm.getPlayer().getEventInstance().setProperty("stage8", "0");
		}
	} else {
		cm.playerMessage(5, "开关上的重量不够。");
	}
	cm.dispose();
}

function action(mode, type, selection) {
}