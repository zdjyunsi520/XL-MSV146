/*
	Bell - KC/NLC Subway Station(103000100/600010001), Waiting Room(600010002/600010004)
*/

var section;
var msg = new Array("维多利亚岛的废弃都市","废弃都市","新叶城","好的，请稍等～！");
var ticket = new Array(4031711,4031713);
var cost = 5000;
var returnMap = new Array(103000100,600010001);

function start() {
    status = -1;
    sw = cm.getEventManager("Subway");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.dispose();
    } else {
	status++;
	if(mode == 0) {
	    if(section == 2) {
		cm.sendNext("你一定有事情要在这里处理吧？");
	    } else {
		cm.sendOk("你好。你想买一张地铁票吗？\r\n#L0##b");
	    }
	    cm.dispose();
	    return;
	}
	if (status == 0) {
	    switch (cm.getMapId()) {
		case 103020000:
		    section = 0;
		    break;
		case 600010001:
		    section = 1;
		    break;
		case 600010004:
		    section = 2;
		    break;
		case 600010002:
		    section = 3;
		    break;
		default:
		    cm.sendNext("Error~");
		    cm.dispose();
		    break;
	    }
	    if(section < 2) {
		cm.sendSimple("你想现在回到"+msg[section]+"#l");
	    } else {
		cm.sendYesNo(" 地铁站吗？ "+msg[section]+"前往");
	    }
	}
	else if(status == 1) {
	    if(section < 2) {
		cm.sendYesNo(" 的列车每小时整点发车，每10分钟一班，费用为#b "+msg[section]+" 金币#k。你确定要购买#b#t"+cost+"你确定你有#b"+ticket[section]+"##k?");
	    } else {
		section -= 2;
		cm.warp(returnMap[section]);
		cm.dispose();
	    }
	}
	else if(status == 2) {
	    if(cm.getMeso() < cost || !cm.canHold(ticket[section])) {
		cm.sendNext(" 金币#k吗？如果有的话，请检查一下你的其他栏是否已满。"+cost+" 金币#k吗？如果有的话，请检查一下你的其他栏是否已满。");
	    }
	    else {
		cm.gainItem(ticket[section],1);
		cm.gainMeso(-cost);
	    }
	    cm.dispose();
	}
    }
}
