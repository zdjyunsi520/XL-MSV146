/* Return to Masteria
	BeastTamer Tutorial
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	  qm.sendNextS("啧。你睡了三天。太不像话了。",4,9390303);
	} else if (status == 1) {
	  qm.sendNextPrevS("你一定很累了，艾卡！你一直守在#b#h0##k身边！甚至连一觉都没睡！",4);
	} else if  (status == 2)  {
	  qm.sendNextPrevS("你认错人了，阿比。",4,9390303);
	} else if  (status == 3)  {
	  qm.sendNextPrevS("总之，#b#h0##k。我和艾卡现在得走了。你还太弱了，承受不了我们的力量。",4);
	} else if  (status == 4)  {
	  qm.sendNextPrevS("不过我们不会走远的！保证！自从我们碰拳之后，我们只会在灵界唱歌跳舞，直到你准备好召唤我们。",4);
	} else if  (status == 5)  {
	  qm.sendNextPrevS("每次召唤我们中的一个，都会消耗你的MP。上次你昏倒就是因为引导我的力量消耗了太多MP。嘿嘿。不是我想吹自己的胡须。",4);
	} else if  (status == 6)  {
	  qm.sendNextPrevS("莱和福特会在灵界跟我和艾卡一起烤棉花糖，直到你召唤他们。否则你的MP会一直不够用的。",4);
	} else if  (status == 7)  {
	  qm.sendNextPrevS("别太想我，小家伙。",4,9390302);
	} else if  (status == 8)  {
	  qm.sendNextPrevS("你需要帮忙时随时可以召唤我或福特，这可能是经常的事，因为有很多事没有我就做不了。",4,9390302);
	} else if  (status == 9)  {
	  qm.sendNextPrevS("当你需要我们时，像我们教你的那样激活守护模式就好。只要注意你的MP，小伙伴。",4,9390302);
	} else if  (status == 10)  {
	  qm.sendNextPrevS("哦哦，看到漂亮的花……或者冰淇淋就召唤我。我喜欢柠檬雪葩。",4,9390301);
	} else if  (status == 11)  {
	  qm.sendNextPrevS("你还得再等一阵子才能使用我和艾卡的力量。",4);
	} else if  (status == 12)  {
	  qm.sendNextPrevS("我们消耗太多MP了。我不想让你再昏倒，虽然我已经为你的葬礼挑选了一套色彩缤纷又雅致的花艺布置。",4);
	} else if  (status == 13)  {
	  qm.sendNextPrevS("所以我有一阵子见不到你了吗，阿比？",14);
	} else if  (status == 14)  {
	  qm.sendNextPrevS("不！但别担心！我会一直在你心里……而且我会时不时蹦出来跟你打招呼！现在回去继续你的驯兽师修行吧！",4);
	} else if  (status == 15)  {
	  qm.sendNextPrevS("再见，宝贝！",5);
	} else if  (status == 16)  {
	  qm.sendNextPrevS("回头见，小家伙。",5,9390302);
	} else if  (status == 17)  {
	  qm.sendNextPrevS("我们要去什么地方吗？",5,9390301);
	} else if  (status == 18)  {
	  qm.sendNextPrevS("终于可以独处了。",5,9390303);
	} else if  (status == 19)  {
	  qm.forceStartQuest();
	  qm.forceCompleteQuest();
      qm.warp(866138000);
	  qm.dispose();
	}
}