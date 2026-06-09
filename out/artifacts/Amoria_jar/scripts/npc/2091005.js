/*
	Map : Mu Lung Training Center
	Npc : So Gong
        Desc : Training Center Start
 */

var status = -1;
var sel;
var mapid;

function start() {
    mapid = cm.getMapId();

    if (mapid == 925020001) {
	cm.sendSimple("我的师父是武陵最强的人。你是说你想要挑战我们伟大的师父？别说我没提醒过你。\r #b#L0# 我想独自挑战他。#l \n\r #L1# 我想以组队形式挑战他。#l \n\r #L2# 我想要一条腰带。#l \n\r #L3# 我想重置我的修炼积分。#l \n\r #L5# 武陵修炼塔是什么？#l");
    } else if (isRestingSpot(mapid)) {
	cm.sendSimple("我很惊讶你已经安全到达了这一层。但我可以向你保证，后面的路不会更容易。你觉得呢？你想继续吗？#b \n\r #L0# 是的，我要继续。#l \n\r #L1# 我想退出#l \n\r #L2# 我想保存我的进度记录。#l");
    } else {
	cm.sendYesNo("什么？你这就想退出了？你只需要进入下一层就行了。你确定要退出吗？");
    }
}

function action(mode, type, selection) {
    if (mapid == 925020001) {
	if (mode == 1) {
	    status++;
	} else {
	    cm.dispose();
		return;
	}
	if (status == 0) {
	    sel = selection;

	    if (sel == 5) {
		cm.sendNext("我的师父是武陵最强的个人，他负责建造了这座令人惊叹的武陵修炼塔。武陵修炼塔是一座巨大的修炼设施，共有38层。每层代表着递增的难度等级。当然，以你的实力，想要到达顶层是不可能的……");
		cm.dispose();
	    } else if (sel == 3) {
		cm.sendYesNo("你知道如果重置修炼积分，它将归零，对吧？我可以坦白地说，这不一定是坏事。一旦你重置修炼积分并重新开始，你就能再次获得腰带。你想重置你的修炼积分吗？");
	    } else if (sel == 2) {
		cm.sendSimple("你目前的总修炼积分为#b"+cm.getDojoPoints()+"#k。我们的师父喜爱有才华的人，所以如果你积累了足够的修炼积分，就能根据积分获得相应的腰带……\n\r #L0##i1132000:# #t1132000#(200)#l \n\r #L1##i1132001:# #t1132001#(1800)#l \n\r #L2##i1132002:# #t1132002#(4000)#l \n\r #L3##i1132003:# #t1132003#(9200)#l \n\r #L4##i1132004:# #t1132004#(17000)#l");
	    } else if (sel == 1) {
		if (cm.getParty() != null) {
		    if (cm.isLeader()) {
			cm.sendOk("你想现在进入吗？");
		    } else {
			cm.sendOk("嘿，你甚至不是你们队伍的队长。你想偷偷溜进去做什么？如果你想进入，请让你们的队长来找我……");
		    }
		}
	    } else if (sel == 0) {
		if (cm.getParty() != null) {
			cm.sendOk("请先离开你的队伍。");
			cm.dispose();
		}
		var data = cm.getCData("dojo_stage");
		if (data != null) {
		    var idd = get_restinFieldID(parseInt(data));
		    if (idd != 925020002) {
		        cm.dojoAgent_NextMap(true, true, idd);
		        cm.setCData("dojo_stage", null);
		    } else {
				cm.sendOk("请稍后再试。");
		    }
		} else {
		    cm.start_DojoAgent(true, false);
		}
		cm.dispose();
	    // cm.sendYesNo("上次你独自挑战时，成功到达了第#18层。如果你愿意，我可以直接带你到那一层。你感兴趣吗？");
	    }
	} else if (status == 1) {
	    if (sel == 3) {
		cm.setDojoRecord(true);
		cm.sendOk("我已将你的修炼积分重置为0。");
	    } else if (sel == 2) {
		var record = cm.getDojoRecord();
		var required = 0;
		
		switch (record) {
		    case 0:
			required = 200;
			break;
		    case 1:
			required = 1800;
			break;
		    case 2:
			required = 4000;
			break;
		    case 3:
			required = 9200;
			break;
		    case 4:
			required = 17000;
			break;
		}

		if (record == selection && cm.getDojoPoints() >= required) {
		    var item = 1132000 + record;
		    if (cm.canHold(item)) {
			cm.gainItem(item, 1);
			cm.setDojoRecord(false);
		    } else {
			cm.sendOk("请检查你的背包是否有空位。");
		    }
		} else {
		    cm.sendOk("你要么已经拥有它了，要么修炼积分不足。请先尝试获取低级腰带。");
		}
		cm.dispose();
	    } else if (sel == 1) {
		cm.start_DojoAgent(true, true);
		cm.dispose();
	    }
	}
    } else if (isRestingSpot(mapid)) {
	if (mode == 1) {
	    status++;
	} else {
	    cm.dispose();
	    return;
	}

	if (status == 0) {
	    sel = selection;

	    if (sel == 0) {
		if (cm.getParty() == null || cm.isLeader()) {
		    cm.dojoAgent_NextMap(true, true);
		} else {
		    cm.sendOk("只有队长才能继续。");
		}
		//cm.getQuestRecord(150000).setCustomData(null);
		cm.dispose();
	    } else if (sel == 1) {
		cm.askAcceptDecline("你想退出吗？你真的想离开这里吗？");
	    } else if (sel == 2) {
		if (cm.getParty() == null) {
			var stage = get_stageId(cm.getMapId());
			cm.setCData("dojo_stage", stage);
			cm.sendOk("我已记录了你的进度。下次你到达这里时，我会直接将你送到这一层。");
			cm.dispose();
		} else {
			cm.sendOk("嘿……你无法在组队时记录你的进度……");
			cm.dispose();
		}
	    }
	} else if (status == 1) {
	    if (sel == 1) {
		if (cm.isLeader()) {
			cm.warpParty(925020002);
		} else {
			cm.warp(925020002);
		}
	    }
	    cm.dispose();
	}
    } else {
	if (mode == 1) {
		if (cm.isLeader()) {
			cm.warpParty(925020002);
		} else {
			cm.warp(925020002);
		}
	}
	cm.dispose();
    }
}

