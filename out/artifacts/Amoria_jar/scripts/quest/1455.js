/* Legor
	Leafre : Forest of the Priest (240010501)
	4th Job Advancer/Quests.
        Made by TheGM
*/
var status = -1;

function start(mode, type, selection) {
        if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
            qm.sendNext("无数战士在枫之谷世界流浪，但只有少数人有资格见到我。你获得了惊人的力量...但不要把力量和伟大混为一谈。");
        }else if(status == 1) {
            qm.sendNextPrev("#b第四次转职#k将赋予你更大的力量，但也伴随着新的责任。你必须用你的力量维护正义。你的职责是#b引领枫之谷世界走向未来#k。");
        }else if(status == 2) {
            qm.sendNextPrev("也许你一直在世界各地无忧无虑地旅行，只为寻找乐趣。现在是时候成为#b一名英雄#k，帮助身边的人了。");
        }else if(status == 3) {
            qm.sendAcceptDecline("现在，轮到你接受考验了。#r格瑞菲#k和#r玛农#k拥有辨识真正英雄的力量。你的任务是击败他们并获得#b英雄五角星#k和#b英雄之星#k。");
        }else if(status == 4) {
            qm.forceStartQuest();
            qm.sendOk("英雄不是天生的，而是历练而成的。你能为枫之谷世界做些什么？");
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
            qm.sendYesNo("你证明了成为一名真正英雄所需的一切都存在于你自己内心。你已经没有什么需要证明的了。你准备好释放你的全部潜能了吗？");
        }else if(status == 1) {
            if (qm.haveItem(4031514, 1) || qm.haveItem(4031515, 1) ) {
                qm.removeAll(4031514);//Heroic Pentagon
                qm.removeAll(4031515);//Heroic Star
                qm.gainItem(1142110, 1);//Master Adventure medal
                qm.sendNext("你以一个普通冒险者的身份开始了旅程...但从那以后你已经成长了很多。你拥有巨大的力量、意志力和勇气。");
                if(qm.getJob() == 311){
                    qm.changeJob(312);
                }else if (qm.getJob() == 321){
                    qm.changeJob(322);
                }else{
                    qm.sendOk("出了点问题，请报告此问题。");
                    qm.dispose();
                }
				qm.gainSp(2);
                qm.forceCompleteQuest();
            }
	}else if(status == 2){
            qm.sendNextPrev("如果拥有所有这些品质的人都不能被称为英雄，那谁还能呢？");
        }else if (status == 3){
            qm.sendOk("英雄不是天生的，而是在磨难中诞生的。接受你的命运，引领枫之谷世界走向更光明的未来。");
            qm.dispose();
        }else{
            qm.sendOk("请去找英雄五角星和英雄之星。");
            qm.dispose();
        }
    }
}