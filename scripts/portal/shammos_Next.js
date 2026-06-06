/**
 * @author: Eric
 * @script: Shammos portal to continue
*/

function enter(pi) {
	try {
		if (pi.getPlayer().getParty() != null && pi.getMap().getMonsterById(9300275) == null && pi.isLeader()) {
			pi.warpParty(((pi.getPlayer().getMapId() / 100) + 1) * 100 - (pi.getPlayer().getMapId() % 100)); // this is actually JUST (pi.getPlayer().getMapId() + 100), but we'll stick to this.
			pi.playPortalSE();
		} else {
			pi.playerMessage(5, "你无法前往下一个地图，因为沙姆斯还没有到达。沙姆斯必须到达后你才能被传送。");
		}
	} catch (e) {
		pi.playerMessage(5, "Error: " + e);
	}
}