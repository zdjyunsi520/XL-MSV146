/* Noma
	Mu Lung Random/VIP Eye Change.
*/
var status = -1;
var beauty = 0;
var facetype;

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("嘿，我是诺玛，在武陵协助帕塔把脸变得美美的。有了#b#t5152027##k或#b#t5152028##k，我可以改变你的容貌。你想用哪种？\r\n#L0#整形手术：#i5152027##t5152027##l\r\n#L1#整形手术：#i5152028##t5152028##l");
    } else if (status == 1) {
	var face = cm.getPlayerStat("FACE");
	facetype = [];
	beauty = 1;

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014, 20009, 20010];
	} else {
	    facetype = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014, 21009, 21011];
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}

	if (selection == 0) {
	    beauty = 1;
	    cm.sendYesNo("如果你使用普通优惠券，你的脸可能会随机变成一个新模样……你确定要用#b#t5152027##k来尝试吗？");
	} else if (selection == 1) {
	    beauty = 2;
	    cm.askAvatar("我可以完全将你的脸变成全新的模样……要不要试试看？有了#b#t5152028##k，你可以选择你喜欢的面容……慢慢挑选你中意的脸型吧。", facetype);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5152027, facetype) == 1) {
		cm.sendOk("享受你全新的面容吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有这里专用的优惠券。很抱歉，没有优惠券的话，是无法进行整形手术的……");
	    }
	} else {
	    if (cm.setAvatar(5152028, facetype[selection]) == 1) {
		cm.sendOk("享受你全新的面容吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有这里专用的优惠券。很抱歉，没有优惠券的话，是无法进行整形手术的……");
	    }
	}
	cm.safeDispose();
    }
}