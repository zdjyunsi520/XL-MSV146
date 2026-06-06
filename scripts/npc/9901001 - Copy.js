/**
 *
 * @author: Eric
 * @func: Server Starter
 *
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
		if (cm.getPlayer().getLevel() > 15) {
		  status = 999;
		  cm.sendOk("#b欢迎来到WizStory！#k\r\n你想成为什么职业？\r\n #L0#初心者#l \r\n #L100#战士#l \r\n #L200#魔法师#l \r\n #L300#弓箭手#l \r\n #L400#飞侠#l \r\n #L430#暗影双刀#l \r\n #L500#海盗#l \r\n #L501#火炮手#l \r\n #L508#杰特#l \r\n #L1100#魂骑士#l \r\n #L1200#炎术师#l \r\n #L1300#风灵使者#l \r\n #L1400#夜行者#l \r\n #L1500#奇袭者#l \r\n #L2100#战神#l \r\n #L2200#龙神#l \r\n #L2300#双弩精灵#l \r\n #L2400#幻影#l \r\n #L3100#恶魔猎手#l \r\n #L3200#唤灵斗师#l \r\n #L3300#豹弩游侠#l \r\n #L3500#机械师#l \r\n #L5100#米哈逸#l");
		  cm.dispose();
	  } else {
		var joblist = "#b欢迎来到WizStory！#k\r\n你想成为什么职业？\r\n #L0#初心者#l \r\n #L100#战士#l \r\n #L200#魔法师#l \r\n #L300#弓箭手#l \r\n #L400#飞侠#l \r\n #L430#暗影双刀#l \r\n #L500#海盗#l \r\n #L501#火炮手#l \r\n #L508#杰特#l \r\n #L1100#魂骑士#l \r\n #L1200#炎术师#l \r\n #L1300#风灵使者#l \r\n #L1400#夜行者#l \r\n #L1500#奇袭者#l \r\n #L2100#战神#l \r\n #L2200#龙神#l \r\n #L2300#双弩精灵#l \r\n #L2400#幻影#l \r\n #L3100#恶魔猎手#l \r\n #L3200#唤灵斗师#l \r\n #L3300#豹弩游侠#l \r\n #L3500#机械师#l \r\n #L5100#米哈逸#l";
		cm.sendSimple(joblist);
	  }
	} else if (status == 1) {
	   cm.getPlayer().changeJob(selection);
	   cm.warp(100000000, 0);
	   for (var i = 0; i < 15; i++)
	   cm.getPlayer().levelUp(); // for ap due to force setting, should we forloop? 
	   cm.dispose();
    }
}