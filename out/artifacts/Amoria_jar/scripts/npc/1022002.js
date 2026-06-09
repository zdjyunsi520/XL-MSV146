var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (cm.getPlayer().getLevel() < 50) {
	cm.sendOk("快走吧……免得受伤。");
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("你看起来很强。你想前往巴洛格神殿吗？");
    } else if (status == 1) {
	cm.warp(105100100);
	cm.dispose();
    }
}