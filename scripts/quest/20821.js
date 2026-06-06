/* Cygnus revamp
	Noblesse tutorial
	Kimu
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendNext("这是欢迎所有新骑士的仪式。我们需要找到训练教官奇库。他一定在这附近某个地方...");
	} else if (status == 1) {
      qm.sendNext("找不到奇库吗？你应该用地图旁边的NPC按钮！点击奇库，你就会看到一个箭头！\r\n趁他还没发脾气赶紧去打个招呼！");
	} else if (status == 2) {
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
	    qm.sendNext("我希望他们能送来些体型大一点的战士，不过我想你也凑合了。");
		qm.dispose();
	}
  }
}