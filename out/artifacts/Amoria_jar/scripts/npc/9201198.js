var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
	
    if (status == 0) {
        cm.sendOk("我什么都能做！皮奥叔叔从小教了我他所有的手艺。");
        cm.dispose();
    }
}