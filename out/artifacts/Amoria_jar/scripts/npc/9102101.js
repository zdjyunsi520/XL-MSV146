/*
	? - Victoria Road: Pet-Walking Road (100000202)
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.sendNext("#b（我看到有东西被草盖住了。要把它拔出来吗？）");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("#b（好恶心……是宠物的便便！）");
    } else if (status == 1) {
	cm.sendNext("#b（好恶心……是宠物的便便！）");
	cm.gainItem(4031922, 1);
	cm.dispose();
    }
}