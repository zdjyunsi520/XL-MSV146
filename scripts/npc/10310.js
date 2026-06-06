/* RED 1st impact
    Ray of Light
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNextS("不，太可怕了……",16);
            cm.dispose();
        status--;
    }
    if(cm.isAllReactorState(1008010, 0) == false){
		if (status == 0) {
	    cm.sendYesNo("你想离开这里前往新世界吗？");
    } else if (status == 1) {	
	    cm.sendNextS("出发吧！",16);
	} else if (status == 2) {	
	    cm.warp(4000002,0);
        cm.dispose();
    }
	}else{
		cm.topMsg("如果你不打破锁链，你就无法离开。");
		cm.dispose();
    
    }
}