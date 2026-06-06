/* Author: aaroncsn(MapleSea Like)
	NPC Name: 		Karcasa
	Map(s): 		The Burning Sands: Tents of the Entertainers(260010600)
	Description: 		Warps to Victoria Island
*/

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status == 0 && mode == 0) {
		cm.sendNext("你不想成为梅赛德斯吗？..随你便吧。");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if(status == 0){
		cm.sendYesNo("嘿，我是梅赛德斯！你想成为像我一样精通双弩枪的大师吗？ \r\n#r如果你选择是，你将成为梅赛德斯并被传送到射手村");
   }else if(status == 1){
		cm.sendNext("现在我赐予你我的力量！");
	 	cm.changeJob(2002);
		cm.gainExp(15);
		cm.gainExp(40);
		cm.gainExp(60);
		cm.gainExp(100);
		cm.gainExp(200);
		cm.gainExp(300);
		cm.gainExp(641);
		cm.gainExp(1000);
		cm.gainExp(992);
		cm.gainItem(1522038, 1);
		cm.gainItem(1352004, 1);
		cm.warp(100000000);
		cm.dispose();
	}
	}
}