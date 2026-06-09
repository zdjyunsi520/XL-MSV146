/* Mini
	Ludibrium Random Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
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
	cm.sendSimple("你好，我是这里的助理。别担心，我的技术完全没问题。如果你有#b#t5150012##k或#b#t5151006##k的话，就让我来帮你处理吧？\r\n#L0#剪发：#i5150006##t5150006##l\r\n#L1#染发：#i5151006##t5151006##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30250, 30190, 30150, 30050, 30280, 30240, 30300, 30160, 30650, 30540, 30640, 30680];
	    } else {
		hair_Colo_new = [31150, 31280, 31160, 31120, 31290, 31270, 31030, 31230, 31010, 31640, 31540, 31680, 31600];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.sendYesNo("如果你使用EXP优惠券，你的发型将会随机改变，还有机会获得我研发的新实验发型。你要使用#b#t5150010##k来改变你的发型吗？");
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.sendYesNo("如果你使用普通优惠券，你的发型将会随机改变。你确定要使用#b#t5151006##k来换发型吗？");
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5150006, hair_Colo_new) == 1) {
		cm.sendOk("好好享受你的新发型吧！");
	    } else {
		cm.sendOk("嗯……看来你没有我们指定的优惠券……抱歉，没有优惠券我无法为你剪发。对不起……");
	    }
	} else {
	    if (cm.setRandomAvatar(5151006, hair_Colo_new) == 1) {
		cm.sendOk("好好享受你的新发色吧！");
	    } else {
		cm.sendOk("嗯……看来你没有我们指定的优惠券……抱歉，没有优惠券我无法为你染发。对不起……");
	    }
	}
	cm.dispose();
    }
}