/* Dawnveil
    [Ellinel Fairy Academy] Ivana's Misunderstanding
	Headmistress Ivana
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNextS("你还在这里。还有什么要讨论的吗？",4);
    } else if (status == 1) {	   
        qm.sendNextPrevS("你不能相信这个外人，女校长！这个人类只会给我们谎言和拙劣的借口。",4,1500002);
    } else if (status == 2) {
        qm.sendNextPrevS("#b我以为你们是明智而理性的人。在做任何判断之前，我们应该先分析事实。",6);	
	} else if (status == 3) {	
        qm.sendNextPrevS("五个孩子同时凭空消失了！你还需要什么其他事实？就是这个人绑架了他们，毫无疑问！",4,1500002);	
	} else if (status == 4) {
	    qm.sendNextPrevS("#b那么，你有证据证明库蒂是罪魁祸首吗？",6);	
	} else if (status == 5) {
	    qm.sendNextPrevS("你们口中的库蒂已经被赶出这片领地好几次了，但他不断回来违抗我们的意愿。他一直在我们的森林里进行秘密实验！",4,1500002);	
	} else if (status == 5) {
	    qm.sendNextPrevS("他一直在策划这件事！这是完美的犯罪。他花了几周时间侦察这一区域，最后在眼皮底下偷走了孩子们！他知道我们有很多员工要外出度假，而且我在案发现场抓到他在附近徘徊。他一定是凶手！",4,1500002);	
	} else if (status == 6) { 
	    qm.sendNextPrevS("#b（库蒂真的会策划绑架五个孩子吗？他那么小！）",6);	
	} else if (status == 7) {
	    qm.sendNextPrevS("你的愿望是找到最合理的解释。我告诉你，我们的头号嫌疑人就是最合理的解释。我们必须审问他。",4);
	} else if (status == 8) {
		qm.sendNextPrevS("#b（他们太激动了，除了库蒂之外看不到任何嫌疑人。最好去和他谈谈……）",6);
	} else if (status == 9) {
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) { 
    if (mode == 0 && type == 0) { 
        status--; 
    } else if (mode == -1) { 
        qm.dispose(); 
        return; 
    } else { 
        status++; 
    } 
    if (status == 0) {
	    qm.sendNext("你是来教训我的吗？");
    } else if (status == 1) {
	    qm.sendNextPrev("听我说，好吗？我为什么要绑架精灵？当然，他们是地球上最高等最神奇的物种，但是……");
	} else if (status == 2) {	
	    qm.forceCompleteQuest();
	    qm.gainExp(1600);
		qm.gainItem(4033826,1)
		qm.gainItem(4033827,20)
		qm.dispose(); 
  } 
 }
