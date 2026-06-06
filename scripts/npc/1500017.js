/* Dawnveil
    [Ellinel Fairy Academy] The First Rescue
	Tosh the Fairy
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (status == 0) {
    	cm.sendOkS("救命啊！我被这些怪物困住了！\r\n\r\n#b（击败附近所有怪物。）",4);
    	cm.dispose();
    }
}