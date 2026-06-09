var status = -1;

function action(mode, type, selection) {
	cm.sendPlayerToNpc("达米安！回答我！");
	cm.forceCompleteQuest(23201);
	cm.forceStartQuest(23202);
	cm.dispose();
}