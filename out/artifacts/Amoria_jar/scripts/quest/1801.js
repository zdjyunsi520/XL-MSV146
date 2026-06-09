/* Dawnveil
    [Evolution System] Left Behind
	 Claudine
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNextS("感谢你的到来。我会详细解释地下矿井的情况，但首先...你知道这是谁吗？",1);
	} else if (status == 1) {
		qm.sendNextPrevS("我认识那张脸！",3);
	} else if (status == 2) {
	    qm.sendNextPrevS("你应该认识。她是黑色之翼的创始人，也是黑魔法师军队的指挥官...",1);
	} else if (status == 3) {
	    qm.sendNextPrevS("Orchid.",3);
	} else if (status == 4) {
	    qm.sendNextPrevS("她是我们的城市被夺走的原因。她是策划盗取封印石、攻击梅赛德斯的人...这么小的一个女孩竟然造成了如此大的破坏...",1);
	} else if (status == 5) {
		qm.sendNextPrevS("她安静了一段时间了，所以我知道一定有麻烦在酝酿。黑色之翼似乎发生了政变。",1);
	} else if (status == 6) {
		qm.sendNextPrevS("我们拼凑了一些信息，表明奥尔奇德被罢免了职位。我们不确定原因，但黑色之翼的指挥结构发生了巨大变动。",1);
	} else if (status == 7) {
		qm.sendNextPrevS("一切似乎都是从奥尔奇德被那个科学家背叛开始的...",1);
	} else if (status == 8) {
	    qm.warp(957020001);
        qm.dispose();
	}
}

function end(mode, type, selection) {
      qm.dispose();		
}       
  
  