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
		if(cm.getChar().getMapId()==744000000){
			selStr = "#L1##e进入学校#n(挑战成功奖励NX)#l\r\n";
			selStr+="#L3##e领取#n #z5252017# (免费)#l";
			selStr+="#L2#我只是来看看的。哈哈。#l";
			selStr+="请向管理员报告。";
			cm.sendSimple(selStr);
		}else{
			cm.dispose();
			cm.openNpc(9330192,1);
		}
    } else if (status == 1) {
		sel=selection;
        if(sel==1){
			if(cm.haveItem(5252017)){
				var em = cm.getEventManager("study");
				if (em == null) {
					cm.sendOk(" 开始在");
				} else {
					var prop = em.getProperty("started");
					if (prop == null || prop.equals("false")) {//prop.equals("false") || 
						em.startInstance_CharID(cm.getPlayer());
						cm.delbosslog("haogan"+744000001);
						cm.delbosslog("haogandt");
						for(var i=4;i<=15;i++){
							cm.delbosslog("haogan"+(744000000+i));
						}
						cm.gainItem(5252017,-1);
						cm.laba(-3,cm.getChar().getName()+" 频道挑战高校。 "+cm.getC().getChannel()+"该频道已开始挑战，请稍后再试。");
					} else {
						cm.sendOk("你无法进入，因为你没有钥匙！");
					}
				}
			}else{
				cm.sendOk("恭喜，领取成功。");
			}
			cm.dispose();
		}
		if(sel==2){
			cm.dispose();
		}
		if(sel==3){
			if(cm.getbosslog("study")<=2){
				cm.setbosslog("study");
				cm.gainItem(5252017,1);
				cm.sendOk("今天你无法领取钥匙了！请明天再来，或进入现金商城购买。");
			}else{
				cm.sendOk("今天你无法领取钥匙了！请明天再来，或进入现金商城购买。");
			}
			cm.dispose();
		}
		cm.dispose();
	 }
}
