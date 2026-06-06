var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("你怕#o9300385#吗？别告诉任何人你和我有关系。太丢人了。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("好奇怪。鸡的行为很反常。它们以前能孵出更多的#t4032451#。你觉得这和狐狸有关吗？如果是的话，我们最好赶紧行动。");
	else if (status == 1){
		qm.forceStartQuest();
		qm.sendNext("对吧？让我们去打败那些狐狸。你先去#b#m100030103##k打败#r10只#o9300385##k。我会跟在后面处理剩下的。现在赶紧去#m100030103#吧！");
	} else if (status == 2){
		qm.evanTutorial("UI/tutorial/evan/10/0", 1);
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
		qm.sendNext("你打败狡猾的狐狸了吗？");
	if (status == 1)
		qm.PlayerToNpc("#b剩下那些狐狸你处理得怎么样了？");
	if (status == 2)
		qm.sendNextPrev("哦，那个？哈哈。我确实追了，算是吧，但我想确保它们不会追上你。我可不想你被#o9300385#吃掉。所以我就放了它们。");
	if (status == 3)
		qm.PlayerToNpc("#b你确定你不是因为害怕狐狸才躲起来的？");
	if (status == 4)
		qm.sendNextPrev("什么？不可能！切，我什么都不怕！");
	if (status == 5)
		qm.PlayerToNpc("#b小心！有一只#o9300385#就在你后面！");
	if (status == 6)
		qm.sendNextPrev("啊呀呀！妈呀！");
	if (status == 7)
		qm.PlayerToNpc("#b...");
	if (status == 8)
		qm.sendNextPrev("...");
	if (status == 9)
		qm.sendNextPrev("你这个小鬼！我是你哥哥。别捉弄我！你哥心脏不好，你知道的。别这样吓我！");
	if (status == 10)
		qm.PlayerToNpc("#b（这就是为什么我不想叫你哥哥……）");
	if (status == 11)
		qm.sendNextPrev("哼！不管怎样，我很高兴你能打败那些#o9300385#。作为奖励，我给你一个很久以前一个冒险者送给我的东西。给你。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1372043# 1个 #t1372043# \r\n#i2022621# 25个 #t2022621# \r\n#i2022622# 25个 #t2022622# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 910 经验");
	if (status == 12){
		qm.forceCompleteQuest();
		qm.gainItem(1372043, 1);
		qm.gainItem(2022621, 25);
		qm.gainItem(2022622, 25);
		qm.gainExp(910);
		qm.sendNextPrev("#b这是魔法师使用的武器。是一根魔杖#k。你可能不太需要它，但如果随身携带的话会显得你很重要。哈哈哈哈哈。");
	} if (status == 13){
		qm.sendPrev("话说回来，狐狸变多了吧？多奇怪啊。为什么它们一天比一天多呢？我们真的应该调查一下弄清楚原因。");
		qm.dispose();
		}
	}