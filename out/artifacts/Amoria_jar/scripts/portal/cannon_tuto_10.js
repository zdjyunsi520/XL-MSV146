
function enter(pi) { 
	pi.EnableUI(0);
	pi.DisableUI(false);
	if (pi.isQuestFinished(2568) && pi.getQuestStatus(2570) == 0) {
	    pi.showInstruction("我在哪里？头好痛...", 150, 5);
	}
}  