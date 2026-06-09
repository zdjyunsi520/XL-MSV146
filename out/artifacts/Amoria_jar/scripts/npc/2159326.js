var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("哦拜托，你要退缩了？");
        cm.dispose();
        return;
    }
    
    if (cm.haveItem(02022696)) {
        cm.sendOk("你在干什么？我不是说了耐心等待吗。如果你一直烦我，它会炸的。");
        cm.dispose();
    } else if (cm.getMeso() < 1000000) {
	cm.sendOk("走开！我跟你没有生意可做。");
	cm.dispose();
	}
    
    if (status == 0) {
        cm.sendYesNo("嘿 #e#h ##n！我认识一个#r游戏管理员#k，只要价格合适，他愿意给你一件你选择的物品。\r\n你有兴趣吗？                                                                                     #r你可以相信我...相信我.....我是一个超级值得信赖的人...#k");
    } else if (status == 1) {
        cm.sendGetNumber("我可以帮你联系他，但你愿意出多少钱作为酬劳呢？", 10000000, 1000000, 2000000000);
    } else if (status == 2) {
	if (cm.getMeso() < selection) {
	cm.sendOk("真的吗？你以为我是三岁小孩那么好骗？滚开！");
	cm.dispose();
	}
        cm.gainMeso(-selection);
        cm.sendGetNumber("拜托，这可是天大的人情。你不会真想让我只为#b" +numberWithCommas(selection)+" 枫币#k就做这事吧。", 10000000, 1000000, 2000000000);
    } else if (status == 3) {
	if (cm.getMeso() < selection) {
	cm.sendOk("真的吗？你以为我是三岁小孩那么好骗？滚开！.");
	cm.dispose();
	}
        if (selection < 10000000) {
            cm.gainMeso(-selection);
            cm.sendOk("真的？这就是你的态度？这么点钱我自己都不会冒险去做，更别说一个#r游戏管理员#k了。走开。");
			cm.dispose();
        } else {
		cm.gainMeso(-selection);
            cm.sendYesNo("这才像话。好吧，但他需要一个#b" +numberWithCommas(5000000)+ " 枫币#k就做这事吧。 You cool?");
        }
    } else if (status == 4) {
	if (cm.getMeso() < 5000000) {
	cm.sendOk("真的吗？你以为我是三岁小孩那么好骗？滚开！.");
	cm.dispose();
	}
        cm.gainMeso(-5000000);
        cm.sendYesNo("太好了。你不像那些不舍得花钱的胆小鬼。我喜欢你。\r\n你知道吗？因为你这么棒，我只要#b" +numberWithCommas(100000000)+ " 枫币#k就做这事吧。 Usually I charge twice of that. I'll make sure your item of choice is max stats!");
    } else if (status == 5) {
	if (cm.getMeso() < 100000000) {
	cm.sendOk("真的吗？你以为我是三岁小孩那么好骗？滚开！.");
	cm.dispose();
	}
        cm.gainMeso(-100000000);
        cm.gainItem(02022696, 1);
        cm.sendOk("好了，接下来是这样的。你不要告诉任何人发生了什么，我会安排你和#r游戏管理员#k见面的时间和地点。你知道，他是个大忙人，所以耐心等待。别担心，包在我身上。");
		cm.dispose();
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}