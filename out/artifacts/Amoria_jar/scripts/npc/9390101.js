/* Dawnveil
    enterPortal
	??????
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	    status++;
	 else
	    status--;
    if (status == 0) {
	    cm.sendNextS("那到底是什么？！我感觉像是有人在骨头里对我大喊。我应该继续前进吗？",4);
	} else if (status == 1) {	
	    cm.sendYesNoS("那到底是什么？！我感觉像是有人在骨头里对我大喊。我应该继续前进吗？",16);
	} else if (status == 2) {
	    cm.warp(863000100,0);
        cm.dispose();
    }
}