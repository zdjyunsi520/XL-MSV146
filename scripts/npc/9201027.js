/*
	NPC Name: 		Hera
	Map(s): 		Towns
	Description: 		Wedding Village Entrance
*/

var status = -1;

function start() {
    cm.sendSimple("你真的要错过这个绝佳的机会吗？那是一个非常美丽的地方。也许你还没有遇到心爱的人？没错就是这样。如果你正在与某人坠入爱河，就不可能忽视这个甜蜜消息。");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (status == 1 && mode == 0) {
        cm.sendOk("哦！多么美好的一天！世界如此美丽～！这个世界似乎充满了爱，不是吗？我甚至从这里就能感受到婚礼村里满满的爱意～！");
        cm.dispose();
        return;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        switch (selection) {
            case 0:
                cm.sendNext("我真的很抱歉，亲爱的。这把爱情椅子是专为已婚人士设计的特殊礼物。你可能需要先结婚哦。");
                break;
            case 1:
	        var marr = cm.getQuestRecord(160001);
	        var data = marr.getCustomData();
	        if (data == null) {
		    marr.setCustomData("0");
	            data = "0";
	        }
		if (cm.getPlayer().getMarriageId() <= 0 || !data.equals("3")) {
                    cm.sendOk("请腾出空间，或者你已经拥有这把椅子了。");
		} else if (cm.canHold(cm.isGMS() ? 3012015 : 3012000,1) && !cm.haveItem(cm.isGMS() ? 3012015 : 3012000,1)) {
		    cm.gainItem(cm.isGMS() ? 3012015 : 3012000,1);
		} else {
		    cm.sendOk("你去过婚礼村吗？那是一个爱意溢满的奇妙之地。恩爱的情侣可以在那里结婚，多么浪漫啊？如果你想去那里，我来为你指路。");
		}
                cm.dispose();
                break;
        }
    } else if (status == 1) {
        cm.sendYesNo("你做了正确的选择！你可以在婚礼村充分感受到爱的气息。想回来的时候，目的地就是这里，不用担心。");
    } else if (status == 2) {
        cm.sendNext("你做了正确的选择！你可以在婚礼村充分感受到爱的气息。想回来的时候，目的地就是这里，不用担心。");
    } else if (status == 3) {
        cm.saveLocation("AMORIA");
        cm.warp(680000000, 0);
        cm.dispose();
    }
}