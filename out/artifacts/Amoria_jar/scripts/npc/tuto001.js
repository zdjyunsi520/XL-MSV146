var chat = -1;

function start() {
    cm.sendSimpleS("你有什么话要对我说吗？", 1, 9010000);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    mode == 1 ? chat++ : chat--;
    if (chat == 0) {
        if (selection == 1) {
            cm.getPlayer().femaleMihile();
        }
        cm.sendNextS("你叫什么名字？", 3);
    } else if (chat == 1)
        cm.sendNextPrevS("我没有名字。叫我 #b小鬼#k 吧。那位老人就是这么叫我的。", 1, 1106000);
    else if (chat == 2)
        cm.sendNextPrevS("他是你爷爷吗？你的父母呢？", 3);
    else if (chat == 3)
        cm.sendNextPrevS("我没有家人。我只是在这里工作。\r\n#b（问这么多干嘛？）#k\r\n看，我得在老人回来之前继续干活了……", 1, 1106000);
    else if (chat == 4)
        cm.sendNextPrevS("你知道克罗迈尔这个名字吗？光之骑士？", 3);
    else if (chat == 5)
        cm.sendNextPrevS("不知道，从来没听说过这个人……\r\n#b（为什么这个名字听起来很熟悉？）", 1, 1106000);
    else if (chat == 6)
        cm.sendNextPrevS("#e你这个小鬼！\r\n我让你搬箱子，不是让你跟客人聊天！", 3);
    else if (chat == 7)
        cm.sendNextPrevS("我正准备清理的……\r\n抱歉，我得听他的话……", 1, 0, 1106002);
    else if (chat == 8) {
        cm.sendNextPrevS("我正准备清理的……\r\n抱歉，我得听他的话……", 3);
    } else if (chat == 9) {
        cm.forceCompleteQuest(20030); //If you complete the quest, Neinheart dissapears
        cm.dispose();
        cm.mihileNeinheartDisappear();
    }
}