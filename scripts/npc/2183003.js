load("nashorn:mozilla_compat.js");
importPackage(java.lang);
importPackage(java.util);
importPackage(Packages.tools);
importPackage(Packages.server.quest);
importPackage(Packages.client);
importPackage(Packages.scripting);
importPackage(Packages.handling.channel);
importPackage(Packages.handling);
importPackage(Packages.handling.word);
var status = -1;
var partymembers;

function start() {
    partymembers = cm.getPartyMembers();
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("#e<阿斯旺之战>#n\r\n\r\n你想参加阿斯旺之战吗？\r\n\r\n\r\n#L0#挑战希拉。（120级以上）#l\r\n#L1#参加阿斯旺之战。#l\r\n#L2#阻止敌军。#l");
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getPlayer().getLevel() < 120) {
                cm.sendOk("我钦佩你的勇气，但希拉的力量太强大了。你必须达到120级才能挑战她。")
            } else {
                cm.warp(262030000);
            }
            cm.dispose();
            return;
        } else if (selection == 1) {
            cm.warp(262000300, 0);
            cm.getPlayer().dropMessage(-1, "请通过NPC隆戈里亚斯进入。");
            cm.dispose();
            return;
        }
        var date = Calendar.getInstance().get(Calendar.YEAR)%100+"/"+StringUtil.getLeftPaddedStr(Calendar.getInstance().get(Calendar.MONTH)+"", "0", 2)+"/"+Calendar.getInstance().get(Calendar.DAY_OF_MONTH);
        if (cm.getPlayer().getKeyValue("AswanOffSeason_LastDate") == null) {
            cm.getPlayer().setKeyValue("AswanOffSeason_LastDate", date);
        }
        if (cm.getQuestStatus(7963) == 0 || !cm.getPlayer().getKeyValue("AswanOffSeason_LastDate").equals(date)) {
            cm.forceStartQuest(7963, "0");
            cm.getPlayer().setKeyValue("AswanOffSeason_LastDate", date);
        }
        if (selection == 1) {
            if (cm.getMap(955000100).getCharactersSize() >= 1 || cm.getMap(955000200).getCharactersSize() >= 1 || cm.getMap(955000300).getCharactersSize() >= 1) {
                cm.sendNext("已经有人在接受挑战了，请等待他完成。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getLevel() < 40) {
                cm.sendOk("队伍中有成员低于40级。");
                cm.dispose();
                return;
            }
            if (cm.getQuestCustomData(7963).equals("5") && !cm.getPlayer().isGM()) {
                cm.sendOk("队伍中有成员今天已经完成5次了，请让他明天再来！");
                cm.dispose();
                return;
            }
            /*if (cm.getPlayer().getParty() != null) {
                var em = cm.getEventManager("AswanOffSeason");
                if (!cm.isLeader()) {
                    cm.sendOk("只有队长可以开始。");
                    cm.dispose();
                    return;
                }
                if (!cm.allMembersHere()) {
                    cm.sendOk("你的所有成员都必须在这里！");
                    cm.dispose();
                    return;
                }
                var it = cm.getPartyMembers().iterator();
                var levelPass = true;
                var limitPass = true;
                while (it.hasNext()) {
                    var chr = it.next();
                    if (!checkLevel(chr.getLevel(), 40, 200)) {
                        levelPass = false;
                        break;
                    }
                    if (chr.getQuestNAdd(MapleQuest.getInstance(7963)).getCustomData().equals("5")) {
                        limitPass = false;
                        break;
                    }
                }
                if (!levelPass) {
                   cm.sendOk("你的等级必须在40到200之间才能参与。");
                    cm.dispose();
                    return;
                }
                if (!limitPass) {
                    cm.sendOk("你今天已经完成5次了。");
                    cm.dispose();
                    return;
                }
                //
					    //var marr = cm.getQuestRecord(7963);
	    //var data = //marr.getCustomData();
				//var time = parseInt(data)
                var em = cm.getEventManager("AswanOffSeason");
				//var eim = em.newInstance("AswanOffSeason");
                //eim.setProperty("Global_StartMap", 955000100+"");
               // eim.setProperty("Global_ExitMap", 262000000+"");
               // eim.setProperty("Global_MinPerson", 1+"");
                //eim.setProperty("Global_RewardMap", 262000000+"");
               // eim.setProperty("CurrentStage", "1");
               // eim.startEventTimer(1200000);
			   //cm.sendOk("你在过去24小时内已经挑战过暗黑龙王了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
              /*  cm.prepareAswanMob(955000100, em);
				cm.prepareAswanMob(955000200, em);
				cm.prepareAswanMob(955000300, em);
				var it2 = cm.getPartyMembers();
                var quest = MapleQuest.getInstance(7963);
                    var count = Integer.parseInt(chr.getQuestNAdd(quest).getCustomData());
                    quest.forceStartHillaGang(it2, 2100, (count+1)+"");
cm.worldMessage(6, "[阿斯旺] " + cm.getPlayer().getName() + "的队伍已在频道开始了阿斯旺解放希拉团伙的行动。 "+ cm.getClient().getChannel() +".");
					cm.warpPartyWithExp(955000100, 100);      
                                cm.prepareAswanMob(955000100, em);
				cm.prepareAswanMob(955000200, em);// i shouldn't be doing this, but im to lazy 
				cm.prepareAswanMob(955000300, em);// to add it into portal script lols
                //eim.registerPlayer(cm.getPlayer());
                cm.forceStartQuest(7963, (Integer.parseInt(cm.getQuestCustomData(7963))+1)+"");
				cm.worldMessage(6, "[阿斯旺] " + cm.getPlayer().getName() + " 已在频道开始了阿斯旺解放希拉团伙的行动。 "+ cm.getClient().getChannel() +".");
				cm.warp(955000100,0);
				cm.dispose();
            } else {
                */
            if (!checkLevel(cm.getPlayer().getLevel(), 40, 255)) {
                cm.sendOk("你必须达到40级才能参加阿斯旺之战。");
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("AswanOffSeason");
            var eim = em.newInstance("AswanOffSeason");
            eim.setProperty("Global_StartMap", 955000100+"");
            eim.setProperty("Global_ExitMap", 262000000+"");
            eim.setProperty("Global_MinPerson", 1+"");
            eim.setProperty("Global_RewardMap", 262000000+"");
            eim.setProperty("CurrentStage", "1");
            eim.startEventTimer(1200000);
            cm.prepareAswanMob(955000100, em);
            cm.prepareAswanMob(955000200, em);// i shouldn't be doing this, but im to lazy 
            cm.prepareAswanMob(955000300, em);// to add it into portal script lols
            //cm.resetMap(955000100);
            //cm.resetMap(955000200);
            //cm.resetMap(955000300);
            eim.registerPlayer(cm.getPlayer());
            cm.forceStartQuest(7963, (Integer.parseInt(cm.getQuestCustomData(7963))+1)+"");
            cm.worldMessage(6, "[阿斯旺] " + cm.getPlayer().getName() + " 已进入频道开始了阿斯旺解放希拉团伙行动。 "+ cm.getClient().getChannel() +".");
            //cm.warp(955000100, 0);
            cm.dispose();
        }
    } else {
        cm.sendOk("未完成状态，错误。");
        cm.dispose();
    }
}

function checkLevel(cur, min, max) {
    return (cur >= min && cur <= max);
}