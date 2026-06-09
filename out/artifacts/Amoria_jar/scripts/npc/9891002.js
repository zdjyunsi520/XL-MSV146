var status = 0;
var item = 4007098; // chicken, change for the item to gain
var amount = 1; // amount of the required item
var item_gain = 4000115; // item they gain if they meet required item
var item_amount = 1; // amount of this ^^^
var coins = 4007098;				
var mapid = 90000003;

function start() {
     if (cm.haveItem(item, amount)) {
      cm.sendOk("你拿到物品了？做得好！如果你想知道1枚#b巫师硬币#k值多少，它正好值10亿金币。#b巫师硬币#k是我们这里的主要货币。你可以用它购买各种稀有物品，甚至是非常强力的装备。你也可以通过参与这个世界中的各种活动获得代币。好了，这些完成后，你刚刚学会了游戏中一些商店运作的基础知识。现在，让我们看看你面对凶猛怪物时的表现吧！出发！");
	  cm.dispose();
   } else if (cm.haveItem(item_gain, item_amount)) {
      cm.sendOk("现在，我将向你展示这个世界的货币系统。\r\n\r\n看到那边那个#r商人#d了吗？点击他开始交易。你可以用这枚#b巫师硬币#k购买他出售的物品。");
   } else {
     cm.sendOk("现在，我将向你展示这个世界的货币系统。\r\n\r\n看到那边那个#r商人#d了吗？点击他开始交易。你可以用这枚#b巫师硬币#k购买他出售的物品。");
	 cm.gainItem(item, amount);
	 cm.dispose();
   }
}

function action(mode, type, selection) {
    if (mode > 0) {
	  cm.removeAll(item_gain);
	  cm.removeAll(coins);	  
	  cm.warp(mapid, 0);
	  cm.dispose();
	} else {
	  cm.dispose(); 
	}
}