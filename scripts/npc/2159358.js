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
		cm.sendNext("你不想获得恶魔种族的强大力量吗？");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if(status == 0){
		cm.sendYesNo("你好。我是恶魔猎手，你想要恶魔种族的力量吗？\r\n#r如果你选择是，你将成为恶魔猎手并被传送到射手村");
   }else if(status == 1){
		cm.sendNext("现在我将赐予你我的力量！");
	 	cm.changeJob(3001);
		cm.gainExp(15);
		cm.gainExp(40);
		cm.gainExp(60);
		cm.gainExp(100);
		cm.gainExp(200);
		cm.gainExp(300);
		cm.gainExp(641);
		cm.gainExp(1000);
		cm.gainExp(992);
		cm.gainItem(1322053, 1);
		cm.warp(100000000);
		cm.dispose();
	}
	}
}