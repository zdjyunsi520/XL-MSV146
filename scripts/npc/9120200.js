/**
	Konpei - Near the Hideout(801040000)
*/

function start() {
    cm.sendYesNo("如果你想返回#m801000000#，就和我说话吧");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("如果你想返回#m801000000#，就和我说话吧");
    } else {
	cm.warp(801000000,0);
    }
    cm.dispose();
}