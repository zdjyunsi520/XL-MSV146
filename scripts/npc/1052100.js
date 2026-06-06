/* Don Giovanni
	Kerning VIP Hair/Hair Color Change.
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
	cm.sendSimple("你好！我是唐乔瓦尼，美容院的院长！如果你有#b#t5150003##k或#b#t5151003##k，何不让我来帮你呢？决定一下你想怎么处理你的头发……\r\n#L0#剪发：#i5150003##t5150003##l\r\n#L1#染发：#i5151003##t5151003##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30030, 30020, 30000, 30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160];
	    } else {
		hair_Colo_new = [31050, 31040, 31000, 31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.askAvatar("我可以完全改变你的发型，让它看起来非常棒。想换个新发型吗？如果你有#b#t5150003##k，我来帮你换。选一个你喜欢的吧～。", hair_Colo_new);
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.askAvatar("我可以完全改变你的发色，让它看起来非常棒。想换个颜色吗？凭#b#t5151003##k我来帮你换。选一个你喜欢的吧。", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setAvatar(5150003, hair_Colo_new[selection]) == 1) {
		cm.sendOk("好好享受你焕然一新的发型吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……没有优惠券的话，恐怕我无法为你剪发了。抱歉……");
	    }
	} else {
	    if (cm.setAvatar(5151003, hair_Colo_new[selection]) == 1) {
		cm.sendOk("好好享受你焕然一新的发色吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有我们指定的优惠券……没有优惠券的话，恐怕我无法为你染发了。抱歉……");
	    }
	}
	cm.safeDispose();
    }
}
