/* Dr. Feeble
	Henesys Random Eye Change.
*/
var status = 0;
var beauty = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("嗨，我本来不应该这样做的，但凭一张#b#t5152000##k，我还是会为你做。但别忘了，结果是随机的！");
    } else if (status == 1) {
	cm.sendYesNo("如果你使用普通优惠券，你的脸可能会随机变成一个新造型……你确定要用#b#t5152000##k来做吗？");
    } else if (status == 2){
	var face = cm.getPlayerStat("FACE");
	var facetype;

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
	} else {
	    facetype = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}

	if (cm.setRandomAvatar(5152000, facetype) == 1) {
	    cm.sendOk("好好享受你焕然一新的容貌吧！");
	} else {
	    cm.sendOk("嗯……看起来你没有本店专用的优惠券。很抱歉，没有优惠券的话，无法为你进行整形手术……");
	}
	cm.dispose();
    }
}
