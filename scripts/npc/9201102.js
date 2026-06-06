var data = [[10, 0, 2300, "Mercedes"], [10, 0, 3100, "DemonSlayer"], [10, 0, 501, "Cannoneer"], [20, 400, 430, "DualBlade"], [10, 0, 508, "Jett"]];

function action(m,t,s) {
	if(t == 0) {
		cm.sendSimple("糟了！\r\n我不能成为#b");
	} else {
		for (var i = 0; i < data.length; i++) {
		    if(s == i) {
				if (cm.getPlayerStat("LVL") >= data[i][0] && cm.getJob() == data[i][1]) {
					cm.changeJob(data[i][2]);
				} else {
					cm.PlayerToNpc("#k...看来我需要多修炼才能成为其中一员！"+data[i][3]+"你将在达到相应等级时自动转职。");
				}
			}
		}
		if(s == 5) {
			 cm.sendOk("你将在达到相应等级时自动转职。");
		}
		cm.dispose();
	}
}