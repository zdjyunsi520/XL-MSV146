/* Author: Xterminator
	NPC Name: 		Kyrin
	Map(s): 		The Nautilus : Navigation Room (120000101)
	Description: 		Pirate Instructor
*/

var status = 0;
var requirements = false;
var text;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (((status == 0 || status == 1 || status == 9) && mode == 0) || ((status == 8 || status == 12 || status == 16 || status == 18 || status == 21) && mode == 1)) {
	cm.dispose();
	return;
    } else if (status == 2 && mode == 0 && requirements) {
	cm.sendNext("我明白了……选择新职业是一个非常重要的决定。如果你准备好了，就告诉我！");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getMapId() == 912010200) {
	    status = 100;
	    cm.sendNext("不错嘛！我们到外面谈吧！");
	} else {
	    var tosent = "你有什么话要说？#b\r\n#L0#我想了解更多关于海盗的事……#l";
	    if (cm.getQuestStatus(6370) == 1 || cm.getQuestStatus(6330) == 1) {
		tosent += "\r\n#L1#我准备好和你对战了。#l"
	    }
	    cm.sendSimple(tosent);
	}
    } else if (status == 1) {
	if (cm.getJob() == 510 || cm.getJob() == 520 || cm.getJob() == 530) {
	    if (cm.getPlayerStat("LVL") < 70) {
		if (cm.getJob() == 510) {
		    cm.sendNext("哦，是你啊。当格斗家感觉怎么样？你看起来比上次见面时更加成熟精炼了。希望你前程似锦。");
		} else if (cm.getJob() == 530) {
		    cm.sendNext("哦，是你啊。当炮术师感觉怎么样？你看起来比上次见面时更加成熟精炼了。希望你前程似锦。");
		} else {
		    cm.sendNext("哦，是你啊。当神枪手感觉怎么样？你看起来比上次见面时更加成熟精炼了。希望你前程似锦。");
		}
	    } else {
			cm.sendNext("去找冰封雪域的佩德罗吧。他会帮助你变得更强。");
		}
	    cm.dispose();
	} else if (cm.getJob() == 500) {
	    if (cm.getPlayerStat("LVL") < 30) {
		status = 9;
		cm.sendSimple("你对成为海盗有什么好奇的吗……？#b\r\n#L0#海盗的基本特征是什么？#l\r\n#L1#海盗可以使用哪些武器？#l\r\n#L2#海盗可以使用哪些防具？#l\r\n#L3#海盗有哪些技能？");
	    } else if (cm.getPlayerStat("LVL") >= 30) {
		status = 22;
		cm.sendSimple("你想了解更多关于格斗家和神枪手的事吗？提前了解是好的，这样你就能清楚地知道你想转什么职业……\r\n#b#L0# 请给我解释一下格斗家是怎么回事。#k#l\r\n#b#L1# 请给我解释一下神枪手是怎么回事。#k#l");
	    }
	} else if (cm.getJob() == 501) {
		if (cm.getPlayerStat("LVL") < 30) {
			status = 9;
			cm.sendSimple("你对成为海盗有什么好奇的吗……？#b\r\n#L0#海盗的基本特征是什么？#l\r\n#L1#海盗可以使用哪些武器？#l\r\n#L2#海盗可以使用哪些防具？#l\r\n#L3#海盗有哪些技能？");
		} else if (cm.getPlayerStat("LVL") >= 30) {
			status = 44;
			cm.sendSimple("你想了解更多关于炮术师的事吗？提前了解是好的，这样你就能清楚地知道你想转什么职业……\r\n#b#L0# 请给我解释一下炮术师是怎么回事。#k#l");
	    }
	} else if (cm.getJob() == 0 || cm.getJob() == 1) {
	    cm.sendNext("你想成为海盗吗？你需要达到我们的标准才能加入我们。你需要#b至少10级，且DEX达到20以上#k。让我看看……");
	} else {
	    if (selection == 0) {
		cm.sendNext("你不想感受一下大海传来的自由吗？你不想拥有力量、名声以及随之而来的一切吗？那就加入我们，亲自享受吧。");
		cm.dispose();
	    } else if (selection == 1 && (cm.getQuestStatus(6370) == 1 || cm.getQuestStatus(6330) == 1)) {
		status = 99;
		cm.sendNext("你准备好了吧？现在试着抵挡我的攻击2分钟。我不会手下留情。祝你好运，你需要的。");
	    }
	}
    } else if (status == 2) {
	if (cm.getPlayerStat("LVL") >= 10) {
	    requirements = true;
	    cm.sendYesNo("你看起来完全合格！太好了，你准备好成为我们的一员了吗？");
	} else {
	    cm.sendNext("嗯……我觉得你还没有训练够。等你变强了再来找我。");
	}
    } else if (status == 3) {
	if (requirements)
	    cm.sendNext("欢迎加入海盗团！一开始你可能要过一段流浪的日子，但更好的日子一定会到来的，比你想象的还要快！在此期间，让我分享一些能力给你。");
	else
	    cm.dispose();
    } else if (status == 4) {
	if (cm.getJob() == 1 || (cm.getJob() == 0 && cm.getPlayer().getSubcategory() > 1)) {
	    cm.changeJob(501);
	    cm.resetStats(4, 20, 4, 4);
		cm.gainItem(1532000, 1);
	} else if (cm.getJob() == 0) {
	    cm.changeJob(500);
	    cm.resetStats(4, 20, 4, 4);
	    cm.gainItem(1482014, 1);
	    cm.gainItem(1492014, 1);
	    cm.gainItem(2330006, 600);
	    cm.gainItem(2330006, 600);
	    cm.gainItem(2330006, 600);
	}
	cm.sendNext("我刚刚增加了你装备栏和其他物品栏的格子数。你也变强了一些。感受到了吗？既然你正式成为海盗了，就加入我们的冒险和自由之旅吧！");
    } else if (status == 5) {
	cm.sendNext("我刚刚给了你一点#bSP#k。打开#b技能菜单#k找到一些技能，用你的SP来学习。注意不是所有技能都能一开始就提升的。有些技能需要在掌握基础技能后才能学习。");
    } else if (status == 6) {
	cm.sendNext("还有一件事。既然你已经从新手毕业成为海盗了，就得注意不要过早死亡。如果你失去了所有生命值，你会损失已获得的珍贵经验值。辛辛苦苦挣来的经验值因为死亡而失去，那多可惜啊？");
    } else if (status == 7) {
	cm.sendNext("这些就是我能教你的了。我还给了你一些实用的武器，接下来就看你自己训练了。这个世界是你的，明智地利用你的资源，当你觉得自己达到了巅峰，来告诉我。我会为你准备更好的东西……");
    } else if (status == 8) {
	cm.sendNext("哦，还有……如果你对成为海盗还有疑问，或者需要一些指点……随时可以问我。后会有期……");
    } else if (status == 10) {
	if (selection == 0) {
	    status = 11;
	    text = "以下是关于海盗你需要知道的。你可以把海盗看作一条提供多种路径的大道。如果你想像怪物展示蛮力，就专注提升STR。如果你想用远程攻击智取怪物，我建议你专注提升DEX。";
	} else if (selection == 1) {
	    status = 13;
	    text = "与其他职业不同，海盗可以用赤手空拳与怪物战斗。但如果你想最大化攻击能力，我建议你使用指虎或手枪。";
	} else if (selection == 2) {
	    status = 17;
	    text = "海盗通常行动敏捷，利用速度攻击被震晕的对手。是的，这也意味着防具必须轻便。这就是为什么海盗的大部分服装都是用布料制成的。";
	} else {
	    status = 19;
	    text = "对于海盗来说，有支持命中率和回避率的技能。一些攻击技能只使用赤手空拳或手枪，所以在升级技能时，你可能想选择其中一种攻击方式并坚持下去。";
	}
	cm.sendNext(text);
    } else if (status == 11) {
	cm.sendNext(text);
    } else if (status == 12) {
	cm.sendNext("这是一个根据你的行动而变化的职业。你应该提前想好你未来想成为什么，这样就可以开始专注于提升STR或DEX这两个属性中的哪一个。想成为格斗家，就提升STR。想成为神枪手，就提升DEX。");
    } else if (status == 13) {
	cm.sendNext(text);
    } else if (status == 14) {
	cm.sendNext("如果你想进行近战攻击并击晕怪物，就使用指虎。它看起来和飞侠用的拳套相似，但由更坚固的材料制成，可以同时保护和强化拳头。");
    } else if (status == 15) {
	cm.sendNext("如果你想远距离对付敌人，就使用手枪。当然，光有手枪是不够的，你还需要子弹。你可以在附近任何一家便利商店买到。");
    } else if (status == 16) {
	cm.sendNext("你的攻击风格会因选择的武器而有很大不同，所以在选择之前请仔细考虑。当然，你使用的武器也可能决定你未来的发展方向。");
    } else if (status == 17) {
	cm.sendNext(text);
    } else if (status == 18) {
	cm.sendNext("虽然可能只是薄薄的布料，但你最好不要小看它的能力。它和最好的皮革一样耐用且具防护性！");
    } else if (status == 19) {
	cm.sendNext(text);
    } else if (status == 20) {
	cm.sendNext("如果你想使用手枪，那我建议你学习技能\r\n#b双射#k。双射可以让你同时发射2颗子弹，让你能够从远距离攻击怪物。");
    } else if (status == 21) {
	cm.sendNext("如果你使用赤手空拳或指虎，那就集中精力练习#b回旋踢#k和/或#b闪光拳#k。交替使用这两个技能来最大化你的攻击能力。你也可以在使用手枪时使用这些技能，但效果不如使用指虎。");
    } else if (status == 23) {
	if (selection == 0) {
	    status = 24;
	    text = "我来给你解释一下格斗家是什么。格斗家是用赤手空拳和指虎与敌人战斗的勇敢海盗。由于格斗家主要进行近战，最好先用各种攻击技能击晕怪物，然后再进行更强大的攻击。使用#q5101002##k击晕你身后的敌人，使用#q5101003##k击晕你面前的敌人。";
	} else {
	    status = 26;
	    text = "我来给你解释一下神枪手是什么。神枪手是可以从远距离以高命中率攻击敌人的海盗。使用#b#q5201001##k或#b#q5201002##k来同时攻击多只怪物。";
	}
	cm.sendNext(text);
    } else if (status == 24) {
	cm.sendNext(text);
    } else if (status == 25) {
	cm.sendNext("格斗家的一个技能叫#b#q5101007##k。这个技能在你需要不被怪物发现而离开区域时很有用。基本上，你会伪装成一个橡木桶，从危险中走开。有时候，思维敏捷的怪物可能会识破你，但你的技能等级越高，被抓现行的可能性就越小。");
    } else if (status == 26) {
	cm.sendNext("接下来我们谈谈#b#q5101005##k。这是一个以消耗少量HP为代价来恢复MP的技能。除了战士之外，格斗家的HP是所有职业中最高的，所以损失一点HP对他们影响不大。当你在战斗中用完了MP药水时，这个技能特别有用。当然，你需要注意自己的HP水平和使用这个技能所承担的风险。");
	status = 34;
    } else if (status == 27) {
	cm.sendNext("神枪手的一个技能叫#b#q5201006##k。这个技能利用手枪的后坐力让你向后跳跃，从身后攻击怪物。当你被困在怪物中间需要逃跑时，这个技能特别有效。只是在使用之前确保身后有怪物，好吗？");
    } else if (status == 28) {
	cm.sendNext("接下来我们谈谈#b#q5201005##k。这个技能让你可以不受枫之谷重力法则影响的跳跃。这能让你在空中停留更长时间，比普通跳跃更晚着地。如果你从高处使用#b#q5201005##k，你不觉得能在半空中攻击怪物吗？");
	status = 39;
    } else if (status == 35) {
	cm.sendNext("好的，如约，你现在将成为#b格斗家#k。");
    } else if (status == 36) {
	if (cm.getJob() == 500) {
	    cm.changeJob(510);
	}
	cm.sendNext("好的，从现在起，你就是#b格斗家#k了。格斗家用赤手空拳的力量统治世界……这意味着他们比其他人更需要锻炼身体。如果你在训练中遇到困难，我很乐意帮忙。");
    } else if (status == 37) {
	cm.sendNext("我刚刚给了你一本格斗家技能书，你会发现它非常有用。你还获得了额外的消耗品栏位，整整一排。我也提升了你的最大HP和最大MP。你自己看看吧。");
    } else if (status == 38) {
	cm.sendNext("我给了你一点#bSP#k，建议你现在就打开#b技能菜单#k。你将能够强化新获得的2转技能。注意不是所有技能都能一开始就提升的。有些技能需要在掌握基础技能后才能学习。");
    } else if (status == 39) {
	cm.sendNext("格斗家需要成为一股强大的力量，但这并不意味着他们有权欺负弱者。真正的格斗家以积极的方式使用他们巨大的力量，这比仅仅训练获得力量要困难得多。我希望你在作为格斗家在这个世界留下印记时遵循这一信条。等你完成了一切作为格斗家能做的事情，我会在那里等你。");
	cm.safeDispose();
    } else if (status == 40) {
	cm.sendNext("好的，如约，你现在将成为#b神枪手#k。");
    } else if (status == 41) {
	if (cm.getJob() == 500) {
	    cm.changeJob(520);
	}
	cm.sendNext("好的，从现在起，你就是#b神枪手#k了。"); // Not complete
    } else if (status == 42) {
	cm.sendNext("我刚刚给了你一本神枪手技能书，你会发现它非常有用。你还获得了额外的消耗品栏位，整整一排。我也提升了你的最大HP和最大MP。你自己看看吧。");
    } else if (status == 43) {
	cm.sendNext("我给了你一点#bSP#k，建议你现在就打开#b技能菜单#k。你将能够强化新获得的2转技能。注意不是所有技能都能一开始就提升的。有些技能需要在掌握基础技能后才能学习。");
    } else if (status == 44) {
	cm.sendNext("我在这里等你。"); // Not complete
	cm.safeDispose();
    } else if (status == 45) {
	cm.sendNext("好的，如约，你现在将成为#b炮术师#k。");
    } else if (status == 46) {
	if (cm.getJob() == 501) {
	    cm.changeJob(530);
	}
	cm.sendNext("好的，从现在起，你就是#b炮术师#k了。"); // Not complete
    } else if (status == 47) {
	cm.sendNext("我刚刚给了你一本炮术师技能书，你会发现它非常有用。你还获得了额外的消耗品栏位，整整一排。我也提升了你的最大HP和最大MP。你自己看看吧。");
    } else if (status == 48) {
	cm.sendNext("我给了你一点#bSP#k，建议你现在就打开#b技能菜单#k。你将能够强化新获得的2转技能。注意不是所有技能都能一开始就提升的。有些技能需要在掌握基础技能后才能学习。");
    } else if (status == 49) {
	cm.sendNext("我在这里等你。"); // Not complete
	cm.safeDispose();
    } else if (status == 100) {
	if (cm.getQuestStatus(6370) == 1) { // Captain
	    var dd = cm.getEventManager("KyrinTrainingGroundC");
	    if (dd != null) {
		dd.startInstance(cm.getPlayer());
	    } else {
		cm.sendOk("发生了未知错误。");
	    }
	} else if (cm.getQuestStatus(6330) == 1) { // Viper
	    var dd = cm.getEventManager("KyrinTrainingGroundV");
	    if (dd != null) {
		dd.startInstance(cm.getPlayer());
	    } else {
		cm.sendOk("发生了未知错误。");
	    }
	}
	cm.dispose();
    } else if (status == 101) {
	if (cm.getQuestStatus(6370) == 1) { // Captain
	    cm.teachSkill(5221006, 0, 10);
//	    cm.forceCompleteQuest(6371);
	    cm.forceCompleteQuest(6370);
	} else if (cm.getQuestStatus(6330) == 1) { // Viper
	    cm.teachSkill(5121003, 0, 10);
//	    cm.forceCompleteQuest(6331);
	    cm.forceCompleteQuest(6330);
	}
	cm.warp(120000101, 0);
	cm.dispose();
    }
}