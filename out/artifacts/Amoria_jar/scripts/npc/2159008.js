var status = -1;
function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (status == 0) {
    	cm.sendNext("小老鼠们。我说，你们怎么敢试图从这里逃跑？");
    } else if (status == 1) {
	cm.sendNextPrevS("糟了，被发现了！", 2);
    } else if (status == 2) {
	cm.sendNextPrev("好了好了，孩子们。别让事情变得比需要的更复杂。慢慢向我走过来...等等，你不是实验对象。你是镇上的居民，对吧？");
    } else if (status == 3) {
	cm.sendNextPrevS("没错。我是埃德尔斯坦的居民，不是实验对象。你不能对我发号施令。", 2);
    } else if (status == 4) {
	cm.sendNextPrev("哎呀呀。我告诉过他们要确保镇上的居民不让他们的孩子靠近矿井...唉，现在太迟了。我不能允许你告诉任何人关于这个实验室的事，所以我想你只能留在这里...帮忙做实验了。*偷笑*");
    } else if (status == 5) {
	cm.sendNextPrevS("哼。大话倒是说得好听，先看看你能不能抓住我。", 2);
    } else if (status == 6) {
	cm.sendNextPrev("你这个无礼的小--咳咳咳。你说什么都没用了。是时候让我拿出真本事了。希望你准备好了。如果没有，你将会受苦。");
    } else if (status == 7) {
	cm.sendNextPrev("我说，还有什么大话要说吗，小鬼？我会确保杰利麦罗在你身上做一些特别残忍的实验。但如果你乖乖跟我走，我会对你好一点的。");
    } else if (status == 8) {
	cm.sendNextPrevS("站住！", 4, 2159010);
    } else if (status == 9) {
	cm.warp(931000021,1);
    	cm.dispose();
    }
}