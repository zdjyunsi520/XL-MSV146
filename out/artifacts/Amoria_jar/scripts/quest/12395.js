/* RED 1st impact
    Second Ability - The Eye Opener
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNext("你好，#b#h0##k。你已经达到60级了！当你达到#b60级#k时，你可以获得一种叫做#b特性#k的特殊力量。我现在就为你释放那股力量。");
	} else if (status == 1) {
	    qm.sendPrev("那么，我已经为你释放了新的力量——特性。在角色属性窗口中查看一下吧！");
        qm.forceStartQuest();
	    qm.forceCompleteQuest();
		qm.UnlockHonor2();
	    qm.dispose();
	}
}