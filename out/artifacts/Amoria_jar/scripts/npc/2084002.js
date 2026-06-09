var property = "1";
var select;

function start() {
    property = "1";
    cm.sendSimple("你好，伟大的战士！我是#b金里奇#k，负责保管海佩里昂的黄金。\r\n#L0#用火焰灵魂石兑换冰霜灵魂石#l\r\n#L1#用冰霜灵魂石购买特殊物品#l")
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    } else
    if (property == "1")
        switch (selection) {
            case 0:
                var fire = cm.itemQuantity(4031469);
                var icy = fire / 10;
                if (icy > 0) {
                    cm.gainItem(4031469, -fire);
                    cm.gainItem(4031470, icy);
                    cm.sendOk("兑换成功！");
                } else
                    cm.sendOk("请确认你拥有火焰灵魂石。");
                cm.dispose();
                break;
            case 1:
                cm.sendSimple(
                    "\r\n#L0##i1102207# 黄金灵魂斗篷 - 特殊属性：9%攻击力，9%魔法攻击力，30%BOSS伤害#l" +
                    "\r\n#L1##i1122080# 龙王项链 - 特殊属性：30%全属性#l" +
                    "\r\n#L2##i2041213# 龙王红宝石 - 龙王项链专用卷轴#l" +
                    "\r\n#L3##i2022704# 龙王祝福 - 15分钟内提升武器攻击力+20和魔法攻击力+30#l"
                    );
                property = "2";
                break;
            default:
                cm.dispose();
                return;
        }
    else if (property == "2") {
        select = selection;
        cm.sendYesNo("你确定要购买 " + (selection == 0 ? "#i1102207# 黄金灵魂斗篷" : selection == 1 ? "#i1122080# 龙王项链" : selection == 2 ? "#i2041213# 龙王红宝石" : "#i2022704# 龙王祝福") + "吗？\r\n这将花费你 " + (selection == 0 ? "100" : selection == 1 ? "50" : selection == 2 ? "30" : "10") + " 个冰霜灵魂石。");
        property = "3";
    } else if (property == "3") {
        if (cm.itemQuantity(4031470) >=  (select == 0 ? 100 : select == 1 ? 50 : select == 2 ? 30 : 10)) {
            cm.gainItem(4031470, -(select == 0 ? 100 : select == 1 ? 50 : select == 2 ? 30 : 10))
            cm.dragonShoutReward(select);
            cm.sendOk("感谢你的购买！\r\n黑魔法师对这些灵魂石很感兴趣……我相信我可以卖给他一些。");
        } else
            cm.sendOk("看起来你没有足够的冰霜灵魂石！我可不能白送你无价的装备！\r\n而且，黑魔法师对这些灵魂石很感兴趣……我相信我可以卖给他一些。");
        cm.dispose();
    } else cm.dispose();
}