/* 
 * Sharen III's Soul, Sharenian: Sharen III's Grave (990000700)
 * Guild Quest - end of stage 4
 */

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else {
	cm.dispose();
	return;
	}

    if (status == 0) {
	if (cm.getEventInstance().getProperty("leader").equals(cm.getPlayer().getName())) {
	    if (cm.getEventInstance().getProperty("stage4clear") != null && cm.getEventInstance().getProperty("stage4clear").equals("true")) {
		cm.sendOk("在我以为将永远沉睡之后，终于找到了拯救沙雷尼安的人。老朽这就为你们铺路，帮助你们完成任务。");
		cm.safeDispose();
	    } else {
		var prev = cm.getEventInstance().setProperty("stage4clear","true",true);
		if (prev == null) {
		    cm.sendNext("我需要你们队伍的队长来和我对话，其他人不行。");
		} else { //if not null, was set before, and Gp already gained
		    cm.sendOk("在我以为将永远沉睡之后，终于找到了拯救沙雷尼安的人。老朽这就为你们铺路，帮助你们完成任务。");
		    cm.safeDispose();
		}
	    }
	} else {
	    if (cm.getEventInstance().getProperty("stage4clear") != null && cm.getEventInstance().getProperty("stage4clear").equals("true"))
		cm.sendOk("在我以为将永远沉睡之后，终于找到了拯救沙雷尼安的人。老朽这就为你们铺路，帮助你们完成任务。");
	    else
		cm.sendOk("我需要你们队伍的队长来和我对话，其他人不行。");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	cm.gainGP(180);
	cm.getMap().getReactorByName("ghostgate").hitReactor(cm.getC());
	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.dispose();
    }
}