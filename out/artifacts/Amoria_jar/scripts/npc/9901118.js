/* Coded by Alcandon */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {
        cm.dispose();
    
    } else if (mode == 0){
        cm.sendOk ("正在建设中。");
        cm.dispose();
    } else{             
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		cm.sendOk("#e嘿#r#h ##k，我为那3个NPC锻造兑换券，分别是新手属性、中等属性、困难属性的NPC。所需材料为：\r\n1个#i4005004#\r\n1个#i4005002#\r\n1个#i4005003#\r\n1个#i4005000#\r\n1个#i4005001#\r\n收集齐后，我会给你#i5220010#，去那3个NPC那里试试手气吧。");
		cm.dispose();
        //cm.sendNext ("那么你准备好材料了吗..？\r\n#L0#是的，我准备好了！\r\n#L1#没有，我还差一些。");	
 } else if (status == 1) {
cm.sendSimple("太好了！这是你的物品！现在去试试你的运气吧！");
} else if (status == 2) {
if (selection == 0) {
if (cm.haveItem(4005004, 1) && cm.haveItem(4005002, 1) && cm.haveItem(4005003, 1) && cm.haveItem(4005000, 1) && cm.haveItem(4005001, 1)) {
cm.gainItem(5220010, 1);
cm.sendOk("*叹气*...别想骗我...");
} else {
cm.sendOk("哦..好的..没关系。");
cm.dispose();
}
} else if (selection == 1) {
cm.sendOk("哦..好的..没关系。");
cm.dispose();
}
}
}
}