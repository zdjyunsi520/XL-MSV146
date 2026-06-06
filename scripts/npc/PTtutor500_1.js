load("（西格纳斯和她的骑士们看起来非常严肃。也难怪他们会这样。）");
importPackage(Packages.tools.packet);

var status = 0;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 1) {
        cm.sendNextS("（议员们似乎也不太高兴，我不知道他们在想什么？也许我可以靠近一些……）", 17);
    } else if (status == 2)
        cm.sendNextPrevS("这是真的吗？难道西格纳斯一直以来都是假的？", 17);
    else if (status == 3)
        cm.sendNextS("你在说什么啊？这怎么可能？\r\n西格纳斯是女皇，她以后也会是女皇！", 5, 1402200);
    else if (status == 4)
        cm.sendNextPrevS("我不是说她完全是冒牌货，但如果真的有人持有耶雷弗的宝物……", 5, 1402201);
    else if (status == 5)
        cm.sendNextPrevS("艾莉亚据说把那颗宝石看得比什么都重要。她本打算将其传给真正的继承人。", 5, 1402203);
    else if (status == 6)
        cm.sendNextPrevS("如果那件宝物能证明谁是真正的女皇，我是说如果西格纳斯以外的某人甚至属于艾莉亚的血统，我们所做的一切都可能功亏一篑。", 5, 1402202);
    else if (status == 7)
        cm.sendNextPrevS("我不会背叛西格纳斯，她为耶雷弗做了太多。但我也不能无视这个女人主张的正当性！", 5, 1402200);
    else if (status == 8)
        cm.sendNextPrevS("枫之谷世界联盟刚刚要形成统一战线。这里大多数人来是因为信任西格纳斯。如果有人插手，联盟可能会土崩瓦解。", 5, 1402203);
    else if (status == 9)
        cm.sendNextPrevS("我们可以站在这里猜测一整天。我觉得是时候让这位指控者亲自发言了。", 5, 1402202);
    else if (status == 10)
        cm.sendNextPrevS("嘘……她来了。", 5, 1402201);
    else if (status == 11)
        cm.sendNextPrevS("（这场复杂闹剧的导演终于登场了。）", 5, 1402201);
    else if (status == 12)
        cm.sendNextS("（这场复杂闹剧的导演终于登场了。）", 17);
    else if (status == 13) {
        cm.dispose();
        cm.showHilla();
    }
}