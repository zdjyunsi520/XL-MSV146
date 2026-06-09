var quantities = Array(10, 8, 6, 5, 4, 3, 2, 1, 1, 1);
var prize1 = Array(1442047, 2000000, 2000001, 2000002, 2000003, 2000004, 2000005, 2430036, 2430037, 2430038, 2430039, 2430040); //1 day
var prize2 = Array(1442047, 4080100, 4080001, 4080002, 4080003, 4080004, 4080005, 4080006, 4080007, 4080008, 4080009, 4080010, 4080011);
var prize3 = Array(1442047, 1442048, 2022070);
var prize4 = Array(1442048, 2430082, 2430072); //7 day
var prize5 = Array(1442048, 2430091, 2430092, 2430093, 2430101, 2430102); //10 day
var prize6 = Array(1442048, 1442050, 2430073, 2430074, 2430075, 2430076, 2430077); //15 day
var prize7 = Array(1442050, 3010183, 3010182, 3010053, 2430080); //20 day
var prize8 = Array(1442050, 3010178, 3010177, 3010075, 1442049, 2430053, 2430054, 2430055, 2430056, 2430103, 2430136); //30 day
var prize9 = Array(1442049, 3010123, 3010175, 3010170, 3010172, 3010173, 2430201, 2430228, 2430229); //60 day
var prize10 = Array(1442049, 3010172, 3010171, 3010169, 3010168, 3010161, 2430117, 2430118, 2430119, 2430120, 2430137); //1 year
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}	
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {	
			cm.sendNext("嘿，我是#p" + cm.getNpc() + "#k，如果你不忙的话...能让我跟你一起玩吗？我听说附近有人在聚集参加一个#r活动#k，但我不想一个人去...那么，你想和我一起去看看吗？");
		} else if (status == 1) {	
			cm.sendSimple("嗯？什么样的活动？好吧，那是...\r\n#L0##e1.#n#b 是什么样的活动？#k#l\r\n#L1##e2.#n#b 给我讲解一下活动游戏规则。#k#l\r\n#L2##e3.#n#b 好吧，我们走！#k#l\r\n#L3##e4.#n#b请将连胜证书兑换为奖励物品。#k#l");
		} else if (status == 2) {
			if (selection == 0) {
				cm.sendNext("整个月，MapleStory全球服正在庆祝3周年纪念！GM们将在活动期间举办惊喜GM活动，所以保持警惕，确保至少参加一次活动以获得丰厚奖励！");
				cm.dispose();
			} else if (selection == 1) {
				cm.sendSimple("这次活动有很多游戏。在玩之前了解一下规则会很有帮助。选择你想了解的游戏！#b\r\n#L0# Ola Ola#l\r\n#L1# 枫之谷体能测试#l\r\n#L2# 雪球大战#l\r\n#L3# 椰子收获#l\r\n#L4# OX问答#l\r\n#L5# 寻宝#l#k");
			} else if (selection == 2) {
				var marr = cm.getQuestRecord(160200);
				if (marr.getCustomData() == null) {
					marr.setCustomData("0");
				}
				var dat = parseInt(marr.getCustomData());
				 if (!cm.canHold()) {
					cm.sendNext("请腾出一些背包空间。");
				} else if (cm.getChannelServer().getEvent() > -1 && !cm.haveItem(4031019)) {
					cm.saveReturnLocation("EVENT");
					cm.getPlayer().setChalkboard(null);
					marr.setCustomData("" + cm.getCurrentTime());
					cm.warp(cm.getChannelServer().getEvent(), cm.getChannelServer().getEvent() == 109080000 || cm.getChannelServer().getEvent() == 109080010 ? 0 : "join00");
				} else {
					cm.sendNext("活动尚未开始、你已经有#b秘密卷轴#k了，或者你在过去24小时内已经参加过此活动。请稍后再试！");
				}
				cm.dispose();
			} else if (selection == 3) {
				var selStr = "你想兑换哪个连胜证书？";
				for (var i = 0; i < quantities.length; i++) {
					selStr += "\r\n#b#L" + i + "##t" + (4031332 + i) + "# 兑换(" + quantities[i] + ")#l";
				}
				cm.sendSimple(selStr);
				status = 9;
			}
		} else if (status == 3) {
			if (selection == 0) {
				cm.sendNext("#b[Ola Ola]#k是一个让参与者爬梯子到达顶部的游戏。通过从众多传送门中选择正确的传送门来向上攀爬并进入下一关。\r\n\r\n游戏共三个关卡，时间限制为#b6分钟#k。在[Ola Ola]中，你#b不能跳跃、瞬移、加速，也不能使用药水或道具来提升速度#k。还有一些会把你传送到奇怪地方的陷阱传送门，请注意。");
				cm.dispose();
			} else if (selection == 1) {
				cm.sendNext("#b[枫之谷体能测试]是一场穿越障碍赛道的竞速#k，类似于忍耐之森。你需要在时间限制内克服各种障碍并到达终点来获胜。\r\n\r\n游戏共四个关卡，时间限制为#b15分钟#k。在[枫之谷体能测试]中，你不能使用瞬移或加速。");
				cm.dispose();
			} else if (selection == 2) {
				cm.sendNext("#b[雪球大战]#k由两个队伍组成，枫之队和故事之队，两队在限定时间内比拼#b哪个队伍把雪球滚得更远更大#k。如果在规定时间内无法分出胜负，则将雪球滚得更远的队伍获胜。\r\n\r\n要滚雪球，按#bCtrl#k攻击它。所有远程攻击和技能攻击在这里都不起作用，#b只有近战攻击才有效#k。\r\n\r\n如果角色碰到雪球，他/她将被送回起点。攻击起点前方的雪人来阻止对方队伍向前滚雪球。这就是精心策划的战术发挥作用的地方，队伍将决定是攻击雪球还是攻击雪人。");
				cm.dispose();
			} else if (selection == 3) {
				cm.sendNext("#b[椰子收获]#k由两个队伍组成，枫之队和故事之队，两队在#b5分钟#k内比拼#b哪个队伍收获的椰子最多#k。如果比赛打成平局，将额外增加2分钟来决出胜负。如果由于某种原因分数仍然相同，则比赛将以平局结束。\r\n\r\n所有远程攻击和技能攻击在这里都不起作用，#b只有近战攻击才有效#k。如果你没有近战武器，可以通过活动地图内的NPC购买。无论角色等级、武器或技能如何，造成的伤害都是一样的。\r\n\r\n当心地图中的障碍物和陷阱。如果角色在比赛中死亡，该角色将被淘汰。椰子掉落前最后一个击中的玩家获胜。只有掉到地上的椰子才算数，这意味着没从树上掉下来的，或偶尔爆炸的椰子都#r不算数#k。地图底部的一个贝壳处还有一个隐藏传送门，善加利用！");
				cm.dispose();
			} else if (selection == 4) {
				cm.sendNext("#b[OX问答]#k是一个通过X和O来测试枫之谷知识的游戏。加入游戏后，按#bM#k键打开小地图来查看X和O的位置。总共会给出#r10道题#k，全部回答正确的角色将赢得比赛。\r\n\r\n题目给出后，使用梯子进入正确答案所在的区域，不管是X还是O。如果角色没有选择答案或在时间限制过后仍挂在梯子上，该角色将被淘汰。请保持你的位置直到[正确]字样从屏幕上消失后再移动。为防止任何作弊行为，OX问答期间所有类型的聊天功能将被关闭。");
				cm.dispose();
			} else if (selection == 5) {
				cm.sendNext("#b[寻宝]#k是一个让你在#r10分钟#k内在地图各处寻找隐藏的#b宝物卷轴#k的游戏。地图上隐藏着许多神秘的宝箱，一旦你打破它们，许多物品就会从宝箱中涌出。你的任务就是从这些物品中找出宝物卷轴。\r\n宝箱可以用#b普通攻击#k破坏，一旦你拥有了宝物卷轴，就可以通过负责交易物品的NPC将其兑换为秘密卷轴。交易NPC可以在寻宝地图中找到，你也可以通过明珠港的#b维金#k来兑换卷轴。\r\n\r\n这个游戏有不少隐藏传送门和隐藏传送点。要使用它们，在特定位置按#b上箭头键#k，你就会被传送到另一个地方。试着跳跳看，你可能还会发现隐藏的楼梯或绳子。还有一个宝箱会把你带到一个隐藏地点，以及一个只能通过隐藏传送门才能找到的隐藏宝箱，所以多四处看看吧。\r\n\r\n在寻宝游戏期间，所有攻击技能都将被#r禁用#k，所以请用普通攻击来打破宝箱。");
				cm.dispose();
			}
		} else if (status == 10) {
			if (selection < 0 || selection > quantities.length) {
				return;
			}
			var ite = 4031332 + selection;
			var quan = quantities[selection];
			var pri;
			switch(selection) {
				case 0:
					pri = prize1;
					break;
				case 1:
					pri = prize2;
					break;
				case 2:
					pri = prize3;
					break;
				case 3:
					pri = prize4;
					break;
				case 4:
					pri = prize5;
					break;
				case 5:
					pri = prize6;
					break;
				case 6:
					pri = prize7;
					break;
				case 7:
					pri = prize8;
					break;
				case 8:
					pri = prize9;
					break;
				case 9:
					pri = prize10;
					break;
				default:
					cm.dispose();
					return;
			}
			var rand = java.lang.Math.floor(java.lang.Math.random() * pri.length);
			if (!cm.haveItem(ite, quan)) {
				cm.sendOk("你需要#b" + quan + " #t" + ite + "##k来兑换物品。");
			} else if (cm.getInventory(1).getNextFreeSlot() <= -1 || cm.getInventory(2).getNextFreeSlot() <= -1 || cm.getInventory(3).getNextFreeSlot() <= -1 || cm.getInventory(4).getNextFreeSlot() <= -1) {
				cm.sendOk("你需要为此物品腾出空间。");
			} else {
				cm.gainItem(pri[rand], 1);
				cm.gainItem(ite, -quan);
				cm.gainMeso(100000 * selection); //temporary prize lolol
			}
			cm.dispose();
		}
	}
}