/* Author: Xterminator
	NPC Name: 		Cloy
	Map(s): 		Victoria Road : Henesys Park (100000200)
	Description: 		Pet Master
*/
var status = -1;

function action(mode, type, selection) {
    if (status == 1 && mode == 0 || status == 5 && mode == 1 || status == 10 && mode == 1 || status == 13 && mode == 1 || status == 15 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("嗯……你是不是正在养我的某个孩子？我完善了一种使用生命之水让玩偶获得生命的法术。人们称之为#b宠物#k。如果你有宠物的话，有什么问题尽管问我。");
    } else if (status == 1) {
	cm.sendSimple("你想了解更多关于什么的内容？#b\r\n#L0#告诉我更多关于宠物的信息。#l\r\n#L1#怎样养宠物？#l\r\n#L2#宠物也会死吗？#l\r\n#L3#棕色猫咪和黑色猫咪的指令是什么？#l\r\n#L4#棕色小狗的指令是什么？#l\r\n#L5#粉色兔子和白色兔子的指令是什么？#l\r\n#L6#迷你卡戈的指令是什么？#l\r\n#L7#鲁道夫和达舍的指令是什么？#l\r\n#L8#黑猪的指令是什么？#l\r\n#L9#熊猫的指令是什么？#l\r\n#L10#哈士奇的指令是什么？#l\r\n#L11#恐龙男孩和恐龙女孩的指令是什么？#l\r\n#L12#猴子的指令是什么？#l\r\n#L13#火鸡的指令是什么？#l\r\n#L14#白虎的指令是什么？#l\r\n#L15#企鹅的指令是什么？#l\r\n#L16#金猪的指令是什么？#l\r\n#L17#机器人的指令是什么？#l\r\n#L18#迷你雪人的指令是什么？#l\r\n#L19#小巴洛格的指令是什么？#l\r\n#L20#幼龙的指令是什么？#l\r\n#L21#绿龙/红龙/蓝龙的指令是什么？#l\r\n#L22#黑龙的指令是什么？#l\r\n#L23#小死神的指令是什么？#l\r\n#L24#豪猪的指令是什么？#l\r\n#L25#雪人的指令是什么？#l\r\n#L26#臭鼬的指令是什么？#l\r\n#L27#请教我关于宠物能力点转移的方法。#l");
    } else if (status == 2) {
	if (selection == 0) {
	    status = 3;
	    cm.sendNext("你想了解更多关于宠物的信息。很久以前我制作了一个玩偶，在上面喷洒了生命之水，然后施法将它变成了一只神奇的动物。我知道这听起来难以置信，但它确实是一个变成了真正生物的玩偶。它们很懂人性，会很好地跟随主人。");
	} else if (selection == 1) {
	    status = 6;
	    cm.sendNext("根据你下达的指令，宠物可能会喜欢、讨厌或表现出其他反应。如果你给宠物下达指令而它很好地跟从了，你们的亲密度就会提升。双击宠物就可以查看亲密度、等级、饱食度等信息……");
	} else if (selection == 2) {
	    status = 11;
	    cm.sendNext("死亡……嗯，严格来说它们并不算‘活着’，所以我不知道用‘死亡’这个词是否合适。它们是靠我的魔法力量和生命之水的力量才成为活物的玩偶。当然，在它们活着的时候，就像真正的动物一样……");
	} else if (selection == 3) {
	    cm.sendNext("以下是#r棕色猫咪和黑色猫咪#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (等级 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1~30)\r\n#bpoop#k (等级 1 ~ 30)\r\n#btalk, say, chat#k (等级 10 ~ 30)\r\n#bcutie#k (等级 10 ~ 30)\r\n#bup, stand, rise#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 4) {
	    cm.sendNext("以下是#r棕色小狗#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (等级 1 ~ 30)\r\n#bstupid, ihateyou, baddog, dummy#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1~30)\r\n#bpee#k (等级 1 ~ 30)\r\n#btalk, say, chat#k (等级 10 ~ 30)\r\n#bdown#k (等级 10 ~ 30)\r\n#bup, stand, rise#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 5) {
	    cm.sendNext("以下是#r粉色兔子和白色兔子#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (等级 1 ~ 30)\r\n#bup, stand, rise#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1~30)\r\n#bpoop#k (等级 1 ~ 30)\r\n#btalk, say, chat#k (等级 10 ~ 30)\r\n#bhug#k (等级 10 ~ 30)\r\n#bsleep, sleepy, gotobed#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 6) {
	    cm.sendNext("以下是#r迷你卡戈#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (等级 1 ~ 30)\r\n#bup, stand, rise#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1~30)\r\n#bpee#k (等级 1 ~ 30)\r\n#btalk, say, chat#k (等级 10 ~ 30)\r\n#bthelook, charisma#k (等级 10 ~ 30)\r\n#bdown#k (等级 10 ~ 30)\r\n#bgoodboy, goodgirl#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 7) {
	    cm.sendNext("以下是#r鲁道夫和达舍#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (等级 1 ~ 30)\r\n#bup, stand#k (等级 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (等级 1 ~ 30)\r\n#bmerryxmas, merrychristmas#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1~30)\r\n#bpoop#k (等级 1 ~ 30)\r\n#btalk, say, chat#k (等级 11 ~ 30)\r\n#blonely, alone#k (等级 11 ~ 30)\r\n#bcutie#k (等级 11 ~ 30)\r\n#bmush, go#k (等级 21 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 8) {
	    cm.sendNext("以下是#r黑猪#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (等级 1 ~ 30)\r\n#bpoop#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1~30)\r\n#bhand#k (等级 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (等级 1 ~ 30)\r\n#btalk, chat, say#k (等级 10 ~ 30)\r\n#bsmile#k (等级 10 ~ 30)\r\n#bthelook, charisma#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 9) {
	    cm.sendNext("以下是#r熊猫#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bchill, relax#k (等级 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (等级 1 ~ 30)\r\n#bpoop#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1 ~ 30)\r\n#bup, stand, rise#k (等级 1 ~ 30)\r\n#btalk, chat, say#k (等级 10 ~ 30)\r\n#bletsplay#k (等级 10 ~ 30)\r\n#bmeh, bleh#k (等级 10 ~ 30)\r\n#bsleep#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 10) {
	    cm.sendNext("以下是#r哈士奇#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (等级 1 ~ 30)\r\n#bstupid, ihateyou, baddog, dummy#k (等级 1 ~ 30)\r\n#bhand#k (等级 1 ~ 30)\r\n#bpoop#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1 ~ 30)\r\n#bdown#k (等级 10 ~ 30)\r\n#btalk, chat, say#k (等级 10 ~ 30)\r\n#bup, stand, rise#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 11) {
	    cm.sendNext("以下是#r恐龙男孩和恐龙女孩#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1 ~ 30)\r\n#bpoop#k (等级 1 ~ 30)\r\n#bsmile, laugh#k (等级 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (等级 1 ~ 30)\r\n#btalk, chat, say#k (等级 10 ~ 30)\r\n#bcutie#k (等级 10 ~ 30)\r\n#bsleep, nap, sleepy#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 12) {
	    cm.sendNext("以下是#r猴子#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#brest#k (等级 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (等级 1 ~ 30)\r\n#bpee#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1 ~ 30)\r\n#bup, stand#k (等级 1 ~ 30)\r\n#btalk, chat, say#k (等级 10 ~ 30)\r\n#bplay#k (等级 10 ~ 30)\r\n#bmelong#k (等级 10 ~ 30)\r\n#bsleep, gotobed, sleepy#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 13) {
	    cm.sendNext("以下是#r火鸡#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bno, rudeboy, mischief#k (等级 1 ~ 30)\r\n#bstupid#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1 ~ 30)\r\n#bup, stand#k (等级 1 ~ 30)\r\n#btalk, chat, gobble#k (等级 10 ~ 30)\r\n#byes, goodboy#k (等级 10 ~ 30)\r\n#bsleepy, birdnap, doze#k (等级 20 ~ 30)\r\n#bbirdeye, thanksgiving, fly, friedbird, imhungry#k (等级 30)");
	    cm.safeDispose();
	} else if (selection == 14) {
	    cm.sendNext("以下是#r白虎#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1 ~ 30)\r\n#bpoop#k (等级 1 ~ 30)\r\n#brest, chill#k (等级 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (等级 1 ~ 30)\r\n#btalk, chat, say#k (等级 10 ~ 30)\r\n#bactsad, sadlook#k (等级 10 ~ 30)\r\n#bwait#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 15) {
	    cm.sendNext("以下是#r企鹅#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (等级 1 ~ 30)\r\n#bpoop#k (等级 1 ~ 30)\r\n#bup, stand, rise#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1 ~ 30)\r\n#btalk, chat, say#k (等级 10 ~ 30)\r\n#bhug, hugme#k (等级 10 ~ 30)\r\n#bwing, hand#k (等级 10 ~ 30)\r\n#bsleep#k (等级 20 ~ 30)\r\n#bkiss, smooch, muah#k (等级 20 ~ 30)\r\n#bfly#k (等级 20 ~ 30)\r\n#bcute, adorable#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 16) {
	    cm.sendNext("以下是#r金猪#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (等级 1 ~ 30)\r\n#bpoop#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1 ~ 30)\r\n#btalk, chat, say#k (等级 11 ~ 30)\r\n#bloveme, hugme#k (等级 11 ~ 30)\r\n#bsleep, sleepy, gotobed#k (等级 21 ~ 30)\r\n#bignore / impressed / outofhere#k (等级 21 ~ 30)\r\n#broll, showmethemoney#k (等级 21 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 17) {
	    cm.sendNext("以下是#r机器人#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bup, stand, rise#k (等级 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (等级 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (等级 1 ~ 30)\r\n#battack, charge#k (等级 1 ~ 30)\r\n#biloveyou#k (等级 1 ~ 30)\r\n#bgood, thelook, charisma#k (等级 11 ~ 30)\r\n#bspeack, talk, chat, say#k (等级 11 ~ 30)\r\n#bdisguise, change, transform#k (等级 11 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 18) {
	    cm.sendNext("以下是#r迷你雪人#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (等级 1 ~ 30)\r\n#bpoop#k (等级 1 ~ 30)\r\n#bdance, boogie, shakeit#k (等级 1 ~ 30)\r\n#bcute, cutie, pretty, adorable#k (等级 1 ~ 30)\r\n#biloveyou, likeyou, mylove#k (等级 1 ~ 30)\r\n#btalk, chat, say#k (等级 11 ~ 30)\r\n#bsleep, nap, sleepy, gotobed#k (等级 11 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 19) {
	    cm.sendNext("以下是#r小巴洛格#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bliedown#k (等级 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (等级 1 ~ 30)\r\n#biloveyou|mylove|likeyou#k (等级 1 ~ 30)\r\n#bcute|cutie|pretty|adorable#k (等级 1 ~ 30)\r\n#bpoop#k (等级 1 ~ 30)\r\n#bsmirk|crooked|laugh#k (等级 1 ~ 30)\r\n#bmelong#k (等级 11 ~ 30)\r\n#bgood|thelook|charisma#k (等级 11 ~ 30)\r\n#bspeak|talk|chat|say#k (等级 11 ~ 30)\r\n#bsleep|nap|sleepy#k (等级 11 ~ 30)\r\n#bgas#k (等级 21 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 20) {
	    cm.sendNext("以下是#r幼龙#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (等级 1 ~ 30)\r\n#biloveyou|loveyou#k (等级 1 ~ 30)\r\n#bpoop#k (等级 1 ~ 30)\r\n#bstupid|ihateyou|dummy#k (等级 1 ~ 30)\r\n#bcutie#k (等级 11 ~ 30)\r\n#btalk|chat|say#k (等级 11 ~ 30)\r\n#bsleep|sleepy|gotobed#k (等级 11 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 21) {
	    cm.sendNext("以下是#r绿龙/红龙/蓝龙#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 15 ~ 30)\r\n#bno|bad|badgirl|badboy#k (等级 15 ~ 30)\r\n#biloveyou|loveyou#k (等级 15 ~ 30)\r\n#bpoop#k (等级 15 ~ 30)\r\n#bstupid|ihateyou|dummy#k (等级 15 ~ 30)\r\n#btalk|chat|say#k (等级 15 ~ 30)\r\n#bsleep|sleepy|gotobed#k (等级 15 ~ 30)\r\n#bchange#k (等级 21 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 22) {
	    cm.sendNext("以下是#r黑龙#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 15 ~ 30)\r\n#bno|bad|badgirl|badboy#k (等级 15 ~ 30)\r\n#biloveyou|loveyou#k (等级 15 ~ 30)\r\n#bpoop#k (等级 15 ~ 30)\r\n#bstupid|ihateyou|dummy#k (等级 15 ~ 30)\r\n#btalk|chat|say#k (等级 15 ~ 30)\r\n#bsleep|sleepy|gotobed#k (等级 15 ~ 30)\r\n#bcutie, change#k (等级 21 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 23) {
	    cm.sendNext("以下是#r小死神#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (等级 1 ~ 30)\r\n#bplaydead, poop#k (等级 1 ~ 30)\r\n#btalk|chat|say#k (等级 1 ~ 30)\r\n#biloveyou, hug#k (等级 1 ~ 30)\r\n#bsmellmyfeet, rockout, boo#k (等级 1 ~ 30)\r\n#btrickortreat#k (等级 1 ~ 30)\r\n#bmonstermash#k (等级 1 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 24) {
	    cm.sendNext("以下是#r豪猪#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (等级 1 ~ 30)\r\n#biloveyou|hug|goodboy#k (等级 1 ~ 30)\r\n#btalk|chat|say#k (等级 1 ~ 30)\r\n#bcushion|sleep|knit|poop#k (等级 1 ~ 30)\r\n#bcomb|beach#k (等级 10 ~ 30)\r\n#btreeninja#k (等级 20 ~ 30)\r\n#bdart#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 25) {
	    cm.sendNext("以下是#r雪人#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (等级 1 ~ 30)\r\n#bloveyou, mylove, ilikeyou#k (等级 1 ~ 30)\r\n#bmerrychristmas#k (等级 1 ~ 30)\r\n#bcutie, adorable, cute, pretty#k (等级 1 ~ 30)\r\n#bcomb, beach/bad, no, badgirl, badboy#k (等级 1 ~ 30)\r\n#btalk, chat, say/sleep, sleepy, gotobed#k (等级 10 ~ 30)\r\n#bchang#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 26) {
	    cm.sendNext("以下是#r臭鼬#k的指令。指令旁边标注的等级表示宠物需要达到的等级才能响应。\r\n#bsit#k (等级 1 ~ 30)\r\n#bbad/no/badgirl/badboy#k (等级 1 ~ 30)\r\n#brestandrelax, poop#k (等级 1 ~ 30)\r\n#btalk/chat/say, iloveyou#k (等级 1 ~ 30)\r\n#bsnuggle/hug, sleep, goodboy#k (等级 1 ~ 30)\r\n#bfatty, blind, badbreath#k (等级 10 ~ 30)\r\n#bsuitup, bringthefunk#k (等级 20 ~ 30)");
	    cm.safeDispose();
	} else if (selection == 27) {
	    status = 14;
	    cm.sendNext("要转移宠物能力点、亲密度和等级，需要宠物能力重置卷轴。如果你把这个卷轴拿到魔法森林的妖精玛丽那里，她会把宠物的等级和亲密度转移到另一只宠物上。我特别把它给你是因为我能感受到你对宠物的爱心。不过，我不能免费给你。25万金币就能给你这本书。哦，差点忘了！即使你有这本书，如果没有新宠物来转移能力点，那也是没用的。");
	}
    } else if (status == 3) {
	cm.sendNext("你想了解更多关于宠物的信息。很久以前我制作了一个玩偶，在上面喷洒了生命之水，然后施法将它变成了一只神奇的动物。我知道这听起来难以置信，但它确实是一个变成了真正生物的玩偶。它们很懂人性，会很好地跟随主人。");
    } else if (status == 4) {
	cm.sendNextPrev("但是生命之水只在世界树的最底部才会少量出现，所以我不能给它太长的生命……我知道，这很遗憾……但即使它变回了玩偶，我随时可以再次赋予它生命，所以在和你宠物在一起的时光里好好待它。");
    } else if (status == 5) {
	cm.sendNextPrev("哦对了，当你给它们特殊指令时它们会有反应。你可以训斥它们，疼爱它们……这一切\r\n都取决于你怎么照顾它们。它们害怕离开主人，所以对它们好一点，给它们爱。它们很容易感到悲伤和孤独……");
    } else if (status == 6) {
	cm.sendNext("根据你下达的指令，宠物可能会喜欢、讨厌或表现出其他反应。如果你给宠物下达指令而它很好地跟从了，你们的亲密度就会提升。双击宠物就可以查看亲密度、等级、饱食度等信息……");
    } else if (status == 7) {
	cm.sendNextPrev("和宠物说话，多关注它，它的亲密度就会提升，最终整体等级也会提升。随着亲密度的提高，宠物的整体等级很快也会跟着提升。随着整体等级的提高，有一天宠物甚至可能像人一样说一些话，所以努力养育它吧。当然，这并不容易……");
    } else if (status == 8) {
	cm.sendNextPrev("虽然它是活着的玩偶，但它们也有生命，所以也能感受到饥饿。#b饱食度#k显示宠物的饥饿程度。100是最大值，数值越低，说明宠物越饿。一段时间后，它甚至不会听从你的指令，还会变得暴躁，所以要注意这一点。");
    } else if (status == 9) {
	cm.sendNextPrev("是的！宠物不能吃人类的正常食物。我的弟子#b杜弗斯#k在射手村市场出售#b宠物食品#k，所以如果你需要宠物食品，去射手村找他吧。建议提前买好食物，在宠物非常饿之前就喂食。");
    } else if (status == 10) {
	cm.sendNextPrev("哦，如果你长时间不给宠物喂食，它会自己回家。你可以把它从家里拿出来喂食，但这样对宠物的健康不太好，所以尽量定期喂食，不要让它落到那种地步，好吗？我觉得就这些了。");
    } else if (status == 11) {
	cm.sendNext("死亡……嗯，严格来说它们并不算‘活着’，所以我不知道用‘死亡’这个词是否合适。它们是靠我的魔法力量和生命之水的力量才成为活物的玩偶。当然，在它们活着的时候，就像真正的动物一样……");
    } else if (status == 12) {
	cm.sendNextPrev("一段时间后……没错，它们会停止活动。当魔法效果消退、生命之水干涸后，它们就变回了玩偶。但这并不意味着永远停止了，因为只要再浇上生命之水，它们就会重新活过来。");
    } else if (status == 13) {
	cm.sendNextPrev("即使有一天它会再次活动，看到它们完全停止不动还是很伤感的。请在它们还活着在动的时候好好对待它们。也要好好喂食。知道有一样只跟随你、只听你话的活物陪伴着你，不是很棒吗？");
    } else if (status == 15) {
	cm.sendYesNo("将扣除25万金币。你真的要购买吗？");
    } else if (status == 16) {
	if (cm.getMeso() < 250000) {
	    cm.sendOk("请检查你的背包是否有空位，或者你的金币是否足够。");
	} else {
	    cm.gainMeso(-250000);
	    cm.gainItem(4160011, 1);
	}
	cm.dispose();
    }
}