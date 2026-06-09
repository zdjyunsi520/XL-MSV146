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
        cm.sendSimple("你好，我是 #i4032658# 兑换商，你想要哪个物品？#r（警告：请确保你的背包有空位！！）#k \r\n#L0#我想要一个 #i1322102#。需要 #r3000#k #i4032658# \r\n#L1#我想要一个 #i1152062#。需要 #r5000#k #i4032658# \r\n#L2#我想要一个 #i1152059#。需要 #r10000#k #i4032658# \r\n#L3#我想要一个 #i2041508#。需要 #r5000#k #i4032658# \r\n#L4#我想要一个 #i3010230#。需要 #r2500#k #i4032658# \r\n#L5#我想要一个 #i3012010#。需要 #r2500#k #i4032658# \r\n#L6#我想要一个 #i2022179#。需要 #r800#k #i4032658# \r\n#L7#我想要一个 #i1142489#。需要 #r20000#k #i4032658# \r\n#L8#我想要一个 #i2430688#。需要 #r1000#k #i4032658# \r\n#L9#我想要一个 #i3063350#。需要 #r25000#k #i4032658# \r\n#L10#我想要一个 #i1022135#。需要 #r3000#k #i4032658# \r\n#L11#我想要一个 #i1112516#。需要 #r10000#k #i4032658# \r\n#L12#我想要一个 #i1112711#。需要 #r15000#k #i4032658# \r\n#L13#我想要一个 #i1112229#。需要 #r3000#k #i4032658# \r\n#L14#我想要一个 #i2049300#。需要 #r500#k #i4032658# \r\n#L15#我想要一个 #i2210033#。需要 #r300#k #i4032658#");
    } else if (status == 1) {
    if (selection == 0) {
       if (cm.haveItem(4032658, 3000)) {
		    cm.gainItem(4032658, -3000);
			cm.gainItem(1322102, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
    } else if (selection == 1) {
        if (cm.haveItem(4032658, 5000)) {
		    cm.gainItem(4032658, -5000);
			cm.gainItem(1152062, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
    } else if (selection == 2) {
        if (cm.haveItem(4032658, 10000)) {
		    cm.gainItem(4032658, -10000);
			cm.gainItem(1152059, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
    } else if (selection == 3) {
        if (cm.haveItem(4032658, 5000)) {
		    cm.gainItem(4032658, -5000);
			cm.gainItem(2041508, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
	} else if (selection == 4) {
        if (cm.haveItem(4032658, 2500)) {
		    cm.gainItem(4032658, -2500);
			cm.gainItem(3010230, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
	} else if (selection == 5) {
        if (cm.haveItem(4032658, 2500)) {
		    cm.gainItem(4032658, -2500);
			cm.gainItem(3012010, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
	} else if (selection == 6) {
        if (cm.haveItem(4032658, 800)) {
		    cm.gainItem(4032658, -800);
			cm.gainItem(2022179, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
	} else if (selection == 7) {
        if (cm.haveItem(4032658, 20000)) {
		    cm.gainItem(4032658, -20000);
			cm.gainItem(1142489, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
	} else if (selection == 8) {
        if (cm.haveItem(4032658, 1000)) {
		    cm.gainItem(4032658, -1000);
			cm.gainItem(2430688, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
	} else if (selection == 9) {
        if (cm.haveItem(4032658, 25000)) {
		    cm.gainItem(4032658, -25000);
			cm.gainItem(3063350, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
	} else if (selection == 10) {
        if (cm.haveItem(4032658, 3000)) {
		    cm.gainItem(4032658, -3000);
			cm.gainItem(1022135, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
	} else if (selection == 11) {
        if (cm.haveItem(4032658, 10000)) {
		    cm.gainItem(4032658, -10000);
			cm.gainItem(1112516, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
	} else if (selection == 12) {
        if (cm.haveItem(4032658, 15000)) {
		    cm.gainItem(4032658, -15000);
			cm.gainItem(1112711, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
	} else if (selection == 13) {
        if (cm.haveItem(4032658, 3000)) {
		    cm.gainItem(4032658, -3000);
			cm.gainItem(1112229, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
	} else if (selection == 14) {
        if (cm.haveItem(4032658, 500)) {
		    cm.gainItem(4032658, -500);
			cm.gainItem(2049300, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
	} else if (selection == 15) {
        if (cm.haveItem(4032658, 300)) {
		    cm.gainItem(4032658, -300);
			cm.gainItem(2210033, 1);
		    cm.sendOk("给你！");
			cm.dispose();
	} else { 
	cm.sendOk("你没有足够的 #i4032658#！") 
	cm.dispose();
	}
    }
   }
  }  