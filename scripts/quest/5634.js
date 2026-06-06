/* RED 1st impact
    [All 4 One] Invite your friends and your own All 4 One!
	All 4 One
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNextS("#e#b人人为我，我为人人！召集一名队长和3名队员组成你的小队！#k#n\r\n\r\n在12月4日之前拥有100级以上角色的玩家都可以作为队长参加#e#b四合一活动#k#n。\r\n如果你没有资格成为队长也不要太难过。在12月4日之后创建的角色可以作为队员参加活动！",5);
    } else if (status == 1) {	   
        qm.sendNextPrevS("队长可以邀请12月4日至12月31日之间创建的角色加入小队，然后帮助他们达到100级（零职业为180级）来获得#i4310088:# #e#b#t4310088#(50)#k#n。\r\n如果队员按时达到目标，他们将获得\r\n1. #i4310088:# #e#b#t4310088#(25)#k#n\r\n2. #i5150052:# #e#b#t5150052##k#n\r\n3. #i5150056:# #e#b#t5150056##k#n\r\n4. #i5151035:# #e#b#t5151035##k#n",5);	
	} else if (status == 2) {	
	    qm.sendNextPrevS("队长最多可以邀请3名成员加入小队，如果所有人在2014年1月31日之前都达到了目标等级，队长将立即获得#e#b冒险币：10000#k#n的奖励。太棒了吧？",5);	
	} else if (status == 3) {	
	    qm.sendNextPrevS("此外，小队的全部4名成员都将获得这些超级奖励！\r\n1. #i1114000:# #e#b#t1114000##k#n\r\n2. #i1142668:# #e#b#t1142668##k#n\r\n3. #i5010115:# #e#b#t5010115##k#n",5);
	} else if (status == 4) {	
        qm.sendNextPrevS("哦，如果队长成功邀请了一个从未参加过#e#b四合一活动#k#n的冒险家，\r\n 队员将获得#i2450067:# #e#b#t2450067#(3)#k#n。帮助新手是有回报的！",5);	
	} else if (status == 5) {	
        qm.sendNextPrevS("很酷吧？你应该组建自己的小队，尽最大努力互相帮助赢得胜利！人人为我！",5);		
	} else if (status == 6) {	
        qm.sendNextPrevS("你有资格成为队员！\r\n找一个队长，与你的冒险家伙伴们组队赢取丰厚的奖励吧！",5);		
	} else if (status == 7) {	
        qm.sendPrevS("只有在2013年12月4日之后创建的角色才能成为队员。\r\n这是创建新角色并参加四合一活动的好时机！",5);			
	} else if (status == 8) {	
	    qm.dispose();
	}
}

function end(mode, type, selection) {
	   qm.dispose();		
}