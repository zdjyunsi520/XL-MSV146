/*
	Serryl (1091003)
	Location: The Nautilus
*/

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
	var selStr = "什么？你想自己制作武器和手套？说真的……如果没有经验的话，自己动手是很难的……我来帮你吧。我当了20年的海盗，这20年来我为船员们制作了各种各样的物品。对我来说小菜一碟。";
	var options = new Array("制作指虎","制作手枪","制作手套");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}
			
	cm.sendSimple(selStr);
    }
    else if (status == 1 && mode == 1) {
	selectedType = selection;
	if (selectedType == 0){ //Making a Knuckler
	    var selStr = "只要你带齐所需的材料，我就给你打造一把好的指虎。你想制作哪种指虎？";
	    var knucklers = new Array("皮革手臂（等级限制：15，海盗）", "双尾指虎（等级限制：20，海盗）", "诺曼握把（等级限制：25，海盗）", "顶级手套（等级限制：30，海盗）", "银色少女（等级限制：35，海盗）", "尼奥扎德（等级限制：40，海盗）", "狂怒之爪（等级限制：50，海盗）");
	    for (var i = 0; i < knucklers.length; i++){
		selStr += "\r\n#L" + i + "# " + knucklers[i] + "#l";
	    }
	    equip = true;
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 1){ //Making a Gun
	    var selStr = "只要你带齐所需的材料，我就给你打造一把好的手枪。你想制作哪种手枪？";
	    var guns = new Array("德林格特制（等级限制：15，海盗）", "谈判专家（等级限制：20，海盗）", "金钩（等级限制：25，海盗）", "冷酷之心（等级限制：30，海盗）", "流星（等级限制：35，海盗）", "月神射手（等级限制：40，海盗）", "拉斯菲尔特先生（等级限制：50，海盗）");
	    for (var i = 0; i < guns.length; i++){
		selStr += "\r\n#L" + i + "# " + guns[i] + "#l";
	    }
	    equip = true;
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 2){ //Making a pair of pirate gloves
	    var selStr = "只要你带齐所需的材料，我就给你打造一副好手套。你想制作哪种手套？";
	    var gloves = new Array ("绿色拉格半指手套","棕色皮革战手套","硬皮手套","黄色塔提斯手套","棕色宝石手套","棕色巴比手套","棕色罗伊斯手套","黑色舒尔特手套");
	    for (var i = 0; i < gloves.length; i++){
		selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
	    }
	    equip = true;
	    cm.sendSimple(selStr);
	}
	if (equip)
	    status++;
    }
    else if (status == 3 && mode == 1) {
	if (equip)
	{
	    selectedItem = selection;
	    qty = 1;
	}
	else
	    qty = selection;

	if (selectedType == 0){ //Making a Knuckler
	    var itemSet = new Array(1482001, 1482002, 1482003, 1482004, 1482005, 1482006, 1482007);
	    var matSet = new Array(4000021, new Array(4011001,4011000,4000021,4003000), new Array(4011000,4011001,4003000), new Array(4011000,4011001,4000021,4003000), new Array(4011000,4011001,4000021,4003000), new Array(4011000,4011001,4021000,4000021,4003000), new Array(4000039,4011000,4011001,4000030,4000021,4003000));
	    var matQtySet = new Array(20, new Array(1,1,10,5), new Array(2,1,10), new Array(1,1,30,10), new Array(2,2,30,20), new Array(1,1,2,50,20), new Array(150,1,2,20,20,20));
	    var costSet = new Array(1000,2000,5000,15000,30000,50000,100000);
	    var levelLimitSet = new Array(15,20,25,30,35,40,50);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	    levelLimit = levelLimitSet[selectedItem];
	}
	else if (selectedType == 1){ //Making a Gun
	    var itemSet = new Array(1492001, 1492002, 1492003, 1492004, 1492005, 1492006, 1492007);
	    var matSet = new Array(new Array(4011000,4003000,4003001), new Array(4011000,4003000,4003001,4000021), new Array(4011000,4003000), new Array(4011001,4000021,4003000), new Array(4011006,4011001,4000021,4003000), new Array(4011004,4011001,4000021,4003000), new Array(4011006,4011004,4011001,4000030,4003000));
	    var matQtySet = new Array(new Array(1,5,1), new Array(1,10,5,10), new Array(2,10), new Array(2,10,10), new Array(10,2,5,10), new Array(1,2,10,20), new Array(1,2,4,30,30));
	    var costSet = new Array (1000,2000,5000,15000,30000,50000,100000);
	    var levelLimitSet = new Array(15,20,25,30,35,40,50);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	    levelLimit = levelLimitSet[selectedItem];
	}
	else if (selectedType == 2){ //Making a pair of pirate gloves
	    var itemSet = new Array(1082180, 1082183, 1082186, 1082189, 1082192, 1082195, 1082198, 1082201);
	    var matSet = new Array(new Array(4000021,4021003),4000021,new Array(4011000,4000021),new Array(4021006,4000021,4003000),new Array(4011000,4000021,4003000),new Array(4000021,4011000,4011001,4003000),new Array(4011000,4000021,4000030,4003000),new Array(4011007,4021008,4021007,4000030,4003000));
	    var matQtySet = new Array(new Array(15,1),35,new Array(2,20),new Array(2,50,10),new Array(3,60,15),new Array(80,3,3,25),new Array(3,20,40,30),new Array(1,1,1,50,50));
	    var costSet = new Array(1000,8000,15000,25000,30000,40000,50000,70000);
	    var levelLimitSet = new Array(15,20,25,30,35,40,50,60);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	    levelLimit = levelLimitSet[selectedItem];
	}
			
	prompt = "制作一个 #t" + item + "# 需要以下材料。此物品的等级限制为 " + levelLimit + "，所以请确认你真的需要这个物品再来制作。怎么样？你确定要吗？\r\n";
		
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
    }
    else if (status == 4 && mode == 1) {
	var pass = false;
		
	if (cm.getMeso() < cost * qty) {
	    cm.sendOk("恐怕你付不起我的服务费。")
	    cm.dispose();
	    return;
	} else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++) {
		    pass = cm.haveItem(mats[i], matQty[i] * qty);
		    if (!pass) {
			break;
		    }
		}
	    } else {
		pass = cm.haveItem(mats, matQty * qty);
	    }	
        }
			
	if (pass == false)
	    cm.sendNext("请确认你拥有制作所需的所有材料。另外，确保你的装备栏有空位。如果你的背包满了，我可没法把物品给你。");
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
	    cm.sendOk("完成了。如果你还需要什么……嗯，我哪儿也不去。");
	}
	cm.dispose();
    }
}