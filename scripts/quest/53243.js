var status = -1;
function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}
function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (qm.getQuestStatus(53243)!=1){
            if (status == 0) {
                qm.sendNext("把这些东西带给#p2111008#。他就在#m261010000#附近。");
            } else if (status == 1) {
                qm.sendPlayerToNpc("（看起来这就是我要找的人……）");
            } else if (status == 2) {
                qm.forceStartQuest();
                qm.dispose();
            } 
        }else if (qm.getQuestStatus(53243)==1){
            if (status == 0) {
                qm.sendNext("谁，谁在那？！");
            } else if (status == 1) {
                qm.sendPlayerToNpc("冷静一下。#p2111007#让我来这里");
            } else if (status == 2) {
                qm.sendNext("呼……自从接了这活我就没睡过觉！");
            } else if (status == 3) {
                qm.sendPlayerToNpc("你看起来很疲惫！");
            } else if (status == 4) {
                qm.sendNext("必须承认，要制作它真的很难。而且消耗的力量令人难以置信。我开始有点害怕了……它可能毁灭冒险岛世界的一块大陆！");
            } else if (status == 5) {
                qm.sendPlayerToNpc("（一个可以毁灭大陆的东西……听起来很疯狂，我不太喜欢）");
            } else if (status == 6) {
                qm.sendPlayerToNpc("这是你需要的材料。");
            } else if (status == 7) {
                qm.gainItem(4000357,-50);
                qm.gainItem(4000358,-50);
                qm.gainItem(4000364,-50);
                qm.sendNext("啊对了谢谢你。等我一小会儿，马上就好");
            } else if (status == 8) {
                qm.sendNext("叽里呱啦噼里啪啦稀里哗啦…………");
            } else if (status == 9) {
                qm.sendNext("嗯。好了。");
                qm.gainItem(4033250,1);
            } else if (status == 10) {
                qm.sendNext("把它带到阿里安特#m260020620#，客户正在#m552000074#的里面等着",2111007);
            } else if (status == 11) {
                qm.forceCompleteQuest();
                qm.forceCompleteQuest(53244);
                qm.dispose();
            } 
        }
    }
}
