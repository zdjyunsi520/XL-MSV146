/* Everton
	Ludibrium Random Eye Change.
*/
var status = -1;
var beauty = 0;
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014);
var fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014);
var facenew = Array();

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
	cm.sendNext("嗯，我正好闲着，就帮医生一个忙吧。给我一张#b#t5152006##k，我来改变你的容貌。但别忘了，结果是随机的哦！");
    } else if (status == 1) {
	cm.sendYesNo("如果你使用普通优惠券，你的脸可能会变成随机的新样子……你确定要用#b#t5152006##k来做吗？");
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
	
	if (cm.setRandomAvatar(5152006, facetype) == 1) {
	    cm.sendOk("好好享受你的新面容吧！");
	} else {
	    cm.sendOk("嗯……看来你没有专门用于此地的优惠券。很抱歉，没有优惠券的话，是无法进行整容的……");
	}
	cm.dispose();
    }
}
