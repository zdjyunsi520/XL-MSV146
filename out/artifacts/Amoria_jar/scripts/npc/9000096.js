function start() {
    cm.sendSimple("各位冒险家好，按照海佩里昂的要求，我在这里帮助你们互相战斗。\r\n我会提供 #b炸弹#k 用于狩猎竞赛。\r\n#L0#我想听规则#l\r\n#L1#给我一些炸弹！#l\r\n#L2#我想让你给我护盾增益，这样炸弹就炸不到我了！（价格：10个火焰灵魂石）#l");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    switch (selection) {
        case 0:
            cm.sendOk("#e<龙的咆哮>#n\r\n-时间限制：10分钟\r\n-参与人数：3 - 6名玩家\r\n\r\n你将被传送到寂静丛林，与其他玩家互相战斗！\r\n我在这里为你提供补给，比如炸弹和各种增益。\r\n你将获得火焰灵魂石，如果被炸弹击中就会失去它们。尽可能多地收集火焰灵魂石以赢得更好的奖品！");
            cm.dispose();
            break;
        case 1:
            if (cm.itemQuantity(2430121) + 30 <= 30) {
                if (cm.canHold(2430121)) {
                    cm.gainItem(2430121, 30);
                    cm.sendOk("祝你好运！");
                } else {
                    cm.sendOk("请清出一些背包空间");
                }
            } else
                cm.sendOk("你一次最多只能拥有30个炸弹，你不想炸到自己吧？");
            cm.dispose();
            break;
        case 2:
            if (cm.itemQuantity(4031469) > 10) {
                cm.useItem(2000005);
                cm.useSkill(2311009, 20);
                cm.gainItem(4031469, -10);
                cm.sendOk("你获得了护盾增益，持续时间足够你去轰炸其他人！");
            } else
                cm.sendOk("看来你的火焰灵魂石不够。请轰炸其他参与者来获取一些。")
        default:
            cm.dispose();
            return;
    }
}