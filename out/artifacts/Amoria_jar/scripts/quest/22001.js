
var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("别偷懒了。你想看你哥哥被狗咬吗？快点！再和我对话接受任务！");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("哈哈。我笑了个痛快。哈哈哈。但废话少说，喂一下#p1013102#好吗？");
	else if (status == 1)
		qm.PlayerToNpc("#b什么？那是乌塔的活！#k");
	else if (status == 2)
		qm.sendAcceptDecline("你这个小鬼！我告诉过你要叫我哥哥！你知道#p1013102#有多讨厌我。如果我靠近它，它就咬我。你去喂它。它喜欢你。");
	else if (status == 3){
		qm.gainItem(4032447,1);
		qm.sendNext("快往#b左边#k去喂#b#p1013102##k。它整个早上都在叫着要吃东西。");
		qm.forceStartQuest();
   }else if (status == 4){
		qm.sendPrev("喂完#p1013102#后回来见我。");
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
		qm.sendNext("#b(你把食物放进斗牛犬的碗里。)#k");
	if (status == 1)
		qm.sendOk("#b(斗牛犬真的很温顺。乌塔只是个胆小鬼。)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 经验");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(4032447, -1);
		qm.gainExp(35);
		qm.sendOk("#b(看起来斗牛犬已经吃完了。回去告诉乌塔。)#k");
		qm.dispose();
		}
	}