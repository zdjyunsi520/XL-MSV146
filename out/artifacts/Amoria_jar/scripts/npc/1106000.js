var chat = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    mode == 1 ? chat++ : chat--;
    if (chat == 0)
        cm.sendNextS("你有什么话要对我说吗？", 3);
    else if (chat == 1)
        cm.sendNextPrevS("你叫什么名字？", 1);
    else if (chat == 2)
        cm.sendNextPrevS("我没有名字。就叫我#b小鬼#k吧。老人都这么叫我。", 3);
    else if (chat == 3)
        cm.sendNextPrevS("他是你爷爷吗？你父母呢？", 1);
    else if (chat == 4)
        cm.sendNextPrevS("我没有家人。我只是在这里打工。\r\n#b（怎么这么多问题？）#k\r\n看，我得在老人回来之前回去干活了……", 3);
    else if (chat == 5)
        cm.sendNextPrevS("你知道克洛米勒这个名字吗？光明骑士？", 1);
    else if (chat == 6)
        cm.sendNextPrevS("不知道，从来没听说过这个人……\r\n#b（为什么这名字听起来这么熟悉？）", 3);
    else if (chat == 7)
        cm.sendNextPrevS("#e你这个臭小子！\r\n我让你搬箱子，不是跟我的客人闲聊！", 1, 0, 1106002);
    else if (chat == 8) {
        cm.sendNextPrevS("我正准备收拾的……\r\n抱歉，我得听他的……", 3);
        cm.forceCompleteQuest(20030);
    } else if (chat == 9) {
        cm.mihileNeinheartDisappear();
        cm.dispose();
    }
//Next Chat:
//H-hey! Where did he go?!\r\nUgh, who cares?! I gotta get that stuff out of here before Limbert starts raising a ruckus again...
}