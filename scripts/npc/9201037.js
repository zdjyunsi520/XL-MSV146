importPackage(Packages.tools.packet);

function start() {
	if (cm.getPlayer().getItemEffect() > 0) {
		cm.getPlayer().getMap().broadcastMessage(cm.getPlayer(), CField.itemEffect(cm.getPlayer().getId(), cm.getPlayer().getItemEffect()), false);
		cm.sendOk("你没有道具效果。" + cm.getPlayer().getItemEffect() + "#n.");
		cm.dispose();
	} else {
		cm.sendOk("你没有道具效果。");
		cm.dispose();
	}
}