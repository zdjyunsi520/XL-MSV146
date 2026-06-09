/**
 * @author: Eric
 * @func: Starter Quest
 * @npc: MEWMEW
*/

var status = 0;
var jobs = [["Warrior", 100], ["Magician", 200], ["Bowman", 300], ["Thief", 400], ["Pirate", 500], ["炎术士", 1100], ["风灵使者", 1200], ["夜行者", 1300], ["奇袭者", 1400], ["双刀", 1500], ["Aran", 2000], ["Evan", 2200], ["Mercedes", 2300], ["Phantom", 2400], ["恶魔猎手", 430], ["Cannoneer", 501], ["Jett", 508], ["战斗法师", 3100], ["豹弩游侠", 3200], ["..嗯，我是MEWMEW..说，你看起来伤痕累累的..你还能走路吗？", 3300], ["Mechanic", 3500], ["Mihile", 5100]];

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	(mode == 1 ? status++ : mode == 0 ? status-- : cm.dispose());
	if (cm.getMapId() == 2) {
		switch (status) {
			case 0:
				cm.sendNextNoESC("..呃，我想可以..");
				break;
			case 1:
				cm.sendNextPrevS("好，我们先来热热身，然后再交换更多信息。");
				break;
			case 2:
				cm.sendNextPrevS("你看到右边那个悬崖区域了吗？穿过那个传送口。在那儿见。", 1);
				break;
			case 3:
				cm.sendNextPrevS("唉...我应该回去睡觉了。", 1);
				cm.hideNpc(cm.getNpc());
				break;
			case 4:
				cm.sendNextPrevS("喵！干得不错，小家伙。好吧，承诺就是承诺，进城堡来吧，我告诉你你需要知道的。");
				cm.warp(cm.getMapId() + 1);
				cm.dispose();
				break;
		}
	} else if (cm.getMapId() == 3) {
		switch(status) {
			case 0:
				if (cm.haveItem(2000000, 1) || cm.haveItem(2000003, 1) || cm.haveItem(4000253, 1)) { // Get ID for Milk Bottles
					if (cm.haveItem(4000252, 10)) {
						cm.sendOk("完成我交给你的任务后再来吧。");
						cm.hideNpc(cm.getNpc());
					} else
						cm.sendOk("那么，你能告诉我这是什么地方了吗？");
					cm.dispose();
				} else
					cm.sendNextS("等等，现在不行..你看到那些老鼠了吗..？那些混蛋把这里搞得一团糟。", 2);
				break;
			case 1:
				cm.sendNextPrev("我相信你还有力气攻击，对吧？你很弱，但我相信你能搞定它们。");
				break;
			case 2:
				cm.sendNextPrev("来，拿着这些药水。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#b#i2000000:#红色药水\r\n#i2000003:#蓝色药水#k");
				break;
			case 3:
				if (mode > 0) {
					cm.sendNextPrev("如果你的HP或MP低了，打开背包（默认按键是\"I\"），把它拖到你想使用的快捷键上。\r\n双击背包中选中的物品也可以使用。");
					if (!cm.haveItem(2000000, 1) && !cm.haveItem(2000003, 1)) {
						cm.gainItem(2000000, 20); // Red Potion
						cm.gainItem(2000003, 20); // Blue Potion
					}
				}
				break;
			case 4:
				cm.sendNextPrev("是啊..这些我都知道了。");
				break;
			case 5:
				cm.sendNextPrevS("随便吧..我饿了。打死那些混蛋后偷走它们掉落的牛奶，之后我会告诉你你想知道的事。", 2);
				break;
			case 6:
				cm.sendAcceptDecline("[MEWMEW]杀掉10只老鼠并带回来10瓶牛奶。");
				break;
			case 7:
				if (mode > 0) {
					cm.getPlayer().dropMessage(5, "..好吧，我确定你很好奇发生了什么事..那就..坐好，让我告诉你怎么回事。");
				}
				cm.dispose();
				break;
		}
	} else if (cm.getMapId() == 4 && cm.getPlayer().getJobId() == 0 && !cm.haveItem(4000999, 1)) {
		switch(status) {
			case 0:
				cm.sendNext("好的，首先，在你说话之前..告诉我这是哪里！");
				break;
			case 1:
				cm.sendNextPrevS("..你在#eDevelopment#n，#h #..", 2);
				break;
			case 2:
				cm.sendNextPrev("#eDevelopment#n..这算什么世界名字？ ");
				break;
			case 3:
				cm.sendNextPrevS("..我们的世界叫做#eDevelopment#n，因为就像你自己和这个世界一样..它是不完整的，而且据我们所知，它永远不会完成..我们的三位创造者总是在为这个世界带来新的生命。", 2);
				break;
			case 4:
				cm.sendNextPrev("..3位创造者？是我们身后的那三个吗？！那三座雕像？他们是谁，还有你是谁？");
				break;
			case 5:
				cm.sendNextPrevS("我们的创造者", 2);
				break;
			case 6:
				var rando = cm.getPlayer().rand(1, 10);
				cm.sendNextPrev("Paul和Eric " + ((rando >= 1 && rando <= 5) ? "Eric和Paul" : "创造了这个世界，并且正在继续扩大它。你将来可能会遇到创造者们。") + "至于我..我看起来可爱又毛茸茸的，但我是所有人的守护者。当有人进入这个世界时，我会引导他们度过最初的阶段，并在他们需要帮助时伸出援手。");
				break;
			case 7:
				cm.sendNextPrev("好了#h #，我说得够多了。来，把这个当作奖励收下吧。\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#i1002000:#MEWMEW耳朵\r\n#i4000999:#萌币\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0#1,000,000枫币");
				break;
			case 8:
				cm.sendNextPrev("嗯..谢谢，我想..");
				if (!cm.haveItem(4000999, 1) && cm.getMeso() < 1000000) {
					cm.gainItem(1002000, 1); // MEWMEW Ears
					cm.gainItem(4000999, 300); // Munny
					cm.gainMeso(1000000); // 1,000,000 Mesos
				}
			case 9:
				cm.sendNextPrevS("现在，你想走哪条路？你无法撤销你的决定，所以请慎重考虑。", 2);
				break;
			case 10:
				var text = "不错的选择。";
				for (var i = 0; i < jobs.length; text += "\r\n#L" + i + "##b" + jobs[i][0] + "#k", i++);
				cm.sendSimple(text);
				break;
			case 11:
				if (mode > 0) {
					cm.getPlayer().changeJob(jobs[selection][1]);
				}
				cm.sendNextS("在你出发之前，你应该去找Kio或Kurry改变你的发型。你总能在自由市场找到他们。", 1);
				break;
			case 12:
				cm.sendNextPrevS("这里的事完成后，走进那个传送口，你会被传送到我们的主要目的地。", 1);
				break;
			case 13:
				cm.sendOkS("哦，我差点忘了！输入@commands查看这个世界的命令。此外，每次你为#eDevelopment#n投票，你会获得150个#b#z4000999##k！", 1);
				cm.dispose();
		}
	} else if (cm.getMapId() == 4 && cm.getPlayer().getJobId() > 0) {
		switch(status) {
			case 0:
				cm.sendNextNoESC("谢谢你的一切。");
				break;
			case 1:
				cm.sendNextPrevS("我现在该去哪里？");
				break;
			case 2:
				cm.sendNextPrevS("随风而去吧。");
				break;
			case 3:
				cm.sendNextPrevS("喵！我是MEWMEW！", 1);
				break;
			case 4:
				cm.warp(cm.getMapId() + 1);
				cm.dispose();
				break;
		}
	} else {
		cm.sendOk("喵！我是MEWMEW！");
		cm.dispose();
	}
}