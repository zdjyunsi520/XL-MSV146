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
		    cm.sendNext("让你上船吧。去击败那些在我船上肆虐的怪物！");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("让你上船吧。去击败那些在我船上肆虐的怪物！");
	} else if (status == 1) {
        cm.warp(4000033,0);
        cm.dispose();
    }
}