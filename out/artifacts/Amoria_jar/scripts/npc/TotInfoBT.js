/* Return to Masteria
    Eastern Outskirts
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendNextS("#e#r你必须完成野兽驯兽师教程才能解锁。#k\r\n你注意到屏幕左侧那个红发男孩图标了吗？\r\n#v3800475# 这是托特的指南，一个帮助你度过 #e#r1到60级#n#k 的向导。完成任务时他甚至会 #e#r帮你直接升级#n#k！\r\n按下左侧的按钮或快捷键 #e#r' - '#n#k 来查看吧！",4,9010000);
	} else if (status == 1) {	
        cm.dispose();
    }
}