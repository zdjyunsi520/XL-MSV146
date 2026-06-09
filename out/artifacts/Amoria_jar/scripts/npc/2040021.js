/* Tara
	Ludibrium : Tara and Sarah's House (220000303)
	
	Refining NPC: 
	* Shoes - All classes, 30-50, stimulator (4130001) available on upgrades
	* Price is 90% of locations on same items
*/

var status = -1;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var stimulator = false;
var stimID = 4130001;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	var selStr = "你好，欢迎来到玩具城鞋子店。请问有什么可以帮你的？#b"
	var options = new Array("什么是刺激剂？","制作战士鞋子","制作弓箭手鞋子","制作魔法师鞋子","制作飞侠鞋子",
	    "制作战士鞋子 with a Stimulator","制作弓箭手鞋子 with a Stimulator","制作魔法师鞋子 with a Stimulator","制作飞侠鞋子 with a Stimulator");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}
			
	cm.sendSimple(selStr);
    } else if (status == 1) {
	selectedType = selection;
	var selStr;
	var shoes = Array();
	if (selectedType > 4)
	{
	    stimulator = true;
	    selectedType -= 4;
	}
	else
	    stimulator = false;
	if (selectedType == 0){ // what is stim
	    cm.sendNext("刺激剂是一种特殊的药水，我可以在制作某些物品的过程中加入它。它会让物品获得像怪物掉落时一样的属性。但是，有可能不会产生任何变化，也有可能物品属性低于平均值。使用刺激剂还有10%的几率制作失败，所以请谨慎选择。")
	    cm.dispose();
	    return;
	}
	if (selectedType == 1){ //warrior shoe
	    selStr = "战士鞋子？没问题，你想要哪种？#b";
	    shoes = new Array ("翡翠战靴#k - 战士 Lv. 30#b","秘银战靴#k - 战士 Lv. 30#b","银色战靴#k - 战士 Lv. 30#b","血色战靴#k - 战士 Lv. 30#b",
		"钢铁战靴#k - 战士 Lv. 35#b","秘银战靴#k - 战士 Lv. 35#b","暗色战靴#k - 战士 Lv. 35#b",
		"棕色剑靴#k - 战士 Lv. 40#b","褐红色剑靴#k - 战士 Lv. 40#b","蓝色剑靴#k - 战士 Lv. 40#b",
		"翡翠希尔顿靴#k - 战士 Lv. 50#b","秘银希尔顿靴#k - 战士 Lv. 50#b","秘银希尔顿靴#k - 战士 Lv. 50#b","黄金希尔顿靴#k - 战士 Lv. 50#b");;
	}
	else if (selectedType == 2){ //bowman shoe
	    selStr = "弓箭手鞋子？没问题，你想要哪种？#b";
	    shoes = new Array ("红色猎人靴#k - 弓箭手 Lv. 30#b","蓝色猎人靴#k - 弓箭手 Lv. 30#b","绿色猎人靴#k - 弓箭手 Lv. 30#b","黑色猎人靴#k - 弓箭手 Lv. 30#b","棕色猎人靴#k - 弓箭手 Lv. 30#b",
		"蓝色丝滑靴#k - 弓箭手 Lv. 35#b","绿色丝滑靴#k - 弓箭手 Lv. 35#b","红色丝滑靴#k - 弓箭手 Lv. 35#b",
		"红色皮埃尔鞋#k - 弓箭手 Lv. 40#b","黄色皮埃尔鞋#k - 弓箭手 Lv. 40#b","棕色皮埃尔鞋#k - 弓箭手 Lv. 40#b","蓝色皮埃尔鞋#k - 弓箭手 Lv. 40#b",
		"棕色钢头靴#k - 弓箭手 Lv. 50#b","绿色钢头靴#k - 弓箭手 Lv. 50#b","蓝色钢头靴#k - 弓箭手 Lv. 50#b","紫色钢头靴#k - 弓箭手 Lv. 50#b");
	}
	else if (selectedType == 3){ //magician shoe
	    selStr = "魔法师鞋子？没问题，你想要哪种？#b";
	    shoes = new Array ("红色魔法鞋#k - 魔法师 Lv. 30#b","蓝色魔法鞋#k - 魔法师 Lv. 30#b","白色魔法鞋#k - 魔法师 Lv. 30#b","黑色魔法鞋#k - 魔法师 Lv. 30#b",
		"紫色盐鞋#k - 魔法师 Lv. 35#b","红色盐鞋#k - 魔法师 Lv. 35#b","黑色盐鞋#k - 魔法师 Lv. 35#b",
		"红色月鞋#k - 魔法师 Lv. 40#b","蓝色月鞋#k - 魔法师 Lv. 40#b","黄金月鞋#k - 魔法师 Lv. 40#b","暗色月鞋#k - 魔法师 Lv. 40#b",
		"粉色金风鞋#k - 魔法师 Lv. 50#b","蓝色金风鞋#k - 魔法师 Lv. 50#b","紫色金风鞋#k - 魔法师 Lv. 50#b","绿色金风鞋#k - 魔法师 Lv. 50#b");
	}
	else if (selectedType == 4){ //thief shoe
	    selStr = "飞侠鞋子？没问题，你想要哪种？#b";
	    shoes = new Array ("青铜链靴#k - 飞侠 Lv. 30#b","铁制链靴#k - 飞侠 Lv. 30#b","银色链靴#k - 飞侠 Lv. 30#b","黄金链靴#k - 飞侠 Lv. 30#b",
		"红色白条纹靴#k - 飞侠 Lv. 35#b","绿色白条纹靴#k - 飞侠 Lv. 35#b","蓝色白条纹靴#k - 飞侠 Lv. 35#b",
		"黑色红线条鞋#k - 飞侠 Lv. 40#b","黑色绿线条鞋#k - 飞侠 Lv. 40#b","黑色黄线条鞋#k - 飞侠 Lv. 40#b","黑色蓝线条鞋#k - 飞侠 Lv. 40#b",
		"蓝色高尼鞋#k - 飞侠 Lv. 50#b","红色高尼鞋#k - 飞侠 Lv. 50#b","绿色高尼鞋#k - 飞侠 Lv. 50#b","紫色高尼鞋#k - 飞侠 Lv. 50#b");
	}
		
	if (selectedType != 0)
	{
	    for (var i = 0; i < shoes.length; i++){
		selStr += "\r\n#L" + i + "# " + shoes[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
    } else if (status == 2) {
	selectedItem = selection;
	if (selectedType == 1){ //warrior shoe
	    var itemSet = new Array(1072003,1072039,1072040,1072041,1072002,1072112,1072113,1072000,1072126,1072127,1072132,1072133,1072134,1072135);
	    var matSet = new Array(new Array(4021003,4011001,4000021,4003000),new Array(4011002,4011001,4000021,4003000),
		new Array(4011004,4011001,4000021,4003000),new Array(4021000,4011001,4000021,4003000),new Array(4011001,4021004,4000021,4000030,4003000),new Array(4011002,4021004,4000021,4000030,4003000),new Array(4021008,4021004,4000021,4000030,4003000),
		new Array(4011003,4000021,4000030,4003000,4000103),new Array(4011005,4021007,4000030,4003000,4000104),new Array(4011002,4021007,4000030,4003000,4000105),new Array(4021008,4011001,4021003,4000030,4003000),
		new Array(4021008,4011001,4011002,4000030,4003000),new Array(4021008,4011001,4011005,4000030,4003000),new Array(4021008,4011001,4011006,4000030,4003000));
	    var matQtySet = new Array(new Array(4,2,45,15),new Array(4,2,45,15),new Array(4,2,45,15),new Array(4,2,45,15),new Array(3,1,30,20,25),new Array(3,1,30,20,25),new Array(2,1,30,20,25),
		new Array(4,100,40,30,100),new Array(4,1,40,30,100),new Array(4,1,40,30,100),new Array(1,3,6,65,45),new Array(1,3,6,65,45),new Array(1,3,6,65,45),new Array(1,3,6,65,45));
	    var costSet = new Array(20000,20000,20000,20000,22000,22000,25000,38000,38000,38000,50000,50000,50000,50000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 2){ //bowman shoe
	    var itemSet = new Array(1072079,1072080,1072081,1072082,1072083,1072101,1072102,1072103,1072118,1072119,1072120,1072121,1072122,1072123,1072124,1072125);
	    var matSet = new Array(new Array(4000021,4021000,4003000),new Array(4000021,4021005,4003000),new Array(4000021,4021003,4003000),
		new Array(4000021,4021004,4003000),new Array(4000021,4021006,4003000),new Array(4021002,4021006,4000030,4000021,4003000),new Array(4021003,4021006,4000030,4000021,4003000),new Array(4021000,4021006,4000030,4000021,4003000),
		new Array(4021000,4003000,4000030,4000106),new Array(4021006,4003000,4000030,4000107),new Array(4011003,4003000,4000030,4000108),new Array(4021002,4003000,4000030,4000099),new Array(4011001,4021006,4021008,4000030,4003000,4000033),
		new Array(4011001,4021006,4021008,4000030,4003000,4000032),new Array(4011001,4021006,4021008,4000030,4003000,4000041),new Array(4011001,4021006,4021008,4000030,4003000,4000042));
	    var matQtySet = new Array(new Array(50,2,15),new Array(50,2,15),new Array(50,2,15),new Array(50,2,15),new Array(50,2,15),
		new Array(3,1,15,30,20),new Array(3,1,15,30,20),new Array(3,1,15,30,20),new Array(4,30,45,100),new Array(4,30,45,100),new Array(5,30,45,100),new Array(5,30,45,100),
		new Array(3,3,1,60,35,80),new Array(3,3,1,60,35,150),new Array(3,3,1,60,35,100),new Array(3,3,1,60,35,250));
	    var costSet = new Array(19000,19000,19000,19000,19000,19000,20000,20000,20000,32000,32000,40000,40000,50000,50000,50000,50000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //magician shoe
	    var itemSet = new Array(1072075,1072076,1072077,1072078,1072089,1072090,1072091,1072114,1072115,1072116,1072117,1072140,1072141,1072142,1072143,1072136,1072137,1072138,1072139);
	    var matSet = new Array(new Array(4021000,4000021,4003000),new Array(4021002,4000021,4003000),new Array(4011004,4000021,4003000),new Array(4021008,4000021,4003000),new Array(4021001,4021006,4000021,4000030,4003000),new Array(4021000,4021006,4000021,4000030,4003000),
		new Array(4021008,4021006,4000021,4000030,4003000),new Array(4021000,4000030,4000110,4003000),new Array(4021005,4000030,4000111,4003000),new Array(4011006,4021007,4000030,4000100,4003000),new Array(4021008,4021007,4000030,4000112,4003000),
		new Array(4021009,4011006,4021000,4000030,4003000),new Array(4021009,4011006,4021005,4000030,4003000),new Array(4021009,4011006,4021001,4000030,4003000),new Array(4021009,4011006,4021003,4000030,4003000));
	    var matQtySet = new Array(new Array(2,50,15),new Array(2,50,15),new Array(2,50,15),new Array(1,50,15),new Array(3,1,30,15,20),new Array(3,1,30,15,20),new Array(2,1,40,25,20),new Array(4,40,100,25),new Array(4,40,100,25),new Array(2,1,40,100,25),new Array(2,1,40,100,30),
		new Array(1,3,3,60,40),new Array(1,3,3,60,40),new Array(1,3,3,60,40),new Array(1,3,3,60,40));
	    var costSet = new Array(18000,18000,18000,18000,20000,20000,22000,30000,30000,35000,40000,50000,50000,50000,50000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 4){ //thief shoe
	    var itemSet = new Array(1072032,1072033,1072035,1072036,1072104,1072105,1072106,1072107,1072108,1072109,1072110,1072128,1072130,1072129,1072131);
	    var matSet = new Array(new Array(4011000,4000021,4003000),new Array(4011001,4000021,4003000),new Array(4011004,4000021,4003000),new Array(4011006,4000021,4003000),new Array(4021000,4021004,4000021,4000030,4003000),new Array(4021003,4021004,4000021,4000030,4003000),
		new Array(4021002,4021004,4000021,4000030,4003000),new Array(4021000,4000030,4000113,4003000),new Array(4021003,4000030,4000095,4003000),new Array(4021006,4000030,4000096,4003000),new Array(4021005,4000030,4000097,4003000),new Array(4011007,4021005,4000030,4000114,4003000),
		new Array(4011007,4021000,4000030,4000115,4003000),new Array(4011007,4021003,4000030,4000109,4003000),new Array(4011007,4021001,4000030,4000036,4003000));
	    var matQtySet = new Array(new Array(3,50,15),new Array(3,50,15),new Array(2,50,15),new Array(2,50,15),new Array(3,1,30,15,20),new Array(3,1,30,15,20),new Array(3,1,30,15,20),
		new Array(5,45,100,30),new Array(4,45,100,30),new Array(4,45,100,30),new Array(4,45,100,30),new Array(2,3,50,100,35),new Array(2,3,50,100,35),new Array(2,3,50,100,35),new Array(2,3,50,80,35));
	    var costSet = new Array(19000,19000,19000,21000,20000,20000,20000,40000,32000,35000,35000,50000,50000,50000,50000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
		
	//Ludi fee is -10%, array not changed unlike 2040016 and 2040020
	cost = cost * .9;
		
	var prompt = "你想让我制作#t" + item + "#？那样的话，我需要你提供特定的材料才能制作。请确保你的背包有足够的空间！#b";
		
	if(stimulator)
	    prompt += "\r\n#i"+stimID+"# 1 #t" + stimID + "#";

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
    } else if (status == 3) {
	var complete = false;
		
	if (cm.getMeso() < cost) {
	    cm.sendOk("恐怕你付不起我的服务费用。")
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
			
	if (stimulator){ //check for stimulator
	    if (!cm.haveItem(stimID)) {
		complete = false;
	    }
	}
			
	if (!complete)
	    cm.sendOk("抱歉，我必须有那些材料才能完美制作。也许下次吧。");
	else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++){
		    cm.gainItem(mats[i], -matQty[i]);
		}
	    } else {
		cm.gainItem(mats, -matQty);
	    }
	    cm.gainMeso(-cost);
	    if (stimulator) { //check for stimulator
		cm.gainItem(stimID, -1);
		var deleted = Math.floor(Math.random() * 10);
		if (deleted != 0) {
		    cm.gainItem(item, 1, true);
		    cm.sendOk("好了，鞋子做好了。小心，它们还很烫。");
		} else {
		    cm.sendOk("哎呀！我想我不小心加了太多刺激剂，结果……整件东西都不能用了……抱歉，我无法退款。");
		}
	    } else { //just give basic item
		cm.gainItem(item, 1);
		cm.sendOk("好了，鞋子做好了。小心，它们还很烫。");
	    }
	}
	cm.safeDispose();
    }
}