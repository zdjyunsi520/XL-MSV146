/* RED 1st impact
    The New Explorer
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNextS("天哪！你好！我是小兰，一个立志成为英雄的人。我花了四年时间，终于完成了英雄学校大一的课程。你一定是个新的#b冒险家#k！",1);
    } else if (status == 1) {	
        qm.sendNextPrevS("新的……#b冒险家？#k那是什么？",17);	
	} else if (status == 2) {	
        qm.sendNextPrevS("这就是我考了十次都没通过的那道题……哦，对了！冒险家是从其他世界来到冒险岛世界的人！他们的旅程从#b枫之岛#k开始。",1);		
    } else if (status == 3) {	
	    qm.sendNextPrevS("我在……#b枫之岛？#k",17);	
	} else if (status == 4) {	
	    qm.sendNextPrevS("没错！我们过去只是一个小岛，但后来冒险家们不断出现。现在我们甚至有了自己的小屋！",1);		
	} else if (status == 5) {	
	    qm.sendNextPrevS("那么，你的名字叫#h0#对吧？现在你有两个选择。你可以听一些关于新手入门的说明，做几个小测试，拿一些免费礼物，成为我在这个世界上最要好的朋友……",1);		
	} else if (status == 6) {	
	    qm.sendNextPrevS("或者你可以直接传送到城镇，但你会错过我的礼物……而我会非常孤独和难过。",1);		
	} else if (status == 7) {
	    qm.sendSimpleS("你怎么说？\r\n#b#L0# 我愿意做你的朋友，小兰！（通过教程并获得免费装备。）#l\r\n#L1# 我不需要你，小兰！（跳过教程并直接传送到城镇。）#l#k",1);		
    } else if (status == 8) {
        sel = selection;
	  if (selection == 0) {		
	    qm.sendNextS("真的吗？！我保证会告诉你你需要知道的一切！",1);	
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(20);
		qm.dispose();
     } else if (selection == 1) {
		qm.sendNextS("我就知道你会选这个。大家都是这么选的……我马上送你去阿姆赫斯特，希望下一个冒险家愿意做我的朋友。",1);
		}
	} else if (status == 9) {
        if (sel == 1) {
		qm.sendNextS("这是给你的！你可以在消耗品栏中查看我给你的恢复药水。",1);
		qm.gainItem(2000013,50)
		qm.gainItem(2000014,50)
		}
    } else if (status == 10) {
        if (sel == 1) {
		qm.sendNextS("到了阿姆赫斯特一定要找#b卢卡斯#k村长谈谈！他非常聪明，会给你很好的建议。",1);
	   }
    } else if (status == 11) {
        if (sel == 1) {
		qm.warp(4000020,0);
		qm.forceStartQuest(32210);
		}   
	    qm.dispose();
    }
}