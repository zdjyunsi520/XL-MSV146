/* RED 1st impact
    Maple Tree Hill
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendSelfTalk("也许我跟上去看看..");
	} else if (status == 1) {	
	    cm.sendSelfTalk("也许我跟上去看看..");
	} else if (status == 2) {
        cm.introEnableUI(0);
        cm.introDisableUI(false);
        cm.dispose();
    }
}