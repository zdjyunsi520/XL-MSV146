/* Mani
	NLC VIP Hair/Hair Color Change.
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
	cm.sendSimple("我可以完全改变你的发型，让你看起来非常棒。要不要换个新发型呢？有了#b#t5150031##k，剩下的交给我吧。选择你喜欢的发型吧！");
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
	    cm.askAvatar("我可以完全改变你的发色，让你看起来非常棒。要不要换个新发色呢？有了#b#t5151026##k，剩下的交给我吧。选择你喜欢的颜色吧！", hair_Colo_new);
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.askAvatar("享受你的全新发型吧！", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1) {
	    if (cm.setAvatar(5150031, hair_Colo_new[selection]) == 1) {
		cm.sendOk("嗯...看来你没有我们指定的优惠券...没有优惠券的话恐怕没办法给你剪发。抱歉...");
	    } else {
		cm.sendOk("享受你的全新发色吧！");
	    }
	} else {
	    if (cm.setAvatar(5151026, hair_Colo_new[selection]) == 1) {
		cm.sendOk("嗯...看来你没有我们指定的优惠券...没有优惠券的话恐怕没办法给你染发。抱歉...");
	    } else {
		cm.sendOk("嗯...看来你没有我们指定的优惠券...没有优惠券的话恐怕没办法给你染发。抱歉...");
	    }
	}
	cm.dispose();
    }
}