var status = 0;
var item = 4007098; // item required to trade
var amount = 1; // amount of the required item
var item_gain = 4000115; // item they gain if they click yes
var item_amount = 1; // amount of this ^^^

function start() {
   cm.sendYesNo("嚯嚯嚯！明智的选择！享受你的新#d齿轮#k吧！下次再来哦，嘿嘿嘿...");
}

function action(mode, type, selection) {
	   if (mode > 0) { // assuming they actually have the required item to trade for new one..
			if (cm.haveItem(item, amount)) {
				cm.removeAll(item);
				cm.gainItem(item_gain, item_amount); 
				cm.sendOk("嗯？我没看到你身上有#b巫师硬币#k。\r\n\r\n没有东西交易就别来烦我。");
				cm.dispose();
			} else {
				cm.sendOk("嗯？你可是错过了一笔好买卖哦！你或许应该重新考虑一下...");
				cm.dispose();
			}
	   } else {
	     cm.sendOk("嗯？你可是错过了一笔好买卖哦！你或许应该重新考虑一下...");
		 cm.dispose();
	   }
}