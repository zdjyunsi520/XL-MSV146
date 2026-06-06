/* Brittany
	Henesys Random Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("我是助手布里塔妮。如果你碰巧有#b#t5150010##k或#b#t5151000##k，要不要让我来为你换个发型？\r\n#L0#剪发: #i5150000##t5150000##l\r\n#L1#染发: #i5151000##t5151000##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200, 30560, 30510, 30610, 30470];
	    } else {
		hair_Colo_new = [31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070, 31610, 31350, 31510, 31740];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.sendYesNo("如果你使用经验券，你的发型会随机变化，还有机会获得一种你都没想过的新实验发型。你确定要使用#b#t5150010##k来改变发型吗？");

	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.sendYesNo("如果你使用普通券，你的发型会随机变化。你确定要使用#b#t5151000##k来改变发型吗？");
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5150000, hair_Colo_new) == 1) {
		cm.sendOk("享受你全新改良的发型吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……没有它我恐怕无法为你剪发。抱歉……");
	    }
	} else {
	    if (cm.setRandomAvatar(5151000, hair_Colo_new) == 1) {
		cm.sendOk("享受你全新改良的发色吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……没有它我恐怕无法为你染发。抱歉……");
	    }
	}
	cm.safeDispose();
    }
}
