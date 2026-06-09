/* Dawnveil
    Enter Gollux Head
	Heart Tree Guardian
    Made by Daenerys
*/
var status = -1;
var selection = -1;

function start() {
    status = -1;
    selection = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 0) {
        cm.sendSimpleS("请确保你已达到#e#bLv.140#n#k并拥有#i4033981##e#r脆弱心之树钥匙#k。",5);
    } else if (status == 1) {
    if (selection == 0) {
	    if (cm.getPlayer().getLevel() >= 140 && cm.haveItem(4033981, 1)) {
		cm.warp(863000920);
		cm.dispose();
		}else
         cm.sendOk("改变主意了再回来找我吧。");
         cm.dispose();
		return;
	} else if (selection == 1) {		
		 cm.sendNext("改变主意了再回来找我吧。");
         cm.dispose();
		 return;	 
     }
   }
}
