var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendNext("嘿！你能帮我一个忙吗？#p20000#最近看起来有点奇怪……");
	} else if (status == 1) {
		qm.sendNext("他直到最近还在皱着眉头抱怨他的关节炎，但突然间他变得又开心又爱笑了！！");
	} else if (status == 2) {
		qm.sendNext("我有一种感觉那个木箱后面有秘密。你能偷偷查看一下#p20000#旁边的那个木箱吗？");
	} else {
		qm.sendNext("你知道#p20000#在哪里，对吧？他在右边。一直走直到你看到维金所在的地方，然后往下走过悬挂的鲨鱼和章鱼，你就会看到约翰。那个箱子应该就在他旁边。");
		qm.forceStartQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.gainExp(200);
	qm.forceCompleteQuest();
	qm.dispose();
}
