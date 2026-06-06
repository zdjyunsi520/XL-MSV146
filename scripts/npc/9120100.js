/* Tepei
	Showa VIP Hair/Hair Color Change.
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
	cm.sendSimple("我可以完全改变你的发型，让你看起来非常棒。要不要换个新发型呢？有了#b#t5150009##k，剩下的交给我吧。选择你喜欢的发型吧！");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30230, 30030, 30260, 30280, 30240, 30290, 30020, 30270, 30340, 30710, 30810];
	    } else {
		hair_Colo_new = [31310, 31300, 31050, 31040, 31160, 31100, 31410, 31030, 31790, 31550];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.askAvatar("我可以完全改变你的发色，让你看起来非常棒。要不要换个新发色呢？有了#b#t5151009##k，剩下的交给我吧。选择你喜欢的颜色吧！", hair_Colo_new);
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.askAvatar("享受你的全新发型吧！", hair_Colo_new);
	}
    } else if (status == 2) {
	if (beauty == 1) {
	    if (cm.setAvatar(5150009, hair_Colo_new[selection]) == 1) {
		cm.sendOk("嗯...看来你没有我们指定的优惠券...没有优惠券的话恐怕没办法给你剪发。抱歉...");
	    } else {
		cm.sendOk("享受你的全新发色吧！");
	    }
	} else {
	    if (cm.setAvatar(5151009, hair_Colo_new[selection]) == 1) {
		cm.sendOk("嗯...看来你没有我们指定的优惠券...没有优惠券的话恐怕没办法给你染发。抱歉...");
	    } else {
		cm.sendOk("嗯...看来你没有我们指定的优惠券...没有优惠券的话恐怕没办法给你染发。抱歉...");
	    }
	}
	cm.dispose();
    }
}
