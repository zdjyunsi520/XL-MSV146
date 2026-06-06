/* Pi
	Ludibrium Village (220000300)
	
	Refining NPC: 
 * Minerals
 * Jewels
 * Moon/星石s
 * Crystals (minus Dark)
 * Processed Wood/Screws
 * Arrows/Bronze Arrows/Steel Arrows
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

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
	var selStr = "嗯？你是谁？哦，你听说过我的锻造技术？那样的话，我很乐意帮你加工矿石……当然要收费。#b"
	var options = new Array("精炼矿物矿石","精炼宝石矿石","精炼稀有宝石","精炼水晶矿石","制作材料","制作箭矢");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}	
	cm.sendSimple(selStr);
    } else if (status == 1) {
	selectedType = selection;
	if (selectedType == 0){ //mineral refine
	    var selStr = "那么，你想精炼哪种矿物矿石呢？#b";
	    var minerals = new Array ("Bronze","Steel","Mithril","Adamantium","Silver","Orihalcon","Gold");
	    for (var i = 0; i < minerals.length; i++){
		selStr += "\r\n#L" + i + "# " + minerals[i] + "#l";
	    }
	    equip = false;
	    cm.sendSimple(selStr);
	} else if (selectedType == 1){ //jewel refine
	    var selStr = "那么，你想精炼哪种宝石矿石呢？#b";
	    var jewels = new Array ("Garnet","Amethyst","Aquamarine","Emerald","Opal","Sapphire","Topaz","Diamond","黑水晶");
	    for (var i = 0; i < jewels.length; i++){
		selStr += "\r\n#L" + i + "# " + jewels[i] + "#l";
	    }
	    equip = false;
	    cm.sendSimple(selStr);
	} else if (selectedType == 2){ //rock refine
	    var selStr = "稀有宝石？你想的是哪一种？#b";
	    var items = new Array ("月石","星石");
	    for (var i = 0; i < items.length; i++){
		selStr += "\r\n#L" + i + "# " + items[i] + "#l";
	    }
	    equip = false;
	    cm.sendSimple(selStr);
	} else if (selectedType == 3){ //crystal refine
	    var selStr = "水晶矿石？我最喜欢精炼那些了！#b";
	    var crystals = new Array ("力量水晶","智慧水晶","敏捷水晶","幸运水晶");
	    for (var i = 0; i < crystals.length; i++){
		selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
	    }
	    equip = false;
	    cm.sendSimple(selStr);
	} else if (selectedType == 4){ //material refine
	    var selStr = "材料？我知道一些我能为你制作的材料……#b";
	    var materials = new Array ("用树枝制作加工木材","用木柴制作加工木材","制作螺丝（每组15个）");
	    for (var i = 0; i < materials.length; i++){
		selStr += "\r\n#L" + i + "# " + materials[i] + "#l";
	    }
	    equip = false;
	    cm.sendSimple(selStr);
	} else if (selectedType == 5){ //arrow refine
	    var selStr = "箭矢？完全没问题。#b";
	    var arrows = new Array ("弓箭","弩箭","Bronze 弓箭","Bronze 弩箭","Steel 弓箭","Steel 弩箭");
	    for (var i = 0; i < arrows.length; i++){
		selStr += "\r\n#L" + i + "# " + arrows[i] + "#l";
	    }
	    equip = true;
	    cm.sendSimple(selStr);
	}
	if (equip)
	    status++;
    } else if (status == 2) {
	selectedItem = selection;
	if (selectedType == 0){ //mineral refine
	    var itemSet = new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006);
	    var matSet = new Array(4010000,4010001,4010002,4010003,4010004,4010005,4010006);
	    var matQtySet = new Array(10,10,10,10,10,10,10);
	    var costSet = new Array(270,270,270,450,450,450,720);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 1){ //jewel refine
	    var itemSet = new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008);
	    var matSet = new Array(4020000,4020001,4020002,4020003,4020004,4020005,4020006,4020007,4020008);
	    var matQtySet = new Array(10,10,10,10,10,10,10,10,10);
	    var costSet = new Array (450,450,450,450,450,450,450,900,2700);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 2){ //rock refine
	    var itemSet = new Array(4011007,4021009);
	    var matSet = new Array(new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006), new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008));
	    var matQtySet = new Array(new Array(1,1,1,1,1,1,1),new Array(1,1,1,1,1,1,1,1,1));
	    var costSet = new Array(9000,13500);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //crystal refine
	    var itemSet = new Array (4005000,4005001,4005002,4005003);
	    var matSet = new Array(4004000,4004001,4004002,4004003);
	    var matQtySet = new Array (10,10,10,10);
	    var costSet = new Array (4500,4500,4500,4500);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 4){ //material refine
	    var itemSet = new Array (4003001,4003001,4003000);
	    var matSet = new Array(4000003,4000018,new Array (4011000,4011001));
	    var matQtySet = new Array (10,5,new Array (1,1));
	    var costSet = new Array (0,0,0);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
		
	var prompt = "所以，你想让我制作一些#t" + item + "#s？那样的话，你想让我制作多少个？";
		
	cm.sendGetNumber(prompt,1,1,100)
    } else if (status == 3) {
	if (equip) {
	    selectedItem = selection;
	    qty = 1;
	} else
	    qty = selection;

	if (selectedType == 5){ //arrow refine
	    var itemSet = new Array(2060000,2061000,2060001,2061001,2060002,2061002);
	    var matSet = new Array(new Array (4003001,4003004),new Array (4003001,4003004),new Array (4011000,4003001,4003004),new Array (4011000,4003001,4003004),
		new Array (4011001,4003001,4003005),new Array (4011001,4003001,4003005));
	    var matQtySet = new Array (new Array (1,1),new Array (1,1),new Array (1,3,10),new Array (1,3,10),new Array (1,5,15),new Array (1,5,15));
	    var costSet = new Array (0,0,0,0,0,0);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
		
	var prompt = "你想让我制作 ";
	if (qty == 1) {
	    prompt += "a #t" + item + "#?";
	} else {
	    prompt += qty + " #t" + item + "#?";
	}
	prompt += " 那样的话，我需要你提供特定的材料才能制作。请确保你的背包有足够的空间！#b";
		
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
			
	if (!complete)
	    cm.sendOk("等一下，没有全部所需材料我无法完成。先把它们带来，然后我们再谈。");
	else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++){
		    cm.gainItem(mats[i], -matQty[i] * qty);
		}
	    }
	    else
		cm.gainItem(mats, -matQty * qty);
					
	    if (cost > 0)
		cm.gainMeso(-cost * qty);
				
	    if (item >= 2060000 && item <= 2060002) //bow arrows
		cm.gainItem(item, 1000 - (item - 2060000) * 100);
	    else if (item >= 2061000 && item <= 2061002) //xbow arrows
		cm.gainItem(item, 1000 - (item - 2061000) * 100);
	    else if (item == 4003000)//screws
		cm.gainItem(4003000, 15 * qty);
	    else
		cm.gainItem(item, qty);
	    cm.sendOk("全部完成。如果你还需要其他东西，你知道在哪里找我。");
	}
	cm.safeDispose();
    }
}