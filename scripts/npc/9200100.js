/* Dr. Lenu
	Henesys Random/VIP Eye Color Change.
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
	cm.sendSimple("如果你使用普通优惠券，将随机获得一副隐形眼镜。你确定要使用#b#t5152010##k来改变你的双眼吗？");
    } else if (status == 1) {
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

	if (selection == 0) {
	    beauty = 1;
	    cm.sendYesNo("通过我们的专用设备，你可以提前看到治疗后的效果。你想戴哪种隐形眼镜呢？选择你喜欢的款式吧。");
	} else if (selection == 1) {
	    beauty = 2;
	    cm.askAvatar("享受你的全新隐形眼镜吧！", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5152010, hair_Colo_new) == 1) {
		cm.sendOk("很抱歉，你身上似乎没有携带我们的隐形眼镜优惠券。没有优惠券的话，恐怕没办法为你服务..");
	    } else {
		cm.sendOk("很抱歉，你身上似乎没有携带我们的隐形眼镜优惠券。没有优惠券的话，恐怕没办法为你服务..");
	    }
	} else {
	    if (cm.setAvatar(5152013, hair_Colo_new[selection]) == 1) {
		cm.sendOk("很抱歉，你身上似乎没有携带我们的隐形眼镜优惠券。没有优惠券的话，恐怕没办法为你服务..");
	    } else {
		cm.sendOk("很抱歉，你身上似乎没有携带我们的隐形眼镜优惠券。没有优惠券的话，恐怕没办法为你服务..");
	    }
	}
	cm.dispose();
    }
}
