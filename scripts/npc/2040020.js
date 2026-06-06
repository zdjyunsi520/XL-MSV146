/* Sarah
	Ludibrium : Tara and Sarah's House (220000303)
	
	Refining NPC: 
 * Gloves - All classes, 30-50, stimulator (4130000) available on upgrades
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
var stimID = 4130000;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }

    if (status == 0) {
	var selStr = "你好，欢迎来到玩具城手套店。请问有什么可以帮你的？#b"
	var options = new Array("什么是 стимулятор？","制作战士手套","制作弓箭手手套","制作魔法师手套","制作飞侠手套",
	"制作战士手套 with a Stimulator","制作弓箭手手套 with a Stimulator","制作魔法师手套 with a Stimulator","制作飞侠手套 with a Stimulator");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}
			
	cm.sendSimple(selStr);
    } else if (status == 1 && mode == 1) {
	selectedType = selection;
	if (selectedType > 4)
	    stimulator = true;
	else
	    stimulator = false;
	if (selectedType == 0) { //What's a stim?
	    cm.sendNext("刺激剂是一种特殊的药水，我可以在制作某些物品的过程中加入它。它会让物品获得像怪物掉落时一样的属性。但是，有可能不会产生任何变化，也有可能物品属性低于平均值。使用刺激剂还有10%的几率制作失败，所以请谨慎选择。")
	    cm.safeDispose();
	}
	else if (selectedType == 1){ //warrior glove
	    var selStr = "战士手套？没问题，你想要哪种？#b";
	    var items = new Array ("青铜密塞尔#k - 战士 Lv. 30#b","钢铁布里贡#k - 战士 Lv. 35#b","铁制指虎#k - 战士 Lv. 40#b","钢制布里斯特#k - 战士 Lv. 50#b");
	    for (var i = 0; i < items.length; i++){
		selStr += "\r\n#L" + i + "# " + items[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 2){ //bowman glove
	    var selStr = "弓箭手手套？没问题，你想要哪种？#b";
	    var items = new Array ("棕色马克手套#k - 弓箭手 Lv. 30#b","青铜斯卡勒#k - 弓箭手 Lv. 35#b","水蓝护腕#k - 弓箭手 Lv. 40#b","蓝色柳条手套#k - 弓箭手 Lv. 50#b");
	    for (var i = 0; i < items.length; i++){
		selStr += "\r\n#L" + i + "# " + items[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 3){ //magician glove
	    var selStr = "魔法师手套？没问题，你想要哪种？#b";
	    var items = new Array ("红色卢蒂亚#k - 魔法师 Lv. 30#b","红色诺尔#k - 魔法师 Lv. 35#b","红色阿顿#k - 魔法师 Lv. 40#b","红色忏悔手套#k - 魔法师 Lv. 50#b");
	    for (var i = 0; i < items.length; i++){
		selStr += "\r\n#L" + i + "# " + items[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 4){ //thief glove
	    var selStr = "飞侠手套？没问题，你想要哪种？#b";
	    var gloves = new Array ("钢制西尔维亚#k - 飞侠 Lv. 30#b","钢铁阿比昂#k - 飞侠 Lv. 35#b","红色克列夫#k - 飞侠 Lv. 40#b","蓝月手套#k - 飞侠 Lv. 50#b");
	    for (var i = 0; i < gloves.length; i++){
		selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 5){ //warrior glove w/ Stim
	    var selStr = "用刺激剂制作战士手套？没问题，你想要哪种？#b";
	    var crystals = new Array ("钢制密塞尔#k - 战士 Lv. 30#b","秘银密塞尔#k - 战士 Lv. 30#b","黄色布里贡#k - 战士 Lv. 35#b","暗色布里贡#k - 战士 Lv. 35#b",
	    "adamantium指虎#k - 战士 Lv. 40#b","暗色指虎#k - 战士 Lv. 40#b","秘银布里斯特#k - 战士 Lv. 50#b","黄金布里斯特#k - 战士 Lv. 50#b");
	    for (var i = 0; i < crystals.length; i++){
		selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 6){ //bowman glove w/ stim
	    var selStr = "用刺激剂制作弓箭手手套？没问题，你想要哪种？#b";
	    var crystals = new Array ("绿色马克手套#k - 弓箭手 Lv. 30#b","黑色马克手套#k - 弓箭手 Lv. 30#b","秘银斯卡勒#k - 弓箭手 Lv. 35#b","黄金斯卡勒#k - 弓箭手 Lv. 35#b","黄金护腕#k - 弓箭手 Lv. 40#b","暗色护腕#k - 弓箭手 Lv. 40#b","红色柳条手套#k - 弓箭手 Lv. 50#b","暗色柳条手套#k - 弓箭手 Lv. 50#b");
	    for (var i = 0; i < crystals.length; i++){
		selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 7){ //magician glove w/ stim
	    var selStr = "用刺激剂制作魔法师手套？没问题，你想要哪种？#b";
	    var items = new Array ("蓝色卢蒂亚#k - 魔法师 Lv. 30#b","黑色卢蒂亚#k - 魔法师 Lv. 30#b","蓝色诺尔#k - 魔法师 Lv. 35#b","暗色诺尔#k - 魔法师 Lv. 35#b",
	    "蓝色阿顿#k - 魔法师 Lv. 40#b","暗色阿顿#k - 魔法师 Lv. 40#b","蓝色忏悔手套#k - 魔法师 Lv. 50#b","暗色忏悔手套#k - 魔法师 Lv. 50#b");
	    for (var i = 0; i < items.length; i++){
		selStr += "\r\n#L" + i + "# " + items[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 8){ //thief glove w/ stim
	    var selStr = "用刺激剂制作飞侠手套？没问题，你想要哪种？#b";
	    var gloves = new Array ("银色西尔维亚#k - 飞侠 Lv. 30#b","黄金西尔维亚#k - 飞侠 Lv. 30#b","秘银阿比昂#k - 飞侠 Lv. 35#b","黄金阿比昂#k - 飞侠 Lv. 35#b","黄金克列夫#k - 飞侠 Lv. 40#b",
	    "暗色克列夫#k - 飞侠 Lv. 40#b","红色月手套#k - 飞侠 Lv. 50#b","棕色月手套#k - 飞侠 Lv. 50#b");
	    for (var i = 0; i < gloves.length; i++){
		selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
    } else if (status == 2) {
	selectedItem = selection;
	if (selectedType == 1){ //warrior glove
	    var itemSet = new Array(1082007,1082008,1082023,1082009);
	    var matSet = new Array(new Array(4011000,4011001,4003000),new Array(4000021,4011001,4003000),new Array(4000021,4011001,4003000),new Array(4011001,4021007,4000030,4003000));
	    var matQtySet = new Array(new Array(3,2,15),new Array(30,4,15),new Array(50,5,40),new Array(3,2,30,45));
	    var costSet = new Array(18000,27000,36000,45000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 2){ //bowman glove
	    var itemSet = new Array(1082048,1082068,1082071,1082084);
	    var matSet = new Array(new Array(4000021,4011006,4021001),new Array(4011000,4011001,4000021,4003000),new Array(4011001,4021000,4021002,4000021,4003000),new Array(4011004,4011006,4021002,4000030,4003000));
	    var matQtySet = new Array(new Array(50,2,1),new Array(1,3,60,15),new Array(3,1,3,80,25),new Array(3,1,2,40,35));
	    var costSet = new Array(18000,27000,36000,45000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //magician glove
	    var itemSet = new Array(1082051,1082054,1082062,1082081);
	    var matSet = new Array(new Array(4000021,4021006,4021000),new Array(4000021,4011006,4011001,4021000),new Array(4000021,4021000,4021006,4003000),new Array(4021000,4011006,4000030,4003000));
	    var matQtySet = new Array(new Array(60,1,2),new Array(70,1,3,2),new Array(80,3,3,30),new Array(3,2,35,40));
	    var costSet = new Array(22500,27000,36000,45000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 4){ //thief glove
	    var itemSet = new Array(1082042,1082046,1082075,1082065);
	    var matSet = new Array(new Array(4011001,4000021,4003000),new Array(4011001,4011000,4000021,4003000),new Array(4021000,4000101,4000021,4003000),new Array(4021005,4021008,4000030,4003000));
	    var matQtySet = new Array(new Array(2,50,10),new Array(3,1,60,15),new Array(3,100,80,30),new Array(3,1,40,30));
	    var costSet = new Array(22500,27000,36000,45000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 5){ //warrior glove w/stim
	    var itemSet = new Array(1082005,1082006,1082035,1082036,1082024,1082025,1082010,1082011);
	    var matSet = new Array(new Array(1082007,4011001),new Array(1082007,4011005),new Array(1082008,4021006),new Array(1082008,4021008),new Array(1082023,4011003),new Array(1082023,4021008),
	    new Array(1082009,4011002),new Array(1082009,4011006));
	    var matQtySet = new Array (new Array(1,1),new Array(1,2),new Array(1,3),new Array(1,1),new Array(1,4),new Array(1,2),new Array(1,5),new Array(1,4));
	    var costSet = new Array (18000,22500,27000,36000,40500,45000,49500,54000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 6){ //bowman glove w/stim
	    var itemSet = new Array (1082049,1082050,1082069,1082070,1082072,1082073,1082085,1082083);
	    var matSet = new Array(new Array(1082048,4021003),new Array(1082048,4021008),new Array(1082068,4011002),new Array(1082068,4011006),new Array(1082071,4011006),new Array(1082071,4021008),new Array(1082084,4011000,4021000),new Array(1082084,4011006,4021008));
	    var matQtySet = new Array (new Array(1,3),new Array(1,1),new Array(1,4),new Array(1,2),new Array(1,4),new Array(1,2),new Array(1,1,5),new Array(1,2,2));
	    var costSet = new Array (13500,18000,19800,22500,27000,36000,49500,54000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 7){ //magician glove w/ stim
	    var itemSet = new Array(1082052,1082053,1082055,1082056,1082063,1082064,1082082,1082080);
	    var matSet = new Array(new Array(1082051,4021005),new Array(1082051,4021008),new Array(1082054,4021005),new Array(1082054,4021008),new Array(1082062,4021002),new Array(1082062,4021008),
	    new Array(1082081,4021002),new Array(1082081,4021008));
	    var matQtySet = new Array(new Array(1,3),new Array(1,1),new Array(1,3),new Array(1,1),new Array(1,4),new Array(1,2),new Array(1,5),new Array(1,3));
	    var costSet = new Array (31500,36000,36000,40500,40500,45000,49500,54000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 8){ //thief glove w/ stim
	    var itemSet = new Array(1082043,1082044,1082047,1082045,1082076,1082074,1082067,1082066);
	    var matSet = new Array(new Array(1082042,4011004),new Array(1082042,4011006),new Array(1082046,4011005),new Array(1082046,4011006),new Array(1082075,4011006),new Array(1082075,4021008),new Array(1082065,4021000),new Array(1082065,4011006,4021008));
	    var matQtySet = new Array(new Array(1,2),new Array(1,1),new Array(1,3),new Array(1,2),new Array(1,4),new Array(1,2),new Array(1,5),new Array(1,2,1));
	    var costSet = new Array (13500,18000,19800,22500,36000,45000,49500,54000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
		
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
		
	if (cm.getMeso() < cost * qty) {
	    cm.sendOk("恐怕你付不起我的服务费用。")
	    cm.dispose();
	    return;
	} else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++) {
		    complete = cm.haveItem(mats[i], matQty[i] * qty);
		    if (!complete) {
			break;
		    }
		}
	    } else {
		complete = cm.haveItem(mats, matQty * qty);
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
	    }
	    else
		cm.gainItem(mats, -matQty);
					
	    cm.gainMeso(-cost);
	    if (stimulator){ //check for stimulator
		cm.gainItem(stimID, -1);
		var deleted = Math.floor(Math.random() * 10);
		if (deleted != 0) {
		    cm.gainItem(item, 1, true);
		    cm.sendOk("好了，手套做好了。小心，它们还很烫。");
		} else {
		    cm.sendOk("哎呀！我想我不小心加了太多刺激剂，结果……整件东西都不能用了……抱歉，我无法退款。");
		}
	    } else { //just give basic item
		cm.gainItem(item, 1);
		cm.sendOk("好了，手套做好了。小心，它们还很烫。");
	    }
	}
	cm.safeDispose();
    }
}