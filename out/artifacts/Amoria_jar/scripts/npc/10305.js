/* RED 1st impact
    Vasily
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendNext("船还没有准备好启航。");
		cm.dispose();
    }
}