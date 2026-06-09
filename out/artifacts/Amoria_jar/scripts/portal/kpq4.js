/*
Kerning PQ: 4th stage to final stage portal
*/

function enter(pi) {
    var eim = pi.getEventManager("KerningPQ").getInstance("KerningPQ");

    // only let people through if the eim is ready
    if (eim.getProperty("4stageclear") == null) { // do nothing; send message to player
	pi.playerMessage(5, "传送门被封锁了。");
    } else {
	pi.warp(910340500, "st00");
    }
}