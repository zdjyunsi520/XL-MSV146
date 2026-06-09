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
            qm.sendNext("经过一段时间的修炼 "+qm.getPlayer().getName()+"很有趣吧？",1072008);
        } else if (status == 1) {
            qm.sendPlayerToNpc("谢谢凯琳，我觉得自己也变强了不少。我需要更大的力量！");
        } else if (status == 2) {
            qm.sendNext("我在你眼中看到了这一点。快去找#p9270091#，他会帮你的。他已经修好了我的枪，真是太好了^^！",1072008);
        } else if (status == 3) {
            qm.sendNext("我带你去见他。怎么样，现在就走吧！",1072008);
        } else if (status == 4) {
            qm.sendPlayerToNpc("哦，那太好了。谢谢凯琳姐姐。");
        } else if (status == 5) {
            qm.forceStartQuest();
            qm.warp(552000071,1);
            qm.dispose();
        } 
    }
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}