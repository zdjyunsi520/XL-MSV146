var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.sendOk("复活节活动定于\r\n4月13日至4月20日举行。\r\n你会参加吗？");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("很高兴听到！");
    } else if (status == 1) {
	cm.sendNext("很高兴听到！");
    } else if (status == 2) {
	cm.dispose();
    }
}