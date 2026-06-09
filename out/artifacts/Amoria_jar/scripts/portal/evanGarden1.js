function enter(pi) {
	if(pi.isQuestActive(22008)){
		pi.warp(100030103, "west00");
	} else {
		pi.playerMessage("没有理由你不能去后院");
    } 
	return true;
}  