load("我们是不是有点操之过急了？");
importPackage(Packages.tools.packet);

var status = -1;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 0)
        cm.sendNextS("我们是不是有点操之过急了？", 17);
    else if (status == 1) {
        cm.dispose();
        cm.showPhantomMovie();
    }
}