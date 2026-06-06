/* Return to Masteria
    Skip Cutscenes
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendNextS("你想跳过教程过场动画吗？？",5,9010000);
	} else if (status == 1) {	
        cm.dispose();
    }
}