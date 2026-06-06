/* Adobis
 * 
 * El Nath: The Door to Zakum (211042300)
 * 
 * Zakum Quest NPC 
 
 * Custom Quest 100200 = whether you can do Zakum
 * Custom Quest 100201 = Collecting Gold Teeth <- indicates it's been started
 * Custom Quest 100203 = Collecting Gold Teeth <- indicates it's finished
 * Quest 7000 - Indicates if you've cleared first stage / fail
 * 4031061 = Piece of Fire Ore - stage 1 reward
 * 4031062 = Breath of Fire    - stage 2 reward
 * 4001017 = Eye of Fire       - stage 3 reward
 * 4000082 = Zombie's Gold Tooth (stage 3 req)
*/

var status;
var mapId = 211042300;
var stage;
var teethmode;

function start() {
    status = -1;
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
	cm.removeAll(4001015);
	cm.removeAll(4001016);
	cm.removeAll(4001018);
    if (status == 0) {
	if (cm.getPlayerStat("LVL") >= 50) {
	    if (cm.getQuestStatus(100200) != 2 && cm.getQuestStatus(100200) != 1) {
		cm.startQuest(100200);
		cm.sendOk("你想获得扎昆地下城任务的许可？好吧，我#b阿多比斯#k……认为你有资格。你在地下城里应该是安全的。但要小心……");
		cm.dispose();
		return;
	    } else if (cm.getQuestStatus(100201) == 1) {
		// if they have gold teeth and the other items, they are good to go
		teethmode = 1;
		cm.sendNext("你带了我要的物品了吗？这不是慈善机构。");
	    } else {
		if (cm.haveItem(4001109)) {
		    cm.sendSimple("嗯……好吧。你看起来完全有资格。\n\r你想先处理哪项任务？ #b\r\n#L0#探索死亡矿山。（第1阶段）#l\r\n#L1#观察扎昆地下城。（第2阶段）#l\r\n#L2#请求精炼。（第3阶段）#l\r\n#L3#进入熔岩中心。#l\r\n#L4#跳过任务。#l");
		} else {
		    cm.sendSimple("嗯……好吧。你看起来完全有资格。\n\r你想先处理哪项任务？ #b\r\n#L0#探索死亡矿山。（第1阶段）#l\r\n#L1#观察扎昆地下城。（第2阶段）#l\r\n#L2#请求精炼。（第3阶段）#l\r\n#L4#跳过任务。#l");
		}
	    }
	    if (cm.getQuestStatus(100201) == 2) { // They're done the quests
		teethmode = 2;
	    }
	} else {
	    cm.sendOk("等你变得更强了再来找我吧。我见过不少冒险者，你还太弱了，无法完成我的任务。");
	    cm.dispose();
	}
    } else if (status == 1) {
	//quest is good to go.
	// if they're working on this quest, he checks for items.
	if (teethmode == 1) {
	    // check for items
	    if (cm.haveItem(4000082,30)) { // take away items, give eyes of fire, complete quest
		if (cm.canHold(4001017)) {
		    cm.removeAll(4031061);
		    cm.removeAll(4031062);
		    cm.gainItem(4000082, -30);
		    cm.gainItem(4001017, 5);
		    cm.sendNext("就是这个。当左边的门打开时，你将能够进入扎昆地下城的祭坛。你需要带着#b#t4001017##k才能通过那扇门进入下一阶段。现在，让我看看能有多少人进入这个地方……？");
		    cm.completeQuest(100201);
		    cm.completeQuest(100200);
		} else {
		    cm.sendNext("嗯……你确定你有制作#r火焰之眼#k所需的所有材料吗？如果是的话，请检查一下你的其他物品栏是否满了。");
		}
		cm.dispose();
	    } else { // go get more
		cm.sendNext("你还没把我的牙齿拿来！一个男人没有牙齿怎么集中精神啊？");
		cm.dispose();
	    }
	    return;
	}
	if (selection == 0) { //ZPQ
	    if (cm.getParty() == null) { //no party
		cm.sendNext("你现在没有组队。你只能以队伍的形式执行此任务。");
		cm.safeDispose();
		return;
	    }
	    else if (!cm.isLeader()) { //not party leader
		cm.sendNext("请让你的队伍队长来和我说话。");
		cm.safeDispose();
		return;
	    }
	    else {
		//check each party member, make sure they're above 50 and still in the door map
		//TODO: add zakum variable to characters, check that instead; less hassle
		var party = cm.getParty().getMembers();
		mapId = cm.getMapId();
		var next = true;

		for (var i = 0; i < party.size(); i++) {
		    if ((party.get(i).getLevel() < 50) || (party.get(i).getMapid() != mapId)) {
			next = false;
		    }
		}

		if (next) {
		    //all requirements met, make an instance and start it up
		    var em = cm.getEventManager("ZakumPQ");
		    if (em == null) {
			cm.sendOk("由于未知原因我无法让你进入。请稍后再试。");
		    } else {
			var prop = em.getProperty("state");
			if (prop.equals("0") || prop == null) {
			    em.startInstance(cm.getParty(), cm.getMap());
			} else {
			    cm.sendOk("另一个队伍已经开始此任务了。请稍后再试。");
			}
		    }
		    cm.dispose();
		} else {
		    cm.sendNext("请确保你的所有成员都符合开始试炼的条件……");
		    cm.dispose();
		}
	    }
	} else if (selection == 1) { //Zakum Jump Quest
	    stage = 1;
	    if (cm.haveItem(4031061) && !cm.haveItem(4031062)) {
		// good to go
		cm.sendYesNo("你已安全通过第1阶段。不过要见到扎昆地下城的BOSS还有很长的路要走。那么，怎么样？准备好进入下一阶段了吗？");
	    } else {
		if (cm.haveItem(4031062))
		    cm.sendNext("你已经有#b火焰之息#k了，不需要再做这个阶段。");
		else
		    cm.sendNext("看起来你还没有通过前一个阶段。请先通过前一个阶段再进入下一关。");
		cm.dispose();
	    }
	} else if (selection == 2) { //Golden Tooth Collection
	    stage = 2;
	    if (teethmode == 2 && cm.haveItem(4031061) && cm.haveItem(4031062)) {
		// Already done it once, they want more
		cm.sendYesNo("如果你想要更多#b火焰之眼#k，你需要给我同样数量的#b30颗僵尸丢失的金牙#k。事实证明金假牙也不耐用，我需要一副新的。\r\n你带牙齿来了吗？");
	    } else if (cm.haveItem(4031061) && cm.haveItem(4031062)) {
		// check if quest is complete, if so reset it (NOT COMPLETE)
		cm.sendYesNo("好的，你已经完成了之前的试炼。现在，只要稍加努力，我就能给你进入战斗所需的#b扎昆种子#k。但首先，我的牙齿不如从前了。你在枫之谷见过牙医吗？我听说矿工僵尸有金牙。我希望你收集#b30颗僵尸丢失的金牙#k，这样我就能做一副假牙了。然后我就能给你你想要的东西了。\r\n所需材料：\r\n#i4000082##b x 30");
				
	    } else {
		cm.sendNext("请先完成之前的试炼再尝试这个。");
		cm.dispose();
	    }
	} else if (selection == 3) { // Enter the center of Lava, quest
	    var dd = cm.getEventManager("FireDemon");
	    if (dd != null && cm.haveItem(4001109)) {
		dd.startInstance(cm.getPlayer());
	    } else {
		cm.sendOk("发生了未知错误。");
	    }
	    cm.dispose();
	} else if (selection == 4) {
	    if (cm.getQuestStatus(100200) == 2) {
		cm.sendOk("你已经完成了我的所有任务。");
		cm.dispose();
	    } else {
	    	cm.sendYesNo("哦，你想贿赂我？哈，我可不会轻易接受。你需要支付#e3亿#n金币我才能让你通过！");
		status = 3;
	    }
	}
    } else if (status == 2) {
	if (stage == 1) {
	    cm.warp(280020000, 0); // Breath of Lava I
	    cm.dispose();
	}
	else if (stage == 2) {
	    if (teethmode == 2) {
		if (cm.haveItem(4031061,1) && cm.haveItem(4031062,1) && cm.haveItem(4000082,30)) { // take away items, give eyes of fire, complete quest
		    if (cm.canHold(4001017)) {
			cm.gainItem(4031061, -1);
			cm.gainItem(4031062, -1);
			cm.gainItem(4000082, -30);
			cm.gainItem(4001017, 5);
			cm.sendNext("就是这个。当左边的门打开时，你将能够进入扎昆地下城的祭坛。你需要带着#b#t4001017##k才能通过那扇门进入下一阶段。现在，让我看看能有多少人进入这个地方……？");
			cm.completeQuest(100201);
			cm.completeQuest(100200);
		    } else {
			cm.sendNext("嗯……你确定你有制作#r火焰之眼#k所需的所有材料吗？如果是的话，请检查一下你的其他物品栏是否满了。");
		    }
		    cm.dispose();
		} else {
		    cm.sendNext("我想你还没有#b30颗僵尸丢失的金牙#k。收集齐全后我也许能精炼它们，为你制作一件特殊的物品……" );
		    cm.dispose();
		}
	    } else {
		cm.startQuest(100201);
		cm.dispose();
	    }
	}
    } else if (status == 4) { //bribe
	if (cm.getPlayer().getMeso() < 300000000) {
	    cm.sendNext("你的金币不够。");
	} else if (!cm.canHold(4001017,5)) {
	    cm.sendNext("请在其他物品栏腾出空间。");
	} else {
	    cm.gainItem(4001017,5);
	    cm.completeQuest(100201);
	    cm.completeQuest(100200);
	    cm.forceCompleteQuest(7000);
	    cm.completeQuest(100203);
	    cm.sendOk("好的，通过吧。");
	    cm.gainMeso(-300000000);
	}
	cm.dispose();
    } else {
	cm.dispose();
    }
}