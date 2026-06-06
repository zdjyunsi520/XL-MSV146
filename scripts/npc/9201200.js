var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.sendOk("坐上这艘船你就会前往更大的大陆。只要#e150金币#n，我就带你去#b维多利亚岛#k。不过，一旦你离开这个地方，就再也回不来了。你觉得呢？你想去维多利亚岛吗？");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        if (cm.getMapId() == 690000009)
            cm.sendYesNo("好的，给我150金币...嘿，那是什么？是安赫斯特村长卢卡斯写的推荐信吗？嘿，你应该早点告诉我你有这个。我是尚克斯，我一眼就能看出谁了不起，既然你是卢卡斯推荐的，我看出来你有成为冒险家的巨大潜力。这趟旅行我不会收你钱的！");
        else
            cm.dispose();
    } else if (status == 1) {
        if (cm.haveItem(4031801)) {
            cm.sendNext("厌倦这个地方了吗？来...先给我#e150金币#n...");
        } else {
            cm.sendNext("既然你有推荐信，我就不收你钱了。好的，系好安全带，因为我们要前往维多利亚岛了，可能会有点颠簸！！");
        }
    } else if (status == 2) {
        if (cm.haveItem(4031801)) {
            cm.sendNextPrev("什么？你是说你想不带钱就去？你可真是个怪人...");
        } else {
            if (cm.getPlayerStat("LVL") >= 7) {
                if (cm.getMeso() < 150) {
                    cm.sendOk("太好了！收下#e150#n金币！好的，出发前往维多利亚岛！");
                    cm.dispose();
                } else {
                    cm.sendNext("让我看看...我觉得你还不够强。你必须至少达到7级才能前往维多利亚岛。");
                }
            } else {
                cm.sendOk("让我看看...我觉得你还不够强。你必须至少达到7级才能前往维多利亚岛。");
                cm.dispose();
            }
        }
    } else if (status == 3) {
        if (cm.haveItem(4031801)) {
            cm.gainItem(4031801, -1);
            cm.warp(690000029,0);
            cm.dispose();
        } else {
            cm.gainMeso(-150);
            cm.warp(690000029,0);
            cm.dispose();
        }
    }
}