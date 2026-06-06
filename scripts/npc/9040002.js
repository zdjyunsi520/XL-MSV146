/* 
 * Shawn, Victoria Road: Excavation Site<Camp> (101030104)
 * Guild Quest Info
 */

var status;
var selectedOption;

function start() {
    selectedOption = -1;
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (mode == 1 && status == 3) {
	status = 0;
    }
    if (status == 0) {
	if (cm.getQuestStatus(6201) == 1) {
	    var dd = cm.getEventManager("Relic");
	    if (dd != null) {
		dd.startInstance(cm.getPlayer());
	    } else {
		cm.sendOk("\r\n#b#L0# 沙雷尼安是什么？#l\r\n#b#L1# #t4001024#？那是什么？#l\r\n#b#L2# 公会任务？#l\r\n#b#L3# 不，我没什么事。#l");
	    }
	    cm.dispose();
	} else {
	    var prompt = "我们公会联盟长期以来一直在试图解读珍贵的古代遗物"翡翠石板"。结果，我们发现古代神秘的沙雷尼安国度就沉睡在这里。我们还发现传说中的神话珠宝#t4001024#的线索可能就在沙雷尼安遗迹中。这就是公会联盟开设公会任务的原因，最终目标是找到#t4001024#。";
	    if (selectedOption == -1) {
		prompt = "你还有其他问题吗？" + prompt;
	    } else {
		prompt = "沙雷尼安是过去一个文明的国度，曾统治过维多利亚岛的每个角落。石头人神殿、迷宫深处的祭坛，以及其他无人知晓建造者的古老建筑，其实都是沙雷尼安时代的产物。" + prompt;
	    }
	    cm.sendSimple(prompt);
	}
    } else if (status == 1) {
	selectedOption = selection;
	if (selectedOption == 0) {
	    cm.sendNext("#t4001024#是一颗能赋予持有者永恒青春的传奇宝石。讽刺的是，拥有#t4001024#的人似乎最终都走向了没落，这也解释了沙雷尼安的覆灭。");
	}
	else if (selectedOption == 1) {
	    cm.sendNext("我之前派出过探险队前往沙雷尼安，但没有一个人回来，这促使我们启动了公会任务。我们一直在等待足够强大、能够应对严峻挑战的公会，就像你们这样的公会。");
	    status = -1;
	}
	else if (selectedOption == 2) {
	    cm.sendNext("是吗？如果你还有其他问题，请随时来找我。");
	}
	else if (selectedOption == 3) {
	    cm.sendOk("沙雷尼安最后的国王是一位名叫沙雷三世的绅士，据说他是一位非常英明仁慈的国王。但有一天，整个王国突然覆灭了，没有任何解释。");
	    cm.dispose();
	}
	else {
	    cm.dispose();
	}
    }
    else if (status == 2) { //should only be available for options 0 and 2
	if (selectedOption == 0) {
	    cm.sendNextPrev("这个公会任务的最终目标是探索沙雷尼安并找到#t4001024#。这不是单靠力量就能完成的任务。团队合作在这里更为重要。");
	}
	else if (selectedOption == 2) {
	    cm.sendNextPrev("这个公会任务的最终目标是探索沙雷尼安并找到#t4001024#。这不是单靠力量就能完成的任务。团队合作在这里更为重要。");
	}
	else {
	    cm.dispose();
	}
    }
}