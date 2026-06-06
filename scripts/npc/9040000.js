/* 
 * Shuang, Victoria Road: Excavation Site<Camp> (101030104)
 * Start of Guild Quest
 */

var status;
var GQItems = Array(1032033, 4001024, 4001025, 4001026, 4001027, 4001028, 4001031, 4001032, 4001033, 4001034, 4001035, 4001037);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	if (cm.getPlayer().hasEquipped(1032033)) {
		cm.sendOk("通往沙雷尼安的道路就在这里。你想做什么？ #b\r\n#L0#开始公会任务#l\r\n#L1#加入公会的公会任务#l");
		cm.dispose();
	} else {
		cm.sendSimple("只有公会会长或副会长才能开始任务。");
	}
	
    } else if (status == 1) {
	if (selection == 0) { //Start
	    if (cm.getPlayerStat("GID") == 0 || cm.getPlayerStat("GRANK") >= 3) { //no guild or not guild master/jr. master
		cm.sendNext("该试炼目前正在进行维护。");
		cm.dispose();
	    } else {
		var em = cm.getEventManager("GuildQuest");
		if (em == null) {
		    cm.sendOk("公会已进入公会任务。请前往频道");
		} else {
		    var prop = em.getProperty("started");

		    if ((prop.equals("false") || prop == null) && em.getInstance("GuildQuest") == null) {
    			for (var i = 0; i < GQItems.length; i++) {
				cm.removeAll(GQItems[i]);
    			}
			em.startInstance(cm.getPlayer(), cm.getPlayer().getName());
			em.setProperty("state", "0");
			cm.guildMessage("已经有人在尝试进行公会任务了。 " + cm.getClient().getChannel() + ".");
		    } else {
			cm.sendOk("你必须加入公会才能参加。")
		    }
		}
		cm.dispose();
	    }
	} else if (selection == 1) { //entering existing GQ
	    if (cm.getPlayerStat("GID") == 0) { //no guild or not guild master/jr. master
		cm.sendNext("你的公会当前没有注册任务。");
		cm.dispose();
	    } else {
		var em = cm.getEventManager("GuildQuest");
		if (em == null) {
		    cm.sendOk("公会已进入公会任务。请前往频道");
		} else {
		    var eim = em.getInstance("GuildQuest");

		    if (eim == null) {
			cm.sendOk("这个任务不属于你的公会。任务公会：");
		    } else {
			if (em.getProperty("guildid") != null && !em.getProperty("guildid").equalsIgnoreCase("" + cm.getPlayerStat("GID"))) {
			if (cm.getPlayer().isGM()) {
			    cm.sendOk("，你的公会： "  + em.getProperty("guildid") + "这个任务不属于你的公会。 " + cm.getPlayerStat("GID"));
			} else {
			    cm.sendOk("很抱歉，公会已经出发了，没有等你。请下次再来。");
			}
			} else if (em.getProperty("started").equals("false")) {
    			for (var i = 0; i < GQItems.length; i++) {
				cm.removeAll(GQItems[i]);
    			}
			    eim.registerPlayer(cm.getPlayer());
			} else {
			    cm.sendOk("很抱歉，公会已经出发了，没有等你。请下次再来。");
			}
		    }
		}
		cm.dispose();
	    }
	}
    }
}