
function action(mode, type, selection) {
if(cm.getPlayerStat("GM")==true){
    cm.openShop(9031006);
    cm.dispose();
	}else{
	cm.sendOk("仅限管理员");
	cm.dispose();
	}
}