/* Author: Xterminator
	NPC Name: 		Heena
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Takes you outside of Training Camp
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.sendOk("你想使用我的时光机吗？");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("太好了！去和它谈谈，它就能把你带到过去，哈！你甚至不需要和我说话！");
    } else if (status == 1) {
	cm.sendNext("太好了！去和它谈谈，它就能把你带到过去，哈！你甚至不需要和我说话！");
    } else if (status == 2) {
	//cm.getNpc(9250144);
	cm.dispose();
    }
}