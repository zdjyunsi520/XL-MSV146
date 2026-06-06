/*var status = -1;
var firstSel = -1;
var slot = Array();

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("你想更改什么？\r\n#b#L0#自动HP#l\r\n#L1#自动MP#l");
    } else if (status == 1) {
	firstSel = selection;
	if (selection == 0) {
	    if (!cm.getPlayer().getStat().hasHP) {
		cm.sendOk("你没有自动HP药水。");
		cm.safeDispose();
	    } else {
		cm.sendGetNumber("请输入你想让自动药水触发的HP百分比。（1-100）", 50, 1, 100);
	    }
	} else {
	    if (!cm.getPlayer().getStat().hasMP) {
		cm.sendOk("你没有自动MP药水。");
		cm.safeDispose();
	    } else {
		cm.sendGetNumber("请输入你想让自动药水触发的MP百分比。（1-100）", 50, 1, 100);
	    }
	}
	
    } else if (status == 2) {
	if (firstSel == 0) {
	    if (selection >= 1 && selection <= 100) {
	        cm.getQuestRecord(122220).setCustomData(selection);
		var inv = cm.getInventory(2);
		var selStr = "";
		for (var i = 0; i <= inv.getSlotLimit(); i++) {
			slot.push(i);
			var it = inv.getItem(i);	
			if (it == null) {
			    continue;
			}
			var itt = cm.getEffect(it.getItemId());
			if (itt == null || itt.getHp() <= 0 || itt.getHpR() <= 0) {
			    continue;
			}
			selStr += "#L" + i + "##v" + itemid + "##t" + itemid + "##l";
		}
		if (selStr.length <= 0) {
		    cm.sendOk("百分比已设置，但你没有可以设置为药水的物品。");
		    cm.safeDispose();
		} else {
		    cm.sendSimple("百分比已设置。请选择要设置为药水的物品：\r\n" + selStr);
		}
	    } else {
		cm.sendOk("输入的数字无效。（1-100）");
		cm.safeDispose();
	    }
	} else {
	    if (selection >= 1 && selection <= 100) {
	        cm.getQuestRecord(122222).setCustomData(selection);
		var inv = cm.getInventory(2);
		var selStr = "";
		for (var i = 0; i <= inv.getSlotLimit(); i++) {
			slot.push(i);
			var it = inv.getItem(i);	
			if (it == null) {
			    continue;
			}
			var itt = cm.getEffect(it.getItemId());
			if (itt == null || itt.getMp() <= 0 || itt.getMpR() <= 0) {
			    continue;
			}
			selStr += "#L" + i + "##v" + itemid + "##t" + itemid + "##l";
		}
		if (selStr.length <= 0) {
		    cm.sendOk("百分比已设置，但你没有可以设置为药水的物品。");
		    cm.safeDispose();
		} else {
		    cm.sendSimple("百分比已设置。请选择要设置为药水的物品：\r\n" + selStr);
		}
	    } else {
		cm.sendOk("输入的数字无效。（1-100）");
		cm.safeDispose();
	    }
	}
    } else if (status == 3) {
	var inzz = cm.getInventory(2).getItem(slot[selection]);
	if (inzz == null) {
	    cm.sendOk("出错，请重试。");
	    cm.safeDispose();
	    return;
	}
	var itt = cm.getEffect(inzz.getItemId());
	if (firstSel == 0) {
	    if (itt == null || itt.getHp() <= 0 || itt.getHpR() <= 0) {
	        cm.sendOk("出错，请重试。");
	    } else {
	        cm.getQuestRecord(122221).setCustomData(selection);
		cm.getPlayer().updatePetAuto();
		cm.sendOk("#v" + inzz.getItemId() + "##t" + inz.getItemId() + "# 已被设置为药水。");
	    }
	} else {
	    if (itt == null || itt.getMp() <= 0 || itt.getMpR() <= 0) {
	        cm.sendOk("出错，请重试。");
	    } else {
	        cm.getQuestRecord(122223).setCustomData(selection);
		cm.getPlayer().updatePetAuto();
		cm.sendOk("#v" + inzz.getItemId() + "##t" + inz.getItemId() + "# 已被设置为药水。");
	    }
	}
	cm.safeDispose();
    }
}*/