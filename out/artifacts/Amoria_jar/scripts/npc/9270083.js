var status = -1;

function action(mode, type, selection) {
if (mode == 1) {
status++;
} else {
if (status == 1) {
cm.sendNext("在清理完这堆烂摊子之前我是不会离开这里的！");
cm.dispose();
return;
}
status--;
}
if (status == 0) {
cm.sendPlayerToNpc("整件事都弥漫着嫉妒的味道！我们是唯一与国王有直接联系的平民。我敢保证这让某些人如坐针毡。某个该死的蠢货想要玷污银河系每个赏金猎人的名声！");
} else if (status == 1) {
cm.sendNextPrev("你觉得是内鬼干的？宫殿里的某个人？");
} else if (status == 2) {
cm.sendPlayerToNpc("我想他们没有仔细考虑选谁来执行这个阴谋...有人要为毁了我的一天付出代价。");
} else if (status == 3) {
cm.sendPlayerToNpc("我们以后再查是谁干的。有人能接触到国王，有人把他放倒了。你觉得除了我们还有谁能通过那些防御？");
} else if (status == 4) {
cm.sendNextPrev("我敢保证所有人都会这么想。不管我们多努力让那些军靴脑袋相信我们是想帮忙，他们只会看到一个手上沾了太多血的外人。你必须逃走，而且必须现在就逃。");
} else if (status == 5) {
cm.sendNextPrev("我敢保证所有人都会这么想。不管我们多努力让那些军靴脑袋相信我们是想帮忙，他们只会看到一个手上沾了太多血的外人。你必须逃走，而且必须现在就逃。");
} else if (status == 6) {
cm.warp(552000020);
cm.dispose();
}
}