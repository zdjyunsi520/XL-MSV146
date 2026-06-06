/* Pata
	Mu Lung Random/VIP Eye Color Change.
*/
var status = -1;
var beauty = 0;
var facetype;

function action(mode, type, selection) {
    if (mode == 0) {
	status--;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("嘿，我是帕塔，武陵的美瞳专家。我相信眼睛是你身上最重要的特征，有了#b#t5152042##k或#b#t5152041##k，我可以为你配到合适的美瞳。你想用哪种？\r\n#L0#美瞳：#i5152042##t5152042##l\r\n#L1#美瞳：#i5152041##t5152041##l");
    } else if (status == 1) {
	facetype = [];

	var teye = cm.getPlayerStat("FACE") % 100;

	if (cm.getPlayerStat("GENDER") == 0) {
	    teye += 20000;
	} else {
	    teye += 21000;
	}
	facetype[0] = teye + 100;
	facetype[1] = teye + 200;
	facetype[2] = teye + 300;
	facetype[3] = teye + 400;
	facetype[4] = teye + 500;
	facetype[5] = teye + 600;
	facetype[6] = teye + 700;

	if (selection == 0) {
	    beauty = 1;
	    cm.sendYesNo("如果你使用普通优惠券，你将随机获得一副美瞳。你确定要使用#b#t5152042##k来改变你的眼型吗？");
	} else if (selection == 1) {
	    beauty = 2;
	    cm.askAvatar("通过我们的全新电脑程序，你可以提前看到护理后的效果。你想戴什么样的美瞳呢？请选择你喜欢的风格。", facetype);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5152042, facetype) == 1) {
		cm.sendOk("享受你全新的面容吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有这里专用的优惠券。很抱歉，没有优惠券的话，是无法进行整形手术的……");
	    }
	} else {
	    if (cm.setAvatar(5152041, facetype[selection]) == 1) {
		cm.sendOk("享受你全新的面容吧！");
	    } else {
		cm.sendOk("嗯……看起来你没有这里专用的优惠券。很抱歉，没有优惠券的话，是无法进行整形手术的……");
	    }
	}
	cm.safeDispose();
    }
}