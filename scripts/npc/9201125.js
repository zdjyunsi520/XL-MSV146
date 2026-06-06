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
        cm.sendOk("我的职责是帮助你成为#r魔法师#k。\r\n\r\n追求古老的知识是他们毕生的任务，因此成为魔法师需要很高的智力。虽然他们的力量和防御力与其他职业相比偏低，但魔法师使用元素魔法技能可以创造奇迹般的效果，辅助魔法技能在组队狩猎时也非常有用。元素魔法技能可以在二转时学会，能对具有相反属性的敌人造成巨大伤害。"); 
        cm.dispose(); 
    } 
    } else if (status == 1) { 
        cm.sendNextPrev("使用的武器包括#b短杖#k和#b长杖#k\r\n\r\n所需等级：#r8级以上#k\r\n地点：#b魔法森林#k的#r魔法图书馆#k\r\n转职教官：#r马斯特利尔#k"); 
    } else if (status == 2) { 
        cm.sendNextPrev("你想成为#r魔法师#k吗？\r\n#b#L0#是的#l\r\n#L1#不#l#k"); 
    } else if (status == 3) { 
        cm.sendSimple("要转职的话，你必须前往#b魔法森林#k的#r魔法图书馆#k找#r马斯特利尔#k。要我现在送你过去吗？-转职后无法再使用传送服务-\r\n\r\n#b#L0#是的#l\r\n#L1#不#l#k"); 
    } else if (status == 4) { 
      if (selection == 0) { 
        cm.sendSimple("如果你有任何问题，请再来和我交谈。"); 
    } else if (selection == 1) { 
        cm.sendNext("好的。我现在就送你去#b魔法森林#k的#r魔法师#k那里。"); 
        cm.dispose(); 
    } 
    } else if (status == 5) { 
      if (selection == 0) { 
        cm.sendNext("好的。我现在就送你去#b魔法森林#k的#r魔法师#k那里。"); 
    } else if (selection == 1) { 
        cm.sendNext("好的。我现在就送你去#b魔法森林#k的#r魔法师#k那里。"); 
        cm.dispose(); 
    } 
  } else if (status == 6) { 
        cm.warp(101000003, 10); 
	cm.dispose();
  } 
}  