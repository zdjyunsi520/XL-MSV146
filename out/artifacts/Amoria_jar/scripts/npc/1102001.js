/* 
 *  NPC   : Kiriko
 *  Maps  : Training Hall 2
 *  FUNC  : Second job Advancement
 */

function start() {
    cm.askAcceptDecline("你找到所有测试证明了？你想离开这里吗？");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendNext("你可能还需要一些时间。");
    } else {
	cm.warp(130020000, 0);
    }
    cm.dispose();
}