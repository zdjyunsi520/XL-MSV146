/*
Muirhat - Nautilus' Port
*/


function start() {
    if (cm.isQuestActive(2175)) {
	cm.sendOk("你准备好了吗？好的，我会把你送到黑魔法师弟子们所在的地方。在我送你去的区域附近找找猪。你可以通过追踪它们来找到目标。");
    } else {
    	cm.sendOk("黑魔法师和他的追随者。凯琳和诺特勒斯的船员们。\n 他们会一直追逐对方，直到其中一方不复存在，这是肯定的。");
	cm.safeDispose();
    }
}

function action(mode, type, selection) {
    cm.warp(912000000,0);
    cm.dispose();
}
