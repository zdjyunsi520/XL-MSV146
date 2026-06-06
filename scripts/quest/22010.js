/*
	Description: 	Quest -  Strange Farm
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendOk("嗯？你怕猪猪？它们像疯了一样到处乱跳，但你不能害怕它们……");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("别管狡猾的狐狸了。既然你来了，想再帮我一个忙吗？我觉得让猪猪安静下来的唯一方法就是教训它们一下。你去处理几只#r猪猪#k怎么样？");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.sendOk("那些疯狂的猪猪可以在#b巨大道路#k找到。过去处理掉#r20#k只就好了。嘿，小家伙，你真的帮了大忙了。");
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
	qm.sendOk("哦，你教训了那些猪猪。干得好！谢谢。\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i2022621# 美味牛奶 30\r\n#i2022622# 美味果汁 30\r\n#fUI/UIWindow.img/QuestIcon/8/0# 980 经验");
    } else if (status == 1) {
	qm.gainExp(980);
	qm.gainItem(2022621, 30);
	qm.gainItem(2022622, 30);
	qm.sendOk("现在我回去继续干活了。");
	qm.forceCompleteQuest();
	qm.dispose();
    }
}