/*
	Hak - Cabin <To 武陵>(200000141) / 武陵 Temple(250000100) / 百草堂(251000000)
*/
var menu = new Array("武陵","Orbis","百草堂","武陵");
var cost = new Array(6000,6000,1500,1500);
var hak;
var display = "";
var btwmsg;
var method;

function start() {
    status = -1;
    hak = cm.getEventManager("Hak");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.dispose();
	return;
    } else if(mode == 0) {
	cm.sendNext("好的。如果你改变主意了，请告诉我。");
	cm.dispose();
	return;
    }
    status++;
    if (status == 0) {
	for(var i=0; i < menu.length; i++) {
	    if(cm.getMapId() == 200000141 && i < 1) {
		display += "\r\n#L"+i+"##b"+menu[i]+"("+cost[i]+" 枫币）#k";
	    } else if(cm.getMapId() == 250000100 && i > 0 && i < 3) {
		display += "\r\n#L"+i+"##b"+menu[i]+"("+cost[i]+" 枫币）#k";
	    }
	}
	if(cm.getMapId() == 200000141 || cm.getMapId() == 251000000) {
	    btwmsg = "#bOrbis#k to #b武陵#k";
	} else if(cm.getMapId() == 250000100) {
	    btwmsg = "#b武陵#k to #bOrbis#k";
	}
	if(cm.getMapId() == 200000141 && (hak == null || hak.getProperty("isRiding").equals("true"))) {
	    cm.sendNext("Someone else is on the way to 武陵 right now. Talk to me a little bit more.");
	    cm.dispose();
	}
	if(cm.getMapId() == 251000000) {
	    cm.sendYesNo("你好？我是从 "+btwmsg+" 来回飞行的仙鹤。我整天飞来飞去，所以想，为什么不顺便带些旅行者赚点小钱呢？这对我来说是笔好生意。总之，你觉得怎么样？你想现在就飞往#b"+menu[3]+"#k吗？我只收取#b"+cost[3]+" 枫币#k。");
	} else {
	    cm.sendSimple("你好？我是从 "+btwmsg+" 来回飞行。我整天飞来飞去，所以想，为什么不顺便带些旅行者赚点小钱呢？这对我来说是笔好生意。总之，你觉得怎么样？\r\n"+display);
	}
    } else if(status == 1) {
	if(selection == 2) {
	    cm.sendYesNo("你想现在前往#b"+menu[2]+"#k吗？如果你有#b"+cost[2]+" 枫币#k，我马上带你走。");
	} else {
	    if(cm.getMeso() < cost[selection]) {
		cm.sendNext("你确定你有足够的枫币吗？");
		cm.dispose();
	    } else {
		if(cm.getMapId() == 251000000) {
		    cm.gainMeso(-cost[3]);
		    cm.warp(250000100);
		    cm.dispose();
		} else {
		    if(hak != null && hak.getProperty("isRiding").equals("false")) {
			cm.gainMeso(-cost[selection]);
			hak.newInstance("Hak");
			hak.setProperty("myRide",selection);
			hak.getInstance("Hak").registerPlayer(cm.getChar());
			cm.dispose();
		    } else {
			cm.sendNext("现在有其他人正在前往天空之城的途中。请稍后再来找我。");
			cm.dispose();
		    }
		}
	    }
	}
    } else if(status == 2) {
	if(cm.getMeso() < cost[2]) {
	    cm.sendNext("你确定你有足够的枫币吗？");
	    cm.dispose();
	} else {
	    cm.gainMeso(-cost[2]);
	    cm.warp(251000000);
	    cm.dispose();
	}
    }
}