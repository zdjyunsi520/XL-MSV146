/**
	Cloto - Hidden Street : 1st Accompaniment
**/
importPackage(java.awt);

var status;
var curMap;
var playerStatus;
var chatState;
var questions = Array("问题是：收集与战士第一次转职所需的最低等级相同数量的优惠券。",
    "问题是：收集与战士第一次转职所需的最低力量值相同数量的优惠券。",
    "问题是：收集与魔法师第一次转职所需的最低智力值相同数量的优惠券。",
    "问题是：收集与弓箭手第一次转职所需的最低敏捷值相同数量的优惠券。",
    "问题是：收集与飞侠第一次转职所需的最低敏捷值相同数量的优惠券。",
    "问题是：收集与第二次转职所需的最低等级相同数量的优惠券。");
var qanswers = Array(10, 35, 20, 25, 25, 30);
var party;
var preamble;
var stage2combos = Array(Array(0,0,1,1),Array(1,0,0,1),Array(1,1,0,0),Array(1,0,1,0),Array(0,1,0,1), Array(0,1,1,0));
var stage3combos = Array(Array(1,1,0,0,0),Array(1,0,1,0,0),Array(1,0,0,1,0),Array(1,0,0,0,1),Array(0,1,1,0,0),Array(0,1,0,1,0),Array(0,1,0,0,1),Array(0,0,1,0,1),Array(0,0,1,1,0),Array(0,0,0,1,1));
var prizeIdScroll = Array(2040502, 2040505,					// Overall DEX 并 DEF
    2040802,										// Gloves for DEX
    2040002, 2040402, 2040602);						// Helmet, Topwear 并 Bottomwear for DEF
var prizeIdUse = Array(2000001, 2000002, 2000003, 2000006,	// Orange, White 并 Blue Potions 并 Mana Elixir
    2000004, 2022000, 2022003);						// Elixir, Pure Water 并 Unagi
var prizeQtyUse = Array(80, 80, 80, 50,
    5, 15, 15);
var prizeIdEquip = Array(1032004, 1032005, 1032009,			// Level 20-25 Earrings
    1032006, 1032007, 1032010,						// Level 30 Earrings
    1032002,										// Level 35 Earring
    1002026, 1002089, 1002090);						// Bamboo Hats
var prizeIdEtc = Array(4010000, 4010001, 4010002, 4010003,	// Mineral Ores
    4010004, 4010005, 4010006,						// Mineral Ores
    4020000, 4020001, 4020002, 4020003,				// Jewel Ores
    4020004, 4020005, 4020006,						// Jewel Ores
    4020007, 4020008, 4003000);						// Diamond 并 Black Crystal Ores 并 Screws
var prizeQtyEtc = Array(15, 15, 15, 15,
    8, 8, 8,
    8, 8, 8, 8,
    8, 8, 8,
    3, 3, 30);

