/* Cygnus revamp
	Quest Find the Crumpled Piece of Paper Again
	Knocked Trash Can
    Made by Daenerys
*/

function start(){
	if (cm.getQuestStatus(2214) == 1 && !cm.haveItem(4031894)) { 
		cm.sendOk("你找到了一张皱巴巴的纸条。");
		cm.gainItem(4031894,1);
	} else {
	cm.sendOk("...");
	cm.dispose();
	}
}