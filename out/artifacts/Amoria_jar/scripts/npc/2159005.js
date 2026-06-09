var status = -1;
function action(mode, type, selection) {
    status++;
    if (status == 0) {
    	cm.sendNext("哎呀，你找到我了。我还以为我找了个绝佳的位置呢。");
    } else if (status == 1) {
    	cm.dispose();
    }
}