function get_restinFieldID(id) {
	var idd = 925020002;
    switch (id) {
	case 1:
	    idd =  925020600;
	    break;
	case 2:
	    idd =  925021200;
	    break;
	case 3:
	    idd =  925021800;
	    break;
	case 4:
	    idd =  925022400;
	    break;
	case 5:
	    idd =  925023000;
	    break;
	case 6:
	    idd =  925023600;
	    break;
    }
    for (var i = 0; i < 10; i++) {
	var canenterr = true;
	for (var x = 1; x < 39; x++) {
		var map = cm.getMap(925020000 + 100 * x + i);
		if (map.getCharactersSize() > 0) {
			canenterr = false;
			break;
		}
	}
	if (canenterr) {
		idd += i;
		break;
	}
}
	return idd;
}

function get_stageId(mapid) {
    if (mapid >= 925020600 && mapid <= 925020614) {
	return 1;
    } else if (mapid >= 925021200 && mapid <= 925021214) {
	return 2;
    } else if (mapid >= 925021800 && mapid <= 925021814) {
	return 3;
    } else if (mapid >= 925022400 && mapid <= 925022414) {
	return 4;
    } else if (mapid >= 925023000 && mapid <= 925023014) {
	return 5;
    } else if (mapid >= 925023600 && mapid <= 925023614) {
	return 6;
    }
    return 0;
}

function isRestingSpot(id) {
    return (get_stageId(id) > 0);
}