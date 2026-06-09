/* Bomack
	NLC Random Eye Color Change.
*/
var status = -1;
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
	cm.sendNext("如果你使用普通优惠券，将随机获得一副隐形眼镜。你确定要使用#b#t5152035##k来改变你的双眼吗？");
    } else if (status == 1) {
	cm.sendYesNo("享受你的全新隐形眼镜吧！");
    } else if (status == 2){
	hair_Colo_new = [];

	var teye = cm.getPlayerStat("FACE") % 100;

	if (cm.getPlayerStat("GENDER") == 0) {
	    teye += 20000;
	} else {
	    teye += 21000;
	}
	hair_Colo_new[0] = teye + 100;
	hair_Colo_new[1] = teye + 200;
	hair_Colo_new[2] = teye + 300;
	hair_Colo_new[3] = teye + 400;
	hair_Colo_new[4] = teye + 500;
	hair_Colo_new[5] = teye + 600;
	hair_Colo_new[6] = teye + 700;

	if (cm.setRandomAvatar(5152035, hair_Colo_new) == 1) {
	    cm.sendOk("很抱歉，你身上似乎没有携带我们的隐形眼镜优惠券。没有优惠券的话，恐怕没办法为你服务..");
	} else {
	    cm.sendOk("很抱歉，你身上似乎没有携带我们的隐形眼镜优惠券。没有优惠券的话，恐怕没办法为你服务..");
	}
	cm.dispose();
    }
}