/*
	Gold Richie
*/

function start() {
    if (cm.haveItem(2430008)) {
	cm.sendNext("黄金罗盘已经准备好了。");
    } else {
	cm.sendNext("请确认你是否已准备好制作黄金罗盘的所有材料。制作一个需要1个空白罗盘，以及20个字母N、20个字母E、20个字母W和20个字母S。");
    }
}

function action(mode, type, selection) {
    cm.dispose();
}