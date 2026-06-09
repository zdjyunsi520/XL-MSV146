var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 14) {
	    qm.sendNext("呃，你在开玩笑吧？告诉我是你不小心按错了！快去接受任务。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("我就知道！我就知道我们之间有联系，主人！当你变强的时候，我也会变强。当我变强的时候，你就可以使用我的力量！这就是我们的契约。我就知道我选了个好主人！");
    } else if (status == 1) {
	qm.sendNextPrevS("#b我明白了。我们到底是怎么缔结这个契约的？#k", 2);
    } else if (status == 2) {
	qm.sendNextPrev("我不知道。那时我还只是一个蛋。我不太记得了……但我隐约记得你，主人，在雾蒙蒙的森林中向我走来。我记得你看到我时惊讶的表情。而我也在回应着你的呼唤。");
    } else if (status == 3) {
	qm.sendNextPrevS("#b(等等！那听起来就像你做过的那个梦……你们两个是在梦中相遇的吗？你在那个梦中看到的巨龙难道就是……米尔？#k", 2);
    } else if (status == 4) {
	qm.sendNextPrev("主人，你和我在灵魂上是一体的。我从见到你的那一刻就知道了。这就是为什么我想和你缔结契约。而不是和其他任何人。当然，你必须付出我设定的代价。");
    } else if (status == 5) {
	qm.sendNextPrevS("#b我付出了代价？#k", 2);
    } else if (status == 6) {
	qm.sendNextPrev("你不记得了吗？当你认出我并触摸我的时候？那就是我设定的唯一条件。在你触摸我蛋的那一刻，你和我的灵魂就合为一体了。");
    } else if (status == 7) {
	qm.sendNextPrevS("#灵魂……合为一体？", 2);
    } else if (status == 8) {
	qm.sendNextPrev("是的！灵魂契约！你和我的身体虽然分开，但我们共享一个灵魂。这就是为什么当我变强时你也会变强，反之亦然！很厉害吧？至少我觉得是的。");
    } else if (status == 9) {
	qm.sendNextPrevS("#b我完全不知道你在说什么，但听起来是一件很大的事。#k", 2);
    } else if (status == 10) {
	qm.sendNextPrev("当然是大事，傻主人！你再也不用担心怪物了。你有我来保护你了！来吧考验我。事实上，我们现在就去吧！");
    } else if (status == 11) {
	qm.sendNextPrevS("#b但这里很和平。附近没有危险的怪物。#k", 2);
    } else if (status == 12) {
	qm.sendNextPrev("什么？！那太没意思了！主人，你不喜欢冒险吗？为了人民与怪物战斗，打败邪恶，拯救无辜者，等等？你对那些不感兴趣？");
    } else if (status == 13) {
	qm.sendNextPrevS("#b这不在我五年计划之内。我开玩笑的，但说真的，我只是一个农民的儿子……#k", 2);
    } else if (status == 14) {
	qm.askAcceptDecline("呃，好吧让我告诉你。龙师不可能过平静的生活。我会有很多机会证明我的技能。相信我，我们的生活将是一场大冒险。答应我你会一直陪着我，好吗？");
    } else if (status == 15) {
	qm.forceStartQuest();
	qm.sendNextS("嘿嘿嘿，好的，主人。让我们开始吧！", 1);
    } else if (status == 16) {
	qm.sendNextPrevS("#b(你有些困惑，但你现在正和龙米尔一起旅行。也许你们会像他说的那样一起冒险。)#k", 3);
    } else if (status == 17) {
	qm.sendPrevS("#b(你还有一件差事要办。你爸爸需要和你谈谈，所以现在去见他吧。)#k", 2);
	qm.dispose();
    }
}

function end(mode, type, selection) {
}