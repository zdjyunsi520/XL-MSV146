var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		cm.sendNextNoESC("那-那是什么？");
    } else if (status == 1) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg2/1");
		cm.sendDirectionStatus(1, 2000);
		cm.sendPlayerToNpc("（...怎么回事？我的愤怒之力几乎消失了！它夺走了我的力量？）");
    } else if (status == 2) {
		cm.sendNextNoESC("这不可能...！");
	} else if (status == 3) {
		cm.sendPlayerToNpc("你对我做了什么？这是黑魔法师的能量吗？");
	} else if (status == 4) {
		cm.sendNextNoESC("我们必须抓住你，防止你泄露情报。");
	} else if (status == 5) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/16");
		cm.sendDirectionInfo("Skill/3112.img/skill/31121006/effect");
		cm.showMapEffect("demonSlayer/31121006");
		cm.sendDirectionInfo("Effect/Direction6.img/DemonTutorial/Scene3");
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/17");
		cm.showMapEffect("demonSlayer/31121006h");
		cm.removeNpc(2159340);
		cm.removeNpc(2159341);
		cm.sendDirectionStatus(4, 2159342);
		cm.sendDirectionStatus(3, 0);
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/13");
		cm.sendNextNoESC("（那是谁？我从没见过这么强大的人。）", 2159342);
	} else if (status == 6) {
		cm.sendPlayerToNpc("我必须离开这里。我浪费了太多时间和力量。");
	} else if (status == 7) {
		cm.sendDirectionStatus(3, 2);
		cm.sendDirectionStatus(1, 1000);
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/12");
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/4");
		cm.sendPlayerToNpc("不，我正在失去意识...！");
	} else if (status == 8) {
		cm.sendNextNoESC("等等。我不是他们的人。你..你是谁？", 2159342);
	} else if (status == 9) {
		cm.sendPlayerToNpc("退后！");
	} else if (status == 10) {
		cm.sendNextNoESC("拜托..你需要帮助，现在就需要。他们，黑色之翼，一直在抽取你的力量！", 2159342);
	} else if (status == 11) {
		cm.sendPlayerToNpc("...这一切完全说不通！");
	} else if (status == 12) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/13");
		cm.sendPlayerToNpc("你是谁？你怎么知道这些事？");
	} else if (status == 13) {
		cm.sendNextNoESC("我是J，反抗军的特工。我们在对抗黑色之翼。我不知道你是谁，但我想帮助你。", 2159342);
	} else if (status == 14) {
		cm.sendPlayerToNpc("不...我已经失去了所有的能量...");
	} else if (status == 15) {
		cm.sendDirectionStatus(0, 373);
		cm.sendDirectionStatus(4, 0);
		if (cm.getPlayer().getGender() == 0) {
			cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/fallMale");
		} else {
			cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/fallFemale");
		}
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/13");
		cm.warp(931050030,0);
		cm.dispose();
	}
}