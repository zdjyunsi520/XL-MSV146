var status = -1;

function action(mode, type, selection) {
    //if (mode != 1) {
    //    cm.dispose();
    //    return;
    //}
    status++;
    if (status == 0)
        cm.sendNextS("基丹！老大爷！你真的不记得我了吗？我们天天打招呼的！", 2);
    else if (status == 1)
        cm.sendNextPrev("哦，嗯，对不起……");
    else if (status == 2)
        cm.sendNextPrevS("没关系老伙计，我知道你每天看到无数人从这里经过。记住所有人确实不容易，但我还是希望你能至少记得我。", 2);
    else if (status == 3)
        cm.sendNextPrev("嘿-嘿！我都说了对不起了！这里现在简直像个疯人院。\r\n你不能因为漏记了几张面孔就怪我嘛。");
    else if (status == 4)
        cm.sendNextPrevS("真的那么糟糕吗？", 2);
    else if (status == 5)
        cm.sendNextPrev("当然了！有个新的皇室女人声称女皇丝格娜可能是假的！这种事谁能安心？！");
    else if (status == 6)
        cm.sendNextPrevS("说得也是。所以我才来这里！", 2);
    else if (status == 7)
        cm.sendNextPrev("我也挺担心的。连女皇看起来也很忧虑。\r\n我见到她时，她脸色苍白如鬼……");
    else if (status == 8)
        cm.sendNextPrevS("不想迎来一位新女皇吗，基丹？", 2);
    else if (status == 9)
        cm.sendNextPrev("我绝不会对女皇丝格娜有丝毫不敬！没有她的领导，我们不可能走到今天。但如果这个新女人的说法是真的……");
    else if (status == 10)
        cm.sendNextPrevS("你真的认为女皇血脉中还有其他人吗？", 2);
    else if (status == 11)
        cm.sendNextPrev("那个叫希拉的女人坚称自己是末代女皇的后裔。");
    else if (status == 12)
        cm.sendNextPrevS("难怪气氛这么紧张。", 2);
    else if (status == 13)
        cm.sendNextPrev("确实如此。如果神兽在这里，她就能澄清一切。\r\n可惜她不在。");
    else if (status == 14)
        cm.sendNextPrev("为什么那个女人偏偏选在今天召开会议？！");
    else if (status == 15)
        cm.sendNextPrevS("看起来时机也太巧了吧，不是吗？", 2);
    else if (status == 16)
        cm.sendNextPrev("我希望事情能顺利解决。如果丝格娜不是真正的女皇，我们该怎么办？我已经把自己的一切都奉献给她了。");
    else if (status == 17)
        cm.sendNextPrev("艾琳不能分裂成两派。那样会天下大乱的。");
    else if (status == 18)
        cm.sendNextPrevS("别太担心了，基丹。我有预感一切都会好起来的。", 2);
    else if (status == 19)
        cm.sendNextPrev("我要是有你那种乐观就好了。不管怎样，这个叫希拉的人一定很有信心才敢把所有人都召集到这里来。");
    else if (status == 20)
        cm.sendNextPrevS("说真话的人和说谎的人都需要自信。谁知道呢。也许会有什么了不起的人出现来澄清一切。", 2);
    else if (status == 21)
        cm.sendNextPrev("那是什么意思？你为什么那样说话？");
    else if (status == 22)
        cm.sendNextPrevS("别担心！我确信一切尘埃落定后我们还会再见的。", 2);
    else if (status == 23)
        cm.sendPrev("呃……好吧，再见。");
    else
        cm.dispose();
}