load("nashorn:mozilla_compat.js");
importPackage(Packages.tools.packet);
var chat = -1;
var yesno = false;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/ || mode == 0 && yesno == true /*No*/) {
        cm.dispose();
        return;
    }
    if (mode == 1) //Next/Ok/Yes/Accept
        chat++;
    else if (mode == 0) //Previous/No/Delience
        chat--;
    if (cm.getMapId() == 300000012) {
        if (cm.getPlayer().getLevel() == 1)
            Tutorial1();
        else if (cm.getPlayer().getLevel() >= 4 && cm.getPlayer().getLevel() != 8) {
            if (cm.itemQuantity(4020009) == 0)
                Tutorial2();
            else if (cm.itemQuantity(4020009) > 0 && cm.getMonsterCount(cm.getMapId()) < 1)
                Tutorial3();
            else {
                cm.sendOk("你还没有击败强力蜗牛。");
                cm.dispose();
            }
        } else if (cm.getPlayer().getLevel() == 8) {
            cm.sendOk("你必须先和希拉交谈！");
            cm.dispose();
        }
    } else
        cm.dispose();
}

function Tutorial1() {
    if (chat == 0) {
        cm.sendNext("你醒了！");
    }else if (chat == 1)
        cm.sendNextPrevS("我在哪里？\r\n我死了吗？", 3);
    else if (chat == 2)
        cm.sendNextPrev("不完全是……\r\n当你击败黑魔法师时，你被诅咒了。\r\n你的灵魂处于两个世界之间。");
    else if (chat == 3)
        cm.sendNextPrevS("这是不是意味着我永远被困在这里了？", 3);
    else if (chat == 4) {
        cm.sendYesNo("并非毫无办法...我已经找到了让你离开这里的方法。\r\n但首先，你必须向我证明你有值得被复活的理由。\r\n你愿意接受挑战吗？");
        yesno = true;
    } else if (chat == 5) {
        yesno = false;
        while (cm.getPlayer().getLevel() < 4)
            cm.getPlayer().levelUp();
        cm.getPlayer().getClient().getSession().write(CPacket.startMapEffect("准备好了再来找我。", 5122005, true));
        cm.dispose();
    }
}

function Tutorial2() {
    if (chat == 0)
        cm.sendNext("首先，你必须击败强力蜗牛来证明你的实力。\r\n强力蜗牛比10只普通蜗牛稍强一些，应该不会太难。");
    else {
        if (cm.canHold(1302000, 1) && cm.itemQuantity(1302000) == 0)
            cm.gainItem(1302000, 1);
        if (cm.canHold(4020009, 1) && cm.itemQuantity(4020009) == 0)
            cm.gainItem(4020009, 1);
        for (var p = 0; p < 5; p++)
            cm.getPlayer().dropMessage(5, "这是什么？嗯！是一块时间碎片！它从哪里来的？");
        cm.getPlayer().getClient().getSession().write(CPacket.startMapEffect("我给了你一把剑来帮助你战斗。\r\n击败强力蜗牛后再来找我。", 5122005, true));
        cm.spawnCustomMonster(100100, 100, 50, 1, 0, true, 1, 5, 0, "强力蜗牛", 47, 98);
        cm.dispose();
    }
}

function Tutorial3() {
    if (chat == 0)
        cm.sendNext("恭喜！你已经击败了它！");
    else if (chat == 1)
        cm.sendNextPrevS("我已经向你证明了你必须复活我吗？", 3);
    else if (chat == 2)
        cm.sendNextPrev("还有一件事，要离开这里你必须触碰黑暗。");
    else if (chat == 3)
        cm.sendNextPrevS("什么？！触碰黑暗？我该怎么做？");
    else if (chat == 4) {
        cm.sendYesNo("我要召唤希拉，你所需要做的就是假装你是她的#b守卫#k。\r\n你愿意吗？");
        yesno = true;
    } else if (chat == 5) {
        yesno = false;
        while (cm.getPlayer().getLevel() < 8)
            cm.getPlayer().levelUp();
        cm.spawnNpc(1402400, -173, 98);
        cm.spawnNpc(1402401, -258, 98);
        cm.removeNpc(300000012, 2144020);
        cm.dispose();
    }
}

function nextMap(currentMap) { //Useless but might be used later
    switch (currentMap) {
        case 300000012:
            return 100000000;
            break;
        default:
            return 300000012;
            break;
    }
}