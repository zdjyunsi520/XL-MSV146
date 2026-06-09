/* Author: aaroncsn(MapleSea Like)
	NPC Name: 		Karcasa
	Map(s): 		The Burning Sands: Tents of the Entertainers(260010600)
	Description: 		Warps to Victoria Island
*/
var towns = new Array(100000000,101000000,102000000,103000000,104000000);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status == 0 && mode == 0) {
		cm.sendNext("哎呀……你是害怕速度还是害怕高度？你不信我的飞行技术？相信我，我已经解决了所有问题！");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if(status == 0){
		cm.sendAcceptDecline("我不知道你是怎么知道这个地方的，但你来对地方了！对于那些在尼哈沙漠游荡而开始想家的人，我提供直飞维多利亚岛的非停航班！别担心这艘飞行船——它只掉下来过一两次！在那小船上长途飞行不觉得闷吗？你觉得呢？你愿意搭这趟直飞航班吗？");
	} else if(status == 1){
		cm.sendAcceptDecline("请记住两件事。第一，这条航线实际上是用于海外运输的，所以#r我无法保证你会在哪个城镇降落#k。第二，既然我安排了这趟特别航班，费用会稍微贵一点。服务费为#e#b1万枫币#n#k。有一趟航班即将起飞。你感兴趣吗？");
	} else if(status == 2){
		cm.sendNext("好的，准备起飞~~");
	} else if(status == 3){
		if(cm.getMeso() >= 10000){
			cm.gainMeso(-10000);
			cm.warp(towns[Math.floor(Math.random() * towns.length)]);
		} else{
			cm.sendNextPrev("嘿，你钱不够吗？我告诉过你需要#b1万#k枫币才能搭乘。");
			cm.dispose();
			}
		}
	}
}