var status; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == 1) { 
        status++; 
    }else{ 
        status--; 
    } 
    if (status == 0) { 
    if (cm.getPlayer().getJob() == 0) { 
        cm.sendNext("看起来你已经转职了！\r\n传送服务只能由新手使用"); 
    } else { 
        cm.sendOk("我的职责是帮助你成为#r战士#k。\r\n\r\n战士拥有强大的近身攻击和高力量，因此总是站在战斗的最前线。这是一个从有效的基础攻击技能开始，一旦获得更高级的技能后变得更强大的职业。"); 
        cm.dispose(); 
    } 
    } else if (status == 1) { 
        cm.sendNextPrev("使用的武器包括#b单手剑#k、#b双手剑#k、#b枪#k和#b矛#k。\r\n\r\n所需等级：#r10级以上#k\r\n地点：#b勇士部落#k的#r战士圣殿#k\r\n转职教官：#r武术教练#k"); 
    } else if (status == 2) { 
        cm.sendNextPrev("你想成为#r战士#k吗？\r\n#b#L0#是的#l\r\n#L1#不#l#k"); 
    } else if (status == 3) { 
        cm.sendSimple("要转职的话，你必须前往#b勇士部落#k的#r战士圣殿#k找#r武术教练#k。要我现在送你过去吗？-转职后无法再使用传送服务-\r\n\r\n#b#L0#是的#l\r\n#L1#不#l#k"); 
    } else if (status == 4) { 
      if (selection == 0) { 
        cm.sendSimple("如果你有任何问题，请再来和我交谈。"); 
    } else if (selection == 1) { 
        cm.sendNext("好的。我现在就送你去#b勇士部落#k的#r战士圣殿#k。"); 
        cm.dispose(); 
    } 
    } else if (status == 5) { 
      if (selection == 0) { 
        cm.sendNext("好的。我现在就送你去#b勇士部落#k的#r战士圣殿#k。"); 
    } else if (selection == 1) { 
        cm.sendNext("好的。我现在就送你去#b勇士部落#k的#r战士圣殿#k。"); 
        cm.dispose(); 
    } 
  } else if (status == 6) { 
        cm.warp(102000003, 10); 
	cm.dispose();
  } 
}  