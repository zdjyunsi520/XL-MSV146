/* Dawnveil
    Maple Castle
    Made by Daenerys
*/
function enter(pi) {
    if (pi.getQuestStatus(13108)==1 && pi.itemQuantity(3994659) < 1){
        pi.warp(910028360,1);
		pi.forceCompleteQuest(13108);
		pi.gainItem(3994659,1);
        return;
	} else {
	pi.topMsg("你现在不能进入餐厅。");
	}
}