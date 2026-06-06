function start() {
    cm.sendSimple("#e<龙之呐喊>#n\r\n-时间限制：10分钟\r\n-参与人数：3-6名玩家\r\n\r\n你将被送到寂静丛林，互相展开战斗！\n黑牛会在那里等着你，为你提供炸弹和各种增益等补给品。\r\n你将获得火焰灵魂石，如果被炸弹伤害则会失去。尽可能多地收集火焰灵魂石来赢得更好的奖品！");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    switch (selection) {
        case 0:
            cm.sendOk("请召集你想要一起战斗的人。");
            cm.dispose();
            break;
        case 1:
            if (cm.getParty() == null) {
                cm.sendOk("你不能一个人战斗！至少需要三名队员。");
                cm.dispose();
                return;
            }
            if (cm.getParty().getMembers().size() < 3 && !cm.getPlayer().isGM()) {
                cm.sendOk("请让队长来和我交谈。");
                cm.dispose();
                return;
            }
            if (!cm.isLeader()) {
                cm.sendOk("已经有人在接受挑战了，请等他完成。");
                cm.dispose();
                return;
            }
            if (cm.getMap(910025200).getCharactersSize() >= 1) {
                cm.sendOk("龙之呐喊");
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("发生错误，请联系管理员。");
            if (em == null) {
                cm.sendOk("另一个队伍已经在此频道进入了#r组队任务#k。请换一个频道，或等待当前队伍完成。#b\r\n#L0#我想要年糕帽子。#");
                cm.dispose();
                return;
            }
            var prop = em.getProperty("state");
            if (prop.equals("0") || prop == null) {
                em.startInstance(cm.getParty(), cm.getMap());
                cm.removeAll(4031469);
                cm.dispose();
                return;
            } else {
                cm.sendSimple("另一个队伍已经在此频道进入了#r组队任务#k。请换一个频道，或等待当前队伍完成。#b\r\n#L0#我想要年糕帽子。#");
            }
            break;
        default:
            cm.dispose();
            return;
    }
}