var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("好孩子要听妈妈的话。现在，埃文，做个好孩子再和我对话。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("你的#b爸爸#k今早去农场时忘了带午餐盒。你能帮我把这个#b午餐盒#k送到在#b#m100030300##k的爸爸#k那里吗，宝贝？");	
	else if (status == 1){
		qm.forceStartQuest();
		qm.sendNext("嘻嘻，我的埃文真是个好孩子！#b出了门往左走#k。快跑去你爸爸那里。他一定饿坏了。");
		if(!qm.haveItem(4032448))
			qm.gainItem(4032448, 1);
                qm.dispose();
	}else if (status == 3)
		qm.sendNextPrev("如果你不小心弄丢了午餐盒就回来找我。我会重新做一份。");
	else if (status == 4){
		qm.evanTutorial("UI/tutorial/evan/5/0" , 1);
		qm.dispose();
	}
}

function end(mode, type, selection) {

}