/* Mr. Smith
	Victoria Road: Perion (102000000)
	
	Refining NPC: 
	* Warrior Gloves - 10-60 + upgrades
	* Processed Wood/Screws
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
	var selStr = "嗯……你好，我是桑德先生的学徒。他年纪大了，所以他负责大部分重型工作，我处理一些较轻的活儿。我能为你做什么？#b"
	var options = new Array("制作手套","升级手套","制作材料");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}
			
	cm.sendSimple(selStr);
    }
    else if (status == 1 && mode == 1) {
	selectedType = selection;
	if (selectedType == 0){ //glove refine
	    var selStr = "好的，你想让我制作哪种手套？#b";
	    var items = new Array ("朱诺#k - 战士 Lv. 10#b","钢铁半指手套#k - 战士 Lv. 15#b","维农#k - 战士 Lv. 20#b","白色半指手套#k - 战士 Lv. 25#b",
		"青铜米瑟尔#k - 战士 Lv. 30#b","钢铁布里贡#k - 战士 Lv. 35#b","铁拳套#k - 战士 Lv. 40#b","钢制布里斯#k - 战士 Lv. 50#b","青铜紧握#k - 战士 Lv. 60#b");
	    for (var i = 0; i < items.length; i++){
		selStr += "\r\n#L" + i + "# " + items[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	    equip = true;
	}
	else if (selectedType == 1){ //glove upgrade
	    var selStr = "升级手套? That shouldn't be too difficult. Which did you have in mind?#b";
	    var crystals = new Array ("钢铁米瑟尔#k - 战士 Lv. 30#b","奥利哈康米瑟尔#k - 战士 Lv. 30#b","黄色布里贡#k - 战士 Lv. 35#b","暗色布里贡#k - 战士 Lv. 35#b",
		"精金拳套#k - 战士 Lv. 40#b","暗色拳套#k - 战士 Lv. 40#b","秘银布里斯#k - 战士 Lv. 50#b","黄金布里斯#k - 战士 Lv. 50#b",
		"蓝宝石紧握#k - 战士 Lv. 60#b","暗色紧握#k - 战士 Lv. 60#b");
	    for (var i = 0; i < crystals.length; i++){
		selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	    equip = true;
	}
	else if (selectedType == 2){ //material refine
	    var selStr = "材料？我知道几种可以为你制作的材料……#b";
	    var materials = new Array ("用树枝制作加工木材","用木柴制作加工木材","制作螺丝（每组15个）");
	    for (var i = 0; i < materials.length; i++){
		selStr += "\r\n#L" + i + "# " + materials[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	    equip = false;
	}
	if (equip)
	    status++;
    }
    else if (status == 2 && mode == 1) {
	selectedItem = selection;
	if (selectedType == 2){ //material refine
	    var itemSet = new Array (4003001,4003001,4003000);
	    var matSet = new Array(4000003,4000018,new Array (4011000,4011001));
	    var matQtySet = new Array (10,5,new Array (1,1));
	    var costSet = new Array (0,0,0)
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

	if (selectedType == 0){ //glove refine
	    var itemSet = new Array(1082003,1082000,1082004,1082001,1082007,1082008,1082023,1082009,1082059);
	    var matSet = new Array(new Array(4000021,4011001),4011001,new Array(4000021,4011000),4011001,new Array(4011000,4011001,4003000),new Array(4000021,4011001,4003000),new Array(4000021,4011001,4003000),
		new Array(4011001,4021007,4000030,4003000),new Array(4011007,4011000,4011006,4000030,4003000));
	    var matQtySet = new Array(new Array(15,1),2,new Array(40,2),2,new Array(3,2,15),new Array(30,4,15),new Array(50,5,40),new Array(3,2,30,45),new Array(1,8,2,50,50));
	    var costSet = new Array(1000,2000,5000,10000,20000,30000,40000,50000,70000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 1){ //glove upgrade
	    var itemSet = new Array(1082005,1082006,1082035,1082036,1082024,1082025,1082010,1082011,1082060,1082061);
	    var matSet = new Array(new Array(1082007,4011001),new Array(1082007,4011005),new Array(1082008,4021006),new Array(1082008,4021008),new Array(1082023,4011003),new Array(1082023,4021008),
		new Array(1082009,4011002),new Array(1082009,4011006),new Array(1082059,4011002,4021005),new Array(1082059,4021007,4021008));
	    var matQtySet = new Array (new Array(1,1),new Array(1,2),new Array(1,3),new Array(1,1),new Array(1,4),new Array(1,2),new Array(1,5),new Array(1,4),new Array(1,3,5),new Array(1,2,2));
	    var costSet = new Array (20000,25000,30000,40000,45000,50000,55000,60000,70000,80000);
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
    } else if (status == 4 && mode == 1) {
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
	    cm.sendOk("我还是学徒，不知道能不能用其他材料替代……请你按照配方要求的材料带来好吗？");
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
				
	    if (item == 4003000)//screws
		cm.gainItem(4003000, 15 * qty);
	    else
		cm.gainItem(item, qty);
	    cm.sendOk("做出来对了吗？如果你有什么让我练手的东西，再来找我吧。");
	}
	cm.dispose();
    }
}