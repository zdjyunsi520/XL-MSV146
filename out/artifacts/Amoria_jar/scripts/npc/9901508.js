var chat;

function start()
{
    chat = -1;
    action(1, 0, 0);
}

function action(action, type, selection)
{
    if (action == -1 || chat == 0 && action == 0) {
        cm.dispose();
        return;
    }
    action == 1 ? chat++ : chat--;
    startChat(type, selection);
}

function startChat(type, selection)
{
    if (cm.getMapId() == 180000001) {
        if (chat == 0)
            cm.sendYesNo("你好，我可以带你去一个可以丢弃不可交易物品的地图。\r\n#L0#我想去那里#l\r\n#L1#我以后再来#l");
        else if (chat == 1) {
            cm.warp(100000000);
            cm.dispose();
        }
    } else {
        if (chat == 0)
            cm.sendSimple("好的，再见。");
        else if (chat == 1) {
            switch (selection) {
                case 1:
                    cm.sendOk("请输入你伙伴的名字：\r\n");
                    cm.dispose();
                    break;
                case 0:
                    cm.sendGetText("你们必须在同一地图。");
            }
        } else if (chat == 2) {
            if (cm.getPlayerCount(180000001) < 1) {
                if (cm.getPlayer().getClient().getChannelServer().getPlayerStorage().getCharacterByName(cm.getText()) != null) {
                    if (cm.getText() != cm.getPlayer().getName()) {
                        if (cm.getPlayer().getClient().getChannelServer().getPlayerStorage().getCharacterByName(cm.getText()).getMapId() == cm.getMapId()) {
                            cm.warp(180000001);
                            cm.warpByName(180000001, cm.getText());
                            cm.mapChangeTimer(180000001, 100000000, 120);
                        } else {
                            cm.sendOk("你不能输入自己的名字。");
                        }
                    } else {
                        cm.sendOk("玩家不在同一频道，或不存在。");
                    }
                } else {
                    cm.sendOk("抱歉，有其他人正在使用这个地图。");
                }
            } else {
                cm.sendOk("抱歉，有其他人正在使用这个地图。");
            }
            cm.dispose();
        }
    }
}