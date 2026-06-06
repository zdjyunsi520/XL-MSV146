/* Natalie
	Henesys VIP Hair/Hair Color Change.
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
	cm.sendSimple("我是这家理发店的店长。如果你有#b#t5150001##k或#b#t5151001##k，让我来为你打理发型吧。请选择你想要的服务。\r\n#L0#剪发: #i5150001##t5150001##l\r\n#L1#染发: #i5151001##t5151001##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30030, 30020, 30000, 30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200];
	    } else {
		hair_Colo_new = [31050, 31040, 31000, 31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.askAvatar("我可以彻底改变你的发型，让它看起来非常棒。要不要换个新发型？如果你有#b#t5150001##k，我来帮你更换。选择你喜欢的吧～", hair_Colo_new);
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.askAvatar("我可以彻底改变你的发色，让它看起来非常棒。要不要换个颜色？有了#b#t51051001##k，我来帮你更换。选择你喜欢的吧。", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setAvatar(5150001, hair_Colo_new[selection]) == 1) {
		cm.sendOk("享受你全新改良的发型吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……没有它我恐怕无法为你剪发。抱歉……");
	    }
	} else {
	    if (cm.setAvatar(5151001, hair_Colo_new[selection]) == 1) {
		cm.sendOk("享受你全新改良的发色吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……没有它我恐怕无法为你染发。抱歉……");
	    }
	}
	cm.dispose();
    }
}
