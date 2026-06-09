/* Dawnveil
    [Ellinel Fairy Academy] The Second Escape
	Phiny and Ephony
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (status == 0) {
    	cm.sendOkS("救救我们！这些怪物要吃掉我们了！\r\n\r\n#b（击败附近所有怪物。）",4);
    	cm.dispose();
    }
}