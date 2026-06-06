/*
	Description: 	Quest - Hungry Baby Dragon
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 3) {
	    qm.sendNext("*喘气*你怎么能拒绝喂你的龙？这是虐待儿童！");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("哟，主人。既然我已经向你展示了我的能力，现在轮到你了。向我证明……你能找到食物！我快饿死了。你现在可以使用我的力量了，所以你必须照顾我。");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.sendNextPrevS("嗯，我还是不太明白怎么回事，但我不能让你这样一个小可怜挨饿，对吧？食物，你说？你想吃什么？", 2);
    } else if (status == 2) {
	qm.sendNextPrev("嗨，我几分钟前才出生。我怎么知道我吃什么？我只知道我是一条龙……我是你的龙。你是我的主人。你必须好好对待我！");
    } else if (status == 3) {
	qm.askAcceptDecline("看来我们应该一起学习。但我饿了。主人，我要食物。记住，我是个宝宝！我很快就要哭了！");
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.sendOkS("#b(小龙米尔看起来极其饥饿。你必须喂它。也许爸爸能给你建议龙吃什么。)", 2);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendNext("怎么了，埃文？你想知道龙吃什么？你为什么……嗯？你找到了一条龙？");
    } else if (status == 1) {
	qm.sendNextS("#b(你把米尔展示给爸爸看。)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrev("嗯……那是一条龙？你确定它不是一只大蜥蜴？嗯，所有生命都是宝贵的，所以我想你可以留着它……");
    } else if (status == 3) {
	qm.sendNextS("#b(爸爸似乎不相信米尔是一条龙。嗯，它确实很小。如果爸爸听到米尔说话会不会相信呢？)", 2);
    } else if (status == 4) {
	qm.sendNextPrev("如果是真的龙，留着就太危险了。万一它喷火怎么办？我真的不觉得它是龙，但也许我们应该叫一个冒险者来把它杀了，以防万一。");
    } else if (status == 5) {
	qm.sendNextS("#b(什么？！杀了米尔？！但它什么坏事都没做啊！！)", 2);
    } else if (status == 6) {
	qm.sendNextPrev("当然，我很确定它不是龙。龙只出现在奥斯伊尔大陆的龙神村。");
    } else if (status == 7) {
	qm.sendNextS("#b哈……哈……你肯定是对的！我怀疑它是一条龙。它可能只是一只蜥蜴！肯定是！#k", 2);
    } else if (status == 8) {
	qm.sendNextPrev("是的，我很确定。这是一只长相奇怪的蜥蜴，但看起来不危险。你可以留着它。");
    } else if (status == 9) {
	qm.sendNextS("#b(为了它的安全，你最好别让任何人知道米尔是一条龙。)#k", 2);
    } else if (status == 10) {
	qm.sendOk("哦，你刚才说想找点东西喂这只蜥蜴？我不确定……让我想一下。");
    } else if (status == 11) {
	qm.gainExp(180);
	qm.forceCompleteQuest();
	qm.dispose();
    }
}