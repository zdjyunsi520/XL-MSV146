/* RED 1st impact
    Christmas Tree
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendNext("圣诞树装饰活动每天都会举行。详情请咨询#b卡珊德拉#k。");
		cm.dispose();
    }
}