function start() {
    if (cm.getMap().getAllMonstersThreadsafe().size() <= 0) {
        cm.sendOk("选择你想查看掉落的怪物。\r\n\r\n#b");
        cm.dispose();
        return;
    }
    var selStr = "选择你想查看掉落的怪物。\r\n\r\n#b";
    var monsterIterator = cm.getMap().getAllUniqueMonsters().iterator();
    while (monsterIterator.hasNext()) {
        var nextMonster = monsterIterator.next();
        selStr += "#L" + nextMonster + "##o" + nextMonster + "##l\r\n";
    } 
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    cm.sendOk(cm.checkDrop(selection));
    cm.dispose();
}