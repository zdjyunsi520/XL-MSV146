/*
	Crysta; - Kamuma (Neo Tokyo Teleporter)
*/

function start() {
	    cm.sendSimple("\r #b#L0#2021年 - 普通城镇入口#l \r #L1#2099年 - 午夜港湾入口#l \r #L2#2215年 - 轰炸市中心商业区#l \r #L3#2216年 - 废墟城市十字路口#l \r #L4#2230年 - 危险塔楼大厅#l \r #L5#2503年 - 空战战舰舰首#l  \r #L6#2227年 - 危险城市十字路口#l");
}

function action(mode, type, selection) {
	var mapid = 0;

	switch (selection) {
	    case 0:
		mapid = 240070100;
		break;
	    case 1:
		mapid = 240070200;
		break;
	    case 2:
		mapid = 240070300;
		break;
	    case 3:
		mapid = 240070400;
		break;
	    case 4:
		mapid = 240070500;
		break;
	    case 5:
		mapid = 240070600;
		break;
	    case 6:
		mapid = 683070400;
		break;
	}
	if (mapid > 0) {
	    cm.warp(mapid, 0);
	} else {
	    cm.sendOk("请先完成你的任务。");
	}
    cm.dispose();
}