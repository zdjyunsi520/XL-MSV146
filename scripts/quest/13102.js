/* Dawnveil
    [Maple Castle] The Grand Invitation 
	Cassandra + Cygnus
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {  
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendNext("哦，你好，#b#e#h ##k#n！没想到会在这里遇到你。过去几天我一直在忙着清理#b枫之城堡#k。说实话，这对我的皮肤可不好...");
	} else if (status == 1) {
	    qm.sendNextPrev("说实话，几个人想要翻修整座城堡真的很困难。我本来希望你能过来帮帮我们。");
	} else if (status == 2) {
	    qm.sendPrev("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i2431132##b万圣节面具碎片 x1#k\r\n#i3994650##b幽灵伙伴糖果 x1#k\r\n\r\n这是你的枫之城堡欢迎礼物。好好享受吧！");
	    qm.forceCompleteQuest();
	    qm.gainItem(2431132, 1);
		qm.gainItem(3994650, 1);
	    qm.dispose();		
	}
  }
}