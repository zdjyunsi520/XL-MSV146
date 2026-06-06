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
		cm.sendPlayerToNpc("我在哪里？我不认识这个地方...全身都好痛，呃。");
    } else if (status == 1) {
		cm.sendDirectionStatus(3, 1);
		cm.sendDirectionStatus(1, 2000);
		cm.sendPlayerToNpc("（...这里看起来像是一间治疗室。我在哪里？我发生了什么事？..我必须想起来。）");
    } else if (status == 2) {
		cm.sendPlayerToNpc("（...黑魔法师违背了他的承诺，摧毁了奥西利亚亚南部，我的家人就在那里。他摧毁了我的家园...我的吊坠在哪？！我弄丢了吗？不...）");
	} else if (status == 3) {
		cm.sendPlayerToNpc("（我去了时间神殿向黑魔法师复仇...路上，我放了玛斯特玛，让她远离指挥官们。阿卡伊农试图阻止我，但我决心已定...不知道英雄们做得怎么样了。）");
	} else if (status == 4) {
		cm.sendPlayerToNpc("（...黑魔法师对我来说太强大了，但我以为至少能造成一些伤害。我只不过是撕裂了他的长袍..多么可悲...但我怎么活下来的？...英雄们？）");
	} else if (status == 5) {
		cm.sendPlayerToNpc("（呃，头痛。我甚至不知道自己现在在哪。这是否意味着枫之谷世界没有被摧毁？）");
	} else if (status == 6) {
		cm.sendPlayerToNpc("（我应该检查一下自己..不管怎样我都需要我的恶魔之怒，但还剩多少？！）");
	} else if (status == 7) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/13");
		cm.sendPlayerToNpc("（不！我的恶魔之盾很虚弱..几乎所有的力量和技能都消失了...这样的话我几乎无法战斗。）");
	} else if (status == 8) {
		cm.sendPlayerToNpc("我得走了。坐在这里什么也完成不了。");
	} else if (status == 9) {
		cm.sendDirectionStatus(3, 1);
		cm.sendDirectionStatus(1, 2000);
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/3");
		cm.sendPlayerToNpc("（我听到了什么声音...）");
	} else if (status == 10) {
		cm.sendNextNoESC("能量传导装置连接到了一个蛋上。我在检查的时候，那个人从蛋里破壳而出，打败了所有的黑色之翼。太疯狂了！", 2159342);
	} else if (status == 11) {
		cm.sendNextNoESC("如果是别人告诉我这件事，我会笑的。但这...这个人是谁？", 2159315);
	} else if (status == 12) {
		cm.sendPlayerToNpc("他们在谈论我...");
	} else if (status == 13) {
		cm.sendNextNoESC("我从未见过像他那样的技能。如此强大...如果他没有耗尽所有力量，我不会把他带到这里的。他很危险。他是实验对象吗？我们必须阻止那个该死的疯子杰利麦罗。\r\n不管怎样，他现在应该醒了。我去看看他。", 2159342);
	} else if (status == 14) {
		cm.sendDirectionStatus(3, 2);
		cm.sendDirectionStatus(1, 2000);
		cm.sendNextNoESC("啊，你醒了。感觉怎么样？累吗？", 2159342);
	} else if (status == 15) {
		cm.sendPlayerToNpc("是你救了我吗？");
	} else if (status == 16) {
		cm.sendNextNoESC("是的，你伤得很重。我不能把你丢在那里让黑色之翼处理。我觉得我们是同一阵营的。我们有很多要谈的，不如跟我来吧？", 2159342);
	} else if (status == 17) {
		cm.sendPlayerToNpc("（审问？...不...）好吧。");
	} else if (status == 18) {
		cm.warp(931050010,0);
		cm.dispose();
	}
}