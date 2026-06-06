var status = 0;

function start() {
    cm.sendNextS("这件事简直充满了嫉妒的味道！我们是唯一能直接联系国王的平民。我敢保证这让某些人如坐针毡。某个混蛋想要给银河系中每位赏金猎人的名声抹黑！", 3);
}

function action(mode, type, selection) {
    status++;
    switch (status) {
        case 1:
            cm.sendNextPrevS("你觉得是内鬼干的？皇宫里的人？", 9);
            break;
        case 2:
            cm.sendNextPrevS("我猜他们没有好好想想对谁下手……有人要为毁了我的一天付出代价。", 3);
            break;
        case 3:
            cm.getDirectionInfo(1, 1000);
            cm.getDirectionInfo("Effect/DirectionNewPirate.img/newPirate/balloonMsg2/11", 2000, 0, -100, 0, 0);
            cm.getDirectionInfo(1, 500);
            cm.sendNextPrevS("我们可以之后再想该找谁算账。有人接触过国王，有人把他干掉了。你觉得除了我们之外还有多少人能突破那些防御？", 3);
            break;
        case 4:
            cm.sendNextPrevS("我保证所有人都会这么想。不管我们多努力说服这些军靴脑袋我们是在帮忙，他们只会看到一个手上沾了太多血的外人。你必须逃走，而且必须现在就逃。", 9);
            break;
        case 5:
            cm.sendNextPrevS("我保证所有人都会这么想。不管我们多努力说服这些军靴脑袋我们是在帮忙，他们只会看到一个手上沾了太多血的外人。你必须逃走，而且必须现在就逃。", 9);
            break;
        case 6:
            cm.showJettWanted();
            break;
    }
}