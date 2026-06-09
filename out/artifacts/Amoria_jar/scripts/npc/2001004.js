/*
 *  Scarf Snowman - Happy Ville NPC
 */


function start() {
    cm.sendYesNo("你的树装饰好了吗？和其他玩家一起装饰确实是一种有趣的体验呢。对了……你确定要离开这里吗？");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(209000000);
    } else {
	cm.sendNext("还需要更多时间装饰圣诞树吗？如果你什么时候想离开了，随时来找我~");
    }
    cm.dispose();
}