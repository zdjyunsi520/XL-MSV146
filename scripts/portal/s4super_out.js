// Viper Transformation quest

function enter(pi) {
    var pt = pi.getEventManager("KyrinTrainingGroundV");
    if (pt == null) {
	pi.warp(120000101, 0);
    } else {
	if (pt.getInstance("KyrinTrainingGroundV").getTimeLeft() < 120000) { // 2 minutes left
	    pi.warp(912010200, 0);
	} else {
	    pi.playerMessage("请再忍耐一下凯林的攻击！");
	    return false;
	}
    }
    return true;
}