var status = 0;
var selStr;
var sel;
var selitem;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        selStr = "#L4##e什么是好感度？#n#l\r\n";
		selStr+="#L0##e乔(敏捷)#n (已获得 #r";
		selStr+="#b 好感点数。)#l\r\n"+cm.getChar().getgetschool(0)+"#L1##e赫蒙妮(智力)#n (已获得 #r";
		selStr+="#L2##e小龙(力量)#n (已获得 #r"+cm.getChar().getgetschool(1)+"#L1##e赫蒙妮(智力)#n (已获得 #r";
		selStr+="#L3##e伊卡(运气)#n (已获得 #r"+cm.getChar().getgetschool(2)+"#L1##e赫蒙妮(智力)#n (已获得 #r";
		selStr+="参加红叶高校可以增进与人气同学的好感度，建立你作为班上最强人物的声望！赚取好感度还能让你进入四柱天现金商城，用金币购买图腾！记住，如果你想要解锁好东西，好感度是必不可少的！"+cm.getChar().getgetschool(3)+"#L1##e赫蒙妮(智力)#n (已获得 #r";
        cm.sendSimple(selStr);
    } else if (status == 1) {
		sel=selection;
		if(sel==4){
			cm.sendOk("你已获得乔的好感点数：#r ");
			cm.dispose();
		}
        if(sel==0){
			selStr = "#L0##e#z1202026##n (#r500#b 好感点数。)#l\r\n"+cm.getChar().getgetschool(sel)+".#b\r\n\r\n";
			selStr+="#L0##e#z1202026##n (#r500#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L1##e#z1202025##n (#r1000#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L2##e#z1202024##n (#r3000#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L3##e#z1202023##n (#r8000#L1##e赫蒙妮(智力)#n (已获得 #r";
			cm.sendSimple(selStr);
		}
		if(sel==1){
			selStr = "#L0##e#z1202030##n (#r500#b 好感点数。)#l\r\n"+cm.getChar().getgetschool(sel)+".#b\r\n";
			selStr+="#L0##e#z1202030##n (#r500#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L1##e#z1202029##n (#r1000#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L2##e#z1202028##n (#r3000#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L3##e#z1202027##n (#r8000#L1##e赫蒙妮(智力)#n (已获得 #r";
			cm.sendSimple(selStr);
		}
		if(sel==2){
			selStr = "#L0##e#z1202034##n (#r500#b 好感点数。)#l\r\n"+cm.getChar().getgetschool(sel)+".#b\r\n";
			selStr+="#L0##e#z1202034##n (#r500#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L1##e#z1202033##n (#r1000#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L2##e#z1202032##n (#r3000#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L3##e#z1202031##n (#r8000#L1##e赫蒙妮(智力)#n (已获得 #r";
			cm.sendSimple(selStr);
		}
		if(sel==3){
			selStr = "#L0##e#z1202038##n (#r500#b 好感点数。)#l\r\n"+cm.getChar().getgetschool(sel)+".#b\r\n";
			selStr+="#L0##e#z1202038##n (#r500#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L1##e#z1202037##n (#r1000#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L2##e#z1202036##n (#r3000#L1##e赫蒙妮(智力)#n (已获得 #r";
			selStr+="#L3##e#z1202035##n (#r8000#L1##e赫蒙妮(智力)#n (已获得 #r";
			cm.sendSimple(selStr);
		}
	} else if (status == 2) {
		if(sel==0){
			if(selection==0){
				if(cm.getChar().getgetschool(sel)>=500){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-500);
					cm.makeitem(1202026,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
			if(selection==1){
				if(cm.getChar().getgetschool(sel)>=1000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-1000);
					cm.makeitem(1202025,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
			if(selection==2){
				if(cm.getChar().getgetschool(sel)>=3000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-3000);
					cm.makeitem(1202024,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
			if(selection==3){
				if(cm.getChar().getgetschool(sel)>=8000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-8000);
					cm.makeitem(1202023,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
		}
		if(sel==1){
			if(selection==0){
				if(cm.getChar().getgetschool(sel)>=500){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-500);	
					cm.makeitem(1202030,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
			if(selection==1){
				if(cm.getChar().getgetschool(sel)>=1000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-1000);
					cm.makeitem(1202029,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
			if(selection==2){
				if(cm.getChar().getgetschool(sel)>=3000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-3000);
					cm.makeitem(1202028,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
			if(selection==3){
				if(cm.getChar().getgetschool(sel)>=8000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-8000);
					cm.makeitem(1202027,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
		}
		if(sel==2){
			if(selection==0){
				if(cm.getChar().getgetschool(sel)>=500){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-500);
					cm.makeitem(1202034,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
			if(selection==1){
				if(cm.getChar().getgetschool(sel)>=1000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-1000);
					cm.makeitem(1202033,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
			if(selection==2){
				if(cm.getChar().getgetschool(sel)>=3000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-3000);
					cm.makeitem(1202032,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
			if(selection==3){
				if(cm.getChar().getgetschool(sel)>=8000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-8000);
					cm.makeitem(1202031,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
		}
		if(sel==3){
			if(selection==0){
				if(cm.getChar().getgetschool(sel)>=500){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-500);
					cm.makeitem(1202038,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
			if(selection==1){
				if(cm.getChar().getgetschool(sel)>=1000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-1000);			
					cm.makeitem(1202037,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
			if(selection==2){
				if(cm.getChar().getgetschool(sel)>=3000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-3000);
					cm.makeitem(1202036,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
			if(selection==3){
				if(cm.getChar().getgetschool(sel)>=8000){
					cm.getChar().setgetschool(sel,cm.getChar().getgetschool(sel)-8000);
					cm.makeitem(1202035,0,0,0,0,0,0,1,0,"");
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}else{
					cm.sendOk("你没有足够的好感点数。");
					cm.dispose();
				}
			}
		}
		cm.dispose();
	}
}
