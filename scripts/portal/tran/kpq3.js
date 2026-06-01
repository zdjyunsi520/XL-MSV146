/*
Kerning PQ: 3rd stage to 4th stage portal
*/

function enter(pi) {
    var eim = pi.getEventManager("KerningPQ").getInstance("KerningPQ");

    // only let people through if the eim is ready
    if (eim.getProperty("3stageclear") == null) { // do nothing; send message to player
	pi.playerMessage(5, "传送门被封锁了。");
    } else {
	pi.warp(910340400, "st00");
    }
}