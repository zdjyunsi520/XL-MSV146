/* Author: Xterminator
	NPC Name: 		Robin
	Map(s): 		Maple Road : Snail Hunting Ground I (40000)
	Description: 		Beginner Helper
*/
var status = -1;
var mainmenu = "现在……问我任何关于旅行的问题吧！！\r\n#L0##b如何移动？#l\r\n#L1#如何打倒怪物？#l\r\n#L2#如何拾取物品？#l\r\n#L3#死亡后会怎样？#l\r\n#L4#什么时候可以选择职业？#l\r\n#L5#告诉我更多关于这座岛的信息！#l\r\n#L6#如何成为战士？#l\r\n#L7#如何成为弓箭手？#l\r\n#L8#如何成为魔法师？#l\r\n#L9#如何成为飞侠？#l\r\n#L10#如何提升角色属性？（S）#l\r\n#L11#如何查看刚拾取的物品？#l\r\n#L12#如何穿戴物品？#l\r\n#L13#如何查看正在穿戴的物品？#l\r\n#L14#什么是技能？（K）#l\r\n#L15#如何前往维多利亚岛？#l\r\n#L16#什么是金币？#l#k";

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    cm.sendNext("以下是如何打倒怪物。每只怪物都有自己的HP，你需要用武器或魔法攻击来打倒它们。当然怪物越强，就越难打倒。");
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple(mainmenu);
    } else if (status == 1) {
	if (selection == 0) { // How do I move?
	    status = -1;
	    cm.sendNext("以下是如何移动。使用#b左右方向键#k在平地和斜坡上移动，按#bAlt#k键跳跃。部分鞋子可以提高你的速度和跳跃能力。");
	} else if (selection == 1) { // How do I take down the monsters?
	    cm.sendNext("以下是如何打倒怪物。每只怪物都有自己的HP，你需要用武器或魔法攻击来打倒它们。当然怪物越强，就越难打倒。");
	} else if (selection == 2) { // How can I pick up an item?
	    status = 5;
	    cm.sendNext("以下是如何拾取物品。打倒怪物后，会掉落物品到地上。这时，站在物品前面按#bZ#k键或小键盘的#b0#k键即可拾取物品。");
	} else if (selection == 3) { // What happens when I die?
	    status = 8;
	    cm.sendNext("想知道死亡后会发生什么吗？当你的HP降到0时，你就会变成幽灵。那个位置会出现一块墓碑，你将无法移动，但仍然可以聊天。");
	} else if (selection == 4) { // When can I choose a job?
	    status = 11;
	    cm.sendNext("什么时候可以选择职业？哈哈哈，别着急，朋友。每个职业都有相应的要求。通常8到10级就可以了，好好努力吧。");
	} else if (selection == 5) { // Tell me more about this island!
	    status = 14;
	    cm.sendNext("想知道这座岛的事吗？它叫做枫之岛，漂浮在空中。它一直在天空中漂浮着，所以那些凶猛的怪物不太会出现在这里。这是一座非常和平的岛屿，非常适合新手！");
	} else if (selection == 6) { // What should I do to become a Warrior?
	    status = -1;
	    cm.sendNext("你想成为#b战士#k？嗯，那我建议你去维多利亚岛。前往一个叫做#r勇士部落#k的战士城镇，去找#b与巴尔共舞#k。他会教你如何成为一名真正的战士。对了，一件非常重要的事：你必须至少达到10级才能成为战士！！");
	} else if (selection == 7) { // What should I do to become a Bowman?
	    status = -1;
	    cm.sendNext("你想成为#b弓箭手#k？你需要去维多利亚岛进行转职。前往一个叫做#r射手村#k的弓箭手城镇，和美丽的#b雅典娜·皮尔斯#k交谈，学习弓箭手的方方面面。对了，一件非常重要的事：你必须至少达到10级才能成为弓箭手！！");
	} else if (selection == 8) { // What should I do to become a Magician?
	    status = 19;
	    cm.sendNext("你想成为#b魔法师#k？要做到这一点，你必须前往维多利亚岛。前往一个叫做#r魔法森林#k的魔法师城镇，在最高处有一座魔法图书馆。在里面，你会见到所有魔法师的领袖——#b古老的格林德#k，他会教你关于成为魔法师的一切。");
	} else if (selection == 9) { // What should I do to become a Thief?
	    status = -1;
	    cm.sendNext("你想成为#b飞侠#k？要成为飞侠，你必须前往维多利亚岛。前往一个叫做#r废弃都市#k的飞侠城镇，在城镇阴暗的一面，你会看到一个飞侠的据点。在那里，你会遇到#b黑暗领主#k，他会教你关于飞侠的一切。对了，一件非常重要的事：你必须至少达到10级才能成为飞侠！！");
	} else if (selection == 10) { // How do I raise the character stats? (S)
	    status = 22;
	    cm.sendNext("想知道如何提升角色的属性吗？首先按#bS#k键查看属性窗口。每次升级，你都会获得5点属性点，也就是AP。将这些AP分配到你选择的属性上。就是这么简单。");
	} else if (selection == 11) { // How do I check the items that I just picked up?
	    status = -1;
	    cm.sendNext("你想知道如何查看拾取的物品吗？打倒怪物后，它会掉落物品到地上，你可以按#bZ#k键拾取。那个物品会存放在你的物品栏中，只需按#bI#k键就可以查看。");
	} else if (selection == 12) { // How do I put on an item?
	    status = -1;
	    cm.sendNext("你想知道如何穿戴物品吗？按#bI#k键查看你的物品栏。将鼠标光标放在物品上，双击它即可穿戴。如果你无法穿戴某件物品，可能是你的角色不满足等级和属性要求。你也可以打开装备栏（#bE#k）将物品拖入其中来穿戴。要脱下物品，在装备栏中双击该物品即可。");
	} else if (selection == 13) { // How do I check out the items that I'm wearing?
	    status = -1;
	    cm.sendNext("你想查看已装备的物品吗？按#bE#k键打开装备栏，你会看到你当前穿着的所有装备。要脱下一件物品，双击该物品即可。物品将被移到物品栏中。");
	} else if (selection == 14) { // What are skills? (K)
	    status = -1;
	    cm.sendNext("获得职业后拥有的特殊"能力"叫做技能。你将获得该职业专属的技能。你还没到那个阶段，所以暂时没有任何技能，但请记住按#bK#k键可以打开技能书。以后会对你有帮助的。");
	} else if (selection == 15) { // How do I get to Victoria Island?
	    status = -1;
	    cm.sendNext("你可以从南港乘坐前往里本港的船只到达维多利亚岛。按#bW#k键查看世界地图，你会看到你在岛上的位置。找到南港，那就是你需要去的地方。你还需要一些金币来乘船，所以可能需要在这附近猎杀一些怪物。");
	} else if (selection == 16) { // What are mesos?
	    status = -1;
	    cm.sendNext("这是枫之谷中使用的货币。你可以用金币购买物品。获取金币的方式包括打倒怪物、在商店出售物品或完成任务……");
	}
    } else if (status == 2) { // How do I take down the monsters?
	cm.sendNextPrev("要攻击怪物，你需要装备武器。装备武器后，按#bCtrl#k键使用武器。掌握好节奏，你就能轻松打倒怪物。");
    } else if (status == 3) { // How do I take down the monsters?
	cm.sendNextPrev("转职后，你会获得各种技能，可以将它们设置到快捷键上以便使用。如果是攻击技能，你不需要按Ctrl键来攻击，只需按下设置为快捷键的按钮即可。");
    } else if (status == 4) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 5) { // How can I pick up an item?
	cm.sendNext("以下是如何拾取物品。打倒怪物后，会掉落物品到地上。这时，站在物品前面按#bZ#k键或小键盘的#b0#k键即可拾取物品。");
    } else if (status == 6) { // How can I pick up an item?
	cm.sendNextPrev("但请注意，如果你的物品栏满了，你就无法再拾取物品。所以如果有不需要的物品，就卖掉吧，好歹换点钱。转职后物品栏可能会扩展。");
    } else if (status == 7) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 8) { // What happens when I die?
	cm.sendNext("想知道死亡后会发生什么吗？当你的HP降到0时，你就会变成幽灵。那个位置会出现一块墓碑，你将无法移动，但仍然可以聊天。");
    } else if (status == 9) { // What happens when I die?
	cm.sendNextPrev("如果你只是新手，死亡时不会损失太多。但一旦你有了职业，情况就不同了。死亡时你会损失一部分经验值，所以务必不惜一切代价避免危险和死亡。");
    } else if (status == 10) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 11) { // When can I choose a job?
	cm.sendNext("什么时候可以选择职业？哈哈哈，别着急，朋友。每个职业都有相应的要求。通常8到10级就可以了，好好努力吧。");
    } else if (status == 12) { // When can I choose a job?
	cm.sendNextPrev("等级不是决定转职的唯一因素。你还需要根据职业提升特定属性的等级。例如，要成为战士，你的力量必须超过35，以此类推，你明白我的意思吧？务必提升与你职业直接相关的属性。");
    } else if (status == 13) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 14) { // Tell me more about this island!
	cm.sendNext("想知道这座岛的事吗？它叫做枫之岛，漂浮在空中。它一直在天空中漂浮着，所以那些凶猛的怪物不太会出现在这里。这是一座非常和平的岛屿，非常适合新手！");
    } else if (status == 15) { // Tell me more about this island!
	cm.sendNextPrev("但是，如果你想成为一个强大的玩家，最好不要在这里待太久。反正你也无法在这里转职。这座岛屿下方有一座巨大的岛屿叫做维多利亚岛。那个地方比这里大得多，完全不在一个量级。");
    } else if (status == 16) { // Tell me more about this island!
	cm.sendNextPrev("如何前往维多利亚岛？在这座岛的东边有一个叫做南港的港口。在那里，你会找到一艘在空中飞行的船。船前面站着船长，去问他吧。");
    } else if (status == 17) { // Tell me more about this island!
	cm.sendNextPrev("对了！在我结束之前还有最后一条信息。如果你不确定自己在哪里，随时按#bW#k键。世界地图会弹出并显示你当前的位置。有了它你就不用担心迷路了。");
    } else if (status == 18) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 19) { // What should I do to become a Magician?
	cm.sendNext("你想成为#b魔法师#k？要做到这一点，你必须前往维多利亚岛。前往一个叫做#r魔法森林#k的魔法师城镇，在最高处有一座魔法图书馆。在里面，你会见到所有魔法师的领袖——#b古老的格林德#k，他会教你关于成为魔法师的一切。");
    } else if (status == 20) { // What should I do to become a Magician?
	cm.sendNextPrev("哦，顺便说一下，与其他职业不同，成为魔法师只需要达到8级。但提前转职的代价是成为一名真正强大的法师需要付出更多努力。在选择你的道路之前，请三思而后行。");
    } else if (status == 21) {
	status = 0;
	cm.sendSimple(mainmenu);
    } else if (status == 22) { // How do I raise the character stats? (S)
	cm.sendNext("想知道如何提升角色的属性吗？首先按#bS#k键查看属性窗口。每次升级，你都会获得5点属性点，也就是AP。将这些AP分配到你选择的属性上。就是这么简单。");
    } else if (status == 23) { // How do I raise the character stats? (S)
	cm.sendNextPrev("将鼠标光标放在各项属性上可以查看简要说明。例如，力量对应战士，敏捷对应弓箭手，智力对应魔法师，运气对应飞侠。这并不是你需要知道的全部，你还需要仔细考虑如何通过分配点数来强化你角色的优势。");
    } else if (status == 24) {
	status = 0;
	cm.sendSimple(mainmenu);
    }
}