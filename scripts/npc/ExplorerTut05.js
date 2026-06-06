/* RED 1st impact
    Port
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("多亏了你，我们准备好起航了。你准备好登船了吗？");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("多亏了你，我们准备好起航了。你准备好登船了吗？");
	} else if (status == 1) {
        cm.warp(4000032,0);
        cm.dispose();
    }
}