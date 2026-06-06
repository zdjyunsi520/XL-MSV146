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
		cm.sendNext("快去！去找Woodrock谈谈关于#o9390915#的事。");
    } else if (status == 1) {
        cm.sendPrevS("快去！去找Woodrock谈谈关于#o9390915#的事。",5);
		cm.gainItem(2432251, -1);
		cm.dispose();
	}
}