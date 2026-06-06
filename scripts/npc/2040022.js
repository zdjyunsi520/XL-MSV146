/* Rydole
	Ludibrium : Toy Factory <Aparatus Room> (220020600)
	
	Refining NPC: 
	* Level 30-50 weapons - Stimulator allowed
*/

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var stimulator = false;
var stimID;

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
	var selStr = "啊，你找到我了！我大部分时间都待在这里，为像你这样的旅行者制作武器。你有什么需求吗？#b"
	var options = new Array("什么是刺激剂？","制作战士武器","制作弓箭手武器","制作魔法师武器","制作飞侠武器",
	    "制作战士武器 with a Stimulator","制作弓箭手武器 with a Stimulator","制作魔法师武器 with a Stimulator","制作飞侠武器 with a Stimulator");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}
			
	cm.sendSimple(selStr);
    }
    else if (status == 1 && mode == 1) {
	selectedType = selection;
	var selStr;
	var weapon;
	if (selectedType > 4)
	{
	    stimulator = true;
	    selectedType -= 4;
	}
	else
	    stimulator = false;
	if (selectedType == 0) { //What's a stim?
	    cm.sendNext("刺激剂是一种特殊的药水，我可以在制作某些物品的过程中加入它。它会让物品获得像怪物掉落时一样的属性。但是，有可能不会产生任何变化，也有可能物品属性低于平均值。使用刺激剂还有10%的几率制作失败，所以请谨慎选择。")
	    cm.dispose();
	}
	else if (selectedType == 1){ //warrior weapon
	    selStr = "好的，那么你要制作哪把战士武器呢？#b";
	    weapon = new Array ("格拉迪乌斯#k - Lv. 30 单手剑#b","卡特鲁斯#k - Lv. 35 单手剑#b","特劳斯#k - Lv. 40 单手剑#b","宝石卡塔#k - Lv. 50 单手剑#b","消防斧#k - Lv. 30 单手斧#b","丹克#k - Lv. 35 单手斧#b","蓝色反击斧#k - Lv. 40 单手斧#b","巴克#k - Lv. 50 单手斧#b",
		"战锤#k - Lv. 30 单手钝器#b","重锤#k - Lv. 35 单手钝器#b","杰克锤#k - Lv. 40 单手钝器#b","拳头锤#k - Lv. 50 单手钝器#b","弯刀#k - Lv. 30 双手剑#b","狮心#k - Lv. 35 双手剑#b","扎德#k - Lv. 40 双手剑#b","狮牙#k - Lv. 50 双手剑#b",
		"蓝色战斧#k - Lv. 30 双手斧#b","尼亚姆#k - Lv. 35 双手斧#b","剑齿斧#k - Lv. 40 双手斧#b","崛起#k - Lv. 50 双手斧#b","秘银大锤#k - Lv. 30 双手钝器#b","大锤#k - Lv. 35 双手钝器#b","泰坦#k - Lv. 40 双手钝器#b","黄金鼹鼠锤#k - Lv. 50 双手钝器#b",
		"分叉矛#k - Lv. 30 枪#b","中卷#k - Lv. 35 枪#b","泽科#k - Lv. 40 枪#b","蛇舌#k - Lv. 50 枪#b","秘银 polearm #k - Lv. 30 polearm#b","斧枪#k - Lv. 35 polearm#b","新月枪#k - Lv. 40 polearm#b","九龙头枪#k - Lv. 50 polearm#b");
	}
	else if (selectedType == 2){ //bowman weapon
	    selStr = "好的，那么你要制作哪把弓箭手武器呢？#b";
	    weapon = new Array ("瑞登#k - Lv. 30 弓#b","红蝰蛇#k - Lv. 35 弓#b","沃尔特2000#k - Lv. 40 弓#b","奥林帕斯#k - Lv. 50 弓#b","鹰鸦弩#k - 弓箭手 Lv. 32#b","黑勒弩#k - 弓箭手 Lv. 38#b","银鸦弩#k - 弓箭手 Lv. 42#b","罗威尔弩#k - 弓箭手 Lv. 50#b");
	}
	else if (selectedType == 3){ //magician weapon
	    selStr = "好的，那么你要制作哪把魔法师武器呢？#b";
	    weapon = new Array ("秘银短杖#k - Lv. 28 短杖#b","巫师短杖#k - Lv. 33 短杖#b","精灵短杖#k - Lv. 38 短杖#b","克罗米#k - Lv. 48 短杖#b","巫师长杖#k - Lv. 25 长杖#b","奥术长杖#k - Lv. 45 长杖#b","荆棘长杖#k - Lv. 55 长杖#b");
	}
	else if (selectedType == 4){ //thief weapon; claws vary depending if stimulator is being used
	    selStr = "好的，那么你要制作哪把飞侠武器呢？#b";
	    if (!stimulator)
		weapon = new Array ("礁石爪#k - Lv. 30 LUK匕首#b","卡斯#k - Lv. 30 STR匕首#b","格法特#k - Lv. 35 LUK匕首#b","巴兹路德#k - Lv. 40 STR匕首#b","萨伊#k - Lv. 50 STR匕首#b","新木刀#k - Lv. 50 LUK匕首#b",
		    "钢制护手#k - Lv. 30 拳套#b","青铜守护者#k - Lv. 35 拳套#b","钢铁贪婪#k - Lv. 40 拳套#b","钢铁杀手#k - Lv. 50 拳套#b");
	    else
		weapon = new Array ("礁石爪#k - Lv. 30 LUK匕首#b","卡斯#k - Lv. 30 STR匕首#b","格法特#k - Lv. 35 LUK匕首#b","巴兹路德#k - Lv. 40 STR匕首#b","萨伊#k - Lv. 50 STR匕首#b","新木刀#k - Lv. 50 LUK匕首#b",
		    "秘银护手#k - Lv. 30 拳套#b","adamantium护手#k - Lv. 30 拳套#b","银色守护者#k - Lv. 35 拳套#b","暗色守护者#k - Lv. 35 拳套#b","血色贪婪#k - Lv. 40 拳套#b","adamantium贪婪#k - Lv. 40 拳套#b",
		    "暗色贪婪#k - Lv. 40 拳套#b","血色杀手#k - Lv. 50 拳套#b","蓝宝石杀手#k - Lv. 50 拳套#b","暗色杀手#k - Lv. 50 拳套#b");
	}
		
	if (selectedType != 0)
	{
	    for (var i = 0; i < weapon.length; i++){
		selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
    }
    else if (status == 2 && mode == 1) {
	selectedItem = selection;
	if (selectedType == 1){ //warrior weapon
	    var itemSet = new Array(1302008,1302004,1302009,1302010,1312005,1312006,1312007,1312008,1322014,1322015,1322016,1322017,1402002,1402006,1402007,1402003,1412006,1412004,1412005,1412003,1422001,1422008,1422007,1422005,1432002,1432003,1432005,1432004,1442001,1442003,1442009,1442005);
	    var matSet = new Array(new Array(4131000,4011001,4011004,4003000),new Array(4131000,4011006,4011001,4021006,4003000),new Array(4131000,4011006,4011001,4021000,4003000),new Array(4131000,4005000,4021008,4011006,4021003,4003000),
		new Array(4131001,4011001,4021000,4003000),new Array(4131001,4011001,4021000,4011004,4003000),new Array(4131001,4021005,4011001,4021001,4003000),new Array(4131001,4005000,4021008,4011004,4011001,4003000),
		new Array(4131002,4011001,4011000,4003000),new Array(4131002,4011001,4011000,4011003,4003000),new Array(4131002,4011003,4011001,4011004,4003000),new Array(4131002,4005000,4021008,4011006,4011001,4003000),
		new Array(4131003,4011001,4021000,4021004,4003000),new Array(4131003,4011006,4011001,4021004,4003000),new Array(4131003,4021003,4011000,4011001,4003000),new Array(4131003,4005000,4021007,4011006,4011001,4003000),
		new Array(4131004,4021005,4011001,4003001,4003000),new Array(4131004,4011004,4011000,4021003,4003000),new Array(4131004,4011006,4011004,4011001,4003000),new Array(4131004,4005000,4021007,4011006,4021006,4003000),
		new Array(4131005,4011001,4011004,4003000),new Array(4131005,4011001,4011000,4003001,4003000),new Array(4131005,4011001,4011004,4011006,4003000),new Array(4131005,4005000,4021008,4021006,4011006,4003000),
		new Array(4131006,4011000,4011004,4003000),new Array(4131006,4011001,4011002,4021000,4003000),new Array(4131006,4011004,4011001,4011000,4003000),new Array(4131006,4005000,4021008,4011000,4021000,4003000),
		new Array(4131007,4011000,4011002,4003000),new Array(4131007,4011001,4011002,4003000),new Array(4131007,4011006,4011002,4011001,4003000),new Array(4131007,4005000,4021007,4011001,4011002,4003000));
	    var matQtySet = new Array(new Array(1,2,2,30),new Array(1,1,5,3,35),new Array(1,3,5,5,40),new Array(1,1,2,4,10,50),
		new Array(1,2,2,30),new Array(1,5,5,3,35),new Array(1,7,5,5,40),new Array(1,1,2,8,10,50),
		new Array(1,2,2,30),new Array(1,5,5,3,35),new Array(1,7,5,5,40),new Array(1,1,2,4,10,50),
		new Array(1,2,1,2,35),new Array(1,1,5,5,40),new Array(1,7,5,5,45),new Array(1,1,2,4,10,55),
		new Array(1,2,2,5,35),new Array(1,5,5,3,40),new Array(1,3,5,5,45),new Array(1,1,2,5,7,55),
		new Array(1,2,3,35),new Array(1,5,5,10,40),new Array(1,5,5,3,45),new Array(1,1,2,7,5,55),
		new Array(1,2,3,40),new Array(1,5,5,3,45),new Array(1,3,5,5,50),new Array(1,1,2,7,5,60),
		new Array(1,2,3,40),new Array(1,5,5,40),new Array(1,3,5,5,50),new Array(1,1,2,7,5,60));
	    var costSet = new Array(18000,35000,70000,200000,18000,35000,70000,200000,18000,35000,70000,200000,20000,37000,72000,220000,20000,37000,72000,220000,20000,37000,72000,220000,22000,39000,74000,240000,22000,39000,74000,240000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 2){ //bowman weapon
	    var itemSet = new Array(1452005,1452006,1452007,1452008,1462004,1462005,1462006,1462007);
	    var matSet = new Array(new Array(4131010,4011001,4011006,4021003,4021006,4003000),new Array(4131010,4011004,4021000,4021004,4003000),new Array(4131010,4021008,4011001,4011006,4003000,4000112),new Array(4131010,4005002,4021008,4011001,4021005,4003000),
		new Array(4131011,4011001,4011005,4021006,4003001,4003000),new Array(4131011,4021008,4011001,4011006,4021006,4003000),new Array(4131011,4021008,4011004,4003001,4003000),new Array(4131011,4021008,4011006,4021006,4003001,4003000));
	    var matQtySet = new Array(new Array(1,5,5,3,3,30),new Array(1,7,6,3,35),new Array(1,1,10,3,40,100),new Array(1,1,2,10,6,50),new Array(1,5,5,3,50,15),new Array(1,1,8,4,2,30),new Array(1,2,6,30,30),new Array(1,2,5,3,40,40));
	    var costSet = new Array(15000,20000,40000,100000,15000,25000,41000,100000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //magician weapon
	    var itemSet = new Array(1372003,1372001,1372000,1372007,1382002,1382001,1382006);
	    var matSet = new Array(new Array(4131008,4011002,4021002,4003000),new Array(4131008,4021006,4011002,4011001,4003000),new Array(4131008,4021006,4021005,4021007,4003003,4003000),new Array(4131008,4011006,4021003,4021007,4021002,4003000),
		new Array(4131009,4021006,4021001,4011001,4003000),new Array(4131009,4011001,4021006,4021001,4021005,4003000),new Array(4131009,4005001,4021008,4011006,4011004,4003000));
	    var matQtySet = new Array(new Array(1,3,1,10),new Array(1,5,3,1,15),new Array(1,5,5,1,1,20),new Array(1,4,3,2,1,30),new Array(1,2,1,1,15),new Array(1,8,5,5,5,30),new Array(1,2,2,5,10,40));
	    var costSet = new Array(15000,30000,60000,100000,10000,80000,200000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 4){ //thief weapon; claws vary depending if stimulator is being used
	    if (!stimulator){
		var itemSet = new Array(1332012,1332009,1332014,1332011,1332016,1332003,1472008,1472011,1472014,1472018);
		var matSet = new Array(new Array(4131012,4011002,4011001,4003000),new Array(4131012,4021005,4011001,4003000),new Array(4131012,4021005,4011001,4011002,4003000),new Array(4131012,4011001,4011006,4021006,4003000),new Array(4131012,4005003,4021008,4011004,4011001,4003000),new Array(4131012,4005003,4021007,4011006,4011001,4003000),
		    new Array(4131013,4011000,4011001,4000021,4003000),new Array(4131013,4011000,4011001,4000021,4003000),new Array(4131013,4011000,4011001,4000021,4003000),new Array(4131013,4011000,4011001,4000030,4003000));
		var matQtySet = new Array(new Array(1,2,3,30),new Array(1,2,3,30),new Array(1,1,5,3,35),new Array(1,7,3,6,40),new Array(1,1,2,7,10,50),new Array(1,1,2,5,10,50),new Array(1,3,2,50,20),new Array(1,4,2,80,25),new Array(1,3,2,100,30),new Array(1,4,2,40,35));
		var costSet = new Array(20000,20000,33000,73000,230000,230000,15000,30000,40000,50000);
	    }
	    else{
		var itemSet = new Array(1332012,1332009,1332014,1332011,1332016,1332003,1472009,1472010,1472012,1472013,1472015,1472016,1472017,1472019,1472020,1472021);
		var matSet = new Array(new Array(4131012,4011002,4011001,4003000),new Array(4131012,4021005,4011001,4003000),new Array(4131012,4021005,4011001,4011002,4003000),new Array(4131012,4011001,4011006,4021006,4003000),new Array(4131012,4005003,4021008,4011004,4011001,4003000),new Array(4131012,4005003,4021007,4011006,4011001,4003000),
		    new Array(4131013,1472008,4011002),new Array(4131013,1472008,4011003),new Array(4131013,1472011,4011004),new Array(4131013,1472011,4021008),new Array(4131013,1472014,4021000),new Array(4131013,1472014,4011003),new Array(4131013,1472014,4021008),new Array(4131013,1472018,4021000),new Array(4131013,1472018,4021005),
		    new Array(4131013,1472018,4005003,4021008));
		var matQtySet = new Array(new Array(1,2,3,30),new Array(1,2,3,30),new Array(1,1,5,3,35),new Array(1,7,3,6,40),new Array(1,1,2,7,10,50),new Array(1,1,2,5,10,50),new Array(1,1,3),new Array(1,1,3),new Array(1,1,4),new Array(1,1,1),new Array(1,1,5),new Array(1,1,5),new Array(1,1,2),new Array(1,1,6),new Array(1,1,6),new Array(1,1,1,3));
		var costSet = new Array(20000,20000,33000,73000,230000,230000,10000,15000,20000,25000,30000,30000,35000,40000,40000,50000);
	    }
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
		
	var prompt = "你想让我制作#t" + item + "#？那样的话，我需要你提供特定的材料才能制作。请确保你的背包有足够的空间！#b";

	if(stimulator){
	    stimID = mats[0] - 998; //stim ID for a weapon = manual ID for weapon - 998
	    prompt += "\r\n#i"+stimID+"# 1 #t" + stimID + "#";
	}

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
    } else if (status == 3 && mode == 1) {
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
	    cm.sendOk("抱歉，你缺少了一个必需的材料。可能是手册？或者是某种矿石？");
	else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++){
		    cm.gainItem(mats[i], -matQty[i]);
		}
	    }
	    else
		cm.gainItem(mats, -matQty);
					
	    cm.gainMeso(-cost);
	    if (stimulator){ //check for stimulator
		cm.gainItem(stimID, -1);
		var deleted = Math.floor(Math.random() * 10);
		if (deleted != 0) {
		    cm.gainItem(item, 1, true);
		    cm.sendOk("给你！觉得怎么样？很棒吧？");
		} else {
		    cm.sendOk("……啊！我一走神，等我反应过来就……呃，抱歉，我无能为力了。");
		}
	    } else { //just give basic item
		cm.gainItem(item, 1);
		cm.sendOk("给你！觉得怎么样？很棒吧？");
	    }
	}
	cm.dispose();
    }
}