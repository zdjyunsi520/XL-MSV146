/* RED 1st impact
    Inside the Dangerous Forest
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendNextS("我应该先接受Mai的任务。",16);
		cm.dispose();
    }
}