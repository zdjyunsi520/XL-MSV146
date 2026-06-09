/**
	Tangyoon - Nautilus Cook
**/

function start() {
    if (cm.isQuestActive(2180)) {
	cm.warp(912000100);
    } else {
        cm.sendOk("马厩对其他人是不开放的，恐怕我也不能让你去那里。");
    }
    cm.dispose();
}