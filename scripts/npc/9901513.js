var status;

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


if (cm.getPlayer().getReborns() >= 500) {
	cm.sendSimple("[GM职业]恭喜");
	cm.changeJobById(900)
	cm.msiMessage("获得GM职业。 "+cm.getPlayer().getName()+"你需要至少500次转生才能获得GM职业。");
	cm.dispose();
	}else {
	cm.sendOk("你需要至少500次转生才能获得GM职业。");
	cm.dispose();
}
}
}


