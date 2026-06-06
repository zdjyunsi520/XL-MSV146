/*
	NPC Name: 		Cobra - Retired dragon trainer
	Map(s): 		Leafre : Cabin
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	cm.sendSimple("如果你有翅膀的话，我相信你能飞到那里。但是，光有翅膀还不够。如果你想穿越比刀刃还锋利的风，你还需要坚硬的鳞片。我是仅存的知道回去之路的半龙人……如果你想去那里，我可以将你变形。无论你是什么，在这一刻，你将成为一条#b龙#k……\r\n #L0##b我想变成一条龙。#k#l");
    } else if (status == 1) {
	cm.useItem(2210016);
	cm.warp(200090500, 0);
	cm.dispose();
    }
}