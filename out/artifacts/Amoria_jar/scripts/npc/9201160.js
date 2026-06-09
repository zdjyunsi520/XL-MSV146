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
    startChat(type, selection);
}

function startChat(type, selection)
{
    if (chat == 0)
        cm.sendNext("如果你愿意帮忙，我可以用我们的超级秘密传送器\r\n把你直接传送到OS4实验室。我还会给你一个超级\r\n传送石，可以让你去任何你想去的地方！");
    else if (chat == 1)
        cm.sendNextPrev("你能抽出时间来进行一些真正的实战\r\n测试吗？");
    else if (chat == 2)
        cm.sendYesNo("你很快将被传送到OS4实验室，请做好准备。");
    else if (chat == 3) {
      //  cm.useItem(2022939);
       // cm.useItem(2022940);
        cm.saveReturnLocation("PINK_ZAKUM");
        cm.warp(689010000);
        cm.getPlayer().dropMessage(-1, "齐心协力击败粉色扎昆吧！");
        cm.getPlayer().dropMessage(5, "齐心协力击败粉色扎昆吧！");
		      cm.useItem(2022939);
        cm.useItem(2022940);
        cm.dispose();
    }
}