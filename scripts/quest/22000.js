var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("嗯？你不想告诉乌塔吗？你要对哥哥好一点，亲爱的。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("睡得好吗，埃文？");
	else if (status == 1)
		qm.PlayerToNpc("#b嗯，很好，你呢，妈妈？#k");
	else if (status == 2)
		qm.sendNextPrev("我也睡得很好。但你看起来很累。你确定你睡好了吗？昨晚的雷声和闪电打扰到你了吗？");
	else if (status == 3) 
		qm.PlayerToNpc("#b哦，不是的，妈妈。我只是昨晚做了一个奇怪的梦。#k");
	else if (status == 4)
		qm.sendNextPrev("一个奇怪的梦？什么奇怪的梦？");
	else if (status == 5)
		qm.PlayerToNpc("#b嗯……#k");
	else if (status == 6)
		qm.PlayerToNpc("#b(你解释说你在梦里遇到了一条龙。)");
	else if (status == 7)
		qm.sendAcceptDecline("哈哈哈，一条龙？太不可思议了。我很高兴他没有把你整个吞下去！你应该把你的梦告诉乌塔。我相信他会很开心的。");
	else if (status == 8){
		qm.forceStartQuest();
		qm.sendNext("#b乌塔#k去了#b前院#k喂斗牛犬。你出门就能看到他。");
   }else if (status == 9){
		qm.evanTutorial("UI/tutorial/evan/1/0", 1);
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
		qm.sendNext("嘿，埃文。你起了？你眼下的黑眼圈怎么回事？没睡好？嗯？一个奇怪的梦？什么梦？哇？梦到一条龙？");
	if (status == 1)
		qm.sendNextPrev("哇哈哈哈哈哈，一条龙？你认真的吗？我不会解梦，但听起来是个好梦！你在梦里有没有看到一只狗？哈哈哈！\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20 经验");
	if (status == 2){
		qm.gainExp(20);
		qm.evanTutorial("UI/tutorial/evan/2/0", 1);
		qm.forceCompleteQuest();
		qm.dispose();	
		}
	}