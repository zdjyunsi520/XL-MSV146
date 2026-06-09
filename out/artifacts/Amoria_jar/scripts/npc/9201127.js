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
        cm.sendOk("我的职责是帮助你成为#r海盗#k。\r\n\r\n海盗利用敏捷和力量精准射击，同时运用物理攻击技能瞬间压倒敌人。敏捷对于使用枪支远程攻击的枪手非常重要，而使用强大近距离物理攻击的格斗家则更需要提升力量。"); 
        cm.dispose(); 
    } 
    } else if (status == 1) { 
        cm.sendNextPrev("使用的武器包括#b枪#k和#k拳甲#k\r\n\r\n所需等级：#r10级以上#k\r\n地点：#b鹦鹉螺号#k的#r航行室#k\r\n转职教官：#r卡伊琳#k"); 
    } else if (status == 2) { 
        cm.sendNextPrev("你想成为#r海盗#k吗？\r\n#b#L0#是的#l\r\n#L1#不#l#k"); 
    } else if (status == 3) { 
        cm.sendSimple("要转职的话，你必须前往#b鹦鹉螺号#k的#r航行室#k找#r卡伊琳#k。要我现在送你过去吗？-转职后无法再使用传送服务-\r\n\r\n#b#L0#是的#l\r\n#L1#不#l#k"); 
    } else if (status == 4) { 
      if (selection == 0) { 
        cm.sendSimple("如果你有任何问题，请再来和我交谈。"); 
    } else if (selection == 1) { 
        cm.sendNext("好的。我现在就送你去#b鹦鹉螺号#k的#r航行室#k。"); 
        cm.dispose(); 
    } 
    } else if (status == 5) { 
      if (selection == 0) { 
        cm.sendNext("好的。我现在就送你去#b鹦鹉螺号#k的#r航行室#k。"); 
    } else if (selection == 1) { 
        cm.sendNext("好的。我现在就送你去#b鹦鹉螺号#k的#r航行室#k。"); 
        cm.dispose(); 
    } 
  } else if (status == 6) { 
        cm.warp(120000101, 4); 
	cm.dispose();
  } 
}  