/**
 * @author: Eric
 * @portal: Yulete's Lab
 * @func: Romeo and Juliet GMS-like PQ
*/

function enter(pi) {
	try {
		var em = pi.getEventManager("Juliet");
		if (em != null && em.getProperty("stage4").equals("2")) {
			pi.warp(926110203, 0);
			pi.getPlayer().dropMessage(6, "一位神秘的科学家匆忙离开了实验室，但在此之前召唤了一些怪物。");
			pi.getPlayer().dropNPC(2112010, "是谁不经过允许就闯进我的实验室！！我的实验报告不是给你们的！！！");
		} else {
			pi.playerMessage(5, "传送门还没有开启。");
		}
	} catch (e) {
		pi.getPlayer().dropMessage(5, "Error: " + e);
	}
}