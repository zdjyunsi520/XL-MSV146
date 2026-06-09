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
        cm.sendOk("我的职责是帮助你成为#r飞侠#k。\r\n\r\n飞侠是一个需要大量运气和一定敏捷与力量的职业，他们使用特殊技能来攻击或隐身。凭借无与伦比的移动能力和回避率，飞侠能享受轻松操控移动的乐趣。他们还能利用各种弥补力量不足的技能快速升级。"); 
        cm.dispose(); 
    } 
    } else if (status == 1) { 
        cm.sendNextPrev("使用的武器包括#b拳套#k和#b短刀#k\r\n\r\n所需等级：#r10级以上#k\r\n地点：#b废弃都市#k的#r爵士酒吧#k\r\n转职教官：#r达克鲁#k"); 
    } else if (status == 2) { 
        cm.sendNextPrev("你想成为#r飞侠#k吗？\r\n#b#L0#是的#l\r\n#L1#不#l#k"); 
    } else if (status == 3) { 
        cm.sendSimple("要转职的话，你必须前往#b废弃都市#k的#r爵士酒吧#k找#r达克鲁#k。要我现在送你过去吗？-转职后无法再使用传送服务-\r\n\r\n#b#L0#是的#l\r\n#L1#不#l#k"); 
    } else if (status == 4) { 
      if (selection == 0) { 
        cm.sendSimple("如果你有任何问题，请再来和我交谈。"); 
    } else if (selection == 1) { 
        cm.sendNext("好的。我现在就送你去#b废弃都市#k的#r飞侠隐藏基地#k。"); 
        cm.dispose(); 
    } 
    } else if (status == 5) { 
      if (selection == 0) { 
        cm.sendNext("好的。我现在就送你去#b废弃都市#k的#r飞侠隐藏基地#k。"); 
    } else if (selection == 1) { 
        cm.sendNext("好的。我现在就送你去#b废弃都市#k的#r飞侠隐藏基地#k。"); 
        cm.dispose(); 
    } 
  } else if (status == 6) { 
        cm.warp(103000003, 5); 
	cm.dispose();
  } 
}  