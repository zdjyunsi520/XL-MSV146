/* 	Jimmy
	Singa Random Hair/Color Changer
*/
var status = -1;
var mlg = 4430000;
var gml = 4033247;
var npcIndex;
var amount;
/*
    0: MLG to NX
    1: NX to MLG
    2: GML to Meso
    3: Meso to GML
*/

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
        var msg = "#b#L0#我想兑换枫叶金。\r\n";
        msg += "#L1#我想兑换枫叶点数。\r\n";
        msg += "#L2#我想兑换黄金枫叶。\r\n";
        msg += "#L3#我想兑换金币。#l";
        msg += "你想把多少枫叶金兑换成NX？";
	    cm.sendSimple(msg)
    }
    else if(status == 1 && selection == 0){ // MLG to NX
        npcIndex = selection;
        cm.sendGetNumber("你确定要兑换", 1, 1, 200);
    }
    else if(status == 2 && npcIndex == 0){
        amount = selection;
        var confirm = "枚枫叶金吗？#i " + amount + "你没有足够的枫叶金来兑换那么多。 " + mlg + "#\r\n";
        cm.sendYesNo(confirm)
    }
    else if(status == 3 && npcIndex == 0){
        if(cm.getQuantityOfItem(mlg) < amount){
            cm.sendOk("兑换成功，你失去了");
            return cm.dispose();
        }
        cm.gainItem(mlg, -amount)
        cm.getChar().gainMaplePoints(1000000 * amount);
        cm.sendOk("枚枫叶金。 " + amount + "你想把多少枫叶金兑换成NX？");
        return cm.dispose();
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    else if(status == 1 && selection == 1){ // NX to MLG
        npcIndex = selection;
        cm.sendGetNumber("NX来兑换", 1, 1, 200);
    }
    else if(status == 2 && npcIndex == 1){
        amount = selection;
        var confirm = "枚枫叶金吗？#i "+ 1200000 * amount + "#\r\n#r20%税率 " + amount + "你没有足够的枫叶金来兑换那么多。 " + mlg + "你没有足够的NX来兑换那么多枫叶金。";
        cm.sendYesNo(confirm)
    }
    else if(status == 3 && npcIndex == 1){
        if(cm.getChar().getMaplePoints() <  1200000 * amount){
            cm.sendOk("You do not have the enough NX to exchange for that much你想把多少枫叶金兑换成NX？");
            return cm.dispose();
        }
        cm.getChar().gainMaplePoints(1200000 * -amount);
        cm.gainItem(mlg, amount)
        cm.sendOk("枚枫叶金。 " + amount * 1200000 + "你想把多少黄金枫叶兑换成金币？");
        return cm.dispose();
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    else if(status == 1 && selection == 2){ // GML to Meso
        npcIndex = selection;
        cm.sendGetNumber("枚黄金枫叶？#i", 1, 1, 200);
    }
    else if(status == 2 && npcIndex == 2){
            amount = selection;
            var confirm = "枚枫叶金吗？#i " + amount + "枚黄金枫叶。 " + gml + "#\r\n";
            cm.sendYesNo(confirm)
     }
    else if(status == 3 && npcIndex == 2){
        if(cm.getQuantityOfItem(gml) < amount){
            cm.sendOk("兑换成功，你失去了");
            return cm.dispose();
        }
        cm.gainItem(gml, -amount)
        cm.gainMeso(1000000000 * amount);
        cm.sendOk("枚枫叶金。 " + amount + "你想把多少黄金枫叶兑换成金币？");
        return cm.dispose();
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    else if(status == 1 && selection == 3){ // Meso to GML
         npcIndex = selection;
         cm.sendGetNumber("金币来兑换", 1, 1, 200)
    }
    else if(status == 2 && npcIndex == 3){
            amount = selection;
            var confirm = "枚枫叶金吗？#i "+ 1200000000 * amount + "你没有足够的金币来兑换那么多黄金枫叶。 " + amount + "枚黄金枫叶。 " + gml + "你没有足够的NX来兑换那么多枫叶金。";
            cm.sendYesNo(confirm)
    }
    else if(status == 3 && npcIndex == 3){
        if(cm.getMeso() <  1200000000 * amount){
            cm.sendOk("You do not have the enough Mesos to exchange for that much你想把多少黄金枫叶兑换成金币？");
            return cm.dispose();
        }
        cm.gainMeso(1200000000 * -amount);
        cm.gainItem(gml, amount)
        cm.sendOk("枚枫叶金。 " + amount * 1200000000 + "金币。");
        return cm.dispose();
    }
}