/* Gordon
	El Nath: El Nath Market (211000100)
	
	Refining NPC: 
	* Shoes, level 60-80 all classes
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
	var selStr = "你好。冰封雪域的冬天极其寒冷，你需要一双温暖的鞋子才能在这里生存。#b"
	var options = new Array("制作战士鞋子","制作弓箭手鞋子","制作魔法师鞋子","制作飞侠鞋子");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}
			
	cm.sendSimple(selStr);
    }
    else if (status == 1 && mode == 1) {
	selectedType = selection;
	var selStr;
	var shoes;
	if (selectedType == 0){ //warrior shoes
	    selStr = "战士鞋子？好的，要哪套？#b";
	    var shoes = new Array ("蓝宝石骆驼靴#k - 战士 Lv.60#b","秘银骆驼靴#k - 战士 Lv.60#b","血红骆驼靴#k - 战士 Lv.60#b",
		"蓝色卡岑靴#k - 战士 Lv.70#b","紫色卡岑靴#k - 战士 Lv.70#b","暗黑卡岑靴#k - 战士 Lv.70#b",
		"红色河流靴#k - 战士 Lv.80#b","蓝色河流靴#k - 战士 Lv.80#b","暗黑河流靴#k - 战士 Lv.80#b");
	}
	else if (selectedType == 1){ //bowman shoes
	    selStr = "弓箭手鞋子？好的，要哪套？#b";
	    var shoes = new Array ("红色血腥靴#k - 弓箭手 Lv.60#b","蓝色血腥靴#k - 弓箭手 Lv.60#b","绿色血腥靴#k - 弓箭手 Lv.60#b",
		"蓝色精灵靴#k - 弓箭手 Lv.70#b","米色精灵靴#k - 弓箭手 Lv.70#b","绿色精灵靴#k - 弓箭手 Lv.70#b","暗黑精灵靴#k - 弓箭手 Lv.70#b",
		"蓝色翅膀靴#k - 弓箭手 Lv.80#b","红色翅膀靴#k - 弓箭手 Lv.80#b","绿色翅膀靴#k - 弓箭手 Lv.80#b","暗黑翅膀靴#k - 弓箭手 Lv.80#b");
	}
	else if (selectedType == 2){ //mage shoes
	    selStr = "魔法师鞋子？好的，要哪套？#b";
	    var shoes = new Array ("粉色金靴#k - 魔法师 Lv.60#b","绿色金靴#k - 魔法师 Lv.60#b","橙色金靴#k - 魔法师 Lv.60#b","蓝色金靴#k - 魔法师 Lv.60#b",
		"蓝色拉皮斯凉鞋#k - 魔法师 Lv.70#b","红色拉皮斯凉鞋#k - 魔法师 Lv.70#b","棕色拉皮斯凉鞋#k - 魔法师 Lv.70#b","金色拉皮斯凉鞋#k - 魔法师 Lv.70#b",
		"绿色谜团鞋#k - 魔法师 Lv.80#b","紫色谜团鞋#k - 魔法师 Lv.80#b","暗黑谜团鞋#k - 魔法师 Lv.80#b");
	}
	else if (selectedType == 3){ //thief shoes
	    selStr = "飞侠鞋子？好的，要哪套？#b";
	    var shoes = new Array ("血红苔藓靴#k - 飞侠 Lv.60#b","金色苔藓靴#k - 飞侠 Lv.60#b","暗黑苔藓靴#k - 飞侠 Lv.60#b",
		"紫色奥秘鞋#k - 飞侠 Lv.70#b","蓝色奥秘鞋#k - 飞侠 Lv.70#b","红色奥秘鞋#k - 飞侠 Lv.70#b",
		"绿色海盗靴#k - 飞侠 Lv.80#b","红色海盗靴#k - 飞侠 Lv.80#b","暗黑海盗靴#k - 飞侠 Lv.80#b");
	}
	for (var i = 0; i < shoes.length; i++){
	    selStr += "\r\n#L" + i + "# " + shoes[i] + "#l";
	}
	cm.sendSimple(selStr);
    }
    else if (status == 2 && mode == 1) {
	selectedItem = selection;

	if (selectedType == 0){ //warrior shoes
	    var itemSet = new Array(1072147,1072148,1072149,1072154,1072155,1072156,1072210,1072211,1072212);
	    var matSet = new Array(new Array(4021008,4011007,4021005,4000030,4003000),new Array(4021008,4011007,4011005,4000030,4003000),new Array(4021008,4011007,4021000,4000030,4003000),
		new Array(4005000,4005002,4011002,4000048,4003000),new Array(4005000,4005002,4011005,4000048,4003000),new Array(4005000,4005002,4021008,4000048,4003000),
		new Array(4005000,4005002,4021000,4000030,4003000),new Array(4005000,4005002,4021002,4000030,4003000),new Array(4005000,4005002,4021008,4000030,4003000));
	    var matQtySet = new Array(new Array(1,1,8,80,55),new Array(1,1,8,80,55),new Array(1,1,8,80,55),new Array(1,3,5,100,55),new Array(2,2,5,100,55),new Array(3,1,1,100,55),
		new Array(2,3,7,90,65),new Array(3,2,7,90,65),new Array(4,1,2,90,65));
	    var costSet = new Array(60000,60000,60000,70000,70000,70000,80000,80000,80000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 1){ //bowman shoes
	    var itemSet = new Array(1072144,1072145,1072146,1072164,1072165,1072166,1072167,1072182,1072183,1072184,1072185);
	    var matSet = new Array(new Array(4011006,4021000,4021007,4000030,4003000),new Array(4011006,4021005,4021007,4000030,4003000),new Array(4011006,4021003,4021007,4000030,4003000),
		new Array(4005002,4005000,4021005,4000055,4003000),new Array(4005002,4005000,4021004,4000055,4003000),new Array(4005002,4005000,4021003,4000055,4003000),new Array(4005002,4005000,4021008,4000055,4003000),
		new Array(4005002,4005000,4021002,4000030,4003000),new Array(4005002,4005000,4021000,4000030,4003000),new Array(4005002,4005000,4021003,4000030,4003000),new Array(4005002,4021008,4000030,4003000));
	    var matQtySet = new Array(new Array(5,8,1,75,50),new Array(5,8,1,75,50),new Array(5,8,1,75,50),new Array(1,3,5,100,55),new Array(2,2,5,100,55),new Array(2,2,5,100,55),new Array(3,1,1,100,55),
		new Array(2,3,7,90,60),new Array(3,2,7,90,60),new Array(4,1,7,90,60),new Array(5,2,90,60));
	    var costSet = new Array(60000,60000,60000,70000,70000,70000,70000,80000,80000,80000,80000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 2){ //mage shoes
	    var itemSet = new Array(1072136,1072137,1072138,1072139,1072157,1072158,1072159,1072160,1072177,1072178,1072179);
	    var matSet = new Array(new Array(4021009,4011006,4011005,4000030,4003000),new Array(4021009,4011006,4021003,4000030,4003000),new Array(4021009,4011006,4011003,4000030,4003000),new Array(4021009,4011006,4021002,4000030,4003000),
		new Array(4005001,4005003,4021002,4000051,4003000),new Array(4005001,4005003,4021000,4000051,4003000),new Array(4005001,4005003,4011003,4000051,4003000),new Array(4005001,4005003,4011006,4000051,4003000),
		new Array(4005001,4005003,4021003,4000030,4003000),new Array(4005001,4005003,4021001,4000030,4003000),new Array(4005001,4005003,4021008,4000030,4003000));
	    var matQtySet = new Array(new Array(1,4,5,70,50),new Array(1,4,5,70,50),new Array(1,4,5,70,50),new Array(1,4,5,70,50),
		new Array(1,3,5,100,55),new Array(2,2,5,100,55),new Array(2,2,5,100,55),new Array(3,1,3,100,55),
		new Array(2,3,7,85,60),new Array(3,2,7,85,60),new Array(4,1,2,85,60));
	    var costSet = new Array(60000,60000,60000,60000,70000,70000,70000,70000,80000,80000,80000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //thief shoes
	    var itemSet = new Array (1072150,1072151,1072152,1072161,1072162,1072163,1072172,1072173,1072174);
	    var matSet = new Array(new Array(4021007,4011007,4021000,4000030,4003000),new Array(4021007,4011007,4011006,4000030,4003000),new Array(4021007,4011007,4021008,4000030,4003000),
		new Array(4005003,4005000,4021001,4000051,4003000),new Array(4005003,4005002,4021005,4000051,4003000),new Array(4005002,4005003,4021000,4000051,4003000),
		new Array(4005000,4005003,4021003,4000030,4003000),new Array(4005002,4005003,4021000,4000030,4003000),new Array(4005003,4005002,4021008,4000030,4003000));
	    var matQtySet = new Array(new Array(1,1,8,75,50),new Array(1,1,5,75,50),new Array(1,1,1,75,50),
		new Array(1,3,5,100,55),new Array(1,3,5,100,55),new Array(1,3,5,100,55),
		new Array(3,2,7,90,60),new Array(3,2,7,90,60),new Array(3,2,7,90,60));
	    var costSet = new Array(60000,60000,60000,70000,70000,70000,80000,80000,80000);
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
	    cm.sendOk("我只制作优质产品，没有合适的材料我无法做到。");
	else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++){
		    cm.gainItem(mats[i], -matQty [i]);
		}
	    }
	    else
		cm.gainItem(mats, -matQty );
					
	    cm.gainMeso(-cost );
				
	    cm.gainItem(item, 1);
	    cm.sendOk("全部完成。注意保暖！");
	}
	cm.dispose();
    }
}