/**
	Pison - Florina Beach(110000000)
**/
var status = -1;
var returnmap = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("你到这里来一定有事要办吧。在#m"+returnmap+"# 休息一下也不错。看看我，我太喜欢这里了，结果就住下来了。哈哈，总之，想回去的时候跟我说。");
	cm.safeDispose();
	return;
    }
    if (status == 0) {
	returnmap = cm.getSavedLocation("FLORINA");
	cm.sendNext("所以你想离开#b#m110000000##k吗？如果你想的话，我可以带你回到#b#m"+returnmap+"##k.");
    } else if (status == 1) {
	cm.sendYesNo("你确定要回到#b#m"+returnmap+"##k吗？好的，我们得赶紧出发了。你要现在回到#m"+returnmap+"# 吗？")
    } else if (status == 2) {
	if (returnmap < 0) {
		returnmap = 104000000;
	}
	cm.warp(returnmap);
	cm.clearSavedLocation("FLORINA");
	cm.dispose();
    }
}
