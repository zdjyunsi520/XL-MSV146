/* Dawnveil
    [Maple Castle] The Full Moon Dream
	Lania
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
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
	    qm.sendAcceptDecline("打开#i2431140# #b幽灵紫色信件#k？");
	} else if (status == 1) {	
        qm.sendNextS("#e#b万圣节快乐！#n#k 今晚是治愈千年无聊的最好方式！",1);
    } else if (status == 2) {	  
        qm.sendNextPrevS("我们是#b枫之城堡#k的学生。正如你所听说的，#b#h ##k。在封印城堡躲避黑魔法师之前，我们在这里上学。",1);
	} else if (status == 3) {	
        qm.sendNextPrevS("还记得糖碗里的封印徽章吗？那本该是我们承诺每个万圣节回来的信物。我真高兴我们在"翘辫子"之前做了这个约定！",1);
    } else if (status == 4) {	  
	    qm.sendNextPrevS("距离我们封印学校已经过了1000年了。无聊那么久，总得来个大回归！这就是为什么我们想捉弄你们所有人，如果你还没搞清楚的话，在城堡主厅里穿著奇装异服的那些人就是我们！",1);   
    } else if (status == 5) {	  
	    qm.sendNextPrevS("所以，谢谢你们 entertaining 我们！这是1000年来最令人兴奋的事情。你不需要向奈因哈特汇报任何东西，我们已经给他寄了信。啊，我真希望能看到他的表情...",1);   
    } else if (status == 6) {	  
	    qm.sendPrevS("我们有1000年的时间来想更多的恶作剧。等你死后，你可以帮我们想一些！哈哈哈！",1);   
    } else if (status == 7) {  
	    qm.forceCompleteQuest();
		qm.removeAll(3994663);
		qm.removeAll(3994661);
		qm.warp(100000000,1);
		qm.dispose(); 
  } 
}  
