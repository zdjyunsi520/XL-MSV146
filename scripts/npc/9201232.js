var MC = 2500;
var PMC = 3750;
var SMC = 5500;
var RMC = 7250;
var EMC = 9500;
var picked = 0;
 
function start() {
    status = -1;
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
        if (status == 0) {
        cm.sendSimple("#L0##i5062000#奇迹方块 - 2500 NX\r\n#L1##i5062001#高级奇迹方块 - 3750 NX\r\n#L2##i5062002#超级奇迹方块 - 5500 NX\r\n#L3##i5062003#革命奇迹方块 - 7250\r\n#L4##i5062005#启迪奇迹方块 - 9500 "+
        "输入你想购买的方块数量");
        } else if (status == 1) {
        picked = selection;
        cm.sendGetText(9201000,"只能输入数字！");
        } else if (status == 2) {
        if (cm.getText() * 0 != 0) {
        cm.sendOk("至少输入1！");
        cm.dispose();
        return;
        }
        if(cm.getText() < 1) {
            cm.sendOk("这将花费你");
            cm.dispose();
            return;
        }
        if (picked == 0) {
        cm.sendYesNo("NX，你确定要继续吗？ "+ cm.getText() * MC +"你没有足够的NX");
        }
        if (picked == 1) {
        cm.sendYesNo("NX，你确定要继续吗？ "+ cm.getText() * PMC +"你没有足够的NX");
        }
        if (picked == 2) {
        cm.sendYesNo("NX，你确定要继续吗？ "+ cm.getText() * SMC +"你没有足够的NX");
        }
        if (picked == 3) {
        cm.sendYesNo("NX，你确定要继续吗？ "+ cm.getText() * RMC +"你没有足够的NX");
        }
        if (picked == 4) {
        cm.sendYesNo("NX，你确定要继续吗？ "+ cm.getText() * EMC +"你没有足够的NX");
        }
        } else if (status == 3) {
        if (picked == 0) {
        if (cm.checkNX() >= cm.getText() * MC) {
        cm.gainItem(5062000, cm.getText());
        cm.gainNXCredit(-cm.getText() * MC);
        } else {
        cm.sendOk("你没有足够的NX");
        }
        }
        if (picked == 1) {
        if (cm.checkNX() >= cm.getText() * PMC) {
        cm.gainItem(5062001, cm.getText());
        cm.gainNXCredit(-cm.getText() * PMC);
        } else {
        cm.sendOk("你没有足够的NX");
        }
        }
        if (picked == 2) {
        if (cm.checkNX() >= cm.getText() * SMC) {
        cm.gainItem(5062002, cm.getText());
        cm.gainNXCredit(-cm.getText() * SMC);
        } else {
        cm.sendOk("你没有足够的NX");
        }
        }
        if (picked == 3) {
        if (cm.checkNX() >= cm.getText() * RMC) {
        cm.gainItem(5062003, cm.getText());
        cm.gainNXCredit(-cm.getText() * RMC);
        } else {
        cm.sendOk("你没有足够的NX");
        }
        }
        if (picked == 4) {
        if (cm.checkNX() >= cm.getText() * EMC) {
        cm.gainItem(5062005, cm.getText());
        cm.gainNXCredit(-cm.getText() * EMC);
        } else {
        cm.sendOk("你没有足够的NX");
        }
        }
        cm.dispose();
        }
		}