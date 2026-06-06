importPackage(net.sf.odinms.client);

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) { // first interaction with NPC
            cm.sendNext("#d特殊职业道具#k，我真的需要解释吗？想买一些吗？\r\n#b#L0#为什么不呢？#l#k");
        } else if (status == 1) {
            cm.sendSimple("太棒了！记住它们每件都要#b100万金币#k。");
        } else if (status == 2) {
            if (selection == 0) {
                cm.sendNext("你想买哪种#d特殊职业道具#k？");
            }
        } else {
            var items = new Array (5010069, 1492074, 1452099, 5010068, 1099000, 1099002, 1099003, 1099004); 
            if (status == 3) {
                var selStr = "你的金币不够。";
                for (var i = 0; i < items.length; i++){
                    selStr += "\r\n#b#L" + i + "# #v" + items[i] + "# #l#k";
                }
                cm.sendSimple(selStr);
            }
            if (status == 4) {
                if (cm.getMeso() < 1000000) {
                    cm.sendOk("你的金币不够。");
                    cm.dispose();
                } else {
                    cm.gainMeso(-1000000);
                    cm.gainItem(items[selection], 1);
                    cm.dispose();
		}
            }
        }
    }
}