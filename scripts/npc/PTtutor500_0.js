load("（看来我来得还不算太晚。大家都在，但还没有开始。）");
importPackage(Packages.tools.packet);

var status = -1;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 0)
        cm.sendNextS("（看来我来得还不算太晚。大家都在，但还没有开始。）", 17);
    else if (status == 1) {
        cm.dispose();
        cm.movePhantom();
    }
}