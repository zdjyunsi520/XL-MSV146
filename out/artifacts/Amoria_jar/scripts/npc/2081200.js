/*  NPC : Legor
    Bowman 4th job advancement
	Forest of the priest (240010501)
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }
     if (status == 0) {
	 if (cm.getJob() == 212 || cm.getJob() == 222 || cm.getJob() == 232) {
     cm.sendSimple("你好，有什么可以帮你的吗？\r\n\r\n#b#L2#我想要进行自由转职#l\r\n#L3#我想了解一些关于自由转职的信息#l。");	 
    } else if (cm.getQuestStatus(1453) == 1) { //1455 Bowman //1453 Mage //1451 Warrior //1457 Thief?
     cm.sendSimple("我可以带你前往第四次转职所需的两个地方。\r\n\r\n\r\n#b#L0#曼努斯的森林#l\r\n#L1#格里菲的森林#l。");	 
    } else {
	 cm.sendSimple("如果你想以法师身份进行第四次转职，请来找我。");
	 cm.dispose();
     }	
    }else if (status == 1) {
       if (selection == 0) {
		   if (cm.getPlayerCount(924000200) >= 1) {
	   cm.sendOk("已经有人在挑战第四次转职BOSS了，请稍后再试。");
	   cm.dispose();
	   } else {
		   	   cm.warp(924000200);
	   cm.spawnMonster(9300511, 241, 452);
	   cm.dispose();
	   }
    }  if (selection == 1) {
		   if (cm.getPlayerCount(924000200) >= 1) {
	   cm.sendOk("已经有人在挑战第四次转职BOSS了，请稍后再试。");
	   cm.dispose();
	   } else {
		   	   cm.warp(924000201);
	   cm.spawnMonster(9300512, 241, 452);
	   cm.dispose();
	   }
    }  if (selection == 2) {
       cm.sendOpenJobChangeUI();
    }  if (selection == 3) {
       cm.sendSimple("以下是自由转职的规则。");
	   cm.dispose();
    }
	}
}