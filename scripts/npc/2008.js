var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendNext("嗨，欢迎来到阿莫利亚。祝你的故事精彩纷呈！");
    } else if (status == 1) {
        cm.sendOk("你现在位于枫之岛。在这里你可以从容地了解游戏基础，至少训练到10级。\r\n\r\n最右边是一个港口，当你达到10级时可以从那里离岛。\r\n\r\n枫之岛也是为了让你评估职业选择而存在的。你可以在岛屿尽头选择你喜欢的职业。你将获得一个新手礼包并开始你的冒险之旅！\r\n\r\n你也可以使用@help！来查看一些命令！@home很有用，但你需要达到50级才能使用。祝你玩得开心！~~");
    } else {
        cm.dispose();
    }
}
