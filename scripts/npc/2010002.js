/* Franz the Owner
	Orbis VIP Eye Change.
*/
var status = -1;
var facetype;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendNext("哎哟哎哟，欢迎来到天空之城整形医院！你想把脸变成全新的样子吗？有了#b#t5152005##k，让我们来为你服务，打造你梦寐以求的面容~！");
    } else if (status == 1) {
	var face = cm.getPlayerStat("FACE");

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
	} else {
	    facetype = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}
	cm.askAvatar("我可以彻底改变你的面貌……要不要试试？用#b#t5152005##k，你可以得到你喜欢的面容……慢慢选择你想要的面貌吧。", facetype);

    } else if (status == 2) {
	if (cm.setAvatar(5152005, facetype[selection]) == 1) {
	    cm.sendOk("享受你的全新面容吧！");
	} else {
	    cm.sendOk("嗯……看起来你没有这个地方专用的优惠券。很抱歉，没有优惠券的话，无法为你进行整形手术……");
	}
	cm.dispose();
    }
}