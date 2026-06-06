var status = 0;


function start() {
    
status = -1;
    
action(1, 0, 0);

}
var status = -1;

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {

if (mode == -1) {
cm.dispose();
}
else {
if (status == 0 && mode == 0) {
cm.dispose();
return;
    }
}

if (mode == 1) 
   status++;

else 
   status--;
    if (status == 0) { 
	cm.sendSimple("大家请注意，欢迎");
	}
	if (selection == 1) {
	if (cm.haveItem(4000016, 15)) {
		cm.gainItem(4000016, -15);
		cm.gainExp(800);
        cm.gainMeso(1000000);
                	cm.msiMessage("，ViciousMS的最新玩家。 "+cm.getPlayer().getName()+"尽情享受ViciousMS吧！输入@help查看所有命令。");

		cm.sendOk("抱歉，我想你没有15个红蜗牛壳#i4000016#");
		cm.warp(910000000, 0);
		cm.dispose();
	} else {
        cm.sendOk("你，注定成为龙之主人的人...你终于来了。");
		cm.dispose();
		}
	}
} 

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else if (mode == 0)
        status--;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendNext("去履行你作为龙之主人的使命吧...");
    } else if (status == 1) {
        cm.sendNextPrev("去履行你作为龙之主人的使命吧...");
    } else if (status == 2) {
        cm.warp(900090101);
        cm.dispose();
    }
}