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
        cm.sendSimple("#b#L100#地图1 等级100-110（神木村）#l\r\n#b#L101#地图2 等级100-110（神木村）#l\r\n#L102#地图3 等级100-110（神木村）#l\r\n#L103#地图4 等级110-120（阿里安特）#l\r\n#L104#地图5 等级120-130（射手村）#l\r\n#L105#地图6 等级130-140（武陵）#l\r\n#L106#地图7 等级140-150（埃德尔斯坦）#l\r\n#L107#地图8 等级150-160（玛加提亚）#l\r\n#L108#地图9 等级160-170（玩具城）#l\r\n#L109#地图10 等级170-180（时间神殿）#l");
    }else if (status == 1) {
        if (mode == 1) {
            switch (selection) {
                case 100:
                   cm.warp(321110000);
				 //  cm.sendNext("使用地图右侧的传送门去训练！");
				   cm.dispose();
                    break;
		        case 101:
                   cm.warp(321111000);
					// cm.sendNext("使用地图右侧的传送门去训练！");
					 cm.dispose();
                    break;
		        case 102: // Map 3
			       cm.warp(321112000);
					// cm.sendNext("使用地图右侧的传送门去训练！");
					 cm.dispose();
					 break;
			    case 103: //Map 4
					 cm.warp(322044000);
					// cm.sendNext("使用地图右侧的传送门去训练！");
					 cm.dispose();
					 break;
				case 104: //Henesys Map 5
					 cm.warp(323022000);
				//	 cm.sendNext("使用地图右下方的传送门去训练！");
					 cm.dispose();
					 break;
				case 105: //Map 6 Mu Lung
					 cm.warp(324030000);
				//	 cm.sendNext("使用地图中央的传送门去训练！");
					 cm.dispose();
					 break;
				case 106: //Map 7 Edel
					 cm.warp(325024000);
				//	 cm.sendNext("使用地图右侧或左侧的传送门去训练！");
					 cm.dispose();
					 break;
				case 107: // Map 8 Magatia
					 cm.warp(326041000);
					// cm.sendNext("使用地图左侧的传送门去训练！");
					 cm.dispose();
					 break;
			    		case 108: // Map 9 Ludi
					 cm.warp(327020000);
					// cm.sendNext("使用地图左侧的传送门去训练！");
					 cm.dispose();
					 break;
					 		case 109: // Map 10 ToT
					 cm.warp(328030000);
					// cm.sendNext("使用地图左侧的传送门去训练！");
					 cm.dispose();
					 break;
            }
        }
}
	if (cm.getPlayer().getLevel() >= 180) {
	cm.warp(100000000);
	cm.dispose();
}
}