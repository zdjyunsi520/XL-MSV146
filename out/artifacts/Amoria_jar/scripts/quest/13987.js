/* RED Zero
    Second Season of RED Achievements
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendOk("嗯，再想想吧。");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendAcceptDecline("RED还在继续，我们有更多的成就来庆祝！你准备好迎接挑战了吗？");
	} else if (status == 1) {
	    qm.sendOk("点击屏幕左侧的#e#b#fEffect/BasicEff.img/MainNotice/Achieve/Default/0#奖杯图标#k#n来查看你的成就！");
        qm.forceStartQuest();
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
}