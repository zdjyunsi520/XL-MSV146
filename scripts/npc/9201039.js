var status = 0;
var mhair = Array(30270, 30240, 30020, 30000, 30132, 30192, 30032, 30112, 30162);
var fhair = Array(31150, 31250, 31310, 31050, 31050, 31030, 31070, 31091, 31001);
var hairnew = Array();

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.sendNext("我已经作为服务交换给你做过一次发型了。如果你想再换的话，得去商城买一张EXP发型优惠券！");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getQuestStatus(8860) == 2 && !cm.haveItem(4031528)) {
	    cm.sendNext("准备好来个超棒的发型了吗？我觉得你准备好了！只要说一声，我们马上开始！");
	    cm.dispose();
	} else {
	    cm.sendYesNo("我们开始吧！");
	}
    }
    if (status == 1) {
	hairnew = Array();
	if (cm.getChar().getGender() == 0) {
	    for(var i = 0; i < mhair.length; i++) {
		hairnew.push(mhair[i]);
	    }
	}
	if (cm.getChar().getGender() == 1) {
	    for(var i = 0; i < fhair.length; i++) {
		hairnew.push(fhair[i]);
	    }
	}
	cm.sendNext("不错吧，我自己说的算！我就知道我学的那些书迟早会派上用场...");
    }
    if (status == 2) {
	if (cm.haveItem(4031528)) {
	    cm.gainItem(4031528, -1);
	    cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
	    cm.sendBackNext("嗯...你确定你有我们指定的免费优惠券吗？抱歉，没有优惠券就不能剪发。");
	    cm.dispose();
	} else {
	    cm.sendNext("嗯...你确定你有我们指定的免费优惠券吗？抱歉，没有优惠券就不能剪发。");
	    cm.dispose();
	}
    }
}