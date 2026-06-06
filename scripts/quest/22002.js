var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("哦，什么？你不吃早餐吗？早餐是一天中最重要的一餐！如果你改变主意了再和我对话。如果你不吃，我就自己吃了。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("你喂完#p1013102#了吗？那你现在应该吃早餐了，埃文。今天的早餐是#t2022620#。我带来了。嘻嘻。本来如果你不同意去喂#p1013102#的话我就打算自己吃了。");
	else if (status == 1)
		qm.sendAcceptDecline("来，我给你这个#b三明治#k，所以#b吃完后去和妈妈说话#k。她说有话要跟你说。");
	else if (status == 2){
		qm.forceStartQuest();
		qm.PlayerToNpc("#b(妈妈有话说？吃掉你的#t2022620#然后回屋里去。)#k");
		qm.gainItem(2022620, 1);
	}else if (status == 3){
		qm.evanTutorial("UI/tutorial/evan/3/0" , 1);
		qm.dispose();
	}
}

function end(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
		    qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("你吃早餐了吗，埃文？那么，你能帮我一个忙吗？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1003028# 1个 #t1003028#  \r\n#i2022621# 5个 #t2022621# \r\n#i2022622# 5个 #t2022622# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 60 经验");
	 if (status == 1){
		qm.forceCompleteQuest();
		qm.evanTutorial("UI/tutorial/evan/4/0" , 1);
		qm.gainItem(1003028, 1);
		qm.gainItem(2022621, 5);
		qm.gainItem(2022622, 5);
		qm.gainExp(60);
		qm.dispose();
	}
}