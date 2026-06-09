/* RED Zero
    [Attendance] Pink Heater Fans
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendOk("真的吗？哎呀...如果你改变主意再来找我吧！");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendAcceptDecline("你好，#b#h0##k！\r\n你知道#e#b冬季签到第二季#k#n正在进行中，对吧？现在要试试吗？");
	} else if (status == 1) {
	    qm.sendOk("好吧，那个风扇的事情有点适得其反，现在我的植物全死了。但事情是这样的。我用的是蓝色风扇。那是冷色！我这次全都想明白了...粉色风扇。又热又暖！也许再配个电风扇，因为我的手臂都烧伤了。去给我从#r你等级附近的怪物#k那里弄#b30个#e#t3994855#s#k#n，我的公寓终于会热到睡不着觉了！");
	    qm.forceStartQuest();
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
}