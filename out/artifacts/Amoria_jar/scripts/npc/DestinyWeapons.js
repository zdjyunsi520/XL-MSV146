var a;
var destinyweapons;

function start() {
    destinyweapons = cm.getPlayer().getDestinyWeapons();
    a = 0;
    cm.sendSimple("#b命运武器#k是一种普通武器，会随着你的等级提升而增强。\r\n\r\n它们的新属性是未知的，可能在升级时获得之前没有的属性。这些属性也会随着你的等级提升而增强。\r\n\r\n#b属性增强上限#k：\r\n#gHP和MP#k：等级低于150时为500，否则为1000。\r\n#g速度和跳跃#k：等级低于150时为20，否则为40。\r\n#g攻击力和魔力#k：等级低于150时为150，否则为200。\r\n#g其他属性#k：等级低于150时为100，否则为150。\r\n\r\n你只能持有一把#b命运武器#k，且#r副手命运武器#k尚未被发现。\r\n\r\n只有一种方法可以判断一把武器是否为#b命运武器#k。\r\n#L0#我怎么知道我的武器是不是#b命运武器#k？#l\r\n");
}

function action(m, t, s) {
    if (m != 1) {
        cm.dispose();
        return;
    }
    a++;
    switch (a) {
        case 1:
            cm.sendSimple("有一份未完成的#b命运武器#k清单正在持续更新中。\r\n然而，这些武器看起来和普通武器一样。#b命运武器#k上会刻有制造者的名字，而只有一个能够锻造它们的人，那就是传说中的#r暗影骑士#k。\r\n#L0#我可以看看清单吗？#l");
            break;
        case 2:
            cm.sendSimple("当然可以，");
            break;
        case 3:
            var list = "\r\n#L0#我怎样才能获得#b命运武器#k？";
            for (var i = 0; i < destinyweapons.length; i++)
                list += "\r\n#v" + destinyweapons[i] + "##t" + destinyweapons[i] + "#"
            list += "由于这些武器非常独特，获得它们的唯一途径是从唯一知道如何锻造它们的卖家——#r暗影骑士#k那里购买。\r\n他可以在#r自由市场#k找到，因为那是最好的交易场所。\r\n暗影骑士被发现与#r黑魔法师#k有一些可疑的活动，有人看到他与黑翼组织交易#i4251202#以获取锻造#b命运武器#k的材料...\r\n#L0#他接受什么作为报酬？#l";
            cm.sendSimple(list);
            break;
        case 4:
            cm.sendSimple("他出售这些武器，收取的是一些被怪物持有的古老硬币。你应该亲自去看看他！\r\n#L0#好的，谢谢你的帮助。#l");
            break;
        case 5:
            cm.sendSimple("他出售这些武器，收取的是一些被怪物持有的古老硬币。你应该亲自去看看他！\r\n#L0#好的，谢谢你的帮助。#l");
            cm.dispose();
            break;
        default:
            cm.dispose();
            return;
    }
}