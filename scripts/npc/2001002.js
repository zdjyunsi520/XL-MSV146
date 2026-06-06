/*
 *  Metal Bucket Snowman - Happy Ville NPC
 */

function start() {
    cm.sendSimple("你好~我是#p2001002#。你可以通过我进入有超级大树的房间！详情请咨询#b#p2001000##k。你想进入哪个房间？ \n\r #b#L0#第一棵树的房间#l \n\r #L1#第二棵树的房间#l \n\r #L2#第三棵树的房间#l \n\r #L3#第四棵树的房间#l \n\r #L4#第五棵树的房间#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(209000006 + selection, 0);
    }
    cm.dispose();
}
