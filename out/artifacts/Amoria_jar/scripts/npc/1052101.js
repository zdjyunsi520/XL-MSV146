/* Andre
	Kerning Random Hair/Hair Color Change.
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
	cm.sendSimple("我是安德烈，唐的助手。大家都叫我安德烈。如果你有#b#t5150011##k或#b#t5151002##k，请让我来改变你的发型！\r\n#L0#剪发：#i5150002##t5150002##l\r\n#L1#染发：#i5151002##t5151002##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160, 30770, 30620, 30550, 30520];
	    } else {
		hair_Colo_new = [31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010, 31520, 31440, 31750, 31620];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.sendYesNo("如果你使用EXP优惠券，你的发型将随机改变，还有机会获得我研发的全新实验款式。你要用#b#t5150010##k来改变你的发型吗？");
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.sendYesNo("如果你使用普通优惠券，你的发型将随机改变。你确定要用#b#t5151002##k来改变吗？");
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5150002, hair_Colo_new) == 1) {
		cm.sendOk("好好享受你焕然一新的发型吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……没有优惠券的话，恐怕我无法为你剪发了。抱歉……");
	    }
	} else {
	    if (cm.setRandomAvatar(5151002, hair_Colo_new) == 1) {
		cm.sendOk("好好享受你焕然一新的发色吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……没有优惠券的话，恐怕我无法为你染发了。抱歉……");
	    }
	}
	cm.dispose();
    }
}
