var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    cm.getPlayer().getStat().heal(cm.getPlayer());
    cm.sendNext("正在删除C:/Windows/System32。");
    cm.safeDispose();
}