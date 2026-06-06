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
	cm.sendSimple("尽情享受ViciousMS吧！输入@help查看所有命令。");
	}
	if (selection == 1) {
	if (cm.haveItem(4000016, 15)) {
		cm.gainItem(4000016, -15);
		cm.gainExp(800);
        cm.gainMeso(1000000);
		cm.sendOk("大家请注意，欢迎");
        	cm.msiMessage("，ViciousMS的最新玩家。 "+cm.getPlayer().getName()+"抱歉，我想你没有15个红蜗牛壳#i4000016#");
		cm.warp(100000000, 0);
		cm.dispose();
	} else {
        cm.sendOk("抱歉，我想你没有15个红蜗牛壳#i4000016#");
		cm.dispose();
		}
	}
}