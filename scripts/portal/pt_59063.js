/* Return to Masteria
    Arboren Ferry
    Made by Daenerys
*/
function enter(pi) {
    if (pi.getQuestStatus(59063) == 1) {
	pi.playPortalSE();
	pi.warp(866000230);
    } else {
    pi.getPlayer().dropMessage(5, "港口正在施工中。请找其他路...");
	pi.topMsg("港口正在施工中。请找其他路...");
	}

}
