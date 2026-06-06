/**
	Konpei - Near the Hideout(801040000)
*/

function start() {
    cm.sendYesNo("想去里本港吗，你这个小鬼？");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("嗷！跟我走吧！");
    } else {
	cm.warp(104000000,0);
    }
    cm.dispose();
}