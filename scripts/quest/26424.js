/* RED 1st impact
    [Smart Mount] Success with Irvin
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 2) {
		    qm.sendNext("切，行吧。反正我也不想在你身上浪费时间。");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendNext("你。你一定听说过我那惊人的自动驾驶系统吧，那可是我发明的。我提过是我发明的吗？");
	} else if (status == 1) {
		qm.sendNextPrev("自动驾驶现在已在#b维多利亚岛和奥斯伊尔#k上线！我提过是我发明了这个系统吗？有一天我突然灵光一闪。没什么大不了的。");
	} else if (status == 2) {
	    qm.sendYesNo("我确信你想听我讲解如何在奥斯伊尔使用自动驾驶。");
	} else if (status == 3) {
	    qm.sendNext("我的自动驾驶系统目前在奥斯伊尔、瑞恩和埃雷岛可用。你不知道我为了让这一切成为现实付出了多少努力。你准备好听详情了吗？当然，这是要收费的……");
	} else if (status == 4) {
	    qm.sendNextPrev("嘿，我在存退休金！不管怎样，我让你在维多利亚岛、瑞恩和埃雷岛以900金币使用自动驾驶。");
	} else if (status == 5) {
	    qm.sendNextPrev("要在奥斯伊尔使用自动驾驶，你需要购买一张#b奥斯伊尔飞行许可证#k。嘿，真巧！我正好有一个特别优惠！购买许可证，你还能免费获得特别服务！");
	} else if (status == 6) {
	    qm.sendOk("你在犹豫什么？你不想获得特别服务吗？不管怎样，我会像往常一样在每个大陆的车站等你，所以从我这里买一张#b奥斯伊尔飞行许可证#k然后再和我对话。");
	} else if (status == 7) {
        qm.forceStartQuest();
        qm.dispose();
    }
}