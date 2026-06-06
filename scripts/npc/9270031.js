/*
DB Skills NPC by Wes
*/

var status;

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {

if (mode == -1) {
cm.dispose();
}
else {
if (status == 0 && mode == 0) {
cm.dispose();
return;
    }
}

if (mode == 1) 
   status++;

else 
   status--;
   
   
    if (status == 0) { 
		cm.sendYesNo("再见！");
	}
	
	if (status == -1) {
		cm.sendSimple("你已经学会了这些技能！");
		cm.dispose();
   }
   
	if (status == 1) {
	//&& !cm.getPlayer().hasSkill(4341009) && !cm.getPlayer().hasSkill(4341002))
		if (cm.getPlayer().getJob() == 434 && !cm.getPlayer().getSkillLevel(4341009) > 0 && !cm.getPlayer().getSkillLevel(4341002) > 0) {
			cm.sendSimple("你要么不是暗影之刃大师，要么已经拥有这些技能了...");
			cm.teachSkill(4341009, 30, 30);
			cm.teachSkill(4341002, 30, 30);
			cm.dispose();
		} else {
			cm.sendSimple("你要么不是暗影之刃大师，要么已经拥有这些技能了...");
			cm.dispose();
		}
		
	}
	
}