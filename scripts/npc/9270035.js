/* Joyce
	Event NPC
*/

var status = -1;
var maps;
var pqMaps;
var selectedMap = -1;
var selectedArea = -1;

function start() {
    action(1, 0, 0);
	if (cm.isGMS()) {
		maps = Array(910001000, 680000000, 230000000, 260000000, 101000000, 211000000, 120030000, 130000200, 100000000, 103000000, 222000000, 240000000, 240070000, 104000000, 220000000, 120000000, 221000000, 200000000, 102000000, 300000000, 801000000, 540000000, 541000000, 250000000, 251000000
    , 551000000, 550000000, 800040000, 261000000, 541020000, 270000000, 682000000, 140000000, 970010000, 103040000, 555000000, 310000000, 200100000, 211060000, 310040300, 970020000, 960000000, 101050000); 
		pqMaps = Array(682010200, 541000300, 220050300, 230040200, 541010010, 551030100, 240040500, 800020110, 801040004, 105030500, 610020004, 102040200, 105100100, 211041100, 610030010, 670010000, 310040200, 889100100, 951000000);
	} else {
		maps = Array(910001000, 680000000, 230000000, 260000000, 101000000, 211000000, 120030000, 130000200, 100000000, 103000000, 222000000, 240000000, 104000000, 220000000, 802000101, 120000000, 221000000, 200000000, 102000000, 300000000, 801000000, 540000000, 541000000, 250000000, 251000000
    , 551000000, 550000000, 800040000, 261000000, 541020000, 270000000, 682000000, 140000000, 970010000, 103040000, 555000000, 310000000, 200100000, 211060000, 310040300, 219000000, 960000000); 
		pqMaps = Array(682010200, 541000300, 220050300, 229000020, 230040200, 541010010, 551030100, 240040500, 800020110, 801040004, 105030500, 610020004, 102040200, 105100100, 211041100, 610030010, 670010000, 674030100, 310040200, 219010000, 219020000);
	}
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (cm.getPlayer().getLevel() < 10 && cm.getPlayer().getJob() != 200) {
	cm.sendOk("欢迎！作为一份见面礼，我送给你这些旅途用品！如果你想购买点卷相关物品，请访问商城或找自由市场的NPC！");
	cm.dispose();
	return;
    }
    if (status == 0) {
	    if (!cm.isQuestFinished(29003) && !cm.haveItem(1142184, 1, true, true)) {
            	if (!cm.haveItem(1002419, 1, true, true) && cm.canHold(1002419,1)) {
                    cm.gainItem(1002419, 1);
            	}
            	if (cm.canHold(1142184,1)) {
                    cm.gainItem(1142184, 1);
                    cm.gainMeso(250000); //yo shit who the hell added this
                    cm.gainItem(2000005, 150);
		            cm.forceCompleteQuest(29003);
			cm.sendOk("请确保有背包空间。");
            	}
            	else {
		    cm.sendOk("你好#r#h ##k！#b\r\n#b#L3#我想去某个地方#l\r\n#L13#我想兑换货币。#l\r\n#L12##b我想和莉琳交谈。#l");
			}
			cm.dispose();
			return;
	    }
        cm.sendSimple("你已经有一个了，我觉得你也不需要。");
    } else if (status == 1) {
        if (selection == 1) {
            if (cm.haveItem(4031348)) {
                cm.sendOk("请检查你是否有足够的空间。");
            } else if (cm.getPlayerStat("LVL") >= 120 && cm.getPlayerStat("LVL") <= 200 && cm.getMeso() >= 10000000) {
                if (!cm.canHold(4031348)) {
                    cm.sendOk("嘿，我想你的金币不够，或者你的等级不在120~200的范围内且没有四转。");
                } else {
                    cm.gainMeso(-10000000);
                    cm.gainItem(4031348, 1);
                }
            } else {
                cm.sendOk("#b#L1#跟随引路#l\r\n#L4#骑兽技能#l\r\n#L5#骑兽商店#l#k");
            }
            cm.dispose();
        } else if (selection == 2) {
            status = 5;
            cm.sendSimple("#b#L0#城镇地图#l\r\n#L1#怪物地图和组队任务地图（50级以上）#l\r\n#L2#次元之镜#l\r\n#L3#网咖#l#k");
        } else if (selection == 3) {
            cm.sendSimple("进行交易前你必须有足够的金币空间。");
        } else if (selection == 5) {
                if (cm.getMeso() >= 1147483647) {
                        cm.sendOk("你没有黄金枫叶。");
                } else if (!cm.haveItem(4001168, 1)){
                        cm.sendOk("感谢你的交易，我已用枫叶兑换给你10亿金币。");
                } else {
                        if (cm.removeItem(4001168)) {
                        	cm.gainMeso(1000000000);
                        	cm.sendOk("请先解锁你的物品。");
			} else {
				cm.sendOk("进行交易前你必须有1,200,000,000金币。");
			}
                }
                cm.dispose();
        } else if (selection == 6) {
                if (cm.getMeso() < 1200000000) {
                        cm.sendOk("请腾出空间。");
                } else if (!cm.canHold(4001168,1)) {
                        cm.sendOk("感谢你的交易，我已用1,200,000,000金币（10亿+20%税）兑换给你黄金枫叶。");
                } else {
                        cm.gainItem(4001168, 1);
                        cm.gainMeso(-1030000000);
                        cm.sendOk("选择你的目的地。#b");
                }
                cm.dispose();
        
        } else if (selection == 11) {
                cm.dispose();
                cm.openShop(7400);
       }
       else if(selection == 12){
            cm.dispose();
            cm.openNpc(9010036);
       }
       else if(selection == 13){
            cm.dispose();
            cm.openNpc(9270037);
       }

    } else if (status == 2) {
            var selStr = "所以你在这里没什么事要做了？你想去#m";
        if (selection == 0) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# #l";
            }
        } else if (selection == 2) {
                cm.dispose();
                cm.openNpc(9010022);
				return;
        } else if (selection == 3) {
				cm.dispose();
				cm.openNpc(9070007);
				return;
        } else {
            for (var i = 0; i < pqMaps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + pqMaps[i] + "# #l";
            }
        }
        selectedArea = selection;

            cm.sendSimple(selStr);
    } else if (status == 3) {
        cm.sendYesNo("你已经拥有这个技能了。" + (selectedArea == 0 ? maps[selection] : pqMaps[selection]) + "#?");
        selectedMap = selection;

    } else if (status == 4) {
	if (selectedMap >= 0) {
        	cm.warp(selectedArea == 0 ? maps[selectedMap] : pqMaps[selectedMap], 0);
	}
        cm.dispose();
        } else if (status == 6) {
        if (selection == 1) {
                if (cm.getPlayer().getSkillLevel(8) > 0 || cm.getPlayer().getSkillLevel(10000018) > 0 || cm.getPlayer().getSkillLevel(20000024) > 0 || cm.getPlayer().getSkillLevel(20011024) > 0 || cm.getPlayer().getSkillLevel(30001024) > 0 || cm.getPlayer().getSkillLevel(30011024) > 0 || cm.getPlayer().getSkillLevel(20021024) > 0) {
                        cm.sendOk("我已经教会你跟随引路技能了。");
                } else {
			if (cm.getJob() == 3001 || (cm.getJob() >= 3100 && cm.getJob() <= 3112)) {
				cm.teachSkill(30011024, 1, 0); // Maker
                        } else if (cm.getJob() >= 3000) {
                                cm.teachSkill(30001024, 1, 0); // Maker
                        } else if (cm.getJob() == 2002 || cm.getJob() >= 2300) {
                                cm.teachSkill(20021024, 1, 0); // Maker
                        } else if (cm.getJob() == 2001 || cm.getJob() >= 2200) {
                                cm.teachSkill(20011024, 1, 0); // Maker
                        } else if (cm.getJob() >= 2000) {
                                cm.teachSkill(20000024, 1, 0); // Maker
                        } else if (cm.getJob() >= 1000) {
                                cm.teachSkill(10000018, 1, 0); // Maker
			//} else if (cm.getJob() == 1 || cm.getJob() == 501 || (cm.getJob() > 522 && cm.getJob() <= 532)) {
			//	cm.teachSkill(10008, 1, 0); // Maker, idk TODO JUMP
                        } else {
                                cm.teachSkill(8, 1, 0); // Maker
                        }
                        cm.sendOk("抱歉，抵抗者角色不能学习骑兽技能。");
                }
                cm.dispose();
        } else if (selection == 4) {
                if (cm.getPlayer().getSkillLevel(80001000) > 0 || cm.getPlayer().getSkillLevel(cm.getPlayer().getStat().getSkillByJob(1004, cm.getPlayer().getJob()))) {
                        cm.sendOk("我已经教会你跟随引路技能了。");
                } else {
                        if (cm.getJob() >= 3000) {
                                cm.sendOk("我已经教会你骑兽技能了。");
				cm.dispose();
				return;
                        }
			cm.teachSkill(cm.isGMS() ? 80001000 : cm.getPlayer().getStat().getSkillByJob(1004, cm.getPlayer().getJob()), 1, 0); // Maker
                        cm.sendOk("我已经教会你骑兽技能了。");
                }
                cm.dispose();
        } else if (selection == 5) {
                cm.openShop(40);
                cm.dispose();
        }
    }
}