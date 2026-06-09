var status = -1;
var mainmenu = "这是打怪物的方法。每只怪物都有自己的HP，你需要用武器或魔法来攻击它们才能打败。当然怪物越强，就越难打倒。";

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    cm.sendNext("这是移动的方法。使用#b左右方向键#k在平地和斜坡上移动，按#bAlt#k键跳跃。一些特定的鞋子可以提高你的速度和跳跃能力。");
	}
	status--;
    }
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (status == -1) {
        cm.dispose();
        return;
    }
    if (status == 0) {
	cm.sendSimple(mainmenu);
    } else if (status == 1) {
	if (selection == 0) { // How do I move?
	    status = -1;
	    cm.sendNext("这是拾取物品的方法。当你打败怪物后，会掉落物品到地上。这时站在物品面前，按#bZ#k键或小键盘上的#b0#k键即可拾取物品。");
	} else if (selection == 1) { // How do I take down the monsters?
	    cm.sendNext("这是移动的方法。使用#b左右方向键#k在平地和斜坡上移动，按#bAlt#k键跳跃。一些特定的鞋子可以提高你的速度和跳跃能力。");
	} else if (selection == 2) { // How can I pick up an item?
	    status = 5;
	    cm.sendNext("想知道死后会发生什么吗？当你的HP降到0时就会变成幽灵。那个位置会出现一块墓碑，你将无法移动，但仍然可以聊天。");
	} else if (selection == 3) { // What happens when I die?
	    status = 8;
	    cm.sendNext("什么时候可以选择职业？哈哈哈，别着急，我的朋友。每种职业都有相应的要求。通常8到10级就可以了，所以好好努力吧。");
	} else if (selection == 4) { // When can I choose a job?
	    status = 11;
	    cm.sendNext("想了解这座岛吗？它叫做枫之岛，漂浮在空中。它已经在天上漂浮了很久，所以凶恶的怪物不太会出现。这是一座非常和平的岛屿，非常适合新手！");
	} else if (selection == 5) { // Tell me more about this island!
	    status = 14;
	    cm.sendNext("你想成为#b战士#k？嗯，那我建议你去维多利亚岛。去一个叫#r勇士部落#k的战士小镇找#b武术教练#k。他会教你成为真正战士的一切。哦，还有一件非常重要的事：你需要至少达到10级才能成为战士！！");
	} else if (selection == 6) { // What should I do to become a Warrior?
	    status = -1;
	    cm.sendNext("你想成为#b弓箭手#k？你需要前往维多利亚岛转职。去一个叫#r射手村#k的弓箭手小镇，找美丽的#b雅典娜·皮尔斯#k学习弓箭手的方方面面。哦，还有一件非常重要的事：你需要至少达到10级才能成为弓箭手！！");
	} else if (selection == 7) { // What should I do to become a Bowman?
	    status = -1;
	    cm.sendNext("你想成为#b魔法师#k？要做到这一点，你必须前往维多利亚岛。去一个叫#r魔法森林#k的魔法师小镇，在最顶端有魔法图书馆。在里面你会见到所有巫师的领袖#b马斯特利尔#k，他会教你关于成为巫师的一切。");
	} else if (selection == 8) { // What should I do to become a Magician?
	    status = 19;
	    cm.sendNext("你想成为#b飞侠#k？要成为飞侠，你必须前往维多利亚岛。去一个叫#r废弃都市#k的飞侠小镇，在城镇阴暗的一面，你会看到一个飞侠的藏身处。在那里你会遇到#b达克鲁#k，他会教你关于飞侠的一切。哦，还有一件非常重要的事：你需要至少达到10级才能成为飞侠！！");
	} else if (selection == 9) { // What should I do to become a Thief?
	    status = -1;
	    cm.sendNext("你想知道如何提升角色的能力属性吗？首先按#bS#k键查看能力窗口。每次升级时，你会获得5点能力点即AP。将这些AP分配到你选择的能力上。就是这么简单。");
	} else if (selection == 10) { // How do I raise the character stats? (S)
	    status = 22;
	    cm.sendNext("你想知道如何查看拾取的物品吗？当你打败怪物后，它会掉落物品在地上，你可以按#bZ#k键拾取物品。该物品会存储在你的物品栏中，你只需按#bI#k键就可以查看它。");
	} else if (selection == 11) { // How do I check the items that I just picked up?
	    status = -1;
	    cm.sendNext("你想知道如何穿戴物品吗？按#bI#k键查看物品栏。将鼠标光标放在物品上并双击它来穿在角色身上。如果你发现自己无法穿戴某件物品，很可能是因为你的角色不满足等级和属性要求。你也可以打开装备栏（#bE#k键）将物品拖进去穿戴。要脱下物品，在装备栏中双击该物品即可。");
	} else if (selection == 12) { // How do I put on an item?
	    status = -1;
	    cm.sendNext("你想查看已装备的物品吗？按#bE#k键打开装备栏，你会看到自己当前正在穿戴的东西。要脱下物品，双击该物品即可。物品会被送到物品栏中。");
	} else if (selection == 13) { // How do I check out the items that I'm wearing?
	    status = -1;
	    cm.sendNext("转职后获得的特殊"能力"叫做技能。你会获得该职业特有的技能。你还没有到那个阶段，所以暂时没有任何技能，但记住要按#bK#k键打开技能书来查看技能。这对你以后会有帮助。");
	} else if (selection == 14) { // What are skills? (K)
	    status = -1;
	    cm.sendNext("你可以从南港乘船前往维多利亚岛的锂矿石港。按#bW#k键查看世界地图，你会看到自己在岛上的位置。找到南港，那就是你需要去的地方。你还需要一些金币来乘船，所以可能需要在这附近打一些怪物。");
	} else if (selection == 15) { // How do I get to Victoria Island?
	    status = -1;
	    cm.sendNext("这是枫之谷中使用的货币。你可以用金币购买物品。要获得金币，你可以打怪物、在商店出售物品或完成任务...");
	} else if (selection == 16) { // What are mesos?
	    status = -1;
	    cm.sendNext("要攻击怪物，你需要装备武器。装备后，按#bCtrl#k键使用武器。掌握好节奏，你就能轻松打倒怪物。");
	}
    } else if (status == 2) { // How do I take down the monsters?
	cm.sendNextPrev("一旦你转职后，会获得各种不同的技能，你可以将它们分配到快捷键上以便使用。如果是攻击技能，你不需要按Ctrl键攻击，只需按下设定为快捷键的按钮即可。");
    } else if (status == 3) { // How do I take down the monsters?
	cm.sendNextPrev("记住，如果你的物品栏满了，就无法再拾取更多物品。所以如果你有不需要的物品，就把它们卖掉吧。转职后物品栏可能会扩展。");
    } else if (status == 4) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 5) { // How can I pick up an item?
	cm.sendNext("想知道死后会发生什么吗？当你的HP降到0时就会变成幽灵。那个位置会出现一块墓碑，你将无法移动，但仍然可以聊天。");
    } else if (status == 6) { // How can I pick up an item?
	cm.sendNextPrev("如果你只是新手，死亡并没有太大的损失。但一旦你有了职业，情况就不一样了。死亡时会失去一部分经验值，所以一定要不惜一切代价避免危险和死亡。");
    } else if (status == 7) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 8) { // What happens when I die?
	cm.sendNext("什么时候可以选择职业？哈哈哈，别着急，我的朋友。每种职业都有相应的要求。通常8到10级就可以了，所以好好努力吧。");
    } else if (status == 9) { // What happens when I die?
	cm.sendNextPrev("不过，等级并不是决定转职的唯一因素。你还需要根据职业来提升特定能力的等级。例如，要成为战士，你的力量必须超过35，以此类推，你懂我的意思吧？一定要提升与你职业直接相关的能力。");
    } else if (status == 10) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 11) { // When can I choose a job?
	cm.sendNext("想了解这座岛吗？它叫做枫之岛，漂浮在空中。它已经在天上漂浮了很久，所以凶恶的怪物不太会出现。这是一座非常和平的岛屿，非常适合新手！");
    } else if (status == 12) { // When can I choose a job?
	cm.sendNextPrev("但是，如果你想成为一个强大的玩家，最好不要在这里待太久。反正你也无法在这里转职。这座岛下面有一个巨大的岛屿叫维多利亚岛。那个地方比这里大得多，大了不知道多少倍。");
    } else if (status == 13) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 14) { // Tell me more about this island!
	cm.sendNext("你想成为#b战士#k？嗯，那我建议你去维多利亚岛。去一个叫#r勇士部落#k的战士小镇找#b武术教练#k。他会教你成为真正战士的一切。哦，还有一件非常重要的事：你需要至少达到10级才能成为战士！！");
    } else if (status == 15) { // Tell me more about this island!
	cm.sendNextPrev("怎么去维多利亚岛？在这座岛的东边有一个叫南港的港口。在那里你会找到一艘在空中飞行的船。船前面站着船长，去问问他吧。");
    } else if (status == 16) { // Tell me more about this island!
	cm.sendNextPrev("哦对了！在我走之前再告诉你最后一条信息。如果你不确定自己在哪里，就按#bW#k键。世界地图会弹出来，上面有定位器显示你所在的位置。有了它你就不用担心迷路了。");
    } else if (status == 17) { // Tell me more about this island!
	cm.sendNextPrev("顺便说一下，和其他职业不同，成为魔法师只需要达到8级。提前转职的好处也伴随着成为真正强大的法师需要付出更多努力。选择你的道路前要深思熟虑。");
    } else if (status == 18) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 19) { // What should I do to become a Magician?
	cm.sendNext("你想成为#b飞侠#k？要成为飞侠，你必须前往维多利亚岛。去一个叫#r废弃都市#k的飞侠小镇，在城镇阴暗的一面，你会看到一个飞侠的藏身处。在那里你会遇到#b达克鲁#k，他会教你关于飞侠的一切。哦，还有一件非常重要的事：你需要至少达到10级才能成为飞侠！！");
    } else if (status == 20) { // What should I do to become a Magician?
	cm.sendNextPrev("将鼠标光标放在所有属性上可以看到简要说明。例如，战士的力量、弓箭手的敏捷、魔法师的智力、飞侠的运气。光知道这些还不够，你还需要仔细思考如何通过分配点数来突出角色的优势。");
    } else if (status == 21) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 22) { // How do I raise the character stats? (S)
	cm.sendNext("你想知道如何查看拾取的物品吗？当你打败怪物后，它会掉落物品在地上，你可以按#bZ#k键拾取物品。该物品会存储在你的物品栏中，你只需按#bI#k键就可以查看它。");
    } else if (status == 23) { // How do I raise the character stats? (S)
	cm.sendNextPrev("将鼠标光标放在所有属性上可以看到简要说明。例如，战士的力量、弓箭手的敏捷、魔法师的智力、飞侠的运气。光知道这些还不够，你还需要仔细思考如何通过分配点数来突出角色的优势。");
    } else if (status == 24) {
	status = 0;
	cm.sendSimple(mainmenu);
    }
}