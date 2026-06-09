var chat = -1;
var select, itemid;
var invalid = [
2022766, 1042003, 1062007, 1002140, 1003142, 1322013, 1002959,
1082392, 1082393, 1082394, 2003561, 2003552, 2003553
];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 /*End Chat*/ || mode == -1 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    if (mode == 1) //Next/Ok/Yes/Accept
        chat++;
    else if (mode == -1) //Previous/No/Delience
        chat--;
    startChat(selection);
}

function startChat(selection) {
    if (chat == 0)
        cm.sendSimple("请输入物品ID：");
    else if (chat == 1) {
        switch (selection) {
            case 0:
                cm.sendGetNumber("请输入物品名称：", 0, 1002000, 6000000);
                select = 0;
                break;
            case 1:
                cm.sendGetText("这是一个无效的物品。");
                select = 1;
                break;
        }
    } else if (chat == 2) {
        switch (select) {
            case 0:
                itemid = selection;
                for (var i = 0; i < invalid.length; i++) {
                    if(itemid == invalid[i]){
                        cm.sendOk("请输入你需要的物品数量：");
                        cm.dispose();
                        return;
                    }
                }
                if (itemid >= 5000000 && itemid < 5010000 || itemid / 10000 == 210 || itemid >= 2003516 && itemid <= 2003520) {
                    cm.sendOk("请输入你需要的物品数量：");
                    cm.dispose();
                    return;
                }
                cm.sendGetNumber("看起来你无法持有该物品，请确认物品存在并确保你有足够的背包空间。", 1, 1, 100);
                break;
            case 1:
                cm.sendPrev(cm.searchId(4, cm.getText()));
                selection = 0;
                chat = 1;
                break;
        }
    } else if (chat == 3) {
        if (itemid / 1000000 == 1) {
            for (var i = 0; i < selection; i++)
                if (cm.canHold(itemid, selection))
                    cm.gainItem(itemid, 1);
                else {
                    cm.sendOk("再见 :)");
                    cm.dispose();
                    return;
                }
        } else {
            if (cm.canHold(itemid, selection))
                cm.gainItem(itemid, selection);
            else {
                cm.sendOk("再见 :)");
                cm.dispose();
                return;
            }
        }
        cm.sendOk("再见 :)");
    } else
        cm.dispose();
}