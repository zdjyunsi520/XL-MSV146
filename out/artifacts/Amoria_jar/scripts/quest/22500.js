
var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("你不信我吗？嗷嗷嗷，你把我惹毛了！");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("我终于出来了！*深呼吸* 啊，这一定就是我呼吸的空气。那个，那个一定是太阳！那个，一棵树！那个，一株植物！那个，一朵花！哇哈哈哈！太不可思议了！这比我在蛋里想象的世界好太多了。而你是……你是我的主人吗？嗯，我想象中的你不太一样。");
	if (status == 1)
		qm.PlayerToNpc("#b哇哦，它会说话！");
	if (status == 2)
		qm.sendNextPrev("我的主人好奇怪。既然契约已经缔结了，我也没办法改变了。*叹气* 嗯，很高兴认识你。我们会经常见面的。");
	if (status == 3)
		qm.PlayerToNpc("#b嗯？你什么意思？我们会经常见面？什么契约？");
	if(status == 4)
		qm.sendNextPrev("你什么意思你什么意思？！你把我从蛋中唤醒了。你就是我的主人！所以照顾我、训练我、帮我成为一条强大的龙当然就是你的责任了。这不是很明显吗！");
	if (status == 5)
		qm.PlayerToNpc("#b什么？一条龙？你是一条龙？！我不明白……为什么我是你的主人？你在说什么？");
	if (status == 6)
		qm.sendNextPrev("你在说什么？你的灵魂与我的灵魂缔结了契约！我们现在基本上是同一个人了。这真的需要我解释吗？作为结果，你成为了我的主人。我们被契约绑在一起了。你不能改变主意……契约是无法打破的。");
	if (status == 7)
		qm.PlayerToNpc("#b等等，等等，等等。让我搞清楚。你是说我别无选择只能帮助你？");
	if (status == 8)
		qm.sendNextPrev("对呀！嘿……！你这是什么表情？你……不想当我的主人？");
	if (status == 9)
		qm.PlayerToNpc("#b不是……不是那个意思……只是我不知道自己是否准备好养一只宠物了。");
	if (status == 10)
		qm.sendNextPrev("宠——宠物？！你刚才叫我宠物？！你好大胆……我是龙！世界上最强大的生物！");
	if (status == 11)
		qm.PlayerToNpc("#b……#b(你用怀疑的目光看着他。他看起来像一只蜥蜴。而且是一只很小很小的蜥蜴。)#k");
	if (status == 12)
		qm.sendAcceptDecline("你为什么那样看着我？！等着瞧吧！看看我能用我的力量做什么。准备好了吗？");
	if (status == 13){
		qm.forceStartQuest();
		qm.sendNext("命令我去消灭那些#r#o1210100#s#k！现在就做！我会让你看看龙有多快就能打败那些#o1210100#s！冲啊，冲锋！");
	}if (status == 14)
		qm.sendNextPrev("等一下！你分配AP了吗？我深受主人的#bINT和LUK#k影响！如果你真的想看我的能力，先分配AP并#b装备你的魔法师装备#k，然后再使用技能！");
	if (status == 15){
		qm.evanTutorial("UI/tutorial/evan/11/0", -1);
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
		qm.sendOk("哈！你觉得怎么样？！我的技能很厉害吧？你可以随心所欲地使用它们。这就是与我缔结契约的意义。是不是很厉害？");
	if(status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(1270);
		qm.getPlayer().gainSP(1, 0);
		qm.sendOk("哦……我好饿。我刚出生就用了太多能量……");
		qm.dispose();
	}
}