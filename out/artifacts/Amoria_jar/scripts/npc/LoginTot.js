/* Grand Athanaeum
    Tot Guide
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendNextS("你注意到屏幕左侧那个红发男孩的图标了吗？\r\n\r\n#v3800475#这是Tot的小贴士，一个帮助你完成#e#r1级到60级#n#k的向导。完成任务后他甚至会#e#r帮助你直接升级#n#k！\r\n按下左侧的按钮或快捷键#e#r'-'#n#k来查看！",5,9010000);
        cm.dispose();
    }
}
