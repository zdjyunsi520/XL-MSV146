var status = -1;

function action(mode, type, selection) {
	if (mode <= 0) {
		cm.dispose();
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		if (status == 0) {
			if (cm.haveItem(5220094)) {
				cm.sendYesNo("欢迎来到星云石转蛋机。有什么可以帮你的？\r\n\r\n#b#L0#什么是转蛋机？#l\r\n#L1#在哪里可以买到转蛋券？#l#k");
			} else {
				cm.sendSimple("你从星云石转蛋机获得了#b#t");
			}
		} else if (status == 1) {
			if (cm.haveItem(5220094)) {
				var item = cm.useNebuliteGachapon();
				if (item != -1) {					
					cm.sendNext("##k。\r\n感谢使用我们的转蛋服务。欢迎再次光临！" + item + "请检查你的物品栏，看看是否有转蛋券，或者背包是否已满。");
				} else {
					cm.sendOk("使用转蛋机就有机会获得稀有的星云石和高级融合券碎片！你只需要一张星云石转蛋券就可以成为随机星云石的得主。");
				}
				cm.safeDispose();
			} else {
				if (selection == 0) {
					cm.sendNext("转蛋券可在#r商城#k购买，可使用NX点数或枫叶点数购买。点击屏幕右下方经验条旁边的红色商城按钮即可进入#r商城#k购买转蛋券。");
				} else if (selection == 1) {
					cm.sendOk("转蛋券可在#r商城#k购买，可使用NX点数或枫叶点数购买。点击屏幕右下方经验条旁边的红色商城按钮即可进入#r商城#k购买转蛋券。");
				}
				cm.safeDispose();
			}
		}
    }
}