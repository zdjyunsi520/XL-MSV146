/* Created by Joris Van Wieren and Robert Dods @ RoyalMS. */
function start() { // This tells the NPC to start (obvious) ok
    cm.sendYesNo("给你！"); // Then it sends yes or no with this message ok
}

function action(mode, type, selection) { // Then this tells you that its looking for a selection
    if(mode > 0) {
	cm.sendOk("好吧...那就算了...");
    cm.warp(18000001);
	} else {
	cm.sendOk("好吧...那就算了...");
  }
}
    cm.dispose();
} 