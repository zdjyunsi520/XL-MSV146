/* Denma the Owner
	Henesys VIP Eye Change.
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
	cm.sendNext("你好！欢迎来到射手村整形医院！想把脸变成全新的样子吗？凭一张#b#t5152001##k，剩下的交给我们，让你拥有梦寐以求的脸庞～！");
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
	cm.askAvatar("让我看看……我可以把你的脸完全变成新的样子。不想试试吗？凭一张#b#t5152001##k，你就能得到喜欢的脸型。慢慢选择你喜欢的脸吧。", facetype);
    } else if (status == 2){
	if (cm.setAvatar(5152001, facetype[selection]) == 1) {
	    cm.sendOk("好好享受你焕然一新的容貌吧！");
	} else {
	    cm.sendOk("嗯……看起来你没有本店专用的优惠券。很抱歉，没有优惠券的话，无法为你进行整形手术……");
	}
	cm.dispose();
    }
}
