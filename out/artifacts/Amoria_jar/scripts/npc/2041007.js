/* Miyu
	Ludibrium VIP Hair/Hair Color Change.
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
	cm.sendSimple("欢迎，欢迎，欢迎来到玩具城美发店！请问你有#b#t5150007##k或#b#t5151007##k吗？如果有的话，让我来帮你做头发怎么样？请选择你想要的发型……\r\n#L0#剪发：#i5150007##t5150007##l\r\n#L1#染发：#i5151007##t5151007##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30030, 30020, 30000, 30250, 30190, 30150, 30050, 30280, 30240, 30300, 30160];
	    } else {
		hair_Colo_new = [31040, 31000, 31150, 31280, 31160, 31120, 31290, 31270, 31030, 31230, 31010];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.askAvatar("我可以完全改变你的发型。想不想换个新造型？有了#b#t5150007##k，剩下的就交给我吧。选择你喜欢的风格！", hair_Colo_new);
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.askAvatar("我可以完全改变你头发的颜色。想不想换个新颜色？有了#b#t5151007##k，剩下的就交给我。选择你喜欢的颜色！", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setAvatar(5150007, hair_Colo_new[selection]) == 1) {
		cm.sendOk("好好享受你的新发型吧！");
	    } else {
		cm.sendOk("嗯……看来你没有我们指定的优惠券……抱歉，没有优惠券我无法为你剪发。对不起……");
	    }
	} else {
	    if (cm.setAvatar(5151007, hair_Colo_new[selection]) == 1) {
		cm.sendOk("好好享受你的新发色吧！");
	    } else {
		cm.sendOk("嗯……看来你没有我们指定的优惠券……抱歉，没有优惠券我无法为你染发。对不起……");
	    }
	}
	cm.dispose();
    }
}