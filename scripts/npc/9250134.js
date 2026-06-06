function start() { 
	cm.sendSimple("抱歉，你必须达到120级以上才能进入这些地图。");
} 

function action(mode, type, selection) {
	if (cm.getPlayer().getLevel() <  120) {
		cm.sendOkay("抱歉，你必须达到120级以上才能进入这些地图。");
		cm.dispose();
		return;
	}
	else{
		if (selection == 0){
			cm.warp(502030004, 0);
			cm.dispose();
		}
		else if (selection == 1){
			cm.warp(502030005, 0);
			cm.dispose();
		}
	}
	cm.dispose();
}