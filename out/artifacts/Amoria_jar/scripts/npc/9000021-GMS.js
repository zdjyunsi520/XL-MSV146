/* Dawnveil
    Futuroid
	Gaga
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
		    cm.sendNextS("可惜。改变主意的时候告诉我。",5,9000021);
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
	    cm.sendYesNoS("我已经准备好用我的新发明震惊世界了！你准备好制造未来机器人了吗？", 5,9000021);
	} else if (status == 1) {	
	    cm.sendNextS("你没有足够的零件。带更多零件再来吧！", 5,9000021);
        cm.dispose();
    }
}