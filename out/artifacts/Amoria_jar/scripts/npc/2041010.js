/* Ellie
	Ludibrium VIP Eye Change.
*/
var status = -1;
var beauty = 0;
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
	cm.sendNext("你好！欢迎来到玩具城整形医院！你想把脸变成全新的样子吗？有了#b#t5152007##k，让我们来帮你实现，拥有你一直想要的脸庞！");
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
	cm.askAvatar("让我看看……我可以彻底改变你的面容。不想试试吗？凭#b#t5152007##k，你可以选择你喜欢的面容。慢慢选择你喜欢的脸型吧。", facetype);
    } else if (status == 2){
	if (cm.setAvatar(5152007, facetype[selection]) == 1) {
	    cm.sendOk("好好享受你的新面容吧！");
	} else {
	    cm.sendOk("嗯……看来你没有专门用于此地的优惠券。很抱歉，没有优惠券的话，是无法进行整容的……");
	}
	cm.dispose();
    }
}