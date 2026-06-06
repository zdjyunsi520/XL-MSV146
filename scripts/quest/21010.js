/*
 * The return of the Hero
 * Rien Cold Forest 1
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 3) {
	    qm.sendNext("不不不，你不必拒绝。反正只是一瓶药水而已。而且，对于像你这样的英雄，我可以整天给你这些！你改变主意的时候告诉我。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("嗯？人类在这里做什么？等等，嘿，#p1201000#。什么风把你吹来了？哦还有...你认识这个人吗，#p1201000#？什么？英雄？");
    } else if (status == 1) {
	qm.sendNextPrev("     #i4001170#");
    } else if (status == 2) {
	qm.sendNextPrev("等等，我正在看着的就是你们这个种族等了几百年的那个人？哇！！我能看出来英雄看起来和其他人有点不一样...");
    } else if (status == 3) {
	qm.askAcceptDecline("但因为黑魔法师的诅咒让你被困在冰中数百年，你看起来确实很虚弱。#b这是一瓶恢复药水。请收下#k。");
    } else if (status == 4) { // TODO HP set to half
	qm.sendNext("先把药水喝了，然后我们继续聊！");
	qm.gainItem(2000022, 1);
	qm.forceStartQuest();
    } else if (status == 5) {
	qm.sendNextPrevS("#b(等等，我怎么喝这个？我不记得了...)#k", 3);
    } else if (status == 6) {
	qm.summonMsg(0xE);
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
	qm.sendNext("我一直在洞穴里的冰块中寻找，希望能找到我们的英雄，但...没想到真的会在面前看到！预言是正确的！#p1201000#，你是对的！既然英雄已经复活了，我们就不用再担心黑魔法师了，对吧？");
    } else if (status == 1) {
	qm.sendNextPrev("等等，我拉着你说太久了。对不起，但我猜其他企鹅的反应会和我一样。我知道你很忙，但在去镇上的路上，#b请去和其他企鹅搭搭话#k。如果英雄主动找他们聊天，大家都会很震惊的！\n\r #fUI/UIWindow.img/QuestIcon/4/0# \r #i2000022# #t2000022# 5 \r #i2000023# #t2000023# 5 \n\r #fUI/UIWindow.img/QuestIcon/8/0# 16 经验值");
    } else if (status == 2) {
	qm.sendNextPrev("哇，你升级了！那意味着你可能获得了技能点。在枫之谷世界中，每次升级意味着3个技能点。按#bK键#k打开技能窗口看看吧。");
	if (qm.getQuestStatus(21010) == 1) {
	    qm.gainExp(16);
	    qm.gainItem(2000022, 5);
	    qm.gainItem(2000023, 5);
	    qm.forceCompleteQuest();
	}
    } else if (status == 3) {
	qm.sendNextPrevS("#b(这些企鹅对我非常好，但我对他们一点印象都没有。我最好先查看技能窗口...但是怎么做来着？)#k");
    } else if (status == 4) {
	qm.summonMsg(0xF);
	qm.dispose();
    }
}