
function action(mode, type, selection) {
    if (cm.isQuestActive(23005) && cm.haveItem(4032783)) {
	cm.sendNext("你将海报钉在了公告栏上。");
	cm.forceStartQuest(23006, "1");
	cm.gainItem(4032783, -1);
    } else {
    	cm.sendOk("这是埃德尔斯坦自由市场的公告栏。据说任何人都可以张贴海报，但公告栏上贴满了关于黑色之翼的宣传。");
    }
    cm.dispose();
}