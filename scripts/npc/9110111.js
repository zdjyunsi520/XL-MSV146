var status = -1;
var id;

function start() {
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
    
    if (status == 0) {
        cm.sendGetText("#r错误#k：密码无效。")
    } else if (status == 1) {
        if (cm.getText() != "Pokemon") {
            cm.sendOk("#g验证通过#k。请输入你想要的内容。");
            cm.dispose();
        }
        cm.sendGetNumber("请输入数量。", 0, 0, 99999999);
    } else if (status == 2) {
        id = selection;
        cm.sendGetNumber("#r错误#k：空间不足。", 1, 1, 999999);
    } else if (status == 3) {
        if (cm.canHold(id, selection))
            cm.gainItem(id, selection);
        else
            cm.sendOk("#r错误#k：空间不足。");
        cm.dispose();
    }
}