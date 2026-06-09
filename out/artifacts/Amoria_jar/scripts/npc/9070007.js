
function start() {
    cm.sendYesNo("你现在很忙吧？你应该试试进去看看。进去之后可能会到一个奇怪的地方。");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendNext("嘿，嘿……我觉得你没有什么小怪可以训练……也许我的朋友心情好的话会送你一只……你可以通过输入命令：#b@pokemon#k来和我的朋友对话。");
    } else {
	if (cm.getPlayer().getBattler(0) != null || cm.getPlayer().getBoxed().size() >= 1) {
	    cm.warp(193000000, 0);
	} else {
	    cm.sendNext("嘿，嘿……我觉得你没有什么小怪可以训练……也许我的朋友心情好的话会送你一只……你可以通过输入命令：#b@pokemon#k来和我的朋友对话。");
	}
    }
    cm.dispose();
}