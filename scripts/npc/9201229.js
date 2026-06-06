/**
 * @author: Eric
 * @rev: 3.0 - Added in JQ Leveling.
 * @notes: Warp now warps the world of JQers not just the map.
*/

importPackage(Packages.client);

function start() {
   action(1, 0, 0);
}


function action(mode, type, selection) {
 if (cm.getPlayer().getMapId() == cm.getEventMap()){
        cm.warpMapAutoJQers(910000000); // warps the entire WORLD of ONLY people in the JQ map! :D
		cm.gainCurrency(150);
        cm.setEventMap(0);
        cm.serverNotice("在频道 " + cm.getName() + "赢得了JQ并获得了150个Wiz硬币！ " + cm.getPlayer().getClient().getChannel() + "你在这里做什么？\r\n目前没有正在进行的#r自动JQ#k！");
        cm.dispose();
    } else { 
	  if (cm.getPlayer().isGM()) {
		cm.warp(100000000, 0);
		cm.gainJQExp(MapleCharacter.rand(10, 100));
        cm.dispose();
		} else if (cm.getPlayer().getJQLevel() < 11) {
		cm.warp(100000000, 0);
		cm.gainJQExp(MapleCharacter.rand(10, 100));
        cm.dispose();
	    } else {
		cm.sendOk("你在这里做什么？\r\n目前没有正在进行的#r自动JQ#k！");
		cm.dispose();
		}
    }
}