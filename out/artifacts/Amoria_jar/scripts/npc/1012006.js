/* Author: Xterminator
	NPC Name: 		Trainer Bartos
	Map(s): 		Victoria Road : Pet-Walking Road (100000202)
	Description: 		Pet Trainer
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 1 && mode == 0) {
	cm.sendNext("嗯……现在太忙了没空做吗？不过如果你想做的话，回来找我。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendSimple("你有什么事找我吗？\r\n#L0##b请告诉我关于这个地方的信息。#l\r\n#L1#我是通过妖精玛丽的介绍来的……#k#l");
    } else if (status == 1) {
	if (selection == 0) {
	    if (cm.haveItem(4031035)) {
		cm.sendNext("拿好这封信，带着你的宠物跳过障碍，把信送到我兄弟训练师弗罗德那里。把信交给他，你的宠物会有好事发生。");
		cm.dispose();
	    } else {
		cm.sendYesNo("这是一条你可以和宠物一起散步的道路。你可以和它一起散步，也可以在这里训练你的宠物通过各种障碍。如果你和宠物的亲密度还不够高，可能会出问题，它不会那么听从你的指令……你觉得怎么样？想训练你的宠物吗？");
	    }
	} else {
	    cm.sendOk("嘿，你确定你见过#b妖精玛丽#k吗？如果你从没见过她就别骗我，因为一眼就能看出来。而且那个谎撒得太差了！！");
	    cm.dispose();
	}
    } else if (status == 2) {
	cm.gainItem(4031035, 1);
	cm.sendNext("好的，这是信件。如果你直接去那里，他不会知道是我派你去的，所以要带着你的宠物通过障碍，走到最上面，然后和训练师弗罗德说话把信给他。只要在通过障碍时注意你的宠物，这不会很难的。祝你好运！");
	cm.dispose();
    }
}