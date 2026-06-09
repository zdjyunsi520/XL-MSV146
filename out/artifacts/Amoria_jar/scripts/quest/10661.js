/* RED 1st impact
    Everybody In Event
	Matilda
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNextS("嘿，#e#b#h0##k#n。\r\n你已被正式宣布为#e#r枫之谷大人物#k#n！这意味着你有资格获得#b#t2430288#、#t2430267#、#t2430079#、#t2450083#和#t2023304##k，因为你是如此特别！\r\n\r\n\r\n#i2430288# #t2430288#\r\n\r\n#i2430267# #t2430267#\r\n\r\n#i2430079# #t2430079#\r\n\r\n#i2450083# #t2450083#\r\n\r\n#i2023304# #t2023304#\r\n\r\n 你准备好现在就领取你的#e#b超棒大人物物品#k#n了吗？\r\n#e#b1小时双倍经验券/1小时双倍掉落券每天只能领取一次#k#n",5);
        qm.dispose();
		}
  }