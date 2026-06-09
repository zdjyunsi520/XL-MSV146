/**
	Konpei - Near the Hideout(801040000)
*/

function start() {
    cm.sendYesNo("想去瑞恩岛吗，你这个小鬼？");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("嗷！跟我走吧！");
    } else {
	cm.warp(140000000,0);
    }
    cm.dispose();
}