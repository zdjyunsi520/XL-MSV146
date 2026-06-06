var status = -1;
function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (status == 0) {
    	cm.sendNext("实验进展顺利，非常顺利。源源不断的Rue供应确实加快了进度。加入黑色之翼是个明智的决定，确实是明智的决定。嘿嘿嘿！");
    } else if (status == 1) {
	cm.sendNextPrevS("我说，你对这些事情很有远见。", 4, 2159008);
    } else if (status == 2) {
	cm.sendNextPrev("黑色之翼想要的机器人很快就会完成。是的，很快。然后，下一个阶段就要开始了！我要进行比他们最狂野的梦想要疯狂得多的实验！");
    } else if (status == 3) {
	cm.sendNextPrevS("什么？下一个阶段？", 4, 2159008);
    } else if (status == 4) {
	cm.sendNextPrev("嘿嘿嘿，你还是不明白我在创造什么吗？看看周围！给你个提示：这比简单的有趣得多。有趣得多。");
    } else if (status == 5) {
	cm.sendNextPrevS("什么？？所有这些实验对象...我说，先生，你到底计划做什么？", 4, 2159008);
    } else if (status == 6) {
	cm.sendNextPrev("好了好了，你可能无法理解我实验的伟大之处。我不指望你能理解。不，我不指望。只要专注于你的工作，确保没有实验对象逃跑就行。");
    } else if (status == 7) {
	cm.sendNextPrev("嘿...你听到了吗？");
    } else if (status == 8) {
	cm.sendNextPrevS("嗯？这个...你说起来，我确实听到了什么。是的，我确实听到了什么...", 4, 2159008);
    } else if (status == 9) {
	cm.updateInfoQuest(23007, "vel00=2;vel01=1");
	cm.trembleEffect(0,500);
	cm.MovieClipIntroUI(true);
	cm.showWZEffect("Effect/Direction4.img/Resistance/TalkInLab");
    	cm.dispose();
    }
}