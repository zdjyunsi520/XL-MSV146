var status = -1; 

function start() 
{ 
    status = -1; 
    action(1, 0, 0); 
}

function action(mode, type, selection) { 
    if (mode == 1) 
    status++; 
    else
    status--;
    if (status == -1) {
            cm.dispose();
    } else if (status == 0) {
        cm.sendSimple("你好，你想用你的 #i4001126# 换什么？\r\n#L0#我想要一个 #i5680021# 。#r1500#k 个 #i4001126#\r\n#L1#我想要一个 #i2213042# 。#r200#k 个 #i4001126#\r\n#L2#我想要一个 #i2003517# 。#r200#k 个 #i4001126#\r\n#L3#我想要一个 #i5220020# 。#r3500#k 个 #i4001126#\r\n#L4#我想要一个 #i2450041# 。#r800#k 个 #i4001126#\r\n#L5#我想要一个 #i2012008# 。#r800#k 个 #i4001126#");
    } else if (status == 1) {
    if (selection == 0) {
       if (cm.haveItem(4001126, 1500)) {
		    cm.gainItem(4001126, -1500);
			cm.gainItem(5680021, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4001126#！") 
	cm.dispose();
	}
    } else if (selection == 1) {
        if (cm.haveItem(4001126, 200)) {
		    cm.gainItem(4001126, -200);
			cm.gainItem(2213042, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4001126#！") 
	cm.dispose();
	}
    } else if (selection == 2) {
        if (cm.haveItem(4001126, 200)) {
		    cm.gainItem(4001126, -200);
			cm.gainItem(2003517, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4001126#！") 
	cm.dispose();
	}
    } else if (selection == 3) {
        if (cm.haveItem(4001126, 3500)) {
		    cm.gainItem(4001126, -3500);
			cm.gainItem(5220020, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4001126#！") 
	cm.dispose();
	}
	} else if (selection == 4) {
        if (cm.haveItem(4001126, 800)) {
		    cm.gainItem(4001126, -800);
			cm.gainItem(2450041, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4001126#！") 
	cm.dispose();
	}
	} else if (selection == 5) {
        if (cm.haveItem(4001126, 800)) {
		    cm.gainItem(4001126, -800);
			cm.gainItem(2012008, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4001126#！") 
	cm.dispose();
	}
    }
   }
  }  