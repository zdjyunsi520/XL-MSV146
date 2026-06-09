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
    if (status == 0) {
	cm.sendOk("你可以从射手村各个NPC那里学习专业技术。\r\n\r\n1. 草药学 + 炼金术\r\n2. 采矿 + 铸造术\r\n3. 采矿 + 饰品制造");
	cm.safeDispose();
    }
}