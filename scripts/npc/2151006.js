
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    cm.getPlayer().getStat().heal(cm.getPlayer());
    cm.sendNext("请继续战斗！我已经为你治疗了。");
    cm.safeDispose();
}