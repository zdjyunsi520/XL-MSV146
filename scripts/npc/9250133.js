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
    startChat(cm.getMapId() == 689010000 ? 1 : cm.getMapId() == 689012000 ? 2 : cm.getMapId() == 689012001 ? 3 : type, selection);
}

function startChat(type, selection)
{
    if (type == 1) {
        if (chat == 0)
            cm.sendYesNo("我准备了一个礼盒，里面可能包含这些物品：\r\n#i1003439##i3010313#。\r\n#r此活动将持续到7/24；每天3次，\r\n分别在下午6:30、7:30和8:30。别忘了登录\r\n去打那个粉色扎昆！\r\n\r\n#L0##b哇，太厉害了！我先走了。#k#l\r\n#L1##b我不需要这个。我想离开这里。#k#l");
        else if (chat == 1) {
            cm.warp(cm.getSavedLocation("PINK_ZAKUM"), 0);
            cm.getPlayer().dispelBuff(2022939);
            cm.getPlayer().dispelBuff(2022940);
            cm.dispose();
        }
    } else if (type == 2) {
        if (chat == 0)
            cm.sendSimple("你要么没有击杀粉色扎昆，要么掉线了，抱歉只能给你普通奖励~");
        else if (chat == 1) {
            switch (selection) {
                case 0:
                    cm.useItem(2022939);
                    cm.useItem(2022940);
                    cm.gainItem(2028091, 1);
                    cm.gainItem(5041001, 10);
					cm.gainItem(4310002, 10); //Place Holder until EMS Coins
                case 1:
                    cm.warp(cm.getSavedLocation("PINK_ZAKUM"), 0);
                    cm.dispose();
                    break;
            }
        }
    } else if (type == 3) {
        if (chat == 0)
            cm.sendSimple(cm.getEffect(2022939) + "你要么没有击杀粉色扎昆，要么掉线了，抱歉只能给你普通奖励~");
        else if (chat == 1)
            cm.sendOk("你要么没有击杀粉色扎昆，要么掉线了，抱歉只能给你普通奖励~");
			//cm.gainItem(5041001, 1);
			//cm.gainItem(4310002, 5); //Place Holder until EMS Coins
        else if (chat == 2) {
            cm.warp(cm.getSavedLocation("PINK_ZAKUM"), 0);
            cm.dispose();
        }
    }
}