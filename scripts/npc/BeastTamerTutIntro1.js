/* Return to Masteria
	BeastTamer Tutorial
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	//    cm.sendNextS("我也一样，小家伙。",5,9390301);
	//} else if (status == 1) {	
	//    cm.sendNextPrevS("Eka和Arby给了你新的力量！打开技能窗口可以查看关于我们的更多信息，小家伙。",5,9390302);
	//} else if (status == 2) {	
    //    cm.sendNextPrevS("你的动物伙伴们让你可以使用守护跳跃和回归之力。",5,9390302);
	//} else if (status == 3) {
	    cm.topMsg("你的动物伙伴们让你可以使用守护跳跃和回归之力。");
		cm.OpenUI(192);
	    cm.dispose();
	}
}