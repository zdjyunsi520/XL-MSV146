var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
            if (status == 0) {
			if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 2312) {
				cm.sendYesNo("你好#r#h ##k，我看到你还没有#b200级勋章#k和#b英雄回响#k");
			}else {
				cm.sendOk("你不是一个梅塞德斯或者200级，别闹了。");
				cm.dispose();
			}
			}else if (status == 1) {
			
			if (!cm.haveItem(1142340,1) && cm.getPlayer().getSkillLevel(10001005) >= 1) {
			cm.gainItem(1142340,1);//Medal
			cm.dispose();
			
			} else {
				if (cm.getPlayer().getSkillLevel(10001005) > 0) {
				cm.sendOk("你已经拥有这个技能了。");
                } else {
				cm.gainItem(1142340,1);//Medal
                cm.teachSkill(10001005, 1, 1); // Echo of hero
				cm.sendOk("恭喜你#r#h ##k");
				}
			cm.dispose();
		}
	}
	}
}