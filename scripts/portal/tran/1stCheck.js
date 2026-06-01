/*
 * È÷³ª¿Â¶óÀÎ ¼Ò½º ½ºÅ©¸³Æ® ÀÔ´Ï´Ù.
 * Translated / Recoded by JakeK from AthenaMS .
 */

function enter(pi) {
    if (pi.getPlayer().getKeyValue("1stJobTrialStatus") == null) {
	pi.getPlayer().message("è¯·å…ˆå’Œå°¤è‰å¯¹è¯ï¼");
        return false;
    } else {
        pi.warp(219000000, "in03");
        return true;
    }
}