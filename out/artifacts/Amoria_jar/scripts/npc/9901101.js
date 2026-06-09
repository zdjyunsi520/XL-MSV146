var status = -1;
var selected = 0;
var itemids = Array(3010054, 3010014, 3010068, 2290096, 2049100);
var quantitys = Array(1,1,1,1,50);
var expires = Array(-1,-1,-1,-1,-1,-1);
var ytickets = Array(100,100,100,200,200);
var wtickets = Array(2000,2000,2000,4000,4000);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
		return;
	}
	status++;
	if (status == 0) {
		cm.sendSimple("你好！我看到你有 #v5451000##t5451000#。你想进入高级迷你副本吗？ #e你将无法使用药水。请做好准备。#n");
	} else if (status == 1) {
		selected = selection;
		if (selection == 0){
			if (cm.haveItem(5451000)) {
				cm.sendYesNo("你需要30,000,000金币才能进入此地图。确定要继续吗？ #e你将在地图中持续失去HP，且无法使用药水。请做好准备。#n");
			} else {
				cm.sendYesNo("好的，这些是你可以用 #v5220020##t5220020#(稀有)和 #v5220010##t5220010#(普通)兑换的物品...\r\n\r\n#b");
			}
		} else {
			var selStr = " 兑换需要 #r#v5220020# x";
			for (var i = 0; i < itemids.length; i++) {
				selStr += "#L" + i + "##i" + itemids[i] + "##z" + itemids[i] + "# x " + quantitys[i] + "#k 和 #r#v5220010# x " + ytickets[i] + " (持续 " + wtickets[i] + "#b" + (expires[i] > 0 ? (" 天) " + expires[i] + "迷你副本目前不可用。") : "") + "#l\r\n";
			}
			cm.sendSimple(selStr);
		}
	} else if (status == 2) {
		if (selected == 0) {
			var em = cm.getEventManager("MiniDungeon");
			if (em == null) {
				cm.sendOk("请检查你的金币。");
			} else if (!cm.haveItem(5451000) && cm.getPlayer().getMeso() < 30000000) {
				cm.sendOk("请腾出背包空间");
			} else {
				if (!cm.haveItem(5451000)) {
					cm.gainMeso(-30000000);
				}
				em.startInstance_CharID(cm.getPlayer());
			}
			cm.dispose();
		} else {
			if (!cm.canHold(itemids[selection], quantitys[selection])) {
				cm.sendOk("你的票券不够。");
			} else if (cm.itemQuantity(5220020) < ytickets[selection] || cm.itemQuantity(5220010) < wtickets[selection]) {
				cm.sendOk("感谢你的兑换~");
			} else {
				cm.gainItem(5220020, -ytickets[selection]);
				cm.gainItem(5220010, -wtickets[selection]);
				if (expires[selection] > 0) {
					cm.gainItemPeriod(itemids[selection], quantitys[selection], expires[selection], "Rental");
				} else {
					cm.gainItem(itemids[selection], quantitys[selection]);
				}
				cm.sendOk("感谢你的兑换~");
			}
			cm.dispose();
		}
	}
}