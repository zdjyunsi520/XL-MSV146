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
		cm.sendNext("               欢迎来到 #b[刀剑神域]#k 副本！ \r\n\r\n很遗憾仍在开发中！你可以随时回来看看进度！\r\n\r\n第1层 #g100%#k\r\n第2层 #g100%#k\r\n第3层 #b50%#k\r\n第4层 #b50%#k\r\n第5层 #b50%#k\r\n第6层 #b50%#k\r\n第7层 #b50%#k\r\n第8层 #b50%#k\r\n第9层 #b50%#k\r\n第10层 #b50%#k\r\n第11层 #b50%#k\r\n第12层 #b50%#k\r\n第13层 #b50%#k\r\n第14层 #b50%#k\r\n第15层 #b50%#k\r\n第16层 #b50%#k\r\n第17层 #b50%#k\r\n第18层 #b50%#k\r\n第19层 #b50%#k\r\n第20层 #b50%#k\r\n第21 - 100层 #r0%#k");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if(status == 0){
		cm.sendOk("好了，出发吧！");
	}
	 else if (status == 0 && selection == 0) {
    status = 4;
	//cm.openNpc(1402300);
	}	else if(status == 2){
		//cm.sendNext("好了，出发吧！");
		//cm.warp(109090200);
		cm.showSAO();
		cm.dispose();
		cm.OpeningVid();
	}

}
}