/* Chrishrama
	Dungeon: Sleepywood (105040300)
	
	Refining NPC: 
	* Shoes - All classes, 25 (20 for magicians)-60
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
	var selStr = "你好，我住在这里，但别小看我。要不要让我帮你做一双新鞋子？#b"
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
	if (selectedType == 0){ //warrior shoe
	    selStr = "战士鞋子？没问题，你要哪种？#b";
	    shoes = new Array ("银色战靴#k - 战士 Lv.25#b","金色战靴#k - 战士 Lv.25#b","暗黑战靴#k - 战士 Lv.25#b",
		"翡翠战斗护胫#k - 战士 Lv.30#b","秘银战斗护胫#k - 战士 Lv.30#b","银色战斗护胫#k - 战士 Lv.30#b","血色战斗护胫#k - 战士 Lv.30#b",
		"钢铁扳机靴#k - 战士 Lv.35#b","秘银扳机靴#k - 战士 Lv.35#b","暗黑扳机靴#k - 战士 Lv.35#b",
		"棕色武功靴#k - 战士 Lv.40#b","褐红色武功靴#k - 战士 Lv.40#b","蓝色武功靴#k - 战士 Lv.40#b",
		"翡翠希尔顿靴#k - 战士 Lv.50#b","秘银希尔顿靴#k - 战士 Lv.50#b","奥利哈康希尔顿靴#k - 战士 Lv.50#b","金色希尔顿靴#k - 战士 Lv.50#b",
		"蓝宝石骆驼靴#k - 战士 Lv.60#b","奥利哈康骆驼靴#k - 战士 Lv.60#b","血色骆驼靴#k - 战士 Lv.60#b");;
	}
	else if (selectedType == 1){ //bowman shoe
	    selStr = "弓箭手鞋子？没问题，你要哪种？#b";
	    shoes = new Array ("棕色杰克靴#k - 弓箭手 Lv.25#b","绿色杰克靴#k - 弓箭手 Lv.25#b","红色杰克靴#k - 弓箭手 Lv.25#b",
		"红色猎人靴#k - 弓箭手 Lv.30#b","蓝色猎人靴#k - 弓箭手 Lv.30#b","绿色猎人靴#k - 弓箭手 Lv.30#b","黑色猎人靴#k - 弓箭手 Lv.30#b","棕色猎人靴#k - 弓箭手 Lv.30#b",
		"蓝色丝滑靴#k - 弓箭手 Lv.35#b","绿色丝滑靴#k - 弓箭手 Lv.35#b","红色丝滑靴#k - 弓箭手 Lv.35#b",
		"红色皮埃尔鞋#k - 弓箭手 Lv.40#b","黄色皮埃尔鞋#k - 弓箭手 Lv.40#b","棕色皮埃尔鞋#k - 弓箭手 Lv.40#b","蓝色皮埃尔鞋#k - 弓箭手 Lv.40#b",
		"棕色钢头靴#k - 弓箭手 Lv.50#b","绿色钢头靴#k - 弓箭手 Lv.50#b","蓝色钢头靴#k - 弓箭手 Lv.50#b","紫色钢头靴#k - 弓箭手 Lv.50#b",
		"红色血战靴#k - 弓箭手 Lv.60#b","蓝色血战靴#k - 弓箭手 Lv.60#b","绿色血战靴#k - 弓箭手 Lv.60#b");
	}
	else if (selectedType == 2){ //magician shoe
	    selStr = "魔法师鞋子？没问题，你要哪种？#b";
	    shoes = new Array ("蓝色珠宝鞋#k - 魔法师 Lv.20#b","紫色珠宝鞋#k - 魔法师 Lv.20#b","红色珠宝鞋#k - 魔法师 Lv.20#b",
		"银色风鞋#k - 魔法师 Lv.25#b","黄色风鞋#k - 魔法师 Lv.25#b","黑色风鞋#k - 魔法师 Lv.25#b",
		"红色魔法鞋#k - 魔法师 Lv.30#b","蓝色魔法鞋#k - 魔法师 Lv.30#b","白色魔法鞋#k - 魔法师 Lv.30#b","黑色魔法鞋#k - 魔法师 Lv.30#b",
		"紫色盐晶鞋#k - 魔法师 Lv.35#b","红色盐晶鞋#k - 魔法师 Lv.35#b","黑色盐晶鞋#k - 魔法师 Lv.35#b",
		"红色月牙鞋#k - 魔法师 Lv.40#b","蓝色月牙鞋#k - 魔法师 Lv.40#b","金色月牙鞋#k - 魔法师 Lv.40#b","暗黑月牙鞋#k - 魔法师 Lv.40#b",
		"粉色金风鞋#k - 魔法师 Lv.50#b","蓝色金风鞋#k - 魔法师 Lv.50#b","紫色金风鞋#k - 魔法师 Lv.50#b","绿色金风鞋#k - 魔法师 Lv.50#b",
		"粉色金跑鞋#k - 魔法师 Lv.60#b","绿色金跑鞋#k - 魔法师 Lv.60#b","橙色金跑鞋#k - 魔法师 Lv.60#b","蓝色金跑鞋#k - 魔法师 Lv.60#b");
	}
	else if (selectedType == 3){ //thief shoe
	    selStr = "飞侠鞋子？没问题，你要哪种？#b";
	    shoes = new Array ("蓝色拉比鞋#k - 飞侠 Lv.25#b","红色拉比鞋#k - 飞侠 Lv.25#b","绿色拉比鞋#k - 飞侠 Lv.25#b","黑色拉比鞋#k - 飞侠 Lv.25#b",
		"青铜链靴#k - 飞侠 Lv.30#b","铁链靴#k - 飞侠 Lv.30#b","银色链靴#k - 飞侠 Lv.30#b","金色链靴#k - 飞侠 Lv.30#b",
		"红色白条纹靴#k - 飞侠 Lv.35#b","绿色白条纹靴#k - 飞侠 Lv.35#b","蓝色白条纹靴#k - 飞侠 Lv.35#b",
		"黑色红线条鞋#k - 飞侠 Lv.40#b","黑色绿线条鞋#k - 飞侠 Lv.40#b","黑色黄线条鞋#k - 飞侠 Lv.40#b","黑色蓝线条鞋#k - 飞侠 Lv.40#b",
		"蓝色高尼鞋#k - 飞侠 Lv.50#b","红色高尼鞋#k - 飞侠 Lv.50#b","绿色高尼鞋#k - 飞侠 Lv.50#b","紫色高尼鞋#k - 飞侠 Lv.50#b",
		"血色苔藓靴#k - 飞侠 Lv.60#b","金色苔藓靴#k - 飞侠 Lv.60#b","暗黑苔藓靴#k - 飞侠 Lv.60#b");
	}
		
	for (var i = 0; i < shoes.length; i++){
	    selStr += "\r\n#L" + i + "# " + shoes[i] + "#l";
	}
	cm.sendSimple(selStr);
    }
    else if (status == 2 && mode == 1) {
	selectedItem = selection;
	if (selectedType == 0){ //warrior shoe
	    var itemSet = new Array(1072051,1072053,1072052,1072003,1072039,1072040,1072041,1072002,1072112,1072113,1072000,1072126,1072127,1072132,1072133,1072134,1072135,1072147,1072148,1072149);
	    var matSet = new Array(new Array(4011004,4011001,4000021,4003000),new Array(4011006,4011001,4000021,4003000),new Array(4021008,4011001,4000021,4003000),new Array(4021003,4011001,4000021,4003000),new Array(4011002,4011001,4000021,4003000),
		new Array(4011004,4011001,4000021,4003000),new Array(4021000,4011001,4000021,4003000),new Array(4011001,4021004,4000021,4000030,4003000),new Array(4011002,4021004,4000021,4000030,4003000),new Array(4021008,4021004,4000021,4000030,4003000),
		new Array(4011003,4000021,4000030,4003000,4000033),new Array(4011005,4021007,4000030,4003000,4000042),new Array(4011002,4021007,4000030,4003000,4000041),new Array(4021008,4011001,4021003,4000030,4003000),
		new Array(4021008,4011001,4011002,4000030,4003000),new Array(4021008,4011001,4011005,4000030,4003000),new Array(4021008,4011001,4011006,4000030,4003000),new Array(4021008,4011007,4021005,4000030,4003000),
		new Array(4021008,4011007,4011005,4000030,4003000),new Array(4021008,4011007,4021000,4000030,4003000));
	    var matQtySet = new Array(new Array(2,1,15,10),new Array(2,1,15,10),new Array(1,2,20,10),new Array(4,2,45,15),new Array(4,2,45,15),new Array(4,2,45,15),new Array(4,2,45,15),new Array(3,1,30,20,25),new Array(3,1,30,20,25),new Array(2,1,30,20,25),
		new Array(4,100,40,30,100),new Array(4,1,40,30,250),new Array(4,1,40,30,120),new Array(1,3,6,65,45),new Array(1,3,6,65,45),new Array(1,3,6,65,45),new Array(1,3,6,65,45),new Array(1,1,8,80,55),new Array(1,1,8,80,55),new Array(1,1,8,80,55));
	    var costSet = new Array(10000,10000,12000,20000,20000,20000,20000,22000,22000,25000,38000,38000,38000,50000,50000,50000,50000,60000,60000,60000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 1){ //bowman shoe
	    var itemSet = new Array(1072027,1072034,1072069,1072079,1072080,1072081,1072082,1072083,1072101,1072102,1072103,1072118,1072119,1072120,1072121,1072122,1072123,1072124,1072125,1072144,1072145,1072146);
	    var matSet = new Array(new Array(4000021,4011000,4003000),new Array(4000021,4021003,4003000),new Array(4000021,4021000,4003000),new Array(4000021,4021000,4003000),new Array(4000021,4021005,4003000),new Array(4000021,4021003,4003000),
		new Array(4000021,4021004,4003000),new Array(4000021,4021006,4003000),new Array(4021002,4021006,4000030,4000021,4003000),new Array(4021003,4021006,4000030,4000021,4003000),new Array(4021000,4021006,4000030,4000021,4003000),
		new Array(4021000,4003000,4000030,4000024),new Array(4021006,4003000,4000030,4000027),new Array(4011003,4003000,4000030,4000044),new Array(4021002,4003000,4000030,4000009),new Array(4011001,4021006,4021008,4000030,4003000,4000033),
		new Array(4011001,4021006,4021008,4000030,4003000,4000032),new Array(4011001,4021006,4021008,4000030,4003000,4000041),new Array(4011001,4021006,4021008,4000030,4003000,4000042),new Array(4011006,4021000,4021007,4000030,4003000),
		new Array(4011006,4021005,4021007,4000030,4003000),new Array(4011006,4021003,4021007,4000030,4003000));
	    var matQtySet = new Array(new Array(35,3,10),new Array(35,1,10),new Array(35,1,10),new Array(50,2,15),new Array(50,2,15),new Array(50,2,15),new Array(50,2,15),new Array(50,2,15),
		new Array(3,1,15,30,20),new Array(3,1,15,30,20),new Array(3,1,15,30,20),new Array(4,30,45,20),new Array(4,30,45,20),new Array(5,30,45,40),new Array(5,30,45,120),
		new Array(3,3,1,60,35,80),new Array(3,3,1,60,35,150),new Array(3,3,1,60,35,100),new Array(3,3,1,60,35,250),new Array(5,8,1,75,50),new Array(5,8,1,75,50),new Array(5,8,1,75,50));
	    var costSet = new Array(9000,9000,9000,19000,19000,19000,19000,19000,19000,20000,20000,20000,32000,32000,40000,40000,50000,50000,50000,50000,60000,60000,60000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 2){ //magician shoe
	    var itemSet = new Array(1072019,1072020,1072021,1072072,1072073,1072074,1072075,1072076,1072077,1072078,1072089,1072090,1072091,1072114,1072115,1072116,1072117,1072140,1072141,1072142,1072143,1072136,1072137,1072138,1072139);
	    var matSet = new Array(new Array(4021005,4000021,4003000),new Array(4021001,4000021,4003000),new Array(4021000,4000021,4003000),new Array(4011004,4000021,4003000),new Array(4021006,4000021,4003000),new Array(4021004,4000021,4003000),
		new Array(4021000,4000021,4003000),new Array(4021002,4000021,4003000),new Array(4011004,4000021,4003000),new Array(4021008,4000021,4003000),new Array(4021001,4021006,4000021,4000030,4003000),new Array(4021000,4021006,4000021,4000030,4003000),
		new Array(4021008,4021006,4000021,4000030,4003000),new Array(4021000,4000030,4000043,4003000),new Array(4021005,4000030,4000037,4003000),new Array(4011006,4021007,4000030,4000027,4003000),new Array(4021008,4021007,4000030,4000014,4003000),
		new Array(4021009,4011006,4021000,4000030,4003000),new Array(4021009,4011006,4021005,4000030,4003000),new Array(4021009,4011006,4021001,4000030,4003000),new Array(4021009,4011006,4021003,4000030,4003000),
		new Array(4021009,4011006,4011005,4000030,4003000),new Array(4021009,4011006,4021003,4000030,4003000),new Array(4021009,4011006,4011003,4000030,4003000),new Array(4021009,4011006,4021002,4000030,4003000));
	    var matQtySet = new Array(new Array(1,30,5),new Array(1,30,5),new Array(1,30,5),new Array(1,35,10),new Array(1,35,10),new Array(1,35,10),new Array(2,50,15),new Array(2,50,15),new Array(2,50,15),
		new Array(1,50,15),new Array(3,1,30,15,20),new Array(3,1,30,15,20),new Array(2,1,40,25,20),new Array(4,40,35,25),new Array(4,40,70,25),new Array(2,1,40,20,25),new Array(2,1,40,30,30),
		new Array(1,3,3,60,40),new Array(1,3,3,60,40),new Array(1,3,3,60,40),new Array(1,3,3,60,40),new Array(1,4,5,70,50),new Array(1,4,5,70,50),new Array(1,4,5,70,50),new Array(1,4,5,70,50));
	    var costSet = new Array(3000,3000,3000,8000,8000,8000,18000,18000,18000,18000,20000,20000,22000,30000,30000,35000,40000,50000,50000,50000,50000,60000,60000,60000,60000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //thief shoe
	    var itemSet = new Array(1072084,1072085,1072086,1072087,1072032,1072033,1072035,1072036,1072104,1072105,1072106,1072107,1072108,1072109,1072110,1072128,1072130,1072129,1072131,1072150,1072151,1072152);
	    var matSet = new Array(new Array(4021005,4000021,4003000),new Array(4021000,4000021,4003000),new Array(4021003,4000021,4003000),new Array(4021004,4000021,4003000),new Array(4011000,4000021,4003000),new Array(4011001,4000021,4003000),new Array(4011004,4000021,4003000),new Array(4011006,4000021,4003000),new Array(4021000,4021004,4000021,4000030,4003000),new Array(4021003,4021004,4000021,4000030,4003000),new Array(4021002,4021004,4000021,4000030,4003000),new Array(4021000,4000030,4000033,4003000),new Array(4021003,4000030,4000032,4003000),new Array(4021006,4000030,4000040,4003000),new Array(4021005,4000030,4000037,4003000),new Array(4011007,4021005,4000030,4000037,4003000),new Array(4011007,4021000,4000030,4000043,4003000),new Array(4011007,4021003,4000030,4000045,4003000),new Array(4011007,4021001,4000030,4000036,4003000),new Array(4021008,4011007,4021005,4000030,4003000),new Array(4021008,4011007,4011005,4000030,4003000),new Array(4021008,4011007,4021000,4000030,4003000));
	    var matQtySet = new Array(new Array(1,35,10),new Array(1,35,10),new Array(1,35,10),new Array(1,35,10),new Array(3,50,15),new Array(3,50,15),new Array(2,50,15),new Array(2,50,15),new Array(3,1,30,15,20),new Array(3,1,30,15,20),new Array(3,1,30,15,20),
		new Array(5,45,50,30),new Array(4,45,30,30),new Array(4,45,3,30),new Array(4,45,70,30),new Array(2,3,50,200,35),new Array(2,3,50,150,35),new Array(2,3,50,80,35),new Array(2,3,50,80,35),new Array(1,1,8,75,50),new Array(1,1,5,75,50),new Array(1,1,1,75,50));
	    var costSet = new Array(9000,9000,9000,9000,19000,19000,19000,21000,20000,20000,20000,40000,32000,35000,35000,50000,50000,50000,50000,60000,60000,60000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
		
	var prompt = "你想让我制作 #t" + item + "#？那样的话，我需要你提供一些特定的材料。请确保你的背包有足够的空间！#b";

	if (mats instanceof Array){
	    for(var i = 0; i < mats.length; i++){
		prompt += "\r\n#i"+mats[i]+"# " + matQty[i] + " #t" + mats[i] + "#";
	    }
	} else {
	    prompt += "\r\n#i"+mats+"# " + matQty + " #t" + mats + "#";
	}
		
	if (cost > 0)
	    prompt += "\r\n#i4031138# " + cost + " 金币";
		
	cm.sendYesNo(prompt);
    } else if (status == 3 && mode == 1) {
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
	    cm.sendOk("抱歉，我必须要有那些材料才能做好。也许下次吧。");
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
				
	    cm.sendOk("好了，鞋子做好了。小心别绊倒！");
	}
	cm.dispose();
    }
}