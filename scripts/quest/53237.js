var status = -1;
function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            qm.sendNext("你来了啊 "+qm.getPlayer().getName()+"凯琳跟我说过你了。",9270091);
        } else if (status == 1) {
            qm.sendPlayerToNpc("凯琳说你是一个很厉害的枪匠，谢谢你帮我修好枪。");
        } else if (status == 2) {
            qm.sendNext("哦不用客气。我是这里最好的枪匠。如果你想要一把好枪，我可以帮你。不过你得先帮我找些东西？",9270091);
        } else if (status == 3) {
            qm.sendNext("人们说想要找到蓝色水晶就得去#m552000072#，但我没有时间去那么低洼潮湿的地方。 ",9270091);
        } else if (status == 4) {
            qm.sendPlayerToNpc("没问题。带我去那里吧");
        } else if (status == 5) {
            qm.forceStartQuest();
            qm.warp(552000072,1);
            //qm.gainItem(4033251,30);
            qm.dispose();
        } 
    }
}
function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}
