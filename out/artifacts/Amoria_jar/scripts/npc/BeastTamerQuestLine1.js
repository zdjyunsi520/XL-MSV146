/* Return to Masteria
    BeastTamer Quest line
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		cm.sendNextNoESC("（Tom，够了，别胡闹了。");
    } else if (status == 1) {
		cm.sendDirectionInfo("Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/27");
		cm.sendDirectionStatus(1, 2500);
		cm.sendNextNoESC("够了！");
    } else if (status == 2) {
		cm.sendNextNoESC("没人再相信我了...唉。我想妈妈！");
	} else if (status == 3) {
		cm.sendNextNoESC("获得了冒险启程称号！");
	} else if (status == 4) {
		cm.introEnableUI(0);
        cm.introDisableUI(false);
		cm.warp(866000000,0);
		cm.topMsg("获得了冒险启程称号！");
		cm.dispose();
	}
}