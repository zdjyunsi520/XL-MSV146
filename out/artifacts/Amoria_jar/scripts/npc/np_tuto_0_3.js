var status = -1;

function start() {
    cm.sendNextS("你派这些破铜烂铁来追我？我以为我的名声更好一些呢。", 9);
}

function action(mode, type, selection) {
    status++;
    switch (status) {
        case 1:
            cm.sendNextPrevS("你派这些破铜烂铁来追我？我以为我的名声更好一些呢。", 3);
            break;
        case 2:
            cm.dispose();
            cm.spawnJettGuards();
            break;
    }
}