/**
 * @author: Eric
 * @npc: Juliet
 * @func: Romeo and Juliet GMS-like PQ
*/
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	(mode == 1 ? status++ : mode == 0 ? status-- : cm.dispose());
	var em = cm.getEventManager("Juliet");
	if (status == 0) {
		if (cm.getPlayer().getMapId() == 261000021) {
			cm.sendSimple("#e组队任务：罗密欧与朱丽叶>#n\r\n玛加提亚面临着严重的威胁。我们需要勇敢的冒险者来响应我们的号召。#b\r\n#L0#听朱丽叶的故事。\r\n#L1#开始任务。\r\n#L2#寻找队伍。\r\n#L3#用阿尔卡德诺弹珠制作项链。\r\n#L4#将两条项链合并为一条。#k"); //#L5#Check the number of tries left for today.
		} else {
		switch(cm.getPlayer().getMapId()) {
			case 926110000:
			case 926110001:
			case 926110100:
			case 926110300:
			case 926110400:
				status = 16;
				cm.sendSimple("有什么可以帮你的吗？#b\r\n#L0#我在哪里？\r\n#L1#我想离开这里！");
				break;
			case 926110200:
				if (cm.haveItem(4001131,1)) {
					cm.sendOk("哦，我写的信！谢谢你！"); // TODO.. :(
					cm.gainItem(4001131,-1);
					em.setProperty("stage", "1");
					cm.dispose();
				} else if (cm.haveItem(4001134, 1)) {
					status = 19;
					cm.sendSimple("嘿，那不是#b阿尔卡德诺的实验文件#k吗？这可以证明泽尼密斯特没有偷窃阿尔卡德诺的能源！请立刻把它给我！\r\n\r\n#b#L0#将阿尔卡德诺的实验文件交给朱丽叶。#l");
				} else if (cm.haveItem(4001135, 1) && em.getProperty("stage4").equals("1")) {
					status = 19;
					cm.sendSimple("嘿，那不是#b阿尔卡德诺的实验文件#k吗？这可以证明泽尼密斯特没有偷窃阿尔卡德诺的能源！请立刻把它给我！\r\n\r\n#b#L1#将阿尔卡德诺的实验文件交给朱丽叶。#l");
				} else {
					status = 16;
					cm.sendSimple("有什么可以帮你的吗？#b\r\n#L0#我在哪里？\r\n#L1#我想离开这里！");
				}
				break;
			case 926110401:
				status = 24;
				cm.sendNext("非常感谢你帮忙救出了罗密欧。真的非常、非常感谢。");
				break;
			case 926110600:
				status = 29;
				cm.sendNext("再次感谢你的帮助。玛加提亚可能仍然面临威胁，但我想这足以暂时扑灭这场大火了。");
				// cm.openNpc(2112018);
				break;
		}
	}
	} else if (status == 1) {
		if (selection == 0) {
			status = 10;
			cm.sendNext("我，朱丽叶，深爱着罗密欧，我知道他也爱我。问题是，我在阿尔卡德诺协会，而罗密欧属于泽尼密斯特协会，所以我们注定不能在一起……");
		} else if (selection == 1) {
			var items = [4001130, 4001131, 4001132, 4001133, 4001134, 4001135];
			for (var i = 0; i < items.length; i++) {
				cm.removeAll(items[i]);
			}
			if (em == null || !cm.getPlayer().isGM()) {
				cm.sendOk("请稍后再试。");
				cm.dispose();
				return;
			}
			if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
				cm.sendOk("队伍队长必须在这里。");
			} else {
				var party = cm.getPlayer().getParty().getMembers();
				var mapId = cm.getPlayer().getMapId();
				var next = true;
				var size = 0;
				var it = party.iterator();
			while (it.hasNext()) {
				var cPlayer = it.next();
				var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
				if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 255) {
					next = false;
					cm.dispose();
				}
				size += (ccPlayer.isGM() ? 4 : 1);
			}	
			if (next && (cm.getPlayer().isGM() || size == 4)) {
				var prop = em.getProperty("state");
				if (prop.equals("0") || prop == null) {
					em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
					cm.sendOk("这是那个每晚都能听到可疑声响的传闻实验室。如果这里藏着什么秘密，一定就在这个地方。请仔细搜查这个实验室。");
				} else {
					cm.sendOk("此频道已有另一个队伍任务正在进行。");
				}
			} else {
				cm.sendOk("你队伍中的所有4名成员都必须在这里，且等级达到70级以上。");
			}
			}
		} else if (selection == 2) {
			cm.findParty();
			cm.dispose();
		} else if (selection == 3) {
			cm.sendOk("Eric正在编写来自#r全球枫之谷#k的#e完整#n #b罗密欧与朱丽叶组队任务#k。\r\n由于此脚本尚未翻译为GMS风格，目前无法使用。\r\n\r\r\n如果你有此窗口使用的截图或文字，请在我们的论坛上报告。");
			cm.dispose();
		} else if (selection == 4) {
			cm.sendOk("Eric正在编写来自#r全球枫之谷#k的#e完整#n #b罗密欧与朱丽叶组队任务#k。\r\n由于此脚本尚未翻译为GMS风格，目前无法使用。\r\n\r\r\n如果你有此窗口使用的截图或文字，请在我们的论坛上报告。");
			cm.dispose();
		}
	} else if (status == 11) {
		cm.sendNextPrev("你应该知道的是，事情并不一直是这样。这就是为什么我们最大的愿望就是成为泽尼密斯特和阿尔卡德诺之间的桥梁，为这两个协会之间的和平做出贡献。");
	} else if (status == 12) {
		cm.sendNextPrev("我们已经尽了最大努力，但不幸的是，玛加提亚目前#b正处于全面战争的边缘。#k那是因为不久前，#b泽尼密斯特和阿尔卡德诺的能源都失踪了。#k两个协会现在互相指责，情况日益恶化。");
	} else if (status == 13) {
		cm.sendNextPrev("我最近收到了一个匿名消息，说这实际上是一个与此事无关的#b第三方#k所为。为了阻止玛加提亚的内战，并让我和罗密欧的爱情完全绽放，我们必须找到那个#b第三方#k，阻止那个人摧毁这座伟大的城镇。");
	} else if (status == 14) {
		cm.sendNextPrev("展现你的勇气，帮助保卫玛加提亚的和平！\r\n#e - 等级要求：#n 70级及以上 #r（推荐等级：70-119）#k\r\n#e - 时间限制：#n 20分钟\r\n#e - 玩家人数：#n 4人\r\n#e - 奖励：#n\r\n#i1122117# 朱丽叶吊坠\r\n（收集#r20#个#b阿尔卡德诺弹珠#k后可从#b朱丽叶#k处获得。）\r\n#i1122118# 永恒之爱象征\r\n（可用1个#b罗密欧吊坠#k和1个#b朱丽叶吊坠#k交换获得）");
	} else if (status == 15) {
		cm.dispose();
	} else if (status == 17) {
		if (selection == 0) {
			switch(cm.getPlayer().getMapId()) { // TODO: Script ALL of these.. :/
				case 926110000:
					cm.sendOk("这是那个每晚都能听到可疑声响的传闻实验室。如果这里藏着什么秘密，一定就在这个地方。请仔细搜查这个实验室。");
					break;
				case 926110001:
					cm.sendOk("请消灭所有怪物！我就在你身后。");
					break;
				case 926110100:
					cm.sendOk("这些烧杯有泄漏。我们必须将可疑液体倒入烧杯至满，才能继续前进。");
					break;
				case 926110200:
					cm.sendOk("我们必须阻止阿尔卡德诺和泽尼密斯特之间的冲突！先找到阿尔卡德诺文件，再找泽尼密斯特文件！");
					break;
				case 926110300:
					cm.sendOk("我们必须到达实验室的顶层，每个队员都要到达。");
					break;
				case 926110400:
					cm.sendOk("当你准备好时，我们就去救我的爱人。");
					break;
			}
			cm.dispose();
		} else if (selection == 1) {
			cm.warp(261000021, 0);
			cm.dispose();
		}
	} else if (status == 20) {
		if (selection == 0) {
			cm.sendOk("为了阻止战争，我们仍然需要找到确凿的证据来让泽尼密斯特相信这不是阿尔卡德诺的错。我会把门打开，请为我们找到具体的证据！");
			cm.gainItem(4001134, -1);
			em.setProperty("stage4", "1");
			cm.dispose();
		} else if (selection == 1) { // TODO: broadcast cm.sendOk to the party/map!
			cm.showEffect(true, "quest/party/clear"); // map
			cm.showEffect(false, "quest/party/clear"); // client
			cm.playSound(true, "Party1/Clear"); // map
			cm.playSound(false, "Party1/Clear"); // client
			cm.sendOk("既然已经证明泽尼密斯特和阿尔卡德诺都没有偷窃对方的能源，战争终于可以被阻止了。非常感谢你的辛勤工作。我已经打开了通往下一阶段的门，请找出到底是谁在幕后操纵这一切！！");
			cm.gainItem(4001135, -1);
			em.setProperty("stage4", "2");
			cm.getMap().getReactorByName("jnr3_out3").hitReactor(cm.getClient());
			cm.dispose();
		}
	} else if (status == 25) {
		cm.sendNextPrev("不幸的是，尤莱特从我们手中逃脱了，所以事情还没有结束。我猜他不会离这里太远，请立刻找到他！！");
	} else if (status == 26) {
		cm.warpParty(926110500);
		cm.dispose();
	} else if (status == 30) {
		cm.sendNextPrev("尽管我们的爱情仍然障碍重重，但我可以向你保证，我不会放弃追求与罗密欧在一起，直到最后。");
	} else if (status == 31) {
		cm.sendNextPrev("这是我珍藏已久的阿尔卡德诺弹珠。请收下。我也给了你一些奖励，以表彰你出色的工作。现在我将引导你离开这里。");
	} else if (status == 32) {
		var items = [4001130, 4001131, 4001132, 4001133, 4001134, 4001135];
		for (var i = 0; i < items.length; i++) {
			cm.removeAll(items[i]);
		}
		var em = cm.getEventManager("Juliet");
		if (em != null) {
			var itemid = cm.getMapId() == 926100600 ? 4001160 : 4001159;
			if (!cm.canHold(itemid, 1)) {
				cm.sendOk("请腾出你的其他栏背包空间。");
				cm.dispose();
				return;
			}
			cm.gainItem(itemid, 1);
			if (em.getProperty("stage").equals("2")) {
				cm.gainExpR(140000); // TODO: calculate the exp gains after boss kill, not here.
			} else {
				cm.gainExpR(105000);
			}
		}
		cm.getPlayer().endPartyQuest(1205);
		cm.warp(926110700, 0);
		cm.addTrait("will", 1); // todo: randomize
		cm.addTrait("sense", 1); // todo: randomize
		cm.dispose();
	}
}