/*
Sharen III's Grave Exit - Guild Quest

@Author Lerk
*/

function enter(pi) {
    if (pi.getMap().getReactorByName("ghostgate").getState() == 1 || (pi.getPlayer().getEventInstance() != null && pi.getPlayer().getEventInstance().getProperty("stage4clear") != null && pi.getPlayer().getEventInstance().getProperty("stage4clear").equals("true"))) {
	pi.warp(990000800, 0);
	return true;
    } else {
	pi.playerMessage("此路前方尚未开启。");
	return false;
    }
}