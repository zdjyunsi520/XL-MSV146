var status = 0;
var selStr;
var sel;
var selitem;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext("谢谢你的帮助！我得复习一下我的亡灵术！哇啊啊..");
    } else if (status == 1) {
		if(cm.getChar().getMap().getAllMonstersThreadsafe().size()==0){
			if(cm.getfsblog("totem")==0){
				cm.setbosslog("totem");
				cm.makeitem(1202042+(Math.floor(Math.random()*4)+1),0,0,0,0,0,0,1,7,"");
			}
			cm.sendOk("谢谢你的帮助！我得复习一下我的亡灵术！哇啊啊..");
		}
		cm.dispose();
	}
}