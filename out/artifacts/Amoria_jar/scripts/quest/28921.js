var status = -1;
function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0){
		    status -= 2;
		}else{
			qm.dispose();
			return;
		}
	}
	if (status == 0){
		qm.sendSimple("欢迎来到红叶高校，新来的！在这里待上一阵子，我打赌你会建立起很多友谊。不确定友谊怎么运作？让我来给你讲讲！#b\r\n#L0# 什么是友谊？ #l\r\n#L1# 查看当前友谊等级#l\r\n#L2# 结束对话 #l");
	}else if (status == 1){
		if(selection==0){
			qm.sendOk("进入红叶高中与受欢迎的学生建立友谊，提升你作为班上最强硬汉的声望！获得友谊还会让你进入四柱天之现金商店，在那里你可以用金币购买图腾！记住，你需要友谊才能解锁好东西！ ");
			qm.dispose();
		}
		if(selection==1){
			qm.dispose();
			qm.openNpc(9330193);
		}
		if(selection==2){
			qm.dispose();
		}
		//qm.forceStartQuest();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}
