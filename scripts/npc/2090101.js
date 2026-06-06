/* Lilishu
	Mu Lung Random Hair/Hair Color Change.
*/
var status = 0;
var beauty = 0;
var mhair = Array(30250, 30350, 30270, 30150, 30300, 30600, 30160, 30700, 30720, 30420);
var fhair = Array(31040, 31250, 31310, 31220, 31300, 31680, 31160, 31030, 31230, 31690, 31210, 31170, 31450);
var hairnew = Array();

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
	cm.sendSimple("我是这家店的理发助手。如果你有#b#t5150024##k或#b#t5151019##k，不妨让我为你换个发型？\r\n#L0#理发：#i5150024##t5150024##l\r\n#L1#染发：#i5151019##t5151019##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30250, 30110, 30230, 30050, 30280, 30410, 30730, 30160, 30200];
	    } else {
		hair_Colo_new = [31150, 31310, 31220, 31300, 31260, 31160, 31730, 31410, 31410];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.sendYesNo("如果你使用EXP优惠券，你的发型将随机改变，还有机会获得我研发的全新实验发型。你确定要使用#b#t5150024##k来改变你的发型吗？");
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.sendYesNo("如果你使用普通优惠券，你的发色将随机改变。你确定要使用#b#t5151019##k来改变发色吗？");
	}
    } else if (status == 2){
	if (beauty == 1) {
	    if (cm.setRandomAvatar(5150024, hair_Colo_new) == 1) {
		cm.sendOk("享受你全新的发型吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……恐怕没有它我无法为你理发。抱歉……");
	    }
	} else {
	    if (cm.setRandomAvatar(5151019, hair_Colo_new) == 1) {
		cm.sendOk("享受你全新的发色吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……恐怕没有它我无法为你染发。抱歉……");
	    }
	}
	cm.dispose();
    }
}