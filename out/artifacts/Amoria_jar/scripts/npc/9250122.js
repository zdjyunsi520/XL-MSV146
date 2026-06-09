var chat;

function start()
{
    chat = -1;
    action(1, 0, 0);
}

function action(action, type, selection)
{
    if (action == -1 || chat == 0 && action == -1) {
        cm.dispose();
        return;
    }
    action == 1 ? chat++ : chat--;
    startChat(cm.getMapId() == 689013000 ? 1 : cm.getMapId() == 689011000 ? 2 : type, selection);
}

function startChat(type, selection)
{
    if (type == 1) {
        if (cm.getMap().getAllMonstersThreadsafe().size() >= 1) { // Might be -1?
            if (chat == 0)
                cm.sendOk("你想去领取你的奖励吗？");
                cm.dispose();
        } else {
            if (chat == 0)
                cm.sendYesNo("你想出去吗？");
            else if (chat == 1) {
                cm.warp(689012000, 0);
                cm.dispose();
            }
        }
    } else if (type == 2) {
        if (chat == 0)
            cm.sendYesNo("你想出去吗？");
        else if (chat == 1) {
            cm.warp(cm.getSavedLocation("PINK_ZAKUM"), 0);
            cm.getPlayer().dispelBuff(2022939);
            cm.getPlayer().dispelBuff(2022940);
            cm.dispose();
        }
    }
}