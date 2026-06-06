/* RED 1st impact
    Explorer Thief - Shadower
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 1) {
		    qm.sendOk("如果你不想听，那就算了。你随时可以重新考虑");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendNext("你选择了暗影双刀的道路。那么，你对冒险家的能力了解多少？");
	} else if (status == 1) {
	    qm.sendYesNo("你想了解更多关于冒险家基础的新知识吗？我有时间。\r\n#r（点击是进入教程。）#k");
	} else if (status == 2) {
        qm.forceStartQuest();
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
}