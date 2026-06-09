	

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
            cm.sendSimple("欢迎来到NPC商店。\r\n请选择你想要的勋章。 " + cm.getPlayer().getName() + "\r\n#L1#第一勋章\r\n#L2#第二勋章\r\n#L3#第三勋章\r\n#L4#第四勋章\r\n#L5#第五勋章\r\n#L6#第六勋章" +
            "获得此勋章需要：\r\n等级50\r\n你确定要继续吗？");
            } else if (status == 1) {
            if (selection == 1) {
            cm.sendYesNo("获得此勋章需要：\r\n第一勋章\r\n5000万金币\r\n等级80");
            picked = 1;
            }
            if (selection == 2) {
            cm.sendYesNo("给你。");
            picked = 2;
            }
            if (selection == 3) {
            cm.sendYesNo("给你。");
            picked = 3;
            }
            if (selection == 4) {
            cm.sendYesNo("给你。");
            picked = 4;
            }
            if (selection == 5) {
            cm.sendYesNo("给你。");
            picked = 5;
            }
            if (selection == 6) {
            cm.sendYesNo("给你。");
            picked = 6;
            }
            } else if (status == 2) {
            if (picked == 1 && cm.getPlayer().getLevel() >= 50) {
			cm.MakeHItem(1142014, cm.getChar(), 5,1,1);
			cm.sendSimple("[勋章] 恭喜")
            }
            if (picked == 2 && cm.getPlayer().getLevel() >= 80 && cm.haveItem(1142014)) {
			cm.gainItem(1142014, -1);
			cm.MakeHItem(1142015, cm.getChar(), 10,2,2);
            }
            if (picked == 3 && cm.getPlayer().getLevel() >= 100 && cm.haveItem(1142015)) {
			cm.gainItem(1142015, -1);
			cm.MakeHItem(1142016, cm.getChar(), 20,5,5);
            }
            if (picked == 4 && cm.getPlayer().getLevel() >= 150 && cm.haveItem(1142016)) {
			cm.gainItem(1142016, -1);
			cm.MakeHItem(1142017, cm.getChar(), 30,7,7);
            }
            if (picked == 5 && cm.getPlayer().getLevel() >= 200 && cm.haveItem(1142017)) {
			cm.gainItem(1142017, -1);
			cm.MakeHItem(1142018, cm.getChar(), 40,10,10);
			cm.msiMessage("获得了新的指挥官勋章 "+cm.getPlayer().getName()+"获得了新的统帅勋章");
            }
            if (picked == 6 && cm.getPlayer().getLevel() >= 250 && cm.haveItem(1142018)) {
			cm.gainItem(1142018, -1);
            cm.MakeHItem(1142019, cm.getChar(), 50,15,15);
			cm.msiMessage("获得了新的指挥官勋章 "+cm.getPlayer().getName()+"获得了新的统帅勋章");
            }
            cm.dispose();
            }
    }
