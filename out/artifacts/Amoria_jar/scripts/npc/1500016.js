/* Dawnveil
    [Ellinel Fairy Academy] The Final Rescue
	Woonie and Tracy
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (status == 0) {
    	cm.sendOkS("请消灭那只恶心的老鼹鼠！\r\n#b（击败鼹鼠王。）",4);
    	cm.dispose();
    }
}