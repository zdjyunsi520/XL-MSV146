var status = 0;
var occupationName = ["矮妖 #b（无功能）#k", "NX上瘾者", "Hacker", "变形金刚汽车人", "广播狂人"];
var occupationId = [200, 300, 400, 600, 700];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) { // allow GMs unlimited changes if they don't know about !occ :o
	  if (cm.getPlayer().getOccId() == 1 || cm.getPlayer().getOccId() == 0 || cm.getPlayer().isGM()) { // 0 = null (None) | 1 = Noob
		cm.sendNext("#r哈哈，你说职业？#k\r\n那是只有#e高手#n才能拥有的。\r\n如果你想要一个，你需要满足我的#r条件#k。\r\n我希望你达到#e10次转生#n并拥有#e1亿金币#n。\r\n\r\n#b如果你满足了我的条件，我们来谈正事。#k");
	  } else {
		cm.sendOk("你已经拥有了一个#e职业#n。");
		cm.dispose();
	  }
	  } else if (status == 1) {
	 if (cm.getPlayer().getReborns() >= 10 && cm.getMeso() >= 100000000 || cm.getPlayer().isGM()) {
	     cm.sendNext("#b*谈正事*#k\r\n\r\n#e你确定要花费1亿金币吗？#n");
	   } else if (cm.getPlayer().getReborns() < 10 && cm.getMeso() < 100000000) {
	    cm.sendOk("哈！你连#e10次转生#n和#e1亿金币#n都没有。");
		cm.dispose();
	   } else if (cm.getPlayer().getReborns() < 10) {
		cm.sendOk("哈！你连#e10次转生#n都没有。");
		cm.dispose();
		} else {
		cm.sendOk("哈！你连#e1亿金币#n都没有。");
		cm.dispose();
	}
    } else if (status == 2) {
     if (cm.getPlayer().getReborns() >= 10 && cm.getMeso() >= 100000000 || cm.getPlayer().isGM()) {
	// lol @ packet editing, doubt this is going to happen and not necessary 
		if (cm.getPlayer().isDonator()) { // Donator
			occupationName = ["Sniper", "矮妖 #b（无功能）#k", "NX上瘾者", "Hacker", "变形金刚汽车人", "广播狂人", "Terrorist"];
			occupationId = [100, 200, 300, 400, 600, 700, 800];
		}
		var occscript = "干得好！你满足了我的#r条件#k。\r\n\r\n选择一个#g职业#k："; 
		for (var i = 0; i < occupationId.length; occscript += "\r\n #L" + i + "# " + occupationName[i] + "#l", i++); 
			cm.sendSimple(occscript); 
	 } else {
	  status = 1337; // unexistant status so they don't status++
	  cm.sendOk("你为什么修改封包啊。啧啧……");
	  cm.dispose();
	 }
	 } else if (status == 3) {
	   //var selection = occupationId[selection] + 1; // 101++
	   if (cm.getPlayer().isDonator()) {
	   if (selection == 0) {
	     cm.sendSimple("#r职业：#e狙击手#n *捐助者专属*#k\r\n\r\n#b描述：#e狙击手#n职业允许玩家狙击目标，一击毙命并产生爆头特效！#k\r\n#L1#我想成为狙击手\r\n#L99#返回");
	   } else if (selection == 1) {
	     cm.sendSimple("#r职业：#e矮妖#n#k\r\n\r\n#b描述：#e矮妖#n职业允许玩家……\r\n#L2#我想成为矮妖\r\n#L99#返回");
	   } else if (selection == 2) {
	     cm.sendSimple("#rOccupation : #eNX上瘾者#n#k\r\n\r\n#bDescription: A #eNX上瘾者#n Occupation allows players to gain random amounts of NX from 10 to 500 by killing monsters! \r\n- Higher Occupation Level means (Level Number)x the original NX gained at random!#k\r\n#L3#I want to become a NX上瘾者\r\n#L99#Go back");
	   } else if (selection == 3) {
	     cm.sendSimple("#r职业：#e黑客#n#k\r\n\r\n#b描述：#e黑客#n职业允许玩家拥有#e攻击宠物#n来击杀怪物！以为就这些？升级你的职业还能获得更多"黑客"风格的特权！#k\r\n#L4#我想成为黑客\r\n#L99#返回");
	   } else if (selection == 4) {
	     cm.sendSimple("#rOccupation : #e变形金刚汽车人#n#k\r\n\r\n#bDescription: A #eTransformers AutoBot#n Occupation allows players to ...#k\r\n#L5#I want to become a Transformers AutoBot\r\n#L99#Go back");
	   } else if (selection == 5) {
	     cm.sendSimple("#rOccupation : #e广播狂人#n#k\r\n\r\n#bDescription: A #e广播狂人#n Occupation allows players to Smega without using smegas via @smega! \r\n- Level 7 #e广播狂人#n allows you to use @avi and more!#k\r\n#L6#I want to become a 广播狂人\r\n#L99#Go back");
	   } else if (selection == 6) {
		 cm.sendSimple("#r职业：#e恐怖分子#n *捐助者专属*#k\r\n\r\n#b描述：#e恐怖分子#n职业允许玩家生成炸弹，炸弹会爆炸并可能将玩家弹飞！\r\n- 4级#e恐怖分子#n允许你使用@mug等更多功能！#k\r\n#L7#我想成为恐怖分子\r\n#L99#返回");
	     }
	   } else {
	   if (selection == 0) {
	     //cm.sendSimple("#r职业：#e矮妖#n#k\r\n\r\n#b描述：#e矮妖#n职业允许玩家克隆自己！你最多可以克隆#e3#n次。#k\r\n#L2#我想成为矮妖\r\n#L99#返回");
		 cm.sendSimple("#r职业：#e矮妖#n#k\r\n\r\n#b描述：#e矮妖#n职业允许玩家……\r\n#L2#我想成为矮妖\r\n#L99#返回");
	   } else if (selection == 1) {
	     cm.sendSimple("#rOccupation : #eNX上瘾者#n#k\r\n\r\n#bDescription: A #eNX上瘾者#n Occupation allows players to gain random amounts of NX from 10 to 500 by killing monsters! \r\n- Higher Occupation Level means (Level Number)x the original NX gained at random!#k\r\n#L3#I want to become a NX上瘾者\r\n#L99#Go back");
	   } else if (selection == 2) {
	     cm.sendSimple("#r职业：#e黑客#n#k\r\n\r\n#b描述：#e黑客#n职业允许玩家拥有#e攻击宠物#n来击杀怪物！以为就这些？升级你的职业还能获得更多"黑客"风格的特权！#k\r\n#L4#我想成为黑客\r\n#L99#返回");
	   } else if (selection == 3) {
	     cm.sendSimple("#rOccupation : #e变形金刚汽车人#n#k\r\n\r\n#bDescription: A #eTransformers AutoBot#n Occupation allows players to ...#k\r\n#L5#I want to become a Transformers AutoBot\r\n#L99#Go back");
	   } else if (selection == 4) {
	     cm.sendSimple("#rOccupation : #e广播狂人#n#k\r\n\r\n#bDescription: A #e广播狂人#n Occupation allows players to Smega without using smegas via @smega! \r\n- Level 7 #e广播狂人#n allows you to use @avi and more!#k\r\n#L6#I want to become a 广播狂人\r\n#L99#Go back");
	     } 
	   }
	 } else if (status == 4) {
		if (selection < 99) { // "选择职业"
			cm.sendOk(" 你的职业现在是 " + occupationName[selection - (cm.getPlayer().isDonator() ? 1 : 2)] + "。\r\n\r\n#d你可以输入@occinfo查看你的#e职业#n的更多信息。#k");
			cm.getPlayer().setOccupation(occupationId[selection - (cm.getPlayer().isDonator() ? 1 : 2)]);
			cm.gainMeso(-100000000);
			cm.dispose();
		} else if (selection == 99) {
			status = 1;
			cm.sendNext("我们回去吧，好吗？");
		} else { 
			cm.sendOk("请将此问题报告到#r论坛#k。");
			cm.dispose();
	  }
    }
}