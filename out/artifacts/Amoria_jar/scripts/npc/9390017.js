var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.sendOk("LELELELE");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendOk("层。\r\n\r\n建设进度\r\n第1层 #r100%#k"+cm.getsaoclear()+"");
    } else if (status == 1) {
	cm.sendNext("层。\r\n\r\n建设进度\r\n第1层 #r100%#k");
    } else if (status == 2) {
	cm.dispose();
    }
}