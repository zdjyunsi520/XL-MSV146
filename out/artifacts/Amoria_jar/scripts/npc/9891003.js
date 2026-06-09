var status = 0;
var mapid = 90000004; // map id to warp to
var item = 4001101; // item required to trade
var amount = 15; // amount of the required item

function start() {
	if (cm.haveItem(item, amount)) {
		cm.sendOk("看来是时候测试你的实力了！看到那边那些凶猛的兔子了吗？我需要你宰了它们，因为我需要它们美味的年糕。\r\n\r\n我需要");
	} else {
		cm.sendOk("#个。\r\n\r\n完成后立即来找我...我真的好饿... " + amount + " #v" + item + "# #t" + item + "#个。\r\n\r\n完成后立即来找我...我真的好饿...");
		cm.dispose();
	}
}

function action(mode, type, selection) {
	   if (mode > 0) {
			if (cm.haveItem(item, amount)) { // already checking but just in case
				cm.gainItem(item, -amount);
				cm.warp(mapid, 0);
			}
	   }
	   cm.dispose();
}