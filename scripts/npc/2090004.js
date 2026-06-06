/* Author: aaroncsn(MapleSea Like)(Incomplete)
	NPC Name: 		Mr. Do
	Map(s): 		Mu Lung: Mu Lung(2500000000)
	Description: 		Potion Creator
*/
importPackage(Packages.client);

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;

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
		if (cm.isQuestActive(3821)) {
			cm.forceCompleteQuest(3821);
			cm.sendNext("任务完成。");
			cm.dispose();
			return;
		}
		var selStr = "我是一个多才多艺的人。请告诉我你想做什么。#b"
		var options = new Array("制作药品","制作卷轴","捐赠药品材料","我想放弃恢复画卷……");
		for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
			
		cm.sendSimple(selStr);
	} else if (status == 1 && mode == 1) {
		selectedType = selection;
		var selStr;
		var items;
		if (selectedType == 0){ //制作药品
			cm.sendNext("如果你想制作药品，你必须先学习草药医学书籍。没有正确的知识就擅自行医是非常危险的。");
			cm.dispose();
			return;
		} 
		else if(selectedType == 1){//制作卷轴
			selStr = "你对制作哪种卷轴感兴趣？#b";
			items = new Array("单手剑攻击力卷轴", "单手斧攻击力卷轴", "单手钝器攻击力卷轴",
								  "短剑攻击力卷轴","短杖魔法攻击力卷轴","长杖魔法攻击力卷轴",
								  "双手剑攻击力卷轴","双手斧攻击力卷轴","双手钝器攻击力卷轴",
								  "枪攻击力卷轴","矛攻击力卷轴","弓攻击力卷轴","弩攻击力卷轴 ",
								  "拳套攻击力卷轴","指节攻击力卷轴","枪械攻击力卷轴#k");
		} 
		else if(selectedType == 2){//捐赠药品材料
			selStr = "所以你想捐赠药品材料？这真是个好消息！捐赠将以#b100#个为单位进行。捐赠者将获得一颗可以用来制作卷轴的弹珠。你想捐赠以下哪种材料？#b";
			items = new Array("Acorn","Thimble","针线包","尼奇花","尼奇泳帽","破陶片","人参熬制水","稻草人偶","木偶","桔梗根","百年桔梗",
							  "旧纸张","黄带","碎鹿角","红带","桃核","鳄鱼先生的皮革","猫偶","海盗印记","船长帽#k");
		}
		else {//我想放弃恢复画卷……
			cm.dispose();
			return;
		}
		for (var i = 0; i < items.length; i++){
			selStr += "\r\n#L" + i + "# " + items[i] + "#l";
		}
		cm.sendSimple(selStr);
	}
	else if (status == 2 && mode == 1){
		selectedItem = selection;
		if (selectedType == 1){ //Scrolls
			var itemSet = new Array(2043000,2043100,2043200,2043300,2043700,2043800,2044000,2044100,2044200,2044300,2044400,2044500,2044600,2044700,2044800,2044900);
			var matSet = new Array(new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001),
						new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001),
						new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001));
			var matQtySet = new Array(new Array(100, 10),new Array(100, 10),new Array(100, 10),new Array(100, 10),new Array(100, 10),new Array(100, 10),new Array(100, 10),
							new Array(100, 10),new Array(100, 10),new Array(100, 10),new Array(100, 10),new Array(100, 10),new Array(100, 10),new Array(100, 10),new Array(100, 10),
							new Array(100, 10));
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			var prompt = "你想制作#t" + item + "#吗？要制作#t" + item +"#，你需要#b100个杜博士的弹珠#k和#b10个钢铁矿石#k。";
			if (mats instanceof Array){
			for(var i = 0; i < mats.length; i++){
				prompt += "\r\n#i"+mats[i]+"# " + matQty[i] + " #t" + mats[i] + "#";
			}
		}
		else {
			prompt += "\r\n#i"+mats+"# " + matQty + " #t" + mats + "#你觉得怎么样？现在就制作一个吗？";
		}
			cm.sendYesNo(prompt);
		} 
		else if(selectedType == 2){
			status = 3;
			var itemSet = new Array(4000276,4000277,4000278,4000279,4000280,4000291,4000292,4000286,4000287,4000293, 4000294,4000298,4000284,4000288,4000285,4000282,4000295,4000289,4000296,4031435);
			item = itemSet[selectedItem];
			var prompt = "你确定要捐赠#b100个#t " + item + "##k";
			cm.sendYesNo(prompt);
			}
	}else if (status == 3 && mode == 1) {
			var complete = false;
				if (mats instanceof Array) {
					for(var i = 0; i < mats.length; i++)
					{
						if (matQty[i] == 1)	{
							if (!cm.haveItem(mats[i]))
							{
								complete = false;
							}
						}
						else {
							var count = 0;
							var iter = cm.getInventory(4).listById(mats[i]).iterator();
							while (iter.hasNext()) {
								count += iter.next().getQuantity();
							}
							if (count < matQty[i])
								complete = false;
						}					
					}
				}
				else {
					var count = 0;
					var iter = cm.getInventory(4).listById(mats).iterator();
					while (iter.hasNext()) {
						count += iter.next().getQuantity();
					}
					if (count < matQty)
						complete = false;
				}
			
			if (!complete || !cm.canHold(2044900))
				cm.sendOk("请确认你的材料是否齐全，或者消耗品背包是否有空位。");
			else {
				if (mats instanceof Array) {
					for (var i = 0; i < mats.length; i++){
						cm.gainItem(mats[i], -matQty[i]);
					}
				}
				else
					cm.gainItem(mats, -matQty);
					}
			}
		}
		
