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
        cm.sendNextS("我已寻找你多时，如今你站在我面前。拥有光之命运的战士。", 3);
    else if (chat == 1)
        cm.sendNextPrevS("你在说什么？", 1, 0, 1106001);
    else if (chat == 2)
        cm.sendNextPrevS("注意你的态度，下人！这位是女皇！", 3);
    else if (chat == 3)
        cm.sendNextPrevS("你就是之前那个人！这是怎么回事？你说的那个人，克罗迈尔……我在阁楼里发现了他的一封信。那是林伯特的真名还是什么？", 1, 0, 1106000);
    else if (chat == 4)
        cm.sendNextPrevS("你知道克罗迈尔这个名字吗？光之骑士？", 3);
    else if (chat == 5)
        cm.sendNextPrevS("克罗迈尔和林伯特先生没有任何关联，除了你。克罗迈尔……是你的父亲。", 1, 0, 1106000);
    else if (chat == 6)
        cm.sendNextPrevS("我的父亲在我很小的时候把我留在了这里。他把我扔给了一个养鸡老头。", 1, 0, 1106001);
    else if (chat == 7)
        cm.sendNextPrevS("他并没有抛弃你。你的父亲在你母亲去世后将你留在这里是为了救你的命。他的道路不是你能跟随的……", 3);
    else if (chat == 8)
        cm.sendNextPrevS("救我？他没有救我。他把我留在这么个破棚子里当奴隶。他甚至连名字都没给我！现在我才发现我一直在这里等待一个永远不会回来的父亲……", 1, 0, 1106001);
    else if (chat == 9)
        cm.sendNextPrevS("只有最黑暗的夜晚才能孕育出最灿烂的日出。放下你的愤怒，跟我走吧。你会找到你所追寻的光。", 3);
    else if (chat == 10)
        cm.sendNextPrevS("女皇大人，我对这个男孩没有信心。我们对他一无所知。我认为他不适合成为光之骑士。", 1, 0, 1106001);
    else if (chat == 11)
        cm.sendNextPrevS("亲爱的南哈特，我早该知道你不会相信信念。去考验他吧，但温和一些。", 1, 0, 1106000);
    else if (chat == 12)
        cm.sendNextPrevS("等等，什么？", 1, 0, 1106001);
    else if (chat == 13)
        cm.sendNextPrevS("等等，什么？", 3);
    else if (chat == 14) {
        cm.introEnableUI(0);
        cm.introDisableUI(false);
        cm.forceCompleteQuest(20034);
        cm.forceStartQuest(20035);
        cm.mihileAssailantSummon();
        cm.dispose();
    }
}