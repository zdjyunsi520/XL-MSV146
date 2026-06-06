var status = -1;

function action(mode, type, selection) {
	if (cm.getMap().getAllMonstersThreadsafe().size() > 0) {
		cm.dispose();	
		return;
	}
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		cm.sendNextNoESC("哦，看，是#h0#？你的旅行怎么样？不服从命令值得吗？你的家人怎么样了？嘿嘿...", 2159308);
    } else if (status == 1) {
		cm.sendPlayerToNpc("我没时间理你。让开。");
    } else if (status == 2) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/14");
		cm.sendDirectionStatus(0, 325);
		cm.showMapEffect("demonSlayer/31111003");
		cm.sendDirectionInfo("Skill/3111.img/skill/31111003/effect");
		cm.sendDirectionStatus(1, 1000);
		cm.sendNextNoESC("真的吗？你知道这是叛国罪！你真的如此软弱，失去家人就让你做出这种事？可悲！", 2159308);
	} else if (status == 3) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/15");
		cm.sendDirectionStatus(0, 365);
		cm.showMapEffect("demonSlayer/31121001");
		cm.sendDirectionInfo("Skill/3112.img/skill/31121001/effect");
		cm.sendDirectionStatus(1, 1000);
		cm.sendNextNoESC("你让我失望。你不了解黑魔法师！消灭叛徒！", 2159308);
	} else if (status == 4) {
		cm.sendDirectionStatus(4, 0);
		cm.EnableUI(0);
		cm.DisableUI(false);
		cm.spawnMonster(9300455, 3);
		cm.forceStartQuest(23205);
		cm.showWZEffect("Effect/Direction6.img/DemonTutorial/Scene4");
		cm.dispose();
	}
}