function start() {
    status = -1;
    mapId = cm.getMapId();
    if (mapId == 910340100)
	curMap = 1;
    else if (mapId == 910340200)
	curMap = 2;
    else if (mapId == 910340300)
	curMap = 3;
    else if (mapId == 910340400)
	curMap = 4;
    else if (mapId == 910340500)
	curMap = 5;
    playerStatus = cm.isLeader();
    preamble = null;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    
    if (curMap == 1) { // First Stage.
	if (playerStatus) { // Check if player is leader
	    if (status == 0) {
		var eim = cm.getEventInstance();
		party = eim.getPlayers();
		preamble = eim.getProperty("leader1stpreamble");

		if (preamble == null) {
		    cm.sendNext("你好。欢迎来到第一阶段。看看四周，你会看到鳄鱼在游荡。击败它们后，它们会掉落 #b优惠券#k。队伍中除队长外的每个成员都应该和我说话，获得一个问题，然后收集与我给出的问题答案相同数量的 #b优惠券#k。\r\n如果你收集到正确数量的 #b优惠券#k，我会给那个玩家一张 #b通行证#k。一旦除队长外的所有队伍成员收集到 #b通行证#k 并交给队长，队长就会把 #b通行证#k 交给我，从而通关。你处理各阶段的速度越快，能挑战的阶段就越多。所以我建议你们迅速利落地完成。那么，祝你们好运。");
		    eim.setProperty("leader1stpreamble", "done");
		    cm.dispose();
		} else { // Check how many they have compared 来 number of party members
		    // Check for stage completed
		    var complete = eim.getProperty(curMap.toString() + "stageclear");
		    if (complete != null) {
			cm.sendNext("请赶快前往下一阶段，传送门已开启！");
			cm.dispose();
		    } else {
			var numpasses = party.size() - 1;
			var strpasses = "#b" + numpasses.toString() + " 张通行证#k";
			if (!cm.haveItem(4001008, numpasses)) {
			    cm.sendNext("抱歉，你的通行证数量不够。你需要给我正确数量的通行证；应该是你的队伍成员数减去队长， " + strpasses + " 才能通关。告诉你的队伍成员去解答问题，收集通行证，然后交给你。");
			    cm.dispose();
			} else {
			    cm.sendNext("你收集了 " + strpasses + "！恭喜通关！我会打开通往下一阶段的传送门。到达那里有时间限制，所以请抓紧。祝你们好运！");
			    clear(1,eim,cm);
			    cm.givePartyExp(100, party);
			    cm.gainItem(4001008, -numpasses);
			    cm.dispose();
			// TODO: Make the shiny thing flash
			}
		    }
		}
	    }
	} else { // Not leader
	    var eim = cm.getChar().getEventInstance();
	    pstring = "member1stpreamble" + cm.getChar().getId().toString();
	    preamble = eim.getProperty(pstring);
	    if (status == 0 && preamble == null) {
		var qstring = "member1st" + cm.getChar().getId().toString();
		var question = eim.getProperty(qstring);
		if (question == null) {
		    // Select a random question 来 ask the player.
		    var questionNum = Math.floor(Math.random() * questions.length);
		    eim.setProperty(qstring, questionNum.toString());
		}
		cm.sendNext("在这里，你需要通过击败与个人问题答案相同数量的鳄鱼来收集 #b优惠券#k。");
	    } else if (status == 0) { // Otherwise, check for stage completed
		var complete = eim.getProperty(curMap.toString() + "stageclear");
		if (complete != null) {
		    cm.sendNext("请赶快前往下一阶段，传送门已开启！");
		    cm.dispose();
		} else {
		    // Reply 来 player correct/incorrect response 来 the question they have been asked
		    var qstring = "member1st" + cm.getChar().getId().toString();
		    var numcoupons = qanswers[parseInt(eim.getProperty(qstring))];
		    var qcorr = cm.haveItem(4001007,(numcoupons+1));
		    var enough = false;
		    if (!qcorr) { // Not 来o many
			qcorr = cm.haveItem(4001007,numcoupons);
			if (qcorr) { // Just right
			    cm.sendNext("回答正确！你因此获得了一张 #b通行证#k。请把它交给队伍队长。");
			    cm.gainItem(4001007, -numcoupons);
			    cm.gainItem(4001008, 1);
			    enough = true;
			}
		    }
		    if (!enough) {
			cm.sendNext("抱歉，回答不正确！请确保你的背包中有正确数量的优惠券。");
		    }
		    cm.dispose();
		}
	    } else if (status == 1) {
		if (preamble == null) {
		    var qstring = "member1st" + cm.getChar().getId().toString();
		    var question = parseInt(eim.getProperty(qstring));
		    cm.sendNextPrev(questions[question]);
		} else { // Shouldn't happen, if it does then just dispose
		    cm.dispose();
		}
	    } else if (status == 2) { // Preamble completed
		eim.setProperty(pstring,"done");
		cm.dispose();
	    } else { // Shouldn't happen, but still...
		eim.setProperty(pstring,"done"); // Just 来 be sure
		cm.dispose();
	    }
	} // End first map scripts
    } else if (2 <= curMap && 3 >= curMap) {
	rectanglestages(cm);
    } else if (curMap == 4) {
	var eim = cm.getChar().getEventInstance();
	var stage5done = eim.getProperty("4stageclear");
	if (stage5done == null) {
	    if (playerStatus) { // Leader
		var passes = cm.getMap().getAllMonstersThreadsafe().size() == 0;
		if (passes) {
		    // Clear stage
		    cm.sendNext("传送门在这里。保重...");
		    party = eim.getPlayers();
		    clear(4,eim,cm);
		    cm.givePartyExp(700, party);
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("Hello. Welcome 来 the 4th stage. Walk around the map 并 you'll be able 来 find some monsters. Defeat all of them, gather up #bthe 张通行证#k, 并 please get them 来 me. Once you earn your pass, the leader of your party will collect them, 并 then get them 来 me 在ce the #bpasses#k are gathered up. The monsters may be familiar 来 you, but they may be much stronger than you think, so please be careful. Good luck!");
		}
		cm.dispose();
	    } else { // Members
		cm.sendNext("欢迎来到第四阶段。在地图中走走，你会找到一些怪物。击败它们全部，收集 #b通行证#k，然后交给你的队长。完成后，回到我这里领取你的奖励。");
		cm.dispose();
	    }
	} else { // Give rewards 并 warp 来 bonus
	    cm.sendNext("传送门已开启！");
	    cm.dispose();
	}
    } else if (curMap == 5) { // Final stage
	var eim = cm.getChar().getEventInstance();
	if (eim == null) {
	    cm.dispose();
	    return;
	}
	var stage5done = eim.getProperty("5stageclear");
	if (stage5done == null) {
	    if (playerStatus) { // Leader
		var passes = cm.haveItem(4001008,1);
		if (passes) {
		    // Clear stage
		    cm.sendNext("恭喜通关所有阶段。保重...");
		    party = eim.getPlayers();
		    cm.gainItem(4001008, -1);
		    clear(5,eim,cm);
		    cm.addPartyTrait("will", 8);
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("Hello. Welcome 来 the 5th 并 final stage. Walk around the map 并 you'll be able 来 find some Boss monsters. Defeat all of them, gather up #bthe 张通行证#k, 并 please get them 来 me. Once you earn your pass, the leader of your party will collect them, 并 then get them 来 me 在ce the #bpasses#k are gathered up. The monsters may be familiar 来 you, but they may be much stronger than you think, so please be careful. Good luck!");
		}
		cm.dispose();
	    } else { // Members
		cm.sendNext("欢迎来到第五阶段，也是最终阶段。在地图中走走，你会找到一些Boss怪物。击败它们全部，收集 #b通行证#k，然后交给你的队长。完成后，回到我这里领取你的奖励。");
		cm.dispose();
	    }
	} else { // Give rewards 并 warp 来 bonus
	    if (status == 0) {
		cm.sendNext("太厉害了！你通关了所有阶段到达了这里。这是你出色表现的小奖品。不过在领取之前，请确保你的消耗栏和其他栏有足够的空位。\r\n#b如果没有空位将无法获得奖品！#k");
	    }
	    if (status == 1) {
		getPrize(eim,cm);
		cm.dispose();
	    }
	}
    } else { // No map found
	cm.sendNext("无效地图，这意味着阶段未完成。");
	cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty(stage.toString() + "stageclear","true");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");

    var mf = eim.getMapFactory();
    map = mf.getMap(910340100 + (stage * 100));
    var nextStage = eim.getMapFactory().getMap(910340100 + (stage * 100));
    var portal = nextStage.getPortal("next00");
    if (portal != null) {
	portal.setScriptName("kpq" + (stage+1).toString());
    }
}

function failstage(eim, cm) {
    cm.showEffect(true, "quest/party/wrong_kor");
    cm.playSound(true, "Party1/Failed");
}

function rectanglestages(cm) {
    // Debug makes these stages clear without being correct
    var eim = cm.getChar().getEventInstance();
    if (curMap == 2) {
	var nthtext = "2nd";
	var nthobj = "ropes";
	var nthverb = "hang";
	var nthpos = "挂在绳子上太低了";
	var curcombo = stage2combos;
	var objset = [0,0,0,0];
    } else if (curMap == 3) {
	var nthtext = "3rd";
	var nthobj = "platforms";
	var nthverb = "stand";
	var nthpos = "站得太靠近边缘";
	var curcombo = stage3combos;
	var objset = [0,0,0,0,0];
    }
    if (playerStatus) { // Check if player is leader
	if (status == 0) {
	    // Check for preamble
	    party = eim.getPlayers();
	    preamble = eim.getProperty("leader" + nthtext + "preamble");
	    if (preamble == null) {
		cm.sendNext("你好。欢迎来到 " + nthtext + " 阶段。在我旁边，你会看到一些 " + nthobj + "。在这些 " + nthobj + " 中，#b有3个连接着通往下一阶段的传送门#k。你只需要让 #b3名队伍成员或3件物品找到正确的 " + nthobj + " 并 " + nthverb + " 在上面。#k\r\n但是，如果你 " + nthpos + " 则不算作答案；请站在 " + nthobj + " 的中间位置才能算作正确答案。另外，只允许3名队伍成员站在 " + nthobj + " 上。一旦他们 " + nthverb + "ing 在 them, the leader of the party must #bdouble-click me 来 check 并 see if the answer's correct or not#k. Now, find the right " + nthobj + " 来 " + nthverb + " 吧！");
		eim.setProperty("leader" + nthtext + "preamble","done");
		var sequenceNum = Math.floor(Math.random() * curcombo.length);
		eim.setProperty("stage" + nthtext + "combo",sequenceNum.toString());
		cm.dispose();
	    } else {
		// Otherwise, check for stage completed
		var complete = eim.getProperty(curMap.toString() + "stageclear");
		if (complete != null) {
		    var mapClear = curMap.toString() + "stageclear";
		    eim.setProperty(mapClear,"true"); // Just 来 be sure
		    cm.sendNext("请赶快前往下一阶段，传送门已开启！");
		} else { // Check for people 在 ropes 并 their positions
		    var 来tplayers = 0;
		    for (i = 0; i < objset.length; i++) {
			var present = cm.getMap().getNumPlayersItemsInArea(i);
			if (present != 0) {
			    objset[i] = objset[i] + 1;
			    来tplayers = 来tplayers + 1;
			}
		    }
		    // Compare 来 correct positions
		    // First, are there 3 players 在 the correct positions?
		    if (totplayers == 2) {
			var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
			// Debug
			// Combo = curtestcombo;
			var testcombo = true;
			for (i = 0; i < objset.length; i++) {
			    if (combo[i] != objset[i])
				testcombo = false;
			}
			if (testcombo) {
			    // Do clear
			    clear(curMap,eim,cm);
			    var exp = (Math.pow(2,curMap) * 50);
			    cm.givePartyExp(exp, party);
			    cm.dispose();
			} else { // Wrong
			    // Do wrong
			    failstage(eim,cm);
			    cm.dispose();
			}
		    } else {
			cm.sendNext("看来你还没有找到那2个 " + nthobj + "。请尝试不同的 " + nthobj + ". Only 2 are allowed 来 " + nthverb + " 在 " + nthobj + ", 并 if you " + nthpos + " 可能不算作答案，请记住这一点。继续加油！");
			cm.dispose();
		    }
		}
	    }
	} else {
	    var complete = eim.getProperty(curMap.toString() + "stageclear");
	    if (complete != null) {
		var target = eim.getMapInstance(910340100 + (curMap * 100));
		var targetPortal = target.getPortal("st00");
		cm.getChar().changeMap(target, targetPortal);
	    }
	    cm.dispose();
	}
    } else { // Not leader
	if (status == 0) {
	    var complete = eim.getProperty(curMap.toString() + "stageclear");
	    if (complete != null) {
		cm.sendNext("请赶快前往下一阶段，传送门已开启！");
	    } else {
		cm.sendNext("Please have the party leader talk 来 me.");
		cm.dispose();
	    }
	} else {
	    var complete = eim.getProperty(curMap.toString() + "stageclear");
	    if (complete != null) {
		var target = eim.getMapInstance(910340100 + (curMap * 100));
		var targetPortal = target.getPortal("st00");
		cm.getChar().changeMap(target, targetPortal);
	    }
	    cm.dispose();
	}
    }
}

function getPrize(eim,cm) {
    var itemSetSel = Math.random();
    var itemSet;
    var itemSetQty;
    var hasQty = false;
    if (itemSetSel < 0.3)
	itemSet = prizeIdScroll;
    else if (itemSetSel < 0.6)
	itemSet = prizeIdEquip;
    else if (itemSetSel < 0.9) {
	itemSet = prizeIdUse;
	itemSetQty = prizeQtyUse;
	hasQty = true;
    } else {
	itemSet = prizeIdEtc;
	itemSetQty = prizeQtyEtc;
	hasQty = true;
    }
    var sel = Math.floor(Math.random()*itemSet.length);
    var qty = 1;
    if (hasQty)
	qty = itemSetQty[sel];
    cm.gainItem(itemSet[sel], qty);
	if (cm.isGMS()) { //TODO JUMP
		cm.gainItem(4001531, 1);
	}
    cm.gainNX(1000);
	cm.gainExp_PQ(70, 1.5);
    cm.removeAll(4001007);
    cm.removeAll(4001008);
    cm.getPlayer().endPartyQuest(1201);
    cm.warp(cm.isGMS() ? 910340600 : 910340700, 0);
}