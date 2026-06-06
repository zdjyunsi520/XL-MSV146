/* Author: Xterminator
	NPC Name: 		VIP Cab
	Map(s): 		Victoria Road : Lith Harbor (104000000)
	Description: 		Takes you to Ant Tunnel Park
*/
var status = 0;
var cost;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
	cm.sendNext("这个城镇也有很多可以提供的服务。如果你需要去蚂蚁洞公园，随时来找我们。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("你好！这辆出租车只服务VIP客户。与普通出租车只送你去不同城镇不同，我们提供更优质的服务，配得上VIP级别。价格有点贵，不过……只需1万金币，我们就能安全地把你送到\r\n#b蚂蚁洞窟#k。");
    } else if (status == 1) {
	var job = cm.getJob();
	if (job == 0 || job == 2000 || job == 1000) {
	    cm.sendYesNo("我们对新手有九折优惠。蚂蚁洞窟位于维多利亚岛中心地下城的最深处，那里有24小时移动商店。你想花#b1000金币#k去那里吗？");
	    cost = 1000;
	} else {
	    cm.sendYesNo("非新手按原价收费。蚂蚁洞窟位于维多利亚岛中心地下城的最深处，那里有24小时移动商店。你想花#b1万金币#k去那里吗？");
	    cost = 10000;
	}
    } else if (status == 2) {
	if (cm.getMeso() < cost) {
	    cm.sendNext("看起来你的金币不够。抱歉，没有足够的金币你无法使用这项服务。")
	} else {
	    cm.gainMeso(-cost);
	    cm.warp(105070001, 0);
	}
	cm.dispose();
    }
}