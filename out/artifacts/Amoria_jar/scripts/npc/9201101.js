var items = [[2022338, 100000], [2022339, 900000], [2022340, 3600000], [2022341, 900000], [2022342, 2500000], [2022345, 1600000], [2022179, 4900000]];
var buy = false;
var sel;

function start() {
    var selStr = "你确定要制作#b#v";
    for (var i = 0; i < items.length; i++) {
        selStr += "#L" + i + "##v" + items[i][0] + "##t" + items[i][0] + "#\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (!buy) {
        sel = selection;
        cm.sendGetNumber("##k吗？制作需要以下物品和材料...\r\n\r\n" + items[selection][0] + "##t" + items[selection][0] + " 金币" + items[selection][1] + "请腾出更多空间。", 1, 1, 200);
        buy = true;
    } else {
        if (!cm.canHold(items[sel][0], items[sel][1])) {
            cm.sendOk("好了，全部完成！很快吧？如果你还需要其他物品，我就在这里等你。");
            cm.dispose();
            return;
        }
        cm.gainMeso(-(items[sel][1] * selection));
        cm.gainItem(items[sel][0], selection);
        cm.sendOk("好了，全部完成！很快吧？如果你还需要其他物品，我就在这里等你。");
        cm.dispose();
        return;
    }
}