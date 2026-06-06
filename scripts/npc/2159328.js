var status = -1;

function action(mode, type, selection) {
	cm.sendPlayerToNpc("妈妈！你在哪里？！");
	cm.forceCompleteQuest(23200);
	cm.forceStartQuest(23201);
	cm.dispose();
}