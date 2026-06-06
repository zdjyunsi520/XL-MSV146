/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Exit - All Line 3 Construction Site
-- By ---------------------------------------------------------------------------------------------
	Xterminator
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Xterminator
---------------------------------------------------------------------------------------------------
**/

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
	cm.sendYesNo("这个装置连接着外面。你要放弃并离开这里吗？下次再来的时候，你将不得不从头开始……");
    } else if (status == 1) {
	cm.warp(103000000, 0);
	cm.dispose();
    }
}