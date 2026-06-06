/**
 *
 * @author: Eric
 * @func: 2nd Job Advancement
 * @rev: 2 - Added Job Selection and added Beginner
 * @rev: 3 - Added level check, made text clearer, added starterpacks. (this npc was a mess...) #Kaz
 * @rev: 4 - Added appropriate checks so that there is no meso exploit. #kaz (mah bad, just in time tho)
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
	  if (cm.getPlayer().getJob() == 530 || cm.getPlayer().getJob() == 100 || cm.getPlayer().getJob() == 200 || cm.getPlayer().getJob() == 300 || cm.getPlayer().getJob() == 400 || cm.getPlayer().getJob() == 500 || cm.getPlayer().getJob() == 1100 || cm.getPlayer().getJob() == 1200 || cm.getPlayer().getJob() == 1300 || cm.getPlayer().getJob() == 1400 || cm.getPlayer().getJob() == 1500 || cm.getPlayer().getJob() == 2000 || cm.getPlayer().getJob() == 2100 || cm.getPlayer().getJob() == 430 || cm.getPlayer().getJob() == 431 || cm.getPlayer().getJob() == 2200 || cm.getPlayer().getJob() == 2201 || cm.getPlayer().getJob() == 3200 || cm.getPlayer().getJob() == 3300 || cm.getPlayer().getJob() == 3500 || cm.getPlayer().getJob() == 507 || cm.getPlayer().getJob() == 508 || cm.getPlayer().getJob() == 2300 || cm.getPlayer().getJob() == 2400 || cm.getPlayer().getJob() == 3100 || cm.getPlayer().getJob() == 5000) {
		cm.sendNext("哦你好！看来你快准备好进行下一步了！如果你还不到30级，你有资格领取新手礼包。如果你达到30级或以上，可以进行第二次转职！\r\n\r\n注意，只有转生次数为0且之前没有领取过礼包的玩家才能领取。");
	  } else if (cm.getPlayer().getJob() == 0 || cm.getPlayer().getJob() == 1000 || cm.getPlayer().getJob () == 2000 || cm.getPlayer().getJob() == 3000) {
	    status = 3; // ++ing here
		cm.sendNext("你好，看来你已经准备好转职了！你想成为什么？"); 
	  } else {
		cm.sendOk("哦你好。看起来你已经有了职业，而且也不需要#e第二次转职#n。\r\n\r\n#r请记住，大多数转职在达到一定等级后会自动进行。");
		cm.dispose();
	  }
	  } else if (status == 1) {
	     if (cm.getPlayer().getJob() == 100 && cm.getPlayer().getLevel() >= 30) {
	     cm.sendSimple("酷！真正的#b战士#k！你喜欢用刺的吗？你想成为什么：\r\n#L120#剑客\r\n#L130#枪战士\r\n#L110#准骑士");
		} else if (cm.getPlayer().getJob() == 200 && cm.getPlayer().getLevel() >= 30) {
	     cm.sendSimple("哇！#b魔法师！#k你能变魔术吗？\r\n哈哈，你想转什么职业？\r\n#L220#冰雷法师\r\n#L210#火毒法师\r\n#L230#牧师");
		 } else if (cm.getPlayer().getJob() == 300 && cm.getPlayer().getLevel() >= 30) {
	     cm.sendSimple("厉害！#b弓箭手！#k你能每次都命中靶心吗？\r\n如果不能的话，也许升级职业会有帮助：\r\n#L310#猎人\r\n#L320#弩弓手");
		 } else if (cm.getPlayer().getJob() == 400 && cm.getPlayer().getLevel() >= 30) {
	     cm.sendSimple("哎呀！#b飞侠！#k请不要抢劫我！哈哈。\r\n来，选择你的职业：\r\n#L410#刺客\r\n#L420#侠客");
		 } else if (cm.getPlayer().getJob() == 500 && cm.getPlayer().getLevel() >= 30) {
	     cm.sendSimple("别开枪，伟大的#b海盗#k！\r\n直接选你的职业吧：\r\n#L510#拳手\r\n#L520#枪手");
		} else if (cm.getPlayer().getJob() == 530 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 100 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 200 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 300 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 400 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 500 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 1100 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 1200 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 1300 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 1400 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 1500 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 2000 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 2100 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 430 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 431 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 2200 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 2201 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 3200 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 3300 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 3500 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 507 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 508 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 2300 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 2400 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 3100 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1 || cm.getPlayer().getJob() == 5000 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1) {
	     cm.sendSimple("哦呼，你只是个低等级。我差点吓到了。不过别担心！你有资格领取新手礼包！");
		} else {
		 cm.sendOk("看来你无法领取新手礼包。你要么转生次数过多，要么拥有超过1000万枫币，要么之前已经领取过了。");
		 cm.dispose();
	}
    } else if (status == 2 && cm.getPlayer().getLevel() >= 30) {
	  status = 999;
	  cm.getPlayer().changeJob(selection);
	  cm.dispose();
	  // job selection (not advance) 
	} else if (status == 2) {
	  status = 999;
		if (cm.getPlayer().getJob() == 100 || cm.getPlayer().getJob() == 1100 || cm.getPlayer().getJob() == 2000 || cm.getPlayer().getJob() == 2100 || cm.getPlayer().getJob() == 3100 || cm.getPlayer().getJob() == 5000 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1) {
		cm.sendOk("你有资格领取战士礼包！");  
    cm.gainItem(1102041, 1); // Pink Advent Cape 
    cm.gainItem(1302067, 1); // Maple Ani Weapon 
    cm.gainItem(1442071, 1); // Seraphim Polearm 
    cm.gainItem(1442050, 1); // Seraphim Spear 
    cm.gainItem(1402053, 1); // Seraphim 2-H Sword 
    cm.gainItem(1412035, 1); // Seraphim 2-H Axe 
    cm.gainItem(3010000, 1); // Beginner Chair 
    cm.gainItem(1422039, 1); // Seraphim 2-H Blunt Weapon (Mace) 
    cm.gainItem(1002357, 1); // Zakum Hat 
    cm.gainItem(2022179, 5); // 5 Onyx Apple 
    cm.gainItem(2000005, 50); // 50 Power Elixir 
    cm.gainMeso(10000000); // 10 Million Meso 
    cm.gainItem(1082146, 1); // Yellow WG
	cm.addDojoPoints(1);
	cm.dispose();
	} else if (cm.getPlayer().getJob() == 200 || cm.getPlayer().getJob() == 1200 || cm.getPlayer().getJob() == 2200 || cm.getPlayer().getJob() == 2201 || cm.getPlayer().getJob() == 3200 || cm.getPlayer().getJob() == 2400 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1) {
	cm.sendOk("你有资格领取魔法师礼包！");  
    cm.gainItem(1102042, 1); // Purple Advent Cape 
    cm.gainItem(1302067, 1); // Maple Ani Weapon 
    cm.gainItem(1372046, 1); // Seraphim Wand 
    cm.gainItem(1382062, 1); // Seraphim Staff 
    cm.gainItem(1002357, 1); // Zakum Hat 
    cm.gainItem(2022179, 5); // 5 Onyx Apple 
    cm.gainItem(2000005, 50); // 50 Power Elixir 
    cm.gainMeso(10000000); // 10 Million Meso 
    cm.gainItem(1082145, 1); // Yellow WG 
    cm.gainItem(3010000, 1); // Beginner Chair
    cm.gainItem(1362000, 1); // cane
	cm.addDojoPoints(1);
	cm.dispose();
	} else if (cm.getPlayer().getJob == 300 || cm.getPlayer().getJob() == 1300 || cm.getPlayer().getJob() == 3300 || cm.getPlayer().getJob() == 2300 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1){
	cm.sendOk("你有资格领取弓箭手礼包！");  
    cm.gainItem(1452062, 1); // Seraphim Bow 
    cm.gainItem(1462056, 1); // Seraphim Cross bow 
    cm.gainItem(2060001, 5000); // Arrows   
    cm.gainItem(2061003, 5000); // X-Box arrows.  
    cm.gainItem(1102041, 1); // Pink Advent Cape 
    cm.gainItem(1302067, 1); // Maple Ani Weapon 
    cm.gainItem(1002357, 1); // Zakum Hat 
    cm.gainItem(2022179, 5); // 5 Onyx Apple 
    cm.gainItem(2000005, 50); // 50 Power Elixir 
    cm.gainMeso(10000000); // 10 Million Meso 
    cm.gainItem(1082147, 1); // Blue WG 
    cm.gainItem(3010000, 1); // Beginner Chair
    cm.gainItem(1522000, 1); // dual bowgun
	cm.addDojoPoints(1);
	cm.dispose();
	}else if (cm.getPlayer().getJob() == 400 || cm.getPlayer().getJob() == 1400 || cm.getPlayer().getJob() == 430 || cm.getPlayer().getJob() == 431 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1) {
	cm.sendOk("你有资格领取飞侠礼包！");  
    cm.gainItem(1102041, 1); // Pink Advent Cape 
    cm.gainItem(2070001, 5000); // Stars   
    cm.gainItem(1302067, 1); // Maple Ani Weapon 
    cm.gainItem(1332081, 1); // Seraphim Dagger 
    cm.gainItem(1472077, 1); // Seraphim Claw 
    cm.gainItem(1002357, 1); // Zakum Hat 
    cm.gainItem(2022179, 5); // 5 Onyx Apple 
    cm.gainItem(2000005, 50); // 50 Power Elixir 
    cm.gainItem(1082148, 1); // Purple WG 
    cm.gainItem(3010000, 1); // Beginner Chair 
    cm.gainMeso(10000000); // 10 Million Meso
    cm.gainItem(1342047, 1); // katara
	cm.addDojoPoints(1);
	cm.dispose();
	}else if (cm.getPlayer().getJob() == 500 || cm.getPlayer().getJob() == 1500 || cm.getPlayer().getJob() == 3500 || cm.getPlayer().getJob() == 530 || cm.getPlayer().getJob() == 507 || cm.getPlayer().getJob() == 508 && cm.getPlayer().getReborns() < 1 && cm.getPlayer().getMeso() < 10000000 && cm.getDojoPoints() < 1) {
	cm.sendOk("你有资格领取海盗礼包！");  
    cm.gainItem(1102041, 1);  // Pink Advent Cape 
    cm.gainItem(1482029, 1); // Seraphim Knuckles 
	cm.gainItem(1302067, 1); // Maple Ani Weapon 
    cm.gainItem(1492000, 1); // pistol
    cm.gainItem(1002357, 1); // Zakum Hat 
    cm.gainItem(2022179, 5); // 5 Onyx Apple 
    cm.gainItem(2000005, 50); // 50 Power Elixir 
    cm.gainItem(1082147, 1); // Blue WG 
    cm.gainItem(3010000, 1); // Beginner Chair 
    cm.gainMeso(10000000); // 10 Million Meso
    cm.gainItem(1532000, 1); // cannon
	cm.addDojoPoints(1);
	cm.dispose();
	} else {
	cm.sendOk("你是怎么到这里来的？这个NPC对话框应该是不可访问的！");
	cm.dispose()
	}
	} else if (status == 4) {
	  var joblist = "你想成为什么职业？\r\n #L0#初心者#l \r\n #L100#战士#l \r\n #L200#魔法师#l \r\n #L300#弓箭手#l \r\n #L400#飞侠#l \r\n #L430#暗影双刀#l \r\n #L500#海盗#l \r\n #L501#炮手#l \r\n #L508#杰特#l \r\n #L1100#魂骑士#l \r\n #L1200#炎术士#l \r\n #L1300#风灵使者#l \r\n #L1400#夜行者#l \r\n #L1500#奇袭者#l \r\n #L2100#战神#l \r\n #L2200#龙神#l \r\n #L2300#双弩精灵#l \r\n #L2400#幻影#l \r\n #L3100#恶魔猎手#l \r\n #L3200#战法#l \r\n #L3300#豹弩游侠#l \r\n #L3500#机械师#l \r\n #L5100#米哈逸#l";
	  cm.sendSimple(joblist);
	} else if (status == 5) {
	   cm.getPlayer().changeJob(selection);
	   //for (var i = 0; i < 14; i++)
	   //cm.getPlayer().levelUp(); // for ap due to force setting, should we forloop? 
	   cm.dispose();
    }
}