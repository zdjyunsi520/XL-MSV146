var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
	cm.EnableUI(1);
	cm.sendNextNoESC("你是我的手下败将");
	cm.getPlayer().setHp(0);
 	cm.EnableUI(0);
  //  cm.showWZEffect("Effect/SAO.img/effect/cannonshooter/face02");	
	cm.dispose();
/*	    cm.EnableUI(1);
		cm.sendPlayerToNpc("哇……他好大");
	} else if (status == 1) {
	    // cm.EnableUI(1);
		cm.sendNextNoESC("#r我………..");
	} else if (status == 2) {
		cm.sendPlayerToNpc("他……他在试着说话吗？");
	} else if (status == 3) {
		cm.sendNextNoESC("#F........R......E....E......M......E");
	} else if (status == 4) {
		cm.sendPlayerToNpc("嗯，我恐怕得说不行。");
	} else if (status == 5) {
		cm.sendNextNoESC("#r我……要……毁……灭……你");
    } else if (status == 6) {
	    cm.EnableUI(1);
		cm.sendPlayerToNpc("哦呜呜呜我好怕啊");
		} else if (status == 7) {
	    cm.EnableUI(1);
		cm.sendNextNoESC("#r 你应该害怕！");
	
    } else if (status == 6) {
			cm.warp(910142070,0);
	//		cm.spawnMobOnPoint(1210104, 10, 55, 85);
	   cm.EnableUI(0);
	   cm.dispose(); */
}
}