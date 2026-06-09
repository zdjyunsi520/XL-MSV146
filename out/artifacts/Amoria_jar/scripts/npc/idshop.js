var chat = -1;
var select, itemid;
var invalid = [
2022766, 1042003, 1062007, 1002140, 1003142, 1322013, 1002959,
1082392, 1082393, 1082394, 2003561, 2003552, 2003553, 1142229, 
2430130, 2430131, 2430403, 2430404, 2022728, 2022729
];
var invalidarrays = [
//[starting value, ending value]
[5000000, 5010000],
[2100000, 2110000],
[2003516, 2003520],
[2213000, 2214000],
[5211000, 5220000],
[5360000, 5370000],
[2450000, 2460000],
[2230000, 2230004]
];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 /*End Chat*/ || mode == -1 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    if (mode == 1) //Next/Ok/Yes/Accept
        chat++;
    else if (mode == -1) //Previous/No/Delience
        chat--;
    startChat(selection);
}

function startChat(selection) {
    if (chat == 0)
        cm.sendSimple("\r\n#L2#满级我的技能#l"/* + "\r\n#L3#给我点卷！#l"*/ + "输入道具ID：");
    else if (chat == 1) {
        switch (selection) {
            case 0:
                cm.sendGetNumber("输入道具名称：", 0, 1002000, 6000000);
                select = 0;
                break;
            case 1:
                cm.sendGetText("你的技能等级正在被最大化。");
                select = 1;
                break;
            case 2:
                if (cm.getPlayer().getLevel() >= 150) {
                    cm.sendOk("你需要达到150级以上才能满级技能 :)");
                    cm.maxAllSkills();
                } else
                    cm.sendOk("点卷数量：");
                cm.dispose();
                break;
            case 3:
                cm.sendGetNumber("这是一个无效的道具。", 1, 1, 49999);
                select = 3;
                break;
        }
    } else if (chat == 2) {
        switch (select) {
            case 0:
                itemid = selection;
                for (var i = 0; i < invalid.length; i++) {
                    if (itemid == invalid[i]) {
                        cm.sendOk("输入你想要的道具数量：");
                        cm.dispose();
                        return;
                    }
                }
                for (var a = 0; a < invalidarrays.length; a++) {
                    if (itemid >= invalidarrays[a][0] && itemid <= invalidarrays[a][1]) {
                        cm.sendOk("输入你想要的道具数量：");
                        cm.dispose();
                        return;
                    }
                }
                cm.sendGetNumber("看来你无法持有该道具，请检查道具是否存在并确保你有足够的背包空间。", 1, 1, 100);
                break;
            case 1:
                cm.sendPrev(cm.searchId(4, cm.getText()));
                selection = 0;
                chat = 1;
                break;
            case 3:
                cm.gainNX(selection);
                cm.dispose();
                break;
        }
    } else if (chat == 3) {
        if (itemid >= 1000000 && itemid < 2000000) {
            for (var amount = 0; amount < selection; amount++)
                if (cm.canHold(itemid, selection))
                    cm.gainItem(itemid, 1);
                else {
                    cm.sendOk("希望你喜欢我的服务。");
                    cm.dispose();
                    return;
                }
        } else {
            if (cm.canHold(itemid, selection))
                cm.gainItem(itemid, selection);
            else {
                cm.sendOk("希望你喜欢我的服务。");
                cm.dispose();
                return;
            }
        }
        cm.sendOk("希望你喜欢我的服务。");
    } else
        cm.dispose();
}