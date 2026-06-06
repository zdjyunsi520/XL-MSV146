/* RED 1st impact
    Third Ability - The Eye Opener
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNext("你好，#b#h0##k。你已经达到100级了！当你达到#b100级#k时，你可以获得一种叫做#b特性#k的特殊力量。我现在就为你释放那股力量。");
	} else if (status == 1) {
        qm.forceStartQuest();
	    qm.forceCompleteQuest();
		qm.UnlockHonor3();
		qm.sendNext("那么，我已经为你释放了新的力量——特性。在角色属性窗口中查看一下吧！");
	    qm.dispose();
	}
}