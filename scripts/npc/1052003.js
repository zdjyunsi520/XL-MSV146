/* Chris
	Victoria Road : Kerning City Repair Shop (103000006)
	
	Refining NPC: 
	* Minerals
	* Jewels
	* Special - Iron Hog's Metal Hoof x 100 into Steel Plate
	* Claws
*/

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;
var equip;
var last_use; //last item is a use item

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	cm.dispose();
    if (status == 0) {
	var selStr = "是的，这个锻造炉确实是我的。如果你愿意付费，我可以为你提供一些服务。#b"
	var options = new Array("精炼矿物矿石","精炼宝石矿石","我有钢铁猪的铁蹄……","升级拳套");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}
			
	cm.sendSimple(selStr);
    }
    else if (status == 1) {
	selectedType = selection;
	if (selectedType == 0){ //mineral refine
	    var selStr = "那么，你想精炼哪种矿物矿石？#b";
	    var minerals = new Array ("Bronze","Steel","Mithril","Adamantium","Silver","Orihalcon","Gold");
	    for (var i = 0; i < minerals.length; i++){
		selStr += "\r\n#L" + i + "# " + minerals[i] + "#l";
	    }
	    equip = false;
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 1){ //jewel refine
	    var selStr = "那么，你想精炼哪种宝石矿石？#b";
	    var jewels = new Array ("Garnet","Amethyst","Aquamarine","Emerald","Opal","Sapphire","Topaz","Diamond","黑水晶");
	    for (var i = 0; i < jewels.length; i++){
		selStr += "\r\n#L" + i + "# " + jewels[i] + "#l";
	    }
	    equip = false;
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 2){ //foot refine
	    var selStr = "你知道那个吗？没多少人意识到铁猪的铁蹄中蕴含的潜力……如果你愿意，我可以把它打造成特别的东西。";
	    equip = false;
	    cm.sendYesNo(selStr);
	}
	else if (selectedType == 3){ //claw refine
	    var selStr = "啊，你想升级拳套？那就告诉我，你要哪个？#b";
	    var claws = new Array ("血色巨型拳套#k - 飞侠 Lv.60#b","蓝宝石巨型拳套#k - 飞侠 Lv.60#b","暗黑巨型拳套#k - 飞侠 Lv.60#b");
	    for (var i = 0; i < claws.length; i++){
		selStr += "\r\n#L" + i + "# " + claws[i] + "#l";
	    }
	    equip = true;
	    cm.sendSimple(selStr);
	}
	if (equip)
	    status++;
    }
    else if (status == 2 && mode == 1) {
	selectedItem = selection;
	if (selectedType == 0){ //mineral refine
	    var itemSet = new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006);
	    var matSet = new Array(4010000,4010001,4010002,4010003,4010004,4010005,4010006);
	    var matQtySet = new Array(10,10,10,10,10,10,10);
	    var costSet = new Array(300,300,300,500,500,500,800);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 1){ //jewel refine
	    var itemSet = new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008);
	    var matSet = new Array(4020000,4020001,4020002,4020003,4020004,4020005,4020006,4020007,4020008);
	    var matQtySet = new Array(10,10,10,10,10,10,10,10,10);
	    var costSet = new Array (500,500,500,500,500,500,500,1000,3000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 2){ //special refine
	    var itemSet = new Array(4011001,1);
	    var matSet = new Array(4000039,1);
	    var matQtySet = new Array (100,1);
	    var costSet = new Array (1000,1)
	    item = itemSet[0];
	    mats = matSet[0];
	    matQty = matQtySet[0];
	    cost = costSet[0];
	}
		
	var prompt = "所以，你想让我制作 #t" + item + "#？这样的话，你想让我制作多少个？";
		
	cm.sendGetNumber(prompt,1,1,100)
    }
	
    else if (status == 3) {
	if (equip)
	{
	    selectedItem = selection;
	    qty = 1;
	}
	else
	    qty = selection;
			
	last_use = false;
		
	if (selectedType == 3){ //claw refine
	    var itemSet = new Array (1472023,1472024,1472025);
	    var matSet = new Array(new Array (1472022,4011007,4021000,2012000),new Array (1472022,4011007,4021005,2012002),new Array (1472022,4011007,4021008,4000046));
	    var matQtySet = new Array (new Array (1,1,8,10),new Array (1,1,8,10),new Array (1,1,3,5));
	    var costSet = new Array (80000,80000,100000)
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	    if (selectedItem != 2)
		last_use = true;
	}
		
	var prompt = "你想让我制作 ";
	if (qty == 1)
	    prompt += "a #t" + item + "#?";
	else
	    prompt += qty + " #t" + item + "#?";
			
	prompt += " 那样的话，我需要你提供一些特定的材料。请确保你的背包有足够的空间！#b";
		
	if (mats instanceof Array){
	    for (var i = 0; i < mats.length; i++) {
		prompt += "\r\n#i"+mats[i]+"# " + matQty[i] * qty + " #t" + mats[i] + "#";
	    }
	} else {
	    prompt += "\r\n#i"+mats+"# " + matQty * qty + " #t" + mats + "#";
	}
		
	if (cost > 0) {
	    prompt += "\r\n#i4031138# " + cost * qty + " 金币";
	}
	cm.sendYesNo(prompt);
    } else if (status == 4) {
	var complete = false;
		
	if (cm.getMeso() < cost * qty) {
	    cm.sendOk("恐怕你付不起我的服务费。")
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
		
	if (!complete)
	    cm.sendOk("我不能接受替代品。如果你没有我需要的东西，那我就无法帮到你了。");
	else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++){
		    cm.gainItem(mats[i], -matQty[i] * qty);
		}
	    } else {
		cm.gainItem(mats, -matQty * qty);
	    }
	    cm.gainMeso(-cost * qty);
	    cm.gainItem(item, qty);
	    cm.sendNext("呼……我差点以为会失败……希望你用得开心。");
	}
	cm.dispose();
    }
}