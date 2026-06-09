/* RED 1st impact
    First Season of RED Achievements
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendNext("嗯，再想想吧。");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendAcceptDeclineNoESC("你好，#b#h0##k！既然RED已经来了，是时候用一些令人兴奋的成就来挑战自己了。再努力一点来赢取你的好东西吧！你觉得呢？");
	} else if (status == 1) {
	    qm.sendNext("点击屏幕左侧的#e#b#fEffect/BasicEff.img/MainNotice/Achieve/Default/0#奖杯图标#k#n来查看你的成就！");
	} else if (status == 2) {
        qm.forceStartQuest();
		qm.forceCompleteQuest();
        qm.dispose();
    }
}