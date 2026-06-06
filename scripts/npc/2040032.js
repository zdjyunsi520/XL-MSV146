/*
	Weaver - Ludibrium : Ludibrium Pet Walkway (220000006)
**/

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
	cm.sendNext("嗯……现在太忙了没空做吗？不过如果你想做了，随时回来找我。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("这是一条可以和你的宠物一起散步的路。你可以带着它四处走走，也可以在这里训练你的宠物穿越障碍。如果你和宠物的亲密度还不够高，可能会有些麻烦，它不会太听你的话……那么，你觉得怎么样？想训练你的宠物吗？");
    } else if (status == 1) {
	if (cm.haveItem(4031128)) {
	    cm.sendNext("拿到那封信，带着你的宠物跳过障碍，然后把信交给我的兄弟训练师弗罗德。把信交给他，你的宠物就会有好事发生。");
	    cm.dispose();
	} else {
	    cm.gainItem(4031128, 1);
	    cm.sendOk("好的，这就是那封信。如果你直接去他那里，他不会知道是我派你去的，所以要带着你的宠物穿过障碍，到达最顶端，然后和训练师弗罗德谈话，把信交给他。如果在穿越障碍时注意关注你的宠物，这并不难。祝你好运！");
	    cm.dispose();
	}
    }
}