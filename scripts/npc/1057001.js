function action(mode, type, selection) {
	if (cm.getPlayer().getLevel() < 20) {	
		if (cm.getPlayer().getSubcategory() != 1) {
			cm.sendOk("你必须在角色选择界面选中双刀才能和我对话。");
		} else {
			cm.sendOk("你必须先完成2级和9级的任务才能和我对话。");
		}
	} else {
		cm.sendOk("我把守着秘密花园的入口……哎呀，不再秘密了，是吧？");
	}
	cm.safeDispose();
}