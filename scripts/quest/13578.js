/* RED Zero
    [New Years] The Kiterunner
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendOk("果然。年轻人！好吧，如果你改变主意就告诉我。*嘟嘟囔囔*");
	    qm.dispose();
	}
	status--
    }
    if (status == 0) {
		qm.sendAcceptDeclineS("*嘟嘟囔囔* 该死的乌鸦！它们偷走了镇上节日准备的所有食物。年轻的冒险者，你愿意帮忙把食物拿回来吗？\r\n#b（点击"是"加入等待列表）",1);
    } else if (status == 1) {	   
		qm.forceStartQuest();
		qm.dispose();
	}
}
