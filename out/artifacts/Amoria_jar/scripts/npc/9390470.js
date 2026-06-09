/* Return to Masteria
    Eka
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) 
    status++;
    else 
	status--;
    if (status == 0) {
    	cm.sendNext("现在还不是离开的时候。你应该回城里找更多事情做。");
    	cm.dispose();
    }
}