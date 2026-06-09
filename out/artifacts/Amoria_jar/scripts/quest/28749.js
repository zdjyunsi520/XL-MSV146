var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.sendYesNo("现在我想了想，我打赌那些外星人试图抓住所有看到它们的人，以免他们告诉其他人！我们必须把他们救出来并传开消息！");
    } else if (status == 1) {
	qm.sendNextPrev("轮到你大显身手了！去救出那些好人。我不确定你怎么把他们弄出来，但你必须尝试！");
    } else if (status == 2) {
	qm.sendNextPrev("你说你在基地附近看到了他们。我听一些人谈到田野里有矩形容器。我打赌那些其实就是牢房！去点击它们看看能不能把他们放出来！");
	} else if (status == 3) {
	qm.sendNextPrev("我会给你一些返回新叶城的卷轴，但记住这些是给你救出的人用的！");
	} else if (status == 4) {
	qm.forceStartQuest(28749);
	qm.dispose();
    }
}

