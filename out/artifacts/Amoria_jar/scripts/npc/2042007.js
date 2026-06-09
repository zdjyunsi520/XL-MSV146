/* 
 * Spiegelmann - Monster Carnival
 */

var status = -1;
var rank = "C";
var exp = 0;

function start() {
    if (cm.getCarnivalParty() != null && cm.getCarnivalParty().getTotalCP() > 0) {
        status = 99;
    }
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (mode == -1) {
	cm.dispose();
	return;
    }
    if (status == 0) {
        cm.sendSimple("你想做什么？如果你从未参加过怪物嘉年华，那么在加入之前你需要了解一些相关知识。\r\n#b#L0# 前往怪物嘉年华场地。#l");
    } else if (status == 1) {
        switch (selection) {
            case 0: {
                var level = cm.getPlayerStat("LVL");
                if ( level < 50) {
                    cm.sendOk("抱歉，只有等级50以上的玩家才能参加怪物嘉年华。");
                } else {
                    cm.warp( 980030000, "st00" );
                }
                cm.dispose();
            }
            default: {
                cm.dispose();
                break;
            }
            break;
        }
    } else if (status == 100) {
        var carnivalparty = cm.getCarnivalParty();
        if (carnivalparty.getTotalCP() >= 501) {
            rank = "A";
            exp = 48000;
        } else if (carnivalparty.getTotalCP() >= 251) {
            rank = "B";
            exp = 35000;
        } else if (carnivalparty.getTotalCP() >= 101) {
            rank = "C";
            exp = 25000;
        } else if (carnivalparty.getTotalCP() >= 0) {
            rank = "D";
            exp = 15000;
        }
	cm.getPlayer().endPartyQuest(1302);
        if (carnivalparty.isWinner()) {
            cm.sendOk("你赢得了战斗，尽管你的表现非常出色。胜利属于你。\r\n#b怪物嘉年华排名： " + rank);
        } else {
            cm.sendOk("很遗憾，尽管你的表现非常出色，但你还是平局或输掉了战斗。下次胜利一定属于你。\r\n#b怪物嘉年华排名： " + rank);
        }
    } else if (status == 101) {
        var carnivalparty = cm.getCarnivalParty();
	var los = parseInt(cm.getPlayer().getOneInfo(1302, "lose"));
	var vic = parseInt(cm.getPlayer().getOneInfo(1302, "vic"));
        if (carnivalparty.isWinner()) {
	    vic++;
	    cm.getPlayer().updateOneInfo(1302, "vic", "" + vic);
            carnivalparty.removeMember(cm.getChar());
            cm.gainExpR(exp);
        } else {
	    los++;
	    cm.getPlayer().updateOneInfo(1302, "lose", "" + los);
            carnivalparty.removeMember(cm.getChar());
            cm.gainExpR(exp / 2);

        }
	cm.getPlayer().updateOneInfo(1302, "VR", "" + (java.lang.Math.ceil((vic * 100) / los)));
            cm.warp(980030000);
            cm.dispose();
    }

}