/* Cygnus revamp
 Noblesse tutorial
 The Path of a Night Walker
 Made by Daenerys
 */

var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("我等待你的决定...");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    if (status == 0) {
        qm.sendYesNo("你做出决定了吗？这个决定将是最终的，所以在决定之前请三思。你确定要成为一名夜行者吗？");
    } else if (status == 1) {
        qm.sendNext("我刚刚重塑了你的身体，使其完美适合夜行者。如果你想变得更强大，使用属性窗口（S）来提升相应的属性。如果你不确定要提升什么，只需点击#b自动#k。");
        if (qm.getJob() != 1400) {
            qm.gainItem(1472061, 1);
            qm.gainItem(2070015, 800);
            qm.gainItem(2070015, 800);
            qm.gainItem(1142066, 1);
            qm.expandInventory(1, 4);
            qm.expandInventory(4, 4);
            qm.changeJob(1400);
            qm.getPlayer().gainSP(5, 0);
            qm.gainExp(1242);
        }
        qm.forceCompleteQuest();
    } else if (status == 2) {
        qm.sendNextPrev("我也扩展了你的装备和其他物品栏的槽位数量。明智地使用这些槽位，填满骑士需要携带的物品。");
    } else if (status == 3) {
        qm.sendNextPrev("我还给了你一些#bSP#k，所以打开#b技能菜单#k来学习新技能。当然，你不能一次性全部提升，而且有些技能你需要先掌握基础技能才能学习。");
    } else if (status == 4) {
        qm.sendNextPrev("与你做初心者的时期不同，一旦你成为夜行者，当你HP耗尽时，你将损失一部分经验值，明白吗？");
    } else if (status == 5) {
        qm.sendNextPrev("现在...我希望你出去向世界展示骑士团的行动方式。");
        qm.safeDispose();
    }
}