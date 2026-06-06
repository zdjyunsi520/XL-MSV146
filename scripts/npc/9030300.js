/* RED 1st impact
    Eggrich
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendOkS("枫之谷拍卖行目前暂未开放。给您带来的不便，敬请谅解。",4);
		cm.dispose();
    }
}