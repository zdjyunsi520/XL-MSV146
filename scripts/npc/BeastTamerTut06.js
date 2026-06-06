/* Return to Masteria
	BeastTamer Tutorial
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendNextNoESC("哇哦，你真聪明！嘿，屏幕底部那个红色条是什么？上面写着'HP'...如果那个条变低了就告诉我，我会帮你补满的，因为红色是我最喜欢的颜色！\r\n#i03800626#");
		cm.forceStartQuest(59005);
		cm.dispose();
	//} else if (status == 2) {
	//	cm.sendNextNoESC("哇哦，你真聪明！嘿，屏幕底部那个红色条是什么？上面写着'HP'...如果那个条变低了就告诉我，我会帮你补满的，因为红色是我最喜欢的颜色！\r\n#i03800626#");
	//} else if (status == 3) {
     //   cm.forceStartQuest(59005);
	//	cm.dispose();
	}
}