/* guild emblem npc */
var status = 0;
var sel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0)
	cm.sendSimple("你想做什么？\r\n#b#L0#创建/更改公会徽章#l#k");
    else if (status == 1) {
	sel = selection;
	if (selection == 0) {
	    if (cm.getPlayerStat("GRANK") == 1)
		cm.sendYesNo("创建或更改公会徽章需要#b150万金币#k，你确定要继续吗？");
	    else
		cm.sendOk("只有公会会长才能更改徽章。请告诉你们的会长来和我对话。");
	}
				
    } else if (status == 2) {
	if (sel == 0) {
	    cm.genericGuildMessage(18);
	    cm.dispose();
	}
    }
}
