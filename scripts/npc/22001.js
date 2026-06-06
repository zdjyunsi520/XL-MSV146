/* RED 1st impact
    Vasily (Maple Return skill)
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("我们离目的地只有几英里了。在我们准备降落的时候，和其他乘客聊聊天吧。");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("你要下车了吗？船很快就要出发了。如果你离开，就必须等下一班了。");
	} else if (status == 1) {
	    cm.warp(2000100,0);
		cm.dispose();
    }
  }