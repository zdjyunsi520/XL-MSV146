/* Rinz the assistant
	Orbis Random Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

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
	cm.sendSimple("我是助手林兹。你有#b#t5150004##k或#b#t5151004##k吗？有的话，让我来为你打理发型怎么样？你想怎么处理你的头发？ \r\n#L0#理发：#i5150004##t5150004##l \r\n#L1#染发：#i5151004##t5151004##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30030, 30020, 30000, 30270, 30230, 30260, 30280, 30240, 30290, 30340, 30370, 30630, 30530, 30760];
	    } else {
		hair_Colo_new = [31040, 31000, 31250, 31220, 31260, 31240, 31110, 31270, 31030, 31230, 31530, 31710, 31320, 31650, 31630];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.sendYesNo("如果使用EXP优惠券，你的发型将随机改变，还有机会获得我研发的新实验发型。你要使用#b#t5150010##k来改变发型吗？");
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.sendYesNo("如果使用普通优惠券，你的发型将随机改变。你仍然要使用#b#t5151004##k来换发型吗？");
	}
    } else if (status == 2){
	if (beauty == 1) {
	    if (cm.setRandomAvatar(5150004, hair_Colo_new) == 1) {
		cm.sendOk("享受你的全新发型吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……没有它恐怕我没法给你理发。抱歉……");
	    }
	} else {
	    if (cm.setRandomAvatar(5151004, hair_Colo_new) == 1) {
		cm.sendOk("享受你的全新发色吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……没有它恐怕我没法给你染发。抱歉……");
	    }
	}
	cm.dispose();
    }
}
