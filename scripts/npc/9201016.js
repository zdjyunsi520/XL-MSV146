/* Salon Seamus
	Amoria Random Hair/Hair Color Change.
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
	cm.sendSimple("如果你使用EXP优惠券，你的发型将随机改变，还有机会获得连你自己都没想到的新实验发型。你确定要使用#b#t5150019##k来改变发型吗？");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30250, 30230, 30050, 30280, 30410, 30290, 30300, 30580, 30590, 30200, 30450];
	    } else {
		hair_Colo_new = [31490, 31150, 31590, 31310, 31220, 31260, 31020, 31160, 31110, 31230, 31580, 31480];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.sendYesNo("如果你使用普通优惠券，你的发型将随机改变。你仍然想使用#b#t5150019##k来更换发型吗？");
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.sendYesNo("享受你的全新发型吧！");
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5150019, hair_Colo_new) == 1) {
		cm.sendOk("嗯...看来你没有我们指定的优惠券...没有优惠券的话恐怕没办法给你剪发。抱歉...");
	    } else {
		cm.sendOk("享受你的全新发色吧！");
	    }
	} else {
	    if (cm.setRandomAvatar(5151016, hair_Colo_new) == 1) {
		cm.sendOk("嗯...看来你没有我们指定的优惠券...没有优惠券的话恐怕没办法给你染发。抱歉...");
	    } else {
		cm.sendOk("嗯...看来你没有我们指定的优惠券...没有优惠券的话恐怕没办法给你染发。抱歉...");
	    }
	}
	cm.dispose();
    }
}