var status;
var selected;

function start() {
    status = 0;
    cm.sendSimple("你想了解更多关于珠宝制作的信息吗？\r\n#L0##b#e珠宝制作#k#n？#l\r\n#L2##b#e珠宝协同#k#n？#k#l\r\n#L1#融合 #b#e珠宝#n#k？#l\r\n#L3#用 #b#e珠宝粉末#n#k 兑换魔法珠宝盒。#l");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    switch (status) {
        case 1:
            selected = selection;
            if (selected == 0) {
                cm.sendNextS("珠宝制作可以让你将珠宝的力量注入装备中以提升其属性。", 4, 9000132);
            } else if (selected == 1) {
                cm.sendNextS("如果你有两个没用的珠宝，可以使用 #i2048402:##t2048402#。将它们融合在一起可能会有意想不到的好结果！", 4, 9000132);
            } else if (selected == 2) {
                cm.sendNextS("你需要特殊的珠宝来为 #i1112762:# #t1112762# 和 #i1132191:# #t1132191# 增加属性。你知道的，就是注入了力量的特殊珠宝。", 4, 9000132);
            } else if (selected == 3) {
                cm.sendSimple("你想兑换哪个珠宝？\r\n#L0#用10组 #b#e#t4008000##k#n 兑换一个魔法珠宝盒。#l\r\n#L1#用10组 #b#e#t4008001##k#n 兑换一个魔法珠宝盒。#k#l\r\n#L2#用10组 #b#e#t4008002##k#n 兑换一个魔法珠宝盒。#l\r\n#L3#用10组 #b#e#t4008003##k#n 兑换一个魔法珠宝盒。#l");
            }
            break;
        case 2:
            if (selected == 0) {
                cm.sendNextPrevS("但是你不能随便用什么物品来制作珠宝！只能用 #i1112762:# #t1112762# 和 #i1132191:# #t1132191#！ ", 4, 9000132);
            } else if (selected == 1) {
                cm.sendNextPrevS("此外，你可以用 #t2048402# 获得S级和A级珠宝！", 4, 9000132);
                cm.dispose();
            } else if (selected == 2) {
                cm.sendNextPrevS("有#b力量珠宝#k、#b幸运珠宝#k、#b敏捷珠宝#k和#b锐利珠宝#k。它们会让你更强壮、更幸运、更敏捷、更聪明！等级越高，携带的属性越多。为什么不带来适合你需求的珠宝呢？", 4, 9000132);
                cm.dispose();
            } else if (selected == 3) {
                var reqItem = 4008000 + selection;
                if (cm.haveItem(reqItem, 10)) { //todo handle
                } else {
                    cm.sendNext("你确定你有10组 #t" + reqItem + "#吗？我需要全部10组才能制作一个魔法珠宝盒。");
                }
                cm.dispose();
            }
            break;
        case 3:
            if (selected == 0) {
                cm.sendNextPrevS("说起来不好意思，但我不太会控制自己的力气。有时候我...会把东西弄坏。不过没关系！如果你有珠宝粉末，我可以把它塑造成新的珠宝。", 4, 9000132);
            }
            break;
        case 4:
            if (selected == 0) {
                cm.sendNextPrevS("点击我旁边的 #b#e珠宝研钵#n#k 来使用珠宝制作功能，亲自体验一下吧！", 4, 9000132);
                cm.dispose();
            }
            break;
    }
}