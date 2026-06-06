
/* Neve
	Orbis: Orbis Park (200000200)
	
	Refining NPC: 
	* Gloves, level 70-80 all classes
*/

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	cm.dispose();
    if (status == 0 && mode == 1) {
	var selStr = "你好。我是天空之城第一手套制作师。需要我为你做点什么吗？#b"
	var options = new Array("制作或升级战士手套","制作或升级弓箭手手套","制作或升级魔法师手套","制作或升级飞侠手套");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}
			
	cm.sendSimple(selStr);
    }
    else if (status == 1 && mode == 1) {
	selectedType = selection;
	if (selectedType == 0){ //warrior glove
	    var selStr = "战士手套？好的，要哪种？#b";
	    var gloves = new Array ("青铜护手#k - 战士 Lv.70#b","秘银护手#k - 战士 Lv.70#b","暗黑护手#k - 战士 Lv.70#b",
		"蓝宝石帝王手套#k - 战士 Lv.80#b","绿宝石帝王手套#k - 战士 Lv.80#b","血红帝王手套#k - 战士 Lv.80#b","暗黑帝王手套#k - 战士 Lv.80#b");
	    for (var i = 0; i < gloves.length; i++){
		selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 1){ //bowman glove
	    var selStr = "弓箭手手套？好的，要哪种？#b";
	    var gloves = new Array ("蓝色之眼#k - 弓箭手 Lv.70#b","金色之眼#k - 弓箭手 Lv.70#b","暗黑之眼#k - 弓箭手 Lv.70#b",
		"红色勋带#k - 弓箭手 Lv.80#b","蓝色勋带#k - 弓箭手 Lv.80#b","绿色勋带#k - 弓箭手 Lv.80#b","暗黑勋带#k - 弓箭手 Lv.80#b");
	    for (var i = 0; i < gloves.length; i++){
		selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 2){ //mage glove
	    var selStr = "魔法师手套？好的，要哪种？#b";
	    var gloves = new Array ("棕色洛林#k - 魔法师 Lv.70#b","蓝色洛林#k - 魔法师 Lv.70#b","暗黑洛林#k - 魔法师 Lv.70#b",
		"绿色澄明#k - 魔法师 Lv.80#b","蓝色澄明#k - 魔法师 Lv.80#b","暗黑澄明#k - 魔法师 Lv.80#b");
	    for (var i = 0; i < gloves.length; i++){
		selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 3){ //thief glove
	    var selStr = "飞侠手套？好的，要哪种？#b";
	    var gloves = new Array ("青铜漫游者#k - 飞侠 Lv.70#b","银色漫游者#k - 飞侠 Lv.70#b","金色漫游者#k - 飞侠 Lv.70#b",
		"绿色盗窃#k - 飞侠 Lv.80#b","紫色盗窃#k - 飞侠 Lv.80#b","暗黑盗窃#k - 飞侠 Lv.80#b");
	    for (var i = 0; i < gloves.length; i++){
		selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
    }
    else if (status == 2 && mode == 1) {
	selectedItem = selection;

	if (selectedType == 0){ //warrior glove
	    var itemSet = new Array(1082103,1082104,1082105,1082114,1082115,1082116,1082117,1082118);
	    var matSet = new Array(new Array(4005000,4011000,4011006,4000030,4003000),new Array(1082103,4011002,4021006),new Array(1082103,4021006,4021008),new Array(4005000,4005002,4021005,4000030,4003000),new Array(1082114,4005000,4005002,4021003),new Array(1082114,4005002,4021000),new Array(1082114,4005000,4005002,4021008));
	    var matQtySet = new Array(new Array(2,8,3,70,55),new Array(1,6,4),new Array(1,8,3),new Array(2,1,8,90,60),new Array(1,1,1,7),new Array(1,3,8),new Array(1,2,1,4));
	    var costSet = new Array(90000,90000,100000,100000,110000,110000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 1){ //bowman glove
	    var itemSet = new Array(1082106,1082107,1082108,1082109,1082110,1082111,1082112);
	    var matSet = new Array(new Array(4005002,4021005,4011004,4000030,4003000),new Array(1082106,4021006,4011006),new Array(1082106,4021007,4021008),new Array(4005002,4005000,4021000,4000030,4003000),new Array(1082109,4005002,4005000,4021005),new Array(1082109,4005002,4005000,4021003),new Array(1082109,4005002,4005000,4021008));
	    var matQtySet = new Array(new Array(2,8,3,70,55),new Array(1,5,3),new Array(1,2,3),new Array(2,1,8,90,60),new Array(1,1,1,7),new Array(1,1,1,7),new Array(1,2,1,4));
	    var costSet = new Array(90000,90000,100000,100000,110000,110000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 2){ //mage glove
	    var itemSet = new Array(1082098,1082099,1082100,1082121,1082122,1082123);
	    var matSet = new Array(new Array(4005001,4011000,4011004,4000030,4003000),new Array(1082098,4021002,4021007),new Array(1082098,4021008,4011006),new Array(4005001,4005003,4021003,4000030,4003000),new Array(1082121,4005001,4005003,4021005),new Array(1082121,4005001,4005003,4021008));
	    var matQtySet = new Array(new Array(2,6,6,70,55),new Array(1,6,2),new Array(1,3,3),new Array(2,1,8,90,60),new Array(1,1,1,7),new Array(1,2,1,4));
	    var costSet = new Array(90000,90000,100000,100000,110000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //thief glove
	    var itemSet = new Array (1082095,1082096,1082097,1082118,1082119,1082120);
	    var matSet = new Array(new Array(4005003,4011000,4011003,4000030,4003000),new Array(1082095,4011004,4021007),new Array(1082095,4021007,4011006),new Array(4005003,4005002,4011002,4000030,4003000),new Array(1082118,4005003,4005002,4021001),new Array(1082118,4005003,4005002,4021000));
	    var matQtySet = new Array(new Array(2,6,6,70,55),new Array(1,6,2),new Array(1,3,3),new Array(2,1,8,90,60),new Array(1,1,1,7),new Array(1,2,1,8));
	    var costSet = new Array(90000,90000,100000,100000,110000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
		
	var prompt = "你想让我制作#t" + item + "#？那样的话，我需要你提供特定的材料才能制作。请确保你的物品栏有空间！#b";

	if (mats instanceof Array){
	    for(var i = 0; i < mats.length; i++){
		prompt += "\r\n#i"+mats[i]+"# " + matQty[i] + " #t" + mats[i] + "#";
	    }
	}
	else {
	    prompt += "\r\n#i"+mats+"# " + matQty + " #t" + mats + "#";
	}
		
	if (cost > 0)
	    prompt += "\r\n#i4031138# " + cost + " 金币";
		
	cm.sendYesNo(prompt);
    }
    else if (status == 3 && mode == 1) {
	var complete = false;
		
	if (cm.getMeso() < cost) {
	    cm.sendOk("恐怕你付不起我的服务费。")
	    cm.dispose();
	    return;
	} else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++) {
		    complete = cm.haveItem(mats[i], matQty[i]);
		    if (!complete) {
			break;
		    }
		}
	    } else {
		complete = cm.haveItem(mats, matQty);
	    }	
        }
			
	if (!complete)
	    cm.sendOk("恐怕替代材料是不被接受的，如果你想让我好好制作手套的话。");
	else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++){
		    cm.gainItem(mats[i], -matQty[i]);
		}
	    }
	    else
		cm.gainItem(mats, -matQty);
					
	    cm.gainMeso(-cost);
	    cm.gainItem(item, 1);
	    cm.sendOk("完成了。如果你还需要什么，尽管开口。");
	}
	cm.dispose();
    }
}