/* Author: aaroncsn (MapleSea Like)
	NPC Name: 		Mike
	Map(s): 		Warning Street: Perion Dungeon Entrance(106000300)
	Description: 		Unknown
*/

function start(){
	if (cm.getQuestStatus(28177) == 1 && !cm.haveItem(4032479)) { //too lazy
		cm.gainItem(4032479,1);
	}
	cm.sendNext("从这里穿过去你就会到达维多利亚岛的中心地下城。请小心……");
	cm.dispose();
}