var chat = -1;
var select;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    if (mode == 1) //Next/Ok/Yes/Accept
        chat++;
    else if (mode == 0) //Previous/No/Delience
        chat--;
    if (cm.getMapId() == 300000012 && cm.getPlayer().getLevel() >= 8)
        Tutorial4(selection);
    else
        cm.dispose();
}

function Tutorial4(selection) {
    if (chat == 0)
        cm.sendSimple("你！你是谁，你在这里做什么？\r\n#L0#我只是……又一个幽灵#l\r\n#L1#我是守卫 #hh#，我抓到了时间女神莉茵#l\r\n#L2#我要打败你！");
    else if (chat == 1) {
        switch (selection) {
            case 0:
                cm.sendNextS("我只是……又一个幽灵。", 3);
                break;
            case 1:
                cm.sendNextS("我是守卫 #hh#，我抓到了时间女神莉茵。", 3);
                break;
            case 2:
                cm.sendNextS("我要打败你！", 3);
                break;
        }
        select = selection;
    } else if (chat == 2) {
        switch (select) {
            case 0:
            case 2:
                cm.sendOk("快！再和她说话！我已经让她以为你们从未见过面。", 2144020);
                cm.dispose();
                break;
            case 1:
                cm.sendNext("哦，真的吗？我真为你骄傲！把她带到我这里来！");
                break;
        }
    } else if (chat == 3)
        cm.sendNext("啊！以时间之力！", 2144020);
    else if (chat == 4)
        cm.sendNext("快！她要施法了！我们快离开这里！\r\n我会把你送到射手村，我去试着抓住她！");
    else if (chat == 5) {
        cm.removeNpc(300000012, 1402400);
        cm.removeNpc(300000012, 1402401);
        cm.warp(100000000);
        while (cm.getPlayer().getLevel() < 10)
            cm.getPlayer().levelUp();
        cm.dispose();
    }
}