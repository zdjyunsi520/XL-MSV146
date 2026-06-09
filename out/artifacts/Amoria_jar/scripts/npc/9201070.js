/* Nerbit
	NLC Random Eye Change.
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
	cm.sendNext("如果你使用普通优惠券，你的脸可能会变成随机的新样子...你确定要使用#b#t5152033##k吗？");
    } else if (status == 1) {
	cm.sendYesNo("享受你的全新面容吧！");
    } else if (status == 2){
	var face = cm.getPlayerStat("FACE");

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012];
	} else {
	    facetype = [21001, 21002, 21003, 21004, 21005, 21006, 21008, 21012, 21014, 21016];
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}
	
	if (cm.setRandomAvatar(5152033, facetype) == 1) {
	    cm.sendOk("嗯...看来你没有这个地方专用的优惠券。很抱歉，没有优惠券的话就无法为你做整形手术...");
	} else {
	    cm.sendOk("嗯...看来你没有这个地方专用的优惠券。很抱歉，没有优惠券的话就无法为你做整形手术...");
	}
	cm.dispose();
    }
}