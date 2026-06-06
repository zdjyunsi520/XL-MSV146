


/*
 * È÷³ª¿Â¶óÀÎ ¼Ò½º ½ºÅ©¸³Æ® ÀÔ´Ï´Ù.
 * Translated / Recoded by JakeK from AthenaMS .
 */


function enter(pi) {
    if (pi.getQuestStatus(2605) >= 1 && pi.getQuestStatus(2609) <= 1) {
	pi.warp(103050500, 0);
	pi.playPortalSE();
	return true;
    } else {
	pi.getPlayer().dropMessage(5, "é—¨é”ç€ï¼Œä½ æ— æ³•è¿›å…¥ã€‚");
	return false;
    }
    
}
