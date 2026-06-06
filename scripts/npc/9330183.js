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
        selStr = "#L1#那么，呃，你有喜欢的人吗？#l\r\n";
		selStr+="#L2#我喜欢你。#l\r\n";
		selStr+="#L3#我们交往吧！#l\r\n";
		selStr+="#L4#你让我心跳加速..#l\r\n";
		selStr+="你是认真的吗？..";
        cm.sendSimple(selStr);
    } else if (status == 1) {
		sel=selection;
        if(sel==1){
			cm.sendOk("我....也...嗯....我们交往吧！");
		}
		if(sel==2){
			cm.sendOk("oh...dam..");
		}
		if(sel==3){
			cm.sendOk("好吧，你赢了。去找你的老师提升好感度吧！");
		}
		if(sel==4){
			cm.removeNpc(9330183);
			cm.spawnNpc(9330192,198,157);
			cm.getPlayer().getMap().startSimpleMapEffect("好吧，你赢了。去找你的老师提升好感度吧！", 5120067);
		}
		cm.dispose();
	}
}