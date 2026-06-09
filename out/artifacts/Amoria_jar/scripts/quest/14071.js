/* RED 1st impact
    [Attendance] Winter Attendance - Season 1
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendNext("真的吗？哎呀...如果你改变主意再来找我吧！");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendYesNo("你好，#b#h0##k！\r\n你知道#e#b冬季签到第一季#k#n正在进行中，对吧？现在要试试吗？");
	} else if (status == 1) {
        qm.forceStartQuest();
        qm.dispose();
    }
}