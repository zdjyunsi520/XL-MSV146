/* RED 1st impact
    Maple Leaf
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendNextS("我想我可以把它放在我的#b冒险日记#k里来纪念枫之岛。",17);
	} else if (status == 1) {	
	    cm.sendNextPrevS("在快捷键设置窗口中设置你的#e#b冒险日记#k#n快捷键，即可打开并翻阅它。",17);
	} else if (status == 2) {
	    cm.sendNextPrevS("你获得了一本冒险日记！",17);
    } else if (status == 3) {	
	    cm.topMsg("你获得了一本冒险日记！");
		cm.openUI(191);
        cm.dispose();
    }
}