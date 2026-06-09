/* Grandpa Luo
	Mu Lung VIP Hair/Hair Color Change.
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
	cm.sendSimple("欢迎来到武陵美发店。如果你有#b#t5150025##k或#b#t5151020##k，让我来为你打理发型。请选择你想要的服务。\r\n#L0#理发：#i5150025##t5150025##l\r\n#L1#染发：#i5151020##t5151020##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30250, 30350, 30270, 30150, 30300, 30600, 30160];
	    } else {
		hair_Colo_new = [31040, 31250, 31310, 31220, 31300, 31680, 31160, 31030, 31230];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.askAvatar("我可以完全改变你的发型，让你焕然一新。为什么不换个新造型呢？有了#b#t5150025##k，剩下的交给我。选择你喜欢的风格吧！", hair_Colo_new);
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.askAvatar("我可以完全改变你的发色，让你焕然一新。为什么不换个新颜色呢？有了#b#t5151020##k，剩下的交给我。选择你喜欢的颜色吧！", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1) {
	    if (cm.setAvatar(5150025, hair_Colo_new[selection]) == 1) {
		cm.sendOk("享受你全新的发型吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……恐怕没有它我无法为你理发。抱歉……");
	    }
	} else {
	    if (cm.setAvatar(5151020, hair_Colo_new[selection]) == 1) {
		cm.sendOk("享受你全新的发色吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……恐怕没有它我无法为你染发。抱歉……");
	    }
	}
	cm.dispose();
    }
}