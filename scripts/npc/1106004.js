var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 || mode == -1 && status == 0) {
        cm.sendNextS("这应该就是那个箱子了……", 2);
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 0) {
        if (cm.itemQuantity(4033194) || cm.itemQuantity(4033195) >= 1) {
            cm.sendOk("我得赶紧带着药水箱回到楼下，免得林伯特老头的心脏终于承受不住怒火。");
            cm.dispose();
        }
        if (cm.isQuestActive(20031))
            cm.sendYesNo("这些药水真难喝！我们真的要卖这些吗？\r\n拿取药水箱？");
        else {
            cm.sendOk("看起来你不需要我的药水！");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.gainItem(4033194,1);
        cm.gainItem(4033195,1);
        cm.sendPlayerToNpc("这是一封信吗？一定被灰尘粘在一起的……\r\n来自'克洛米勒'……上面没写收件人……也许林伯特会想要它。");
        cm.dispose();
    }
}