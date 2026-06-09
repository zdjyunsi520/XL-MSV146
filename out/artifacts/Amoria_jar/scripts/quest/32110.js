/* Dawnveil
    [Ellinel Fairy Academy] Combing the Academy 1
	Cootie
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("这地方真不错，#h #。让我们四处看看吧。");
    } else if (status == 1) {	   
        qm.sendNextPrevS("我们先做什么好呢？",6);	 
    } else if (status == 2) {
        qm.sendNextPrevS("你知道孩子们最喜欢什么吗？秘密！我记得以前背着老师和朋友交换药水配方，把我的炼金术研究藏在学校各处的角落里……",4);	
	} else if (status == 3) {	
        qm.sendNextPrev("我敢打赌这些孩子们在学校各处都藏了纸条。但我们怎么找到呢？");	
	} else if (status == 4) {
	    qm.sendNextPrevS("#b它们一定在附近，我们应该四处找找。",6);	
	} else if (status == 5) {
	    qm.sendNextPrev("对，只要仔细找就一定能找到！我就知道。");	
	} else if (status == 6) {
	    qm.sendAcceptDecline("我打赌那些#r#o3501004##k家伙手里有一些纸条……刚才我看到你在战斗，你打得还算不错。也许你能从它们那里弄回一两张#b男学生的纸条#k？");	
	} else if (status == 7) { 
	    qm.sendNext("并非所有纸条都有用，但每一张你都得仔细阅读才能找到线索！\r\n\r\n（击败#r#o3501004##k怪物，收集#b男学生的纸条#k，阅读它们以寻找线索。） ");	
	} else if (status == 8) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(4000);
		qm.dispose();
	}
}

function end(mode, type, selection) { 
        qm.dispose(); 
 }
