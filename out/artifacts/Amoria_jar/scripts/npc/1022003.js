/* Mr. Thunder
	Victoria Road: Perion (102000000)
	
	Refining NPC: 
	* Minerals
	* Jewels
	* Shields
	* Helmets
*/

var status = -1;
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
    }
    if (status == 0 && mode == 1) {
	var selStr = "嗯？你是谁？哦，你听说过我的锻造技术？那么，我很乐意为你加工一些矿石……当然要收费。#b"
	var options = new Array("精炼矿物矿石","精炼宝石矿石","升级头盔","升级盾牌");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}
			
	cm.sendSimple(selStr);
    }
    else if (status == 1 && mode == 1) {
	selectedType = selection;
	if (selectedType == 0){ //mineral refine
	    var selStr = "那么，你想精炼哪种矿物矿石？#b";
	    var minerals = new Array ("Bronze","Steel","Mithril","Adamantium","Silver","Orihalcon","Gold");
	    for (var i = 0; i < minerals.length; i++){
		selStr += "\r\n#L" + i + "# " + minerals[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	    equip = false;
	}
	else if (selectedType == 1){ //jewel refine
	    var selStr = "那么，你想精炼哪种宝石矿石？#b";
	    var jewels = new Array ("Garnet","Amethyst","Aquamarine","Emerald","Opal","Sapphire","Topaz","Diamond","黑水晶");
	    for (var i = 0; i < jewels.length; i++){
		selStr += "\r\n#L" + i + "# " + jewels[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	    equip = false;
	}
	else if (selectedType == 2){ //helmet refine
	    var selStr = "啊，你想升级头盔？告诉我，哪一个？#b";
	    var helmets = new Array ("蓝色金属头巾#k - 通用 Lv. 15#b","黄色金属头巾#k - 通用 Lv. 15#b","金属盔帽#k - 战士 Lv. 10#b","秘银盔帽#k - 战士 Lv. 10#b","钢铁头盔#k - 战士 Lv. 12#b","秘银头盔#k - 战士 Lv. 12#b","钢铁全盔#k - 战士 Lv. 15#b",
		"秘银全盔#k - 战士 Lv. 15#b","铁质维京头盔#k - 战士 Lv. 20#b","秘银维京头盔#k - 战士 Lv. 20#b","钢铁橄榄头盔#k - 战士 Lv. 20#b","秘银橄榄头盔#k - 战士 Lv. 20#b","秘银尖盔#k - 战士 Lv. 22#b","黄金尖盔#k - 战士 Lv. 22#b",
		"奥利哈康钢盔#k - 战士 Lv. 25#b","黄金钢盔#k - 战士 Lv. 25#b","大红色头盔#k - 战士 Lv. 35#b","大蓝色头盔#k - 战士 Lv. 35#b","秘银北欧头盔#k - 战士 Lv. 40#b","黄金北欧头盔#k - 战士 Lv. 40#b","秘银十字军头盔#k - 战士 Lv. 50#b",
		"银色十字军头盔#k - 战士 Lv. 50#b","旧钢铁北欧头盔#k - 战士 Lv. 55#b","旧秘银北欧头盔#k - 战士 Lv. 55#b");
	    for (var i = 0; i < helmets.length; i++){
		selStr += "\r\n#L" + i + "# " + helmets[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	    equip = true;
	}
	else if (selectedType == 3){ //shield refine
	    var selStr = "啊，你想升级盾牌？告诉我，哪一个？#b";
	    var shields = new Array ("精金塔盾#k - 战士 Lv. 40#b","秘银塔盾#k - 战士 Lv. 40#b","银色传说之盾#k - 战士 Lv. 60#b","精金传说之盾#k - 战士 Lv. 60#b");
	    for (var i = 0; i < shields.length; i++){
		selStr += "\r\n#L" + i + "# " + shields[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	    equip = true;
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
		
	var prompt = "所以，你想让我制作一些#t" + item + "#？那你想让我制作多少个呢？";
		
	cm.sendGetNumber(prompt,1,1,100)
    }
    else if (status == 3 && mode == 1) {
	if (equip)
	{
	    selectedItem = selection;
	    qty = 1;
	}
	else
	    qty = selection;

	if (selectedType == 2){ //helmet refine
	    var itemSet = new Array(1002042,1002041,1002002,1002044,1002003,1002040,1002007,1002052,1002011,1002058,1002009,1002056,1002087,1002088,1002049,1002050,1002047,1002048,1002099,1002098,1002085,1002028,1002022,1002101);
	    var matSet = new Array(new Array(1002001,4011002),new Array(1002001,4021006),new Array(1002043,4011001),new Array(1002043,4011002),new Array(1002039,4011001),new Array(1002039,4011002),new Array(1002051,4011001),new Array(1002051,4011002),new Array(1002059,4011001),new Array(1002059,4011002),
		new Array(1002055,4011001),new Array(1002055,4011002),new Array(1002027,4011002),new Array(1002027,4011006),new Array(1002005,4011006),new Array(1002005,4011005),new Array(1002004,4021000),new Array(1002004,4021005),new Array(1002021,4011002),new Array(1002021,4011006),new Array(1002086,4011002),
		new Array(1002086,4011004),new Array(1002100,4011007,4011001),new Array(1002100,4011007,4011002));
	    var matQtySet = new Array(new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,2),new Array(1,2),new Array(1,3),new Array(1,3),new Array(1,3),new Array(1,3),new Array(1,4),new Array(1,4),new Array(1,5),new Array(1,5),new Array(1,3),new Array(1,3),
		new Array(1,5),new Array(1,6),new Array(1,5),new Array(1,4),new Array(1,1,7),new Array(1,1,7));
	    var costSet = new Array(500,300,500,800,500,800,1000,1500,1500,2000,1500,2000,2000,4000,4000,5000,8000,10000,12000,15000,20000,25000,30000,30000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //shield refine
	    var itemSet = new Array (1092014,1092013,1092010,1092011);
	    var matSet = new Array(new Array (1092012,4011003),new Array (1092012,4011002),new Array (1092009,4011007,4011004),new Array (1092009,4011007,4011003));
	    var matQtySet = new Array (new Array (1,10),new Array (1,10),new Array (1,1,15),new Array (1,1,15));
	    var costSet = new Array (100000,100000,120000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
		
	var prompt = "你想让我制作 ";
	if (qty == 1)
	    prompt += "a #t" + item + "#?";
	else
	    prompt += qty + " #t" + item + "#?";
			
	prompt += " 那我需要你提供一些特定的材料。不过请确保你的背包有空间！#b";
		
	if (mats instanceof Array){
	    for(var i = 0; i < mats.length; i++){
		prompt += "\r\n#i"+mats[i]+"# " + matQty[i] * qty + " #t" + mats[i] + "#";
	    }
	}
	else {
	    prompt += "\r\n#i"+mats+"# " + matQty * qty + " #t" + mats + "#";
	}
		
	if (cost > 0)
	    prompt += "\r\n#i4031138# " + cost * qty + " 金币";
		
	cm.sendYesNo(prompt);
    } else if (status == 4 && mode == 1) {
	var complete = false;
		
	if (cm.getMeso() < cost * qty) {
	    cm.sendOk("恐怕你付不起我的服务费。");
	    cm.safeDispose();
	} else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++) {
		    if (matQty[i] * qty == 1) {
			complete = cm.haveItem(mats[i]);
		    } else {
			complete = cm.haveItem(mats[i], matQty[i] * qty);
		    }
		    if (!complete) {
			break;
		    }
		}
	    } else {
		complete = cm.haveItem(mats, matQty * qty);
	    }

	    if (!complete)
		cm.sendOk("恐怕你缺少了制作所需物品的材料。下次再见吧，好吗？");
	    else {
		if (mats instanceof Array) {
		    for (var i = 0; i < mats.length; i++){
			cm.gainItem(mats[i], -matQty[i] * qty);
		    }
		}
		else
		    cm.gainItem(mats, -matQty * qty);

		cm.gainMeso(-cost * qty);
		cm.gainItem(item,qty);
		cm.sendOk("好了，完成了。你觉得怎么样，一件艺术品吧？如果你还需要什么，你知道去哪里找我。");
	    }
	    cm.safeDispose();
	}
    }
}