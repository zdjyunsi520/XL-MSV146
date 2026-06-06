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
cm.sendAcceptDecline("JQ积分#k。\r\n我看到你通过了跳跳任务，我可以给你#r1#k点JQ积分"+cm.getJQPoints()+"未知地图ID");
}else if (status == 1) {
if (cm.haveItem(4033039,1)) {
 var map = cm.getPlayer().getMapId();
 var mapname = "熔岩之息";
 if (map == 280020001) {//lava
 mapname = "幽灵烟囱"
 }else if (map == 682000200) {//chimney
 mapname = "体能测试";
 }else if (map == 109050000) {//fitness
 mapname = "毅力之森";
 }else if (map == 910530001) {//Tenacity
 mapname = "忍耐之森";
 }else if (map == 690000070) {//Patiance
 mapname = "[JQ公告] 恭喜";
 }
    cm.warp(910000000,0);
	cm.gainItem(4033039,-1);
	cm.gainJQPoints(1);
	cm.msiMessage("通过了 "+cm.getPlayer().getName()+"跳跳任务。 "+mapname+"试图在没有所需物品的情况下通过跳跳任务");
	cm.dispose();
}else {
	cm.msiMessage("通过了 "+cm.getPlayer().getName()+"试图在没有所需物品的情况下通过跳跳任务");
	cm.dispose();
}
}
}