var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
         status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
    	cm.sendNext("#b（多么可疑的洞。也许冯就藏在里面。要不要往里看看？）#k");
    } else if (status == 1) {
        cm.gainExp(35);
        cm.warp(931000010,0);
    	cm.dispose();
    }
}