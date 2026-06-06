/* Author: aaroncsn (MapleSea Like)
	NPC Name: 		Aldin
	Map(s): 		The Burning Road: Ariant(2600000000)
	Description: 	Ariant Plastic Surgery
*/

var status = 0;
var beauty = 0;
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014);
var fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014);
var facenew = Array();

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.sendNext("我明白了……慢慢来，想清楚你是否真的想要。等你做出决定后告诉我。");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				facenew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mface.length; i++) {
						facenew.push(mface[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
					}
				}
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fface.length; i++) {
						facenew.push(fface[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
					}
				}
				cm.sendYesNo("如果你使用普通优惠券，你的脸可能会随机变成一个新模样……你确定要用#b#t5152029##k来尝试吗？");
			}
		else if (status == 1){	
			cm.dispose();
			if (cm.haveItem(5152029) == true){
				cm.gainItem(5152029, -1);
				cm.setFace(facenew[Math.floor(Math.random() * facenew.length)]);
				cm.sendOk("享受你全新的面容吧！");
			} else {
				cm.sendNext("嗯……看起来你没有这里专用的优惠券……很抱歉，没有优惠券的话，是无法进行整形手术的。");
			}
		}
	}
}