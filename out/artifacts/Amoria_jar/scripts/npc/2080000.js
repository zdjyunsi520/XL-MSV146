/* Mos
	Leafre : Leafre (240000000)
	
	Refining NPC: 
	* Level 110 weapons - Stimulator allowed
*/

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var stimulator = false;
var bustedDagger = false;
var item;
var mats;
var matQty;
var cost;
var stimID;

function start() {
    status = -2;
    action(1, 0, 0);
}

function action(mode, type, selection) {		
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
	if (status == -1) {
		cm.sendSimple("你好~如果你对升级或修理武器感兴趣，你来对地方了！我是这座伟大的神木村镇上最好的武器制作人。好了，你觉得承载着龙之不可思议力量的武器怎么样？感兴趣吗？\r\n#L0# 制作龙武器#l\r\n#L100# 修理装备#l");
    } else if (status == 0) {
	if (selection == 0) {
		if (cm.haveItem(4001079)) {
		    bustedDagger = true;
		    cm.sendNext("什么？你那把破旧的匕首看起来有些年头了，我需要#i"+4011001+"#和#i"+4011002+"#.");
		} else {
		    var selStr = "龙的力量不可小觑。如果你愿意，我可以将龙的力量注入你的武器中。但是，武器必须足够强大才能承载这种潜能……#b";
		    var options = new Array("什么是刺激剂？","制作战士武器","制作弓箭手武器","制作魔法师武器","制作飞侠武器","制作海盗武器",
			"制作战士武器 with a Stimulator","制作弓箭手武器 with a Stimulator","制作魔法师武器 with a Stimulator","制作飞侠武器 with a Stimulator","制作海盗武器 with a Stimulator");
		    for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		    }
		    cm.sendSimple(selStr);
		}
	} else {
		cm.sendYesNo("好的！我让你见识一下我的本事。你知道服务费取决于物品的等级和耐久度损失量，对吧？你现在要修理你的装备吗？");
		status = 99;
	}

    } else if (status == 1) {
	if (bustedDagger) {
	    if (cm.haveItem(4011001) && cm.haveItem(4011002) && cm.haveItem(4001079)) {
		cm.gainItem(4011001, -1);
		cm.gainItem(4011002, -1);
		cm.gainItem(4001079, -1);
		cm.gainItem(4001078, 1);
	    } else {
		cm.sendOk("你没有所需的物品。");
	    }
	    cm.dispose();
	} else {
	    selectedType = selection;
	    if (selectedType > 5) {
		stimulator = true;
		selectedType -= 5;
	    }
	    else
		stimulator = false;
	    if (selectedType == 0) { //What's a stim?
		cm.sendNext("刺激剂是一种特殊的药水，我可以在制作某些物品的过程中加入它。它会让物品获得像怪物掉落时一样的属性。但是，有可能不会产生任何变化，也有可能物品属性低于平均值。使用刺激剂还有10%的几率制作失败，所以请谨慎选择。")
		cm.dispose();
	    }
	    else if (selectedType == 1){ //warrior weapon
		var selStr = "好的，那么你要给哪把战士武器注入龙之力呢？#b";
		var weapon = new Array ("龙之卡贝拉#k - Lv. 110 单手剑#b","龙之斧#k - Lv. 110 单手斧#b","龙之锤#k - Lv. 110 单手钝器#b","龙之双手剑#k - Lv. 110 双手剑#b","龙之战斧#k - Lv. 110 双手斧#b","龙之炎#k - Lv. 110 双手钝器#b",
		    "龙之法尔蒂赞#k - Lv. 110 枪#b","龙之切尔伯德#k - Lv. 110 polearm#b");
		for (var i = 0; i < weapon.length; i++){
		    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
		}
		cm.sendSimple(selStr);
	    }
	    else if (selectedType == 2){ //bowman weapon
		var selStr = "好的，那么你要给哪把弓箭手武器注入龙之力呢？#b";
		var weapon = new Array ("龙之闪弓#k - Lv. 110 弓#b","龙之闪弩#k - Lv. 110 弩#b");
		for (var i = 0; i < weapon.length; i++){
		    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
		}
		cm.sendSimple(selStr);
	    }
	    else if (selectedType == 3){ //magician weapon
		var selStr = "好的，那么你要给哪把魔法师武器注入龙之力呢？#b";
		var weapon = new Array ("龙之短杖#k - Lv. 108 短杖#b","龙之长杖#k - Lv. 110 长杖#b");
		for (var i = 0; i < weapon.length; i++){
		    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
		}
		cm.sendSimple(selStr);
	    }
	    else if (selectedType == 4){ //thief weapon
		var selStr = "好的，那么你要给哪把飞侠武器注入龙之力呢？#b";
		var weapon = new Array ("龙之坎齐尔#k - Lv. 110 STR匕首#b","龙之克雷达#k - Lv. 110 LUK匕首#b","龙之绿袖#k - Lv. 110 拳套#b");
		for (var i = 0; i < weapon.length; i++){
		    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
		}
		cm.sendSimple(selStr);
	    }
	    else if (selectedType == 5){ //pirate weapon
		var selStr = "好的，那么你要给哪把海盗武器注入龙之力呢？#b";
		var weapon = new Array ("龙之裂爪#k - Lv. 110 指虎#b","龙火左轮#k - Lv. 110 枪#b");
		for (var i = 0; i < weapon.length; i++){
		    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
		}
		cm.sendSimple(selStr);
	    }
	}
    } else if (status == 2) {
	selectedItem = selection;
	if (selectedType == 1){ //warrior weapon
	    var itemSet = new Array(1302059,1312031,1322052,1402036,1412026,1422028,1432038,1442045);
	    var matSet = new Array(new Array(1302056,4000244,4000245,4005000),new Array(1312030,4000244,4000245,4005000),new Array(1322045,4000244,4000245,4005000),new Array(1402035,4000244,4000245,4005000),
		new Array(1412021,4000244,4000245,4005000),new Array(1422027,4000244,4000245,4005000),new Array(1432030,4000244,4000245,4005000),new Array(1442044,4000244,4000245,4005000));
	    var matQtySet = new Array(new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8));
	    var costSet = new Array(120000,120000,120000,120000,120000,120000,120000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 2){ //bowman weapon
	    var itemSet = new Array(1452044,1462039);
	    var matSet = new Array(new Array(1452019,4000244,4000245,4005000,4005002),new Array(1462015,4000244,4000245,4005000,4005002));
	    var matQtySet = new Array(new Array(1,20,25,3,5),new Array(1,20,25,5,3));
	    var costSet = new Array(120000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //magician weapon
	    var itemSet = new Array(1372032,1382036);
	    var matSet = new Array(new Array(1372010,4000244,4000245,4005001,4005003),new Array(1382035,4000244,4000245,4005001,4005003));
	    var matQtySet = new Array(new Array(1,20,25,6,2),new Array(1,20,25,6,2));
	    var costSet = new Array(120000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 4){ //thief weapon
	    var itemSet = new Array(1332049,1332050,1472051);
	    var matSet = new Array(new Array(1332051,4000244,4000245,4005000,4005002),new Array(1332052,4000244,4000245,4005002,4005003),new Array(1472053,4000244,4000245,4005002,4005003));
	    var matQtySet = new Array(new Array(1,20,25,5,3),new Array(1,20,25,3,5),new Array(1,20,25,2,6));
	    var costSet = new Array(120000,120000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 5){ //pirate weapon
	    var itemSet = new Array(1482013,1492013);
	    var matSet = new Array(new Array(1482012,4000244,4000245,4005000,4005002),new Array(1492012,4000244,4000245,4005000,4005002));
	    var matQtySet = new Array(new Array(1,20,25,5,3),new Array(1,20,25,3,5));
	    var costSet = new Array(120000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
		
	var prompt = "你想让我制作#t" + item + "#？那样的话，我需要你提供特定的材料才能制作。请确保你的背包有足够的空间！#b";
		
	if (stimulator){
	    stimID = getStimID(item);
	    prompt += "\r\n#i"+stimID+"# 1 #t" + stimID + "#";
	}

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
    } else if (status == 3 && mode == 1) {
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
	    cm.sendOk("恐怕没有正确的材料，龙的精华会……无法打造出可靠的武器。请下次带来正确的材料。");
	else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++){
		    cm.gainItem(mats[i], -matQty[i]);
		}
	    } else
		cm.gainItem(mats, -matQty);
					
	    cm.gainMeso(-cost);
	    if (stimulator){ //check for stimulator
		cm.gainItem(stimID, -1);
		var deleted = Math.floor(Math.random() * 10);
		if (deleted != 0){
		    cm.gainItem(item, 1, true)
		    cm.sendOk("制作完成。好好对待你的武器，以免招来龙的怒火。");
		} else {
		    cm.sendOk("很遗憾，龙的精华……与你的武器产生了冲突。对你的损失深表歉意。");
		}
	    } else { //just give basic item
		cm.gainItem(item, 1);
		cm.sendOk("制作完成。好好对待你的武器，以免招来龙的怒火。");
	    }
	}
	cm.dispose();
    } else if (status == 100) {
		cm.sendRepairWindow();
		cm.dispose();
	}
}

function getStimID(equipID){
    var cat = Math.floor(equipID / 10000);
    var stimBase = 4130002; //stim for 1h sword
	
    switch (cat){
	case 130: //1h sword, do nothing
	    break;
	case 131: //1h axe
	    stimBase++;
	    break;
	case 132: //1h bw
	    stimBase += 2;
	    break;
	case 140: //2h sword
	    stimBase += 3;
	    break;
	case 141: //2h axe
	    stimBase += 4;
	    break;
	case 142: //2h bw
	    stimBase += 5;
	    break;
	case 143: //spear
	    stimBase += 6;
	    break;
	case 144: //polearm
	    stimBase += 7;
	    break;
	case 137: //wand
	    stimBase += 8;
	    break;
	case 138: //staff
	    stimBase += 9;
	    break;
	case 145: //bow
	    stimBase += 10;
	    break;
	case 146: //xbow
	    stimBase += 11;
	    break;
	case 133: //dagger
	    stimBase += 12;
	    break;
	case 147: //claw
	    stimBase += 13;
	    break;
	case 148: //knuckle
	    stimBase += 14;
	    break;
	case 149: //gun
	    stimBase += 15;
	    break;
    }
	
    return stimBase;
}