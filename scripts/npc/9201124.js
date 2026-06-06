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
        cm.sendOk("我的职责是帮助你成为#r弓箭手#k。\r\n\r\n弓箭手擅长从战斗后排进行远程攻击，因为他们身手敏捷但力量有限。弓箭手随着等级提升会变得更强，运用各种攻击技能使他们在远程攻击中特别有效。他们也是非常出色的猎手，能充分利用地形优势。"); 
        cm.dispose(); 
    } 
    } else if (status == 1) { 
        cm.sendNextPrev("使用的武器包括#b弓#k和#b弩#k\r\n\r\n所需等级：#r10级以上#k\r\n地点：#b射手村#k的#r弓箭手培训学校#k\r\n转职教官：#r雅典娜·皮尔斯#k"); 
    } else if (status == 2) { 
        cm.sendNextPrev("你想成为#r弓箭手#k吗？\r\n#b#L0#是的#l\r\n#L1#不#l#k"); 
    } else if (status == 3) { 
        cm.sendSimple("要转职的话，你必须前往#b射手村#k的#r弓箭手培训学校#k找#r雅典娜·皮尔斯#k。要我现在送你过去吗？-转职后无法再使用传送服务-\r\n\r\n#b#L0#是的#l\r\n#L1#不#l#k"); 
    } else if (status == 4) { 
      if (selection == 0) { 
        cm.sendSimple("如果你有任何问题，请再来和我交谈。"); 
    } else if (selection == 1) { 
        cm.sendNext("好的。我现在就送你去#b射手村#k的#r弓箭手培训学校#k。"); 
        cm.dispose(); 
    } 
    } else if (status == 5) { 
      if (selection == 0) { 
        cm.sendNext("好的。我现在就送你去#b射手村#k的#r弓箭手培训学校#k。"); 
    } else if (selection == 1) { 
        cm.sendNext("好的。我现在就送你去#b射手村#k的#r弓箭手培训学校#k。"); 
        cm.dispose(); 
    } 
  } else if (status == 6) { 
        cm.warp(100000201, 11); 
	cm.dispose();
  } 
}  