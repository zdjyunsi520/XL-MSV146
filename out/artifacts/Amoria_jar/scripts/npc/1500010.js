/* Dawnveil
    Enter Ellinel Fairy Academy Theme Dungeon
	Fanzy
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNextS("祝你的冒险之旅愉快。",5);
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNoS("你想进入#b#e[主题副本 艾利纽尔妖精学院]#n#k吗？", 4);
	} else if (status == 1) {
	  if (cm.getQuestStatus(32102)==0){
	    cm.warp(101070000,0);
		cm.forceStartQuest(32102);
	} else
		cm.warp(101070000,0);
        cm.dispose();
    }
  }
