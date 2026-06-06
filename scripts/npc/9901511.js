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
	cm.sendSimple("毒药准备好了，现在去拿1个绿苹果，然后去找邪恶巫师，把毒苹果给他！");
	}
	if (selection == 1) {
	if (cm.haveItem(4000019, 10)&& cm.haveItem(4000016,5) && cm.haveItem(4000000,3)){
	    cm.gainItem(4000019, -10);
		cm.gainItem(4000016, -5);
		cm.gainItem(4000000, -3);
		cm.gainItem(4001162, 1);
		cm.sendOk("我觉得你还差一些物品");
		cm.dispose();
	} else {
        cm.sendOk("我觉得你还差一些物品");
		cm.dispose();
		}
	}
}