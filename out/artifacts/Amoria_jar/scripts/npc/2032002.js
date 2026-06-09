/* 
 * 
 * Adobis's Mission I: Unknown Dead Mine (280010000)
 * 
 * Zakum PQ NPC (the one and only)
 */

var status = -1;
var selectedType;
var scrolls;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	cm.sendSimple("……#b\r\n#L0#我在这里应该做什么？#l\r\n#L1#我带来物品了！#l\r\n#L2#我想出去！#l");
    } else if (status == 1) {
	selectedType = selection;
	if (selection == 0) {
	    cm.sendNext("要唤醒扎昆的力量，你必须重新制作它的核心。在这座地下城的某处隐藏着一块"火焰矿石"，那是制作核心所需的材料之一。找到它并带给我。\r\n\r\n哦，能帮我个忙吗？这里的岩石下面还有一些纸质文件。如果你能收集到30份，我可以给你一些奖励。")
	    cm.safeDispose();
	} else if (selection == 1) {
	    if (!cm.haveItem(4001018)) { //documents
		cm.sendNext("请把火焰矿石带来。")
		cm.safeDispose();
	    } else {
		if (!cm.haveItem(4001015, 30)) { //documents
		    cm.sendYesNo("那么，你把火焰矿石带来了？这样的话，我可以给你和你的队伍每人一块，应该足够制作扎昆的核心了。在继续之前请确保你整个队伍的物品栏都有空间。");
		    scrolls = false;
		} else {
		    cm.sendYesNo("那么，你把火焰矿石和文件都带来了？这样的话，我可以给你和你的队伍每人一块，应该足够制作扎昆的核心了。另外，既然你把文件也带来了，我还可以给你一件特殊物品，可以随时带你回到矿山入口。在继续之前请确保你整个队伍的物品栏都有空间。");
		    scrolls = true;
		}
	    }
	} else if (selection == 2) {
	    cm.sendYesNo("你确定要退出吗？如果你是队伍队长，你的队伍也会被移出矿山。")
	}
    } else if (status == 2) {
	var eim = cm.getEventInstance();
	if (selectedType == 1) {
				
	    cm.gainItem(4001018, -1);
	    if (scrolls) {
		cm.gainItem(4001015, -30);
	    }
	    //give items/exp
	    cm.givePartyItems(4031061, 1);
	    if (scrolls) {
		cm.givePartyItems(2030007, 5);
		cm.givePartyExp(20000);
	    } else {
		cm.givePartyExp(12000);
	    }
				
	    //clear PQ

	    if (eim != null) {
	    	eim.finishPQ();
	    }
	    cm.dispose();
	} else if (selectedType == 2) {
	if (eim != null) {
	    if (cm.isLeader())
		eim.disbandParty();
	    else
		eim.leftParty(cm.getChar());
	} else {
		cm.warp(280090000, 0);
	}
	    cm.dispose();
	}
    }
}