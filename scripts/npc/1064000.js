var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    // 1. 如果玩家中途按 Esc 或关闭对话框（mode == 0 或 -1）
    // 必须先彻底解锁角色，再结束脚本！否则角色会卡死。
    if (mode <= 0) {
        cm.introEnableUI(0);
        cm.introDisableUI(false);
        // cm.introLock(false); // 如果你的NPCConversationManager里有这个方法，请取消注释
        cm.enableActions();     // 核心！通知服务端彻底解除角色行动封印
        cm.dispose();
        return;
    } else {
        status++;
    }

    if (status == 0) {
        cm.mihileMove913070050(); // 镜头移动指令
        cm.sendPlayerToNpc("哇！");
    } else if (status == 1) {
        // 玩家点击了“下一步”，剧情结束，执行全套解锁+传送
        
        // 第一步：恢复UI和镜头
        cm.introEnableUI(0);
        cm.introDisableUI(false);
        // cm.introLock(false); // 同上，如果有此方法则加上
        
        // 第二步：强制刷新角色状态（破解不能攻击/放技能的关键）
        cm.enableActions();
        
        // 第三步：传送玩家
        cm.warp(105010201, 1);
        
        // 第四步：最后才能销毁脚本
        cm.dispose();
    }
}
