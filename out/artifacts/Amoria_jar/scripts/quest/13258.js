/* RED 1st impact
	[Christmas] The Grand Christmas Tree
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendNext("没有圣诞树的圣诞节算什么？那就像没有缎带的缎带猪！你必须重新考虑！");
            qm.dispose();
        status--;
    }
    if (status == 0) {
		qm.sendAcceptDecline("嘿，#b#h0##k。你看到城里那棵巨大的树了吗？\r\n它本来应该是我们的圣诞树，但装饰品不够。看起来...相当简陋。\r\n#b#i4001779##t4001779##k真的能让它焕发生机。\r\n你想帮忙吗？");
	} else if (status == 1) {
        qm.sendNext("在2013年12月31日之前，你可以通过狩猎怪物获得#i4001779# #b#t4001779##k。这些物品可以用来装饰城镇的圣诞树。\r\n不过，#b等级低于你11级或高于你21级#k的怪物不会携带它们。\r\n\r\n我觉得#e#r400个#k应该足够了#n。");
    } else if (status == 2) {	  	 
        qm.sendOk("#b#h0##k，如果你装饰了圣诞树，我会给你一份精美的圣诞礼物。\r\n我相信你！");    
    } else if (status == 3) {	 	   	
		qm.forceStartQuest();
		qm.dispose();
	}
}