function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        }
    }

    if (mode == 1) 
        status++;

    else 
        status--;
    if (status == 0) { 
    var marr = cm.getQuestRecord(160150);
    var data = marr.getCustomData();
	var time = parseInt(data);
	//      cm.sendSimple("贝伦将在OurStory v4.0中开放！");
	//	  cm.dispose();
        cm.sendSimple("#b#L100#镜像神木村 等级100-110#l\r\n#b#L101#镜像阿里安特 等级110-120#l\r\n#L102#镜像射手村 等级120-130#l\r\n#L103#镜像武陵 等级130-140#l\r\n#L104#镜像埃德尔斯坦 等级140-150#l\r\n#L105#镜像玛加提亚 等级150-160#l\r\n#L106#镜像玩具城 等级160-170#l\r\n#L107#镜像时间神殿 等级170-180#l");
    }else if (status == 1) {
        if (mode == 1) {
            switch (selection) {
                case 100:
                   cm.warp(321100000);
				   cm.sendNext("使用地图右侧的传送门去训练！");
				   cm.dispose();
                    break;
		        case 101:
                     cm.warp(322000000);
					 cm.sendNext("使用地图右侧的传送门去训练！");
					 cm.dispose();
                    break;
		        case 102:
			         cm.warp(323000000);
					 cm.sendNext("使用地图右侧的传送门去训练！");
					 cm.dispose();
					 break;
			    case 103:
					 cm.warp(324000000);
					 cm.sendNext("使用地图右侧的传送门去训练！");
					 cm.dispose();
					 break;
				case 104:
					 cm.warp(325000000);
					 cm.sendNext("使用地图右下方的传送门去训练！");
					 cm.dispose();
					 break;
				case 105:
					 cm.warp(326000000);
					 cm.sendNext("使用地图中央的传送门去训练！");
					 cm.dispose();
					 break;
				case 106:
					 cm.warp(327000000);
					 cm.sendNext("使用地图左侧的传送门去训练！");
					 cm.dispose();
					 break;
				case 107:
					 cm.warp(328000000);
					 cm.sendNext("使用地图左侧的传送门去训练！");
					 cm.dispose();
					 break;
            }
        }
}
}