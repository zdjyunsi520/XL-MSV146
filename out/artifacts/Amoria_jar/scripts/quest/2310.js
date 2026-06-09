/* ===========================================================
			Resonance
	NPC Name: 		Maple Administrator
	Description: 	Quest -  Kingdom of Mushroom in Danger
=============================================================
Version 1.0 - Script Done.(17/7/2010)
=============================================================
*/

var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			//if(status == 0){
				qm.sendOk("真的吗？这件事很紧急，如果你有时间的话，请来找我。");
				qm.dispose();
				return;
			//} else if(status == 3){
				//qm.sendNext("好的。那我就把前往蘑菇王国的路线告诉你。在#b射手村西入口附近#k，你会找到一栋#b空房子#k。进入房子，然后左转进入#b<主题副本：蘑菇城堡>#k。那就是蘑菇王国的入口。时间不多了！");
				//qm.forceStartQuest();
				//return;
			}
		}
	//}
	if(status == 0) 
		qm.sendAcceptDecline("既然你已经完成了转职，看起来你已经准备好了。我有件事想请你帮忙。你愿意听听吗？");
	if(status == 1)
		qm.sendNext("事情是这样的，#b蘑菇王国#k目前正处于混乱之中。蘑菇王国位于射手村附近，以热爱和平、聪慧的蘑菇国王而闻名。最近，他开始感到身体不适，所以他决定任命他唯一的女儿#b紫罗兰公主#k。从那以后一定发生了什么事，才导致王国陷入目前的状态。");
	if(status == 2)
		qm.sendNext("我不清楚具体的细节，但显然发生了什么可怕的事情，所以我觉得你亲自去那里评估一下情况会更好。像你这样的冒险者完全有能力拯救蘑菇王国。我刚给你写了一封#b推荐信#k，所以我建议你立即前往蘑菇王国寻找#b巡逻队长#k。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4032375# #t4032375#");
	if(status == 3)
		qm.sendYesNo("对了，你知道蘑菇王国在哪里吗？如果你能找到路那当然好，但如果你不介意的话，我可以直接把你送到入口。");
	if(status == 4){
		qm.gainItem(4032375, 1);
		qm.forceStartQuest();
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
	if(status == 0)
		qm.sendNext("嗯？那是一封#b来自职业教官的推荐信#k？？！这是什么，你就是来拯救我们蘑菇王国的那个人吗？");
	if(status == 1)
		qm.sendNextPrev("嗯……好吧。既然这封信是职业教官写的，我想你确实是那个人。很抱歉没有早点向你自我介绍。我是负责保护蘑菇国王的#b安全队长#k。如你所见，这个临时避难所由安全队和士兵们保护着。我们的情况可能很危急，但无论如何，欢迎来到蘑菇王国。");
	if(status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(4032375, -1);
		qm.forceStartQuest(2312);		
		qm.dispose();
	}
}