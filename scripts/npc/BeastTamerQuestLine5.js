/* Return to Masteria
    BeastTamer Quest line
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
		cm.sendNextS("这次先放过你，但你等着。那些动物迟早是我的！",5);
    } else if (status == 1) {
	    cm.forceCompleteQuest(59070);
		cm.levelUp();
        cm.warp(100040400,0);
		cm.dispose();
	}
}