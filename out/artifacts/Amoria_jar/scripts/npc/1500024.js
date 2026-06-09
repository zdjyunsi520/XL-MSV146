/* Dawnveil
    Enter Ellinel Fairy Academy Theme Dungeon
	Chase Tosh the Fairy
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
	    cm.sendAcceptDecline("追上#b妖精托什#k。\r\n\r\n#b（必须组队（1-6人）/ 等级：至少30级）");
	} else if (status == 1) {
	    cm.warp(101073010,0);
        cm.dispose();
    }
  }
