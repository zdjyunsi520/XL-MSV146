/* RED 1st impact
    RED Login events level 10-250
	Cassandra + Maple Admin
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 1) {
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendNextS("我有一份特别的礼物给你，懒虫！\r\n#b#t5230000:##k\r\n在12/9到12/30期间，每周一我会送出5个米涅瓦之枭！你将获得一份惊喜！\r\n#r（每个账号只能有一个角色参与米涅瓦之枭物品赠送活动。）#k",4);	
	} else if (status == 1) {
	if (cm.getPlayer().itemQuantity(5230000) > 0) {
        cm.dispose();
	} else
	    cm.sendYesNoS("米涅瓦之枭已发放。\r\n#i5230000:# #t5230000#!请查看你的背包。 ",5,9010000);
	} else if (status == 2) {
	    cm.sendNextS("米涅瓦之枭已发放。\r\n#i5230000:# #t5230000#!请查看你的背包。",5,9010000);
		cm.gainItem(5230000,1);
	} else if (status == 3) {
        cm.dispose();
    }
  }