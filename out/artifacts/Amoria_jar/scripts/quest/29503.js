/* 
 *  Dallier - King Medal
 *  Lith Habor = 104000000
 *  Sleepywood = 105040300
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("等你觉得自己完全准备好了再来。");
	    qm.dispose();
	    return;
	} else if (status == 2) {
	    status--;
	} else {
	    qm.dispose();
	    return;
	}
    } else {
	status++;
    }

    if (status == 0) {
	qm.askAcceptDecline("#v1142030# #e#b#t1142030##k\n\r\n\r - 时间限制：1小时\n\r - 为该城镇捐赠最多……#n你想测试自己看看这个勋章是否适合你吗？");
    } else if (status == 1) {
	qm.sendNext("当前排名 \n\r\n\r1. #bMintLovePep#k : ???,???,??? 金币\n\r2. #bKelviinXD#k : 68,000,000 金币\n\r3. #bxBabyRence#k : 49,999,999 金币\n\r4. #bXxTrIStaArxx#k : 29,999,999 金币\n\r5. #bxBabyRence#k : 14,000,000 金币\n\r\n\r请理解我们无法透露当前捐赠之王捐赠的确切金额。\n\r另外请记住所有记录将在每月1日重置……");
    } else if (status == 2) {
	qm.sendNextPrev("祝你好运。这个没有固定的截止日期，所以如果你觉得自己符合条件，随时来找我，我会确定你是否合格。记住，除非你放弃或完成这个挑战，否则你将无法挑战其他称号……");
	qm.dispose();
    }
}

function end(mode, type, selection) {
}

/*function getMedalType(ids) {
    var thestring = "#b";
    var extra;
    for (x = 0; x < ids.length; x++) {
	extra = "#L" + x + "##t" + ids[x] + "##l\r\n";
	thestring += extra;
    }
    thestring += "#k";
    return thestring;
}